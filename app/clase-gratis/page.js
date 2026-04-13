import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import ActiveCampaignForm from '@/components/ActiveCampaignForm';
import {
  Check,
  X,
  Clock,
  Users,
  Video,
  DollarSign,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const bullets = [
  'Por qué saber mucho no significa ganar dinero',
  'El error que mantiene a la mayoría sin monetizar lo que sabe',
  'Cómo estructurar tu conocimiento para que se pueda vender',
  'Qué necesitas realmente para convertirlo en un negocio',
];

const problems = [
  'Sabes hacer algo, pero no lo monetizas',
  'Has intentado vender, pero no funciona',
  'No sabes qué vender exactamente',
  'No tienes una estructura clara',
];

const classContent = [
  'Cómo dejar de improvisar y empezar a estructurar',
  'Qué diferencia a quien enseña de quien construye negocio',
  'Cómo convertir tu conocimiento en una oferta clara',
  'El primer paso real para empezar',
];

const notForYou = [
  'Si buscas dinero rápido sin hacer nada',
  'Si no estás dispuesto a aplicar',
  'Si solo quieres consumir contenido',
];

const forYou = [
  'Si sabes hacer algo y quieres monetizarlo',
  'Si ya enseñas pero no vendes',
  'Si quieres construir algo serio',
  'Si quieres dejar de improvisar',
];

const authorityItems = [
  { icon: DollarSign, text: 'Millones de pesos generados en educación digital' },
  { icon: Users, text: 'Miles de alumnos formados' },
  { icon: BookOpen, text: 'Programas enfocados en resultados reales' },
];

export default function ClaseGratisPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-cefin-red/5 to-transparent" />
        <div className="absolute top-1/3 left-1/4 h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-cefin-red/5 blur-3xl" />

        <div className="page-container relative py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Content */}
            <div className="lg:col-span-7">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full bg-cefin-red px-4 py-2 text-white">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-semibold">CLASE GRATUITA</span>
              </div>

              <h1 className="headline-lg mb-5 sm:mb-6 text-neutral-900">
                Cómo monetizar tu conocimiento y convertirlo en un{' '}
                <span className="text-cefin-red">negocio real</span>
              </h1>

              <p className="mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg lg:text-2xl leading-relaxed text-neutral-500">
                Aunque hoy no estés vendiendo online o no tengas una estructura clara.
              </p>

              {/* VSL temporalmente desactivada */}
              {/*
              <VideoPlaceholder className="mb-8 sm:mb-10" />
              */}

              {/* Imagen provisional mientras se integra la VSL */}
              <div className="mb-8 sm:mb-10">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-100 shadow-xl">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/images/monetiza-conocimiento.jpg"
                      alt="Clase gratuita sobre monetizar tu conocimiento"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs sm:text-sm font-semibold text-neutral-900 shadow">
                      <Video className="h-4 w-4 text-cefin-red" />
                      Próximamente: Video de presentación
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-8 shadow-xl">
                <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-bold text-neutral-900">
                  En esta clase vas a entender:
                </h3>

                <div className="grid gap-4">
                  {bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cefin-red/10">
                        <Check className="h-4 w-4 text-cefin-red" />
                      </div>
                      <p className="pt-0.5 text-sm sm:text-base lg:text-lg text-neutral-700">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl sm:rounded-3xl bg-cefin-dark p-5 sm:p-6 lg:p-8 xl:p-10 shadow-2xl">
                  <h3 className="mb-2 text-center text-xl sm:text-2xl font-bold text-white">
                    Reserva tu lugar ahora
                  </h3>

                  <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base text-neutral-400">
                    Cupo limitado para esta edición
                  </p>

                  <div id="formulario">
                    <ActiveCampaignForm />
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 border-t border-white/10 pt-6 sm:pt-8">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                      <Video className="h-4 w-4 text-cefin-red" />
                      <span>En vivo</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                      <Users className="h-4 w-4 text-cefin-red" />
                      <span>Limitado</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                      <Clock className="h-4 w-4 text-cefin-red" />
                      <span>Único</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY STRIP */}
      <section className="bg-cefin-red py-4 sm:py-5">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-12 text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">
                No se repite constantemente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO TEACHES */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Image */}
            <div className="relative">
              <div className="relative mx-auto aspect-square max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-cefin-red/10 to-transparent -rotate-3" />
                <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] shadow-2xl">
                  <Image
                    src="/images/sentado.jpg"
                    alt="Alfredo Cobos"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-cefin-red">
                Tu instructor
              </span>

              <h2 className="headline-md mb-6 sm:mb-8 text-neutral-900">
                Soy Alfredo Cobos
              </h2>

              <div className="mb-8 sm:mb-10 space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
                <p>
                  Durante años enseñé, compartí conocimiento y generé valor…
                  pero sin convertirlo en un negocio real.
                </p>
                <p>
                  Hasta que entendí algo:{' '}
                  <strong className="text-neutral-900">
                    el conocimiento no se vende solo… necesita estructura.
                  </strong>
                </p>
                <p>Hoy ayudo a personas a hacer exactamente eso.</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {authorityItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 rounded-xl bg-neutral-50 p-4"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-cefin-red/10">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cefin-red" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-neutral-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="El problema"
            title="Esto es lo que probablemente te está pasando"
            size="large"
          />

          <div className="mx-auto max-w-4xl">
            <div className="mb-10 sm:mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 transition-colors group-hover:bg-red-500">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 transition-colors group-hover:text-white" />
                  </div>
                  <p className="pt-1 text-sm sm:text-base lg:text-lg text-neutral-700">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                No es falta de conocimiento…{' '}
                <span className="text-cefin-red">es falta de sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW TRUTH */}
      <section className="section-padding-sm gradient-dark relative overflow-hidden text-white">
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

        <div className="page-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 sm:mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold">
              No necesitas más información
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-neutral-300">
              Necesitas entender cómo estructurar lo que ya sabes
              para convertirlo en algo vendible.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL SEE */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="Contenido"
            title="Lo que verás en la clase"
            size="large"
          />

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:gap-5">
              {classContent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-neutral-100 bg-neutral-50 p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark shadow-lg shadow-cefin-red/20">
                    <span className="text-lg sm:text-xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-8 xl:p-10 shadow-xl">
              <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-neutral-900">
                Para quién NO es
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="pt-0.5 text-sm sm:text-base lg:text-lg text-neutral-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-cefin-dark p-5 sm:p-6 lg:p-8 xl:p-10 shadow-2xl">
              <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white">
                Para quién SÍ es
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cefin-red">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="pt-0.5 text-sm sm:text-base lg:text-lg text-neutral-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-xl text-center">
            <span className="mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-cefin-red">
              Última oportunidad
            </span>

            <h2 className="headline-md mb-4 text-neutral-900">
              Si hoy sabes algo… ya tienes lo más importante
            </h2>

            <p className="mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl text-neutral-500">
              Lo que sigue no es aprender más… es estructurarlo.
            </p>

            <div className="rounded-2xl sm:rounded-3xl bg-cefin-dark p-5 sm:p-6 lg:p-8 xl:p-10 shadow-2xl">
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
                Reserva tu lugar ahora
              </h3>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base text-neutral-400">
                Cupo limitado para esta edición
              </p>
              <a
                href="#formulario"
                className="inline-block rounded-lg bg-cefin-red px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-cefin-red/90"
              >
                Reservar lugar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL REMINDER */}
      <section className="bg-cefin-red py-4 sm:py-6">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-12 text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">
                No se repite constantemente
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}