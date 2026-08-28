export const COUNTRY_SLUGS = ["mexico", "colombia", "peru", "usa"] as const;

export type CountrySlug = (typeof COUNTRY_SLUGS)[number];

export type CountryConfig = Readonly<{
  slug: CountrySlug;
  countryCode: "MX" | "CO" | "PE" | "US";
  label: string;
  whatsappUrl: `https://chat.whatsapp.com/${string}`;
  phoneCountry: `+${number}`;
}>;

export const FREE_CLASS_EVENT = Object.freeze({
  campaign: "clase-gratis-2026-09-07",
  dateLabel: "7 de septiembre de 2026",
  dayLabel: "Lunes",
  timeLabel: "6:00 p. m. (hora de CDMX)",
  shortTimeLabel: "6:00 p. m. CDMX",
  startsAt: "2026-09-07 18:00 CDMX",
});

export const ACTIVE_CAMPAIGN_FORM = Object.freeze({
  id: 335,
  endpoint: "https://cefincapacitacion.activehosted.com/proc.php",
  embedUrl: "https://cefincapacitacion.activehosted.com/f/embed.php?id=335",
});

export const FREE_CLASS_COUNTRIES = {
  mexico: {
    slug: "mexico",
    countryCode: "MX",
    label: "México",
    whatsappUrl: "https://chat.whatsapp.com/FGrdcHgN6rWKij3kXfeH5G",
    phoneCountry: "+52",
  },
  colombia: {
    slug: "colombia",
    countryCode: "CO",
    label: "Colombia",
    whatsappUrl: "https://chat.whatsapp.com/FVBaNtXr6YhAQgf6BM1LXS",
    phoneCountry: "+57",
  },
  peru: {
    slug: "peru",
    countryCode: "PE",
    label: "Perú",
    whatsappUrl: "https://chat.whatsapp.com/FRgfVzgt3uOLppOUb9fVnN",
    phoneCountry: "+51",
  },
  usa: {
    slug: "usa",
    countryCode: "US",
    label: "Estados Unidos",
    whatsappUrl: "https://chat.whatsapp.com/IItzyT6n3GVCX7jmCAPelm",
    phoneCountry: "+1",
  },
} as const satisfies Readonly<Record<CountrySlug, CountryConfig>>;

const UTM_FIELD_NAMES = {
  utm_source: "field[7]",
  utm_medium: "field[8]",
  utm_campaign: "field[9]",
  utm_content: "field[10]",
  utm_term: "field[11]",
} as const;

export const MAX_UTM_LENGTH = 200;

export function isCountrySlug(value: string): value is CountrySlug {
  return COUNTRY_SLUGS.includes(value as CountrySlug);
}

export function getCountryConfig(slug: CountrySlug): CountryConfig {
  return FREE_CLASS_COUNTRIES[slug];
}

export function sanitizeUtmValue(value: string | null): string {
  if (!value) return "";

  const sanitized = value
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g, "")
    .trim();

  return Array.from(sanitized).slice(0, MAX_UTM_LENGTH).join("");
}

export function getActiveCampaignFields(
  search: string,
  countryCode: CountryConfig["countryCode"],
): Readonly<Record<string, string>> {
  const params = new URLSearchParams(search);
  const fields: Record<string, string> = {};

  for (const [utmName, fieldName] of Object.entries(UTM_FIELD_NAMES)) {
    fields[fieldName] = sanitizeUtmValue(params.get(utmName));
  }

  fields["field[12]"] = countryCode;
  return fields;
}
