import { notFound } from "next/navigation";
import ClaseGratisLanding from "@/components/ClaseGratisLanding";
import {
  COUNTRY_SLUGS,
  getCountryConfig,
  isCountrySlug,
} from "@/lib/clase-gratis-config";

type CountryPageProps = Readonly<{
  params: {
    country: string;
  };
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRY_SLUGS.map((country) => ({ country }));
}

export default function CountryPage({ params }: CountryPageProps) {
  if (!isCountrySlug(params.country)) notFound();

  return <ClaseGratisLanding country={getCountryConfig(params.country)} />;
}
