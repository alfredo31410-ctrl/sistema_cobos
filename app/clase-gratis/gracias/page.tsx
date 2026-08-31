import { redirect } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  getCountryConfigIfValid,
  getFreeClassEventSchedule,
} from "@/lib/clase-gratis-config";

type ThankYouPageProps = Readonly<{
  searchParams: Record<string, string | string[] | undefined>;
}>;

export default function ClaseGratisThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const countryParam = searchParams.country;
  const country = getCountryConfigIfValid(
    typeof countryParam === "string" ? countryParam : undefined,
  );

  if (!country) redirect("/clase-gratis");

  const eventSchedule = getFreeClassEventSchedule(country.slug);

  return (
    <main className="relative overflow-hidden bg-[#07152f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.08),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <section className="page-container relative flex min-h-[calc(100vh-5rem)] items-center py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-400/30 sm:h-20 sm:w-20">
            <CheckCircle2 className="h-8 w-8 text-green-400 sm:h-10 sm:w-10" />
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            ¡Registro confirmado!
          </h1>
          <p className="mt-4 text-xl font-bold text-amber-400 sm:text-2xl">
            Ya estás dentro de la Clase Gratis.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            El siguiente paso es unirte al grupo privado de WhatsApp. Ahí
            recibirás el enlace de acceso, recordatorios y la información
            necesaria para la clase.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex min-h-24 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-left backdrop-blur-sm">
              <CalendarDays className="h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="text-xs font-semibold uppercase text-white/50">
                  Fecha
                </p>
                <p className="font-bold">
                  {eventSchedule.dayLabel}, {eventSchedule.dateLabel}
                </p>
              </div>
            </div>

            <div className="flex min-h-24 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-left backdrop-blur-sm">
              <Clock className="h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="text-xs font-semibold uppercase text-white/50">
                  Horario
                </p>
                <div className="font-bold">
                  {eventSchedule.times.map((eventTime) => (
                    <p key={eventTime.timeZone}>
                      {eventTime.timeLabel}
                      {eventSchedule.times.length === 1 ? " — " : " "}
                      {eventTime.shortLabel}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-24 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-left backdrop-blur-sm">
              <MapPin className="h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="text-xs font-semibold uppercase text-white/50">
                  Registro
                </p>
                <p className="font-bold">{country.label}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-7">
            <MessageCircle className="mx-auto mb-4 h-9 w-9 text-green-400" />
            <a
              href={country.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-green-600 px-5 py-4 text-center text-sm font-black uppercase text-white shadow-lg shadow-green-950/30 transition hover:-translate-y-0.5 hover:bg-green-500 sm:text-base"
            >
              UNIRME AL GRUPO DE WHATSAPP
            </a>
            <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm">
              Si el botón no abre WhatsApp automáticamente, vuelve a intentarlo
              desde tu teléfono.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
