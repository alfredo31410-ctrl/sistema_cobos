import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createActiveCampaignCallback } from "../lib/active-campaign-callback.ts";
import {
  COUNTRY_SLUGS,
  DEFAULT_FREE_CLASS_COUNTRY,
  FREE_CLASS_ATTRIBUTION_STORAGE_KEY,
  FREE_CLASS_EVENT,
  FREE_CLASS_COUNTRIES,
  MAX_UTM_LENGTH,
  eventStartsAt,
  getActiveCampaignFields,
  getCountryConfigIfValid,
  getFreeClassEventSchedule,
  getFreeClassThankYouPath,
  isCountrySlug,
  persistFreeClassAttribution,
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

  for (const slug of COUNTRY_SLUGS) {
    const country = getCountryConfigIfValid(slug);
    assert.ok(country);
    assert.equal(country.whatsappUrl, FREE_CLASS_COUNTRIES[slug].whatsappUrl);
  }

  assert.equal(getCountryConfigIfValid(undefined), null);
  assert.equal(getCountryConfigIfValid("canada"), null);
  assert.equal(
    getCountryConfigIfValid("https://evil.example/whatsapp"),
    null,
  );
  assert.equal(getCountryConfigIfValid("mexico&url=https://evil.example"), null);

  const landingSource = readFileSync(
    new URL("../components/ClaseGratisLanding.jsx", import.meta.url),
    "utf8",
  );
  const thankYouSource = readFileSync(
    new URL("../app/clase-gratis/gracias/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(landingSource, /getFreeClassEventSchedule\(country\.slug\)/);
  assert.match(thankYouSource, /getFreeClassEventSchedule\(country\.slug\)/);
  assert.doesNotMatch(thankYouSource, /CompleteRegistration|track\s*\(/);
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

  const values = new Map<string, string>();
  const stored = persistFreeClassAttribution(
    {
      setItem(key: string, value: string) {
        values.set(key, value);
      },
    },
    "?utm_source=%00Meta%0AAds&utm_medium=paid%20social&utm_campaign=lanzamiento&utm_content=video-a&utm_term=negocio&firstname=Ada&email=ada%40example.com&phone=5551234567",
    "mexico",
  );
  const attribution = JSON.parse(
    values.get(FREE_CLASS_ATTRIBUTION_STORAGE_KEY) ?? "{}",
  );

  assert.equal(stored, true);
  assert.deepEqual(attribution, {
    utm_source: "MetaAds",
    utm_medium: "paid social",
    utm_campaign: "lanzamiento",
    utm_content: "video-a",
    utm_term: "negocio",
    country: "mexico",
  });
  assert.equal("firstname" in attribution, false);
  assert.equal("lastname" in attribution, false);
  assert.equal("email" in attribution, false);
  assert.equal("phone" in attribution, false);
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

test("cada país redirige a su URL interna de gracias", () => {
  const destinations: string[] = [];

  for (const slug of COUNTRY_SLUGS) {
    const country = FREE_CLASS_COUNTRIES[slug];
    const callback = createActiveCampaignCallback({
      matchesForm: (id) => id === 335,
      onSuccess: () =>
        destinations.push(getFreeClassThankYouPath(country.slug)),
    });

    callback(335);
    callback(335);
  }

  assert.deepEqual(
    destinations,
    [
      "/clase-gratis/gracias?country=mexico",
      "/clase-gratis/gracias?country=colombia",
      "/clase-gratis/gracias?country=peru",
      "/clase-gratis/gracias?country=usa",
    ],
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

test("calcula la hora local de México, Colombia y Perú", () => {
  const expectedLabels = {
    mexico: "6:00 p. m. — CDMX",
    colombia: "7:00 p. m. — Bogotá",
    peru: "7:00 p. m. — Lima",
  } as const;

  for (const [slug, expectedLabel] of Object.entries(expectedLabels)) {
    const eventTime = getFreeClassEventSchedule(slug as keyof typeof expectedLabels)
      .times[0];

    assert.equal(
      `${eventTime.timeLabel} — ${eventTime.shortLabel}`,
      expectedLabel,
    );
    assert.equal(eventTime.longLabel, eventTime.shortLabel);
  }
});

test("calcula las cuatro zonas principales de USA", () => {
  const schedule = getFreeClassEventSchedule("usa");

  assert.deepEqual(
    schedule.times.map(({ timeLabel, shortLabel }) =>
      `${timeLabel} ${shortLabel}`,
    ),
    ["8:00 p. m. ET", "7:00 p. m. CT", "6:00 p. m. MT", "5:00 p. m. PT"],
  );
});

test("todas las rutas conservan el lunes 7 de septiembre de 2026", () => {
  for (const slug of COUNTRY_SLUGS) {
    assert.equal(
      getFreeClassEventSchedule(slug).fullDateLabel,
      "lunes 7 de septiembre de 2026",
    );
  }
});

test("la ruta base conserva la presentación de México", () => {
  assert.equal(DEFAULT_FREE_CLASS_COUNTRY, "mexico");
  assert.equal(
    getFreeClassEventSchedule(DEFAULT_FREE_CLASS_COUNTRY).times[0].timeLabel,
    "6:00 p. m.",
  );
});

test("el inicio del evento procede de un único instante UTC", () => {
  assert.equal(eventStartsAt, "2026-09-08T00:00:00.000Z");
  assert.equal(FREE_CLASS_EVENT.startsAt, eventStartsAt);
  assert.deepEqual(
    [...new Set(COUNTRY_SLUGS.map((slug) => getFreeClassEventSchedule(slug).startsAt))],
    [eventStartsAt],
  );
});
