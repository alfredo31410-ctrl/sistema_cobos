import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import {
  CheckCircle2,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Gracias | Alfredo Cobos',
  description:
    'Tu registro fue recibido correctamente. Da el último paso y únete al grupo para recibir acceso, recordatorios y materiales importantes.',
};

export default function GraciasPage() {
  return (
    <>
      {/* Hero principal con CTA dominante */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cefin-red/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

        <div className="page-container relative py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 sm:h-20 sm:w-20">
              <CheckCircle2 className="h-8 w-8 text-green-400 sm:h-10 sm:w-10" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
              <ShieldCheck className="h-4 w-4" />
              Registro recibido correctamente
            </div>

            <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Estás a nada de entrar.
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-green-400 sm:text-xl lg:text-2xl">
              Ya completaste el 90% de tu registro.
            </p>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Solo te falta un paso importante para recibir recordatorios,
              materiales y el enlace clave de acceso:
              <span className="font-semibold text-white"> entrar al grupo de WhatsApp.</span>
            </p>

            <div className="mx-auto mb-6 max-w-2xl rounded-2xl border border-cefin-red/30 bg-white/5 p-4 sm:rounded-3xl sm:p-5">
              <p className="text-sm font-semibold text-white sm:text-base">
                ⚠️ Si no entras al grupo, podrías perder avisos importantes antes de la clase.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <CTAButton
                href="https://chat.whatsapp.com/BaOgaoB8evPDvTdJvOkkFS"
                variant="primary"
                size="lg"
                showArrow
              >
                Entrar al grupo de WhatsApp ahora
              </CTAButton>

              <p className="text-xs text-neutral-400 sm:text-sm">
                Último paso para completar tu acceso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refuerzo visual de urgencia */}
      <section className="bg-cefin-red py-4 text-white">
        <div className="page-container">
          <div className="text-center">
            <p className="text-sm font-semibold sm:text-base">
              Tu registro ya está hecho. Lo único que falta es entrar al grupo para no perderte nada.
            </p>
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
                Sigue estos pasos
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base lg:text-lg">
                Así te aseguras de recibir toda la información importante a tiempo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
              <div className="rounded-2xl border border-green-100 bg-green-50 p-5 sm:rounded-3xl sm:p-6 lg:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 sm:h-14 sm:w-14">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  1. Registro completado
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Tu lugar ya quedó apartado correctamente.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cefin-red bg-neutral-50 p-5 shadow-lg sm:rounded-3xl sm:p-6 lg:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cefin-red/10 sm:h-14 sm:w-14">
                  <MessageCircle className="h-6 w-6 text-cefin-red" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  2. Entra al grupo ahora
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Aquí recibirás recordatorios, materiales y enlaces importantes antes de iniciar.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5 sm:rounded-3xl sm:p-6 lg:p-8 sm:col-span-2 lg:col-span-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cefin-red/10 sm:h-14 sm:w-14">
                  <Clock className="h-6 w-6 text-cefin-red" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  3. Guarda la fecha
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Reserva tu horario para aprovechar la clase completa sin interrupciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA secundario */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-cefin-dark p-6 text-center shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Completa tu acceso ahora
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Da clic aquí y entra al grupo de WhatsApp para recibir todo lo necesario antes de la clase.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                href="https://chat.whatsapp.com/BaOgaoB8evPDvTdJvOkkFS"
                variant="primary"
                size="lg"
                showArrow
              >
                Sí, quiero entrar al grupo
              </CTAButton>

              <CTAButton href="/" variant="outlineLight" size="lg">
                Volver al inicio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Soporte */}
      <section className="section-padding-sm bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-xl font-bold text-neutral-900 sm:text-2xl">
              ¿No recibiste el correo?
            </h3>

            <p className="mb-6 text-sm text-neutral-600 sm:text-base lg:text-lg">
              Revisa spam, promociones o correo no deseado. Pero recuerda:
              la vía más importante para no perderte nada es entrar al grupo de WhatsApp.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cefin-red transition-colors hover:text-cefin-red-dark sm:text-base"
            >
              Ir al sitio principal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}