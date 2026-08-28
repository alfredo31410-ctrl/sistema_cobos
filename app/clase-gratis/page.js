import ClaseGratisLanding from "@/components/ClaseGratisLanding";
import {
  DEFAULT_FREE_CLASS_COUNTRY,
  getCountryConfig,
} from "@/lib/clase-gratis-config";

export default function ClaseGratisPage() {
  return (
    <ClaseGratisLanding
      country={getCountryConfig(DEFAULT_FREE_CLASS_COUNTRY)}
    />
  );
}
