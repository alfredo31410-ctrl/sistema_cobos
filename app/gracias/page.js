import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import { CheckCircle2, Mail, MessageCircle, ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'Gracias | Alfredo Cobos',
  description:
    'Tu registro fue recibido correctamente. Revisa tu correo y sigue los próximos pasos para acceder a la experiencia.',
};

export default function GraciasPage() {
  return (
    <>
      {/* Hero / Confirmation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
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

        <div className="absolute top-1/4 left-1/2 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-cefin-red/15 blur-3xl" />

        <div className="page-container relative py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-500/15">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />
            </div>

            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Registro completado
            </span>

            <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              ¡Gracias por registrarte!
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-300">
              Tu lugar ha sido registrado correctamente. Ahora sigue estos pasos
              para que no te pierdas nada.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                ¿Qué sigue ahora?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-neutral-600">
                Sigue estos pasos para recibir la información y prepararte para la clase.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-100 bg-neutral-50 p-5 sm:p-6 lg:p-8">
                <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cefin-red/10">
                  <Mail className="h-6 w-6 text-cefin-red" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  1. Revisa tu correo
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  Ahí recibirás confirmación, detalles de acceso y avisos importantes.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-neutral-100 bg-neutral-50 p-5 sm:p-6 lg:p-8">
                <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cefin-red/10">
                  <MessageCircle className="h-6 w-6 text-cefin-red" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  2. Únete al grupo
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  En el grupo recibirás recordatorios, materiales y enlaces clave.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-neutral-100 bg-neutral-50 p-5 sm:p-6 lg:p-8 sm:col-span-2 lg:col-span-1">
                <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cefin-red/10">
                  <Clock className="h-6 w-6 text-cefin-red" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  3. Guarda la fecha
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  Reserva el horario en tu agenda para que puedas aprovechar la experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA block */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-3xl rounded-2xl sm:rounded-3xl bg-cefin-dark p-6 sm:p-8 lg:p-10 text-center shadow-2xl">
            <h2 className="mb-3 text-2xl sm:text-3xl font-bold text-white">
              Siguiente paso recomendado
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-300">
              Únete al grupo para recibir recordatorios, materiales y actualizaciones importantes antes de la clase.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                href="https://chat.whatsapp.com/BaOgaoB8evPDvTdJvOkkFS"
                variant="primary"
                size="lg"
                showArrow
              >
                Unirme al grupo
              </CTAButton>

              <CTAButton href="/" variant="outlineLight" size="lg">
                Volver al inicio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Help / support */}
      <section className="section-padding-sm bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-xl sm:text-2xl font-bold text-neutral-900">
              ¿No recibiste el correo?
            </h3>

            <p className="mb-6 text-sm sm:text-base lg:text-lg text-neutral-600">
              Revisa tu bandeja de spam, promociones o correo no deseado. Si no lo encuentras,
              mantente atento a los próximos mensajes o contacta al equipo de soporte.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-cefin-red transition-colors hover:text-cefin-red-dark"
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