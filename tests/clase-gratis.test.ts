import assert from "node:assert/strict";
import test from "node:test";
import { createActiveCampaignCallback } from "../lib/active-campaign-callback.ts";
import {
  COUNTRY_SLUGS,
  FREE_CLASS_COUNTRIES,
  MAX_UTM_LENGTH,
  getActiveCampaignFields,
  isCountrySlug,
  sanitizeUtmValue,
} from "../lib/clase-gratis-config.ts";

test("las cuatro rutas usan el país y WhatsApp configurados", () => {
  assert.deepEqual(COUNTRY_SLUGS, ["mexico", "colombia", "peru", "usa"]);
  assert.deepEqual(
    COUNTRY_SLUGS.map((slug) => FREE_CLASS_COUNTRIES[slug].countryCode),
    ["MX", "CO", "PE", "US"],
  );
  assert.deepEqual(
    COUNTRY_SLUGS.map((slug) => FREE_CLASS_COUNTRIES[slug].whatsappUrl),
    [
      "https://chat.whatsapp.com/FGrdcHgN6rWKij3kXfeH5G",
      "https://chat.whatsapp.com/FVBaNtXr6YhAQgf6BM1LXS",
      "https://chat.whatsapp.com/FRgfVzgt3uOLppOUb9fVnN",
      "https://chat.whatsapp.com/IItzyT6n3GVCX7jmCAPelm",
    ],
  );
  assert.equal(isCountrySlug("canada"), false);
});

test("field[12] siempre procede de la configuración del país", () => {
  for (const slug of COUNTRY_SLUGS) {
    const country = FREE_CLASS_COUNTRIES[slug];
    const fields = getActiveCampaignFields(
      "?paiscampana=XX&utm_source=meta",
      country.countryCode,
    );

    assert.equal(fields["field[12]"], country.countryCode);
  }
});

test("conserva las cinco UTMs y elimina controles antes de limitarlas", () => {
  const fields = getActiveCampaignFields(
    "?utm_source=%00Meta%0AAds&utm_medium=paid%20social&utm_campaign=lanzamiento&utm_content=video-a&utm_term=negocio",
    "PE",
  );

  assert.deepEqual(fields, {
    "field[7]": "MetaAds",
    "field[8]": "paid social",
    "field[9]": "lanzamiento",
    "field[10]": "video-a",
    "field[11]": "negocio",
    "field[12]": "PE",
  });
  assert.equal(
    Array.from(sanitizeUtmValue("a".repeat(MAX_UTM_LENGTH + 50))).length,
    MAX_UTM_LENGTH,
  );
});

test("el callback procesa sólo el formulario esperado y una sola vez", () => {
  const previousIds: unknown[] = [];
  let successes = 0;
  const callback = createActiveCampaignCallback({
    previousCallback: (id) => previousIds.push(id),
    matchesForm: (id) => id === "internal-335",
    onSuccess: () => {
      successes += 1;
    },
  });

  callback("otro-formulario");
  callback("internal-335");
  callback("internal-335");

  assert.deepEqual(previousIds, [
    "otro-formulario",
    "internal-335",
    "internal-335",
  ]);
  assert.equal(successes, 1);
});

test("sin callback exitoso de 335 no se procesa ni redirige", () => {
  let successes = 0;
  const callback = createActiveCampaignCallback({
    matchesForm: (id) => id === 335,
    onSuccess: () => {
      successes += 1;
    },
  });

  callback("error-active-campaign");
  assert.equal(successes, 0);
});

test("cada callback exitoso conserva el WhatsApp de su ruta", () => {
  const destinations: string[] = [];

  for (const slug of COUNTRY_SLUGS) {
    const country = FREE_CLASS_COUNTRIES[slug];
    const callback = createActiveCampaignCallback({
      matchesForm: (id) => id === 335,
      onSuccess: () => destinations.push(country.whatsappUrl),
    });

    callback(335);
    callback(335);
  }

  assert.deepEqual(
    destinations,
    COUNTRY_SLUGS.map((slug) => FREE_CLASS_COUNTRIES[slug].whatsappUrl),
  );
});

test("el éxito propio se conserva aunque el callback previo falle", () => {
  let successes = 0;
  const callback = createActiveCampaignCallback({
    previousCallback: () => {
      throw new Error("fallo externo");
    },
    matchesForm: (id) => id === 335,
    onSuccess: () => {
      successes += 1;
    },
  });

  assert.throws(() => callback(335), /fallo externo/);
  assert.equal(successes, 1);
});
