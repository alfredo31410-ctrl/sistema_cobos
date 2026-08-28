import ClaseGratisLanding from "@/components/ClaseGratisLanding";
import { FREE_CLASS_COUNTRIES } from "@/lib/clase-gratis-config";

export default function ClaseGratisPage() {
  return <ClaseGratisLanding country={FREE_CLASS_COUNTRIES.mexico} />;
}
