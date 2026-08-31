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
    <main className="relative isolate min-h-screen overflow-hidden bg-[#07152f] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_8%,_rgba(37,211,102,0.10),_transparent_28%),radial-gradient(circle_at_82%_88%,_rgba(251,191,36,0.08),_transparent_30%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <section className="page-container relative flex min-h-[calc(100vh-5rem)] items-center py-8 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-xs font-black tracking-[0.18em] text-emerald-300 sm:text-sm">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            PASO FINAL
          </div>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            ¡Ya casi estás dentro! 🔥
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/80 sm:text-xl">
            Tu registro fue recibido correctamente. Ahora completa el último
            paso para asegurar tu acceso a la clase.
          </p>

          <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-white/15 bg-white/[0.07] p-3 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:rounded-3xl sm:p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-[#0f1d3d]/80 px-4 py-3 text-left">
                <CalendarDays className="h-5 w-5 shrink-0 text-amber-400" />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/45 sm:text-xs">
                    Fecha
                  </p>
                  <p className="mt-1 text-sm font-bold leading-tight sm:text-base">
                    {eventSchedule.dayLabel}, {eventSchedule.dateLabel}
                  </p>
                </div>
              </div>

              <div className="order-3 col-span-2 flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-[#0f1d3d]/80 px-4 py-3 text-left sm:order-none sm:col-span-1">
                <Clock className="h-5 w-5 shrink-0 text-sky-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/45 sm:text-xs">
                    Horario
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm font-bold leading-tight sm:block sm:text-base">
                    {eventSchedule.times.map((eventTime) => (
                      <p key={eventTime.timeZone} className="whitespace-nowrap">
                        {eventTime.timeLabel}
                        {eventSchedule.times.length === 1 ? " — " : " "}
                        {eventTime.shortLabel}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-[#0f1d3d]/80 px-4 py-3 text-left">
                <MapPin className="h-5 w-5 shrink-0 text-red-400" />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/45 sm:text-xs">
                    Registro
                  </p>
                  <p className="mt-1 text-sm font-bold leading-tight sm:text-base">
                    {country.label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-emerald-300/25 bg-[linear-gradient(145deg,_rgba(37,211,102,0.13),_rgba(255,255,255,0.04))] p-5 shadow-[0_28px_90px_-38px_rgba(37,211,102,0.7)] backdrop-blur-sm sm:rounded-3xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300 sm:text-sm">
              Te falta 1 paso
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl text-xl font-black leading-tight sm:text-2xl">
              Únete al grupo privado de WhatsApp para completar tu acceso.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Ahí recibirás el enlace de acceso, recordatorios y toda la
              información necesaria para participar.
            </p>

            <a
              href={country.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-6 inline-flex min-h-16 w-full max-w-2xl items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 text-center text-sm font-black uppercase leading-tight text-[#071D24] shadow-[0_16px_50px_-18px_rgba(37,211,102,0.85)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#35e376] hover:shadow-[0_20px_60px_-18px_rgba(37,211,102,0.95)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07152f] sm:text-base"
            >
              <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>CONFIRMAR MI ACCESO EN WHATSAPP</span>
            </a>

            <div className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-sm font-semibold leading-relaxed text-white sm:text-base">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
                aria-hidden="true"
              />
              <p>Tu acceso a la clase se completa al entrar al grupo de WhatsApp.</p>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/45 sm:text-sm">
              Si el botón no abre WhatsApp automáticamente, vuelve a intentarlo
              desde tu teléfono.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
