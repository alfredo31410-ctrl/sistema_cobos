export const COUNTRY_SLUGS = ["mexico", "colombia", "peru", "usa"] as const;

export type CountrySlug = (typeof COUNTRY_SLUGS)[number];

export const DEFAULT_FREE_CLASS_COUNTRY: CountrySlug = "mexico";

export const eventStartsAt = "2026-09-08T00:00:00.000Z" as const;

export type CountryConfig = Readonly<{
  slug: CountrySlug;
  countryCode: "MX" | "CO" | "PE" | "US";
  label: string;
  whatsappUrl: `https://chat.whatsapp.com/${string}`;
  phoneCountry: `+${number}`;
}>;

export const FREE_CLASS_EVENT = Object.freeze({
  campaign: "clase-gratis-2026-09-07",
  startsAt: eventStartsAt,
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

export type EventTimeZone = Readonly<{
  timeZone: string;
  shortLabel: string;
  longLabel: string;
}>;

export const FREE_CLASS_TIME_ZONES = {
  mexico: [
    {
      timeZone: "America/Mexico_City",
      shortLabel: "CDMX",
      longLabel: "CDMX",
    },
  ],
  colombia: [
    {
      timeZone: "America/Bogota",
      shortLabel: "Bogotá",
      longLabel: "Bogotá",
    },
  ],
  peru: [
    {
      timeZone: "America/Lima",
      shortLabel: "Lima",
      longLabel: "Lima",
    },
  ],
  usa: [
    {
      timeZone: "America/New_York",
      shortLabel: "ET",
      longLabel: "ET",
    },
    {
      timeZone: "America/Chicago",
      shortLabel: "CT",
      longLabel: "CT",
    },
    {
      timeZone: "America/Denver",
      shortLabel: "MT",
      longLabel: "MT",
    },
    {
      timeZone: "America/Los_Angeles",
      shortLabel: "PT",
      longLabel: "PT",
    },
  ],
} as const satisfies Readonly<Record<CountrySlug, readonly EventTimeZone[]>>;

export type FreeClassEventTime = EventTimeZone &
  Readonly<{
    timeLabel: string;
  }>;

export type FreeClassEventSchedule = Readonly<{
  startsAt: typeof eventStartsAt;
  dayLabel: string;
  dateLabel: string;
  fullDateLabel: string;
  times: readonly FreeClassEventTime[];
}>;

const EVENT_LOCALE = "es-MX";

function getDateTimePart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): string {
  const value = parts.find((part) => part.type === type)?.value;

  if (!value) throw new Error(`No se pudo calcular ${type} para la clase gratis`);
  return value;
}

function formatEventDate(timeZone: string) {
  const parts = new Intl.DateTimeFormat(EVENT_LOCALE, {
    timeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date(eventStartsAt));

  const weekday = getDateTimePart(parts, "weekday");
  const day = getDateTimePart(parts, "day");
  const month = getDateTimePart(parts, "month");
  const year = getDateTimePart(parts, "year");
  const dateLabel = `${day} de ${month} de ${year}`;

  return {
    dayLabel: weekday.charAt(0).toLocaleUpperCase(EVENT_LOCALE) + weekday.slice(1),
    dateLabel,
    fullDateLabel: `${weekday} ${dateLabel}`,
  };
}

function formatEventTime(timeZone: string): string {
  const parts = new Intl.DateTimeFormat(EVENT_LOCALE, {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date(eventStartsAt));

  const hour = getDateTimePart(parts, "hour");
  const minute = getDateTimePart(parts, "minute");
  const dayPeriod = getDateTimePart(parts, "dayPeriod")
    .toLocaleLowerCase(EVENT_LOCALE)
    .replace(/[^apm]/g, "");
  const normalizedDayPeriod = dayPeriod === "am" ? "a. m." : "p. m.";

  return `${hour}:${minute} ${normalizedDayPeriod}`;
}

export function getFreeClassEventSchedule(
  slug: CountrySlug,
): FreeClassEventSchedule {
  const timeZones = FREE_CLASS_TIME_ZONES[slug];
  const date = formatEventDate(timeZones[0].timeZone);

  return {
    startsAt: eventStartsAt,
    ...date,
    times: timeZones.map((zone) => ({
      ...zone,
      timeLabel: formatEventTime(zone.timeZone),
    })),
  };
}

export const FREE_CLASS_ATTRIBUTION_STORAGE_KEY = "claseGratisAttribution";

const UTM_FIELD_NAMES = {
  utm_source: "field[7]",
  utm_medium: "field[8]",
  utm_campaign: "field[9]",
  utm_content: "field[10]",
  utm_term: "field[11]",
} as const;

type UtmName = keyof typeof UTM_FIELD_NAMES;

export type FreeClassAttribution = Readonly<
  Record<UtmName, string> & {
    country: CountrySlug;
  }
>;

type SessionStorageWriter = Readonly<{
  setItem: (key: string, value: string) => void;
}>;

export const MAX_UTM_LENGTH = 200;

export function isCountrySlug(value: string): value is CountrySlug {
  return COUNTRY_SLUGS.includes(value as CountrySlug);
}

export function getCountryConfig(slug: CountrySlug): CountryConfig {
  return FREE_CLASS_COUNTRIES[slug];
}

export function getCountryConfigIfValid(
  value: string | undefined,
): CountryConfig | null {
  if (!value || !isCountrySlug(value)) return null;
  return getCountryConfig(value);
}

export function getFreeClassThankYouPath(slug: CountrySlug): string {
  return `/clase-gratis/gracias?country=${slug}`;
}

export function sanitizeUtmValue(value: string | null): string {
  if (!value) return "";

  const sanitized = value
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g, "")
    .trim();

  return Array.from(sanitized).slice(0, MAX_UTM_LENGTH).join("");
}

export function getFreeClassAttribution(
  search: string,
  country: CountrySlug,
): FreeClassAttribution {
  const params = new URLSearchParams(search);
  const utms = {} as Record<UtmName, string>;

  for (const utmName of Object.keys(UTM_FIELD_NAMES) as UtmName[]) {
    utms[utmName] = sanitizeUtmValue(params.get(utmName));
  }

  return { ...utms, country };
}

export function persistFreeClassAttribution(
  storage: SessionStorageWriter,
  search: string,
  country: CountrySlug,
): boolean {
  try {
    storage.setItem(
      FREE_CLASS_ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(getFreeClassAttribution(search, country)),
    );
    return true;
  } catch {
    return false;
  }
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
