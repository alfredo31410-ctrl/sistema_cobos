import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FAQ from '@/components/FAQ';
import {
  Check,
  X,
  Clock,
  Users,
  Video,
  Calendar,
  Gift,
  Award,
  DollarSign,
} from 'lucide-react';

const promiseItems = [
  'Claridad sobre qué vender',
  'Una estructura de negocio basada en tu conocimiento',
  'Una oferta que sí se puede convertir en ingresos',
  'Un mapa claro de cómo empezar',
];

const forYou = [
  'Sabes hacer algo, pero no lo monetizas',
  'Enseñas o tienes experiencia, pero no vendes',
  'Has intentado vender online sin resultados',
  'Quieres dejar de improvisar',
];

const notForYou = [
  'Si buscas dinero rápido sin esfuerzo',
  'Si no estás dispuesto a aplicar',
  'Si solo quieres ver contenido',
];

const day1Content = [
  'Definir qué sabes realmente y cómo convertirlo en valor',
  'Identificar a quién puedes ayudar',
  'Detectar por qué hoy no estás monetizando',
];

const day2Content = [
  'Estructurar tu oferta',
  'Entender cómo vender tu conocimiento',
  'Crear un camino claro para convertirlo en negocio',
];

const bonuses = [
  { icon: Gift, text: 'Plantilla para definir tu oferta' },
  { icon: Gift, text: 'Guía para estructurar tu conocimiento' },
  { icon: Gift, text: 'Checklist de implementación' },
  { icon: Gift, text: 'Acceso a grabaciones por 3 meses' },
];

const faqItems = [
  {
    question: '¿Y si no tengo experiencia online?',
    answer:
      'No es necesario. El Bootcamp está diseñado para empezar desde cero con estructura.',
  },
  {
    question: '¿Y si no tengo audiencia?',
    answer:
      'Aquí empiezas desde estructura. No necesitas seguidores para crear un negocio basado en conocimiento.',
  },
  {
    question: '¿Y si ya sé mucho?',
    answer:
      'El problema no es saber… es estructurar. Este Bootcamp te ayuda a organizar lo que ya sabes para que se pueda vender.',
  },
  {
    question: '¿Es en vivo?',
    answer:
      'Sí, el Bootcamp es en vivo los días 27 y 28 de abril de 2026, de 6:00 p.m. a 8:00 p.m.',
  },
  {
    question: '¿Qué pasa si no puedo asistir en vivo?',
    answer:
      'Tendrás acceso a las grabaciones por 3 meses después del evento.',
  },
];

const authorityItems = [
  { icon: DollarSign, text: 'Millones de pesos generados con educación digital' },
  { icon: Users, text: 'Miles de alumnos formados' },
  { icon: Award, text: 'Sistemas aplicados en negocios reales' },
];

export default function BootcampPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
        <div className="page-container py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left */}
            <div>
              <div className="mb-5 sm:mb-6 inline-flex rounded-full bg-cefin-red px-4 py-2">
                <span className="text-xs sm:text-sm font-semibold text-white">
                  BOOTCAMP DE PAGO
                </span>
              </div>

              <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight">
                Construye tu negocio con tu conocimiento{' '}
                <span className="text-cefin-red">en 2 días</span>
              </h1>

              <p className="mb-8 text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed">
                Deja de improvisar y estructura lo que sabes en una oferta clara,
                vendible y con potencial real.
              </p>

              <VideoPlaceholder className="mb-8" />
            </div>

            {/* Right */}
            <div>
              <div className="mb-6 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 text-neutral-900 shadow-2xl">
                <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-bold">
                  En este Bootcamp vas a salir con:
                </h3>

                <div className="mb-6 sm:mb-8 space-y-4">
                  {promiseItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cefin-red/10">
                        <Check className="h-3.5 w-3.5 text-cefin-red" />
                      </div>
                      <p className="text-sm sm:text-base text-neutral-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-6 flex items-center gap-3 rounded-xl bg-neutral-50 p-4">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-cefin-red" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">
                      27 y 28 de abril de 2026
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      6:00 p.m. a 8:00 p.m.
                    </p>
                  </div>
                </div>

                <CTAButton
                  href="#precio"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Quiero entrar al Bootcamp
                </CTAButton>
              </div>

              <div className="rounded-xl border border-cefin-red/20 bg-cefin-red/10 p-4">
                <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-white">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>Evento en vivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Cupo limitado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>No es contenido grabado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              No necesitas más cursos
            </h2>
            <p className="mb-4 text-base sm:text-lg lg:text-xl text-neutral-600">
              Necesitas entender por qué lo que ya sabes no se está convirtiendo en dinero.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-900">
              Porque el problema no es tu conocimiento…
              <span className="text-cefin-red"> es que no está estructurado.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {/* For You */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-900 p-5 sm:p-6 lg:p-8 shadow-xl">
              <h3 className="mb-6 text-xl sm:text-2xl font-bold text-white">
                Para quién SÍ es
              </h3>

              <div className="space-y-4">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cefin-red">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not For You */}
            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-sm border border-neutral-100">
              <h3 className="mb-6 text-xl sm:text-2xl font-bold text-neutral-900">
                Para quién NO es
              </h3>

              <div className="space-y-4">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3.5 w-3.5 text-red-500" />
                    </div>
                    <p className="text-sm sm:text-base text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL DO */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <SectionTitle title="Qué harás en el Bootcamp" />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {/* Day 1 */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-50 p-5 sm:p-6 lg:p-8">
              <div className="mb-6 inline-flex rounded-lg bg-cefin-red px-4 py-2 text-white">
                <span className="font-bold text-sm sm:text-base">Día 1</span>
              </div>

              <div className="space-y-4">
                {day1Content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cefin-red/10">
                      <Check className="h-3.5 w-3.5 text-cefin-red" />
                    </div>
                    <p className="text-sm sm:text-base text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-50 p-5 sm:p-6 lg:p-8">
              <div className="mb-6 inline-flex rounded-lg bg-neutral-900 px-4 py-2 text-white">
                <span className="font-bold text-sm sm:text-base">Día 2</span>
              </div>

              <div className="space-y-4">
                {day2Content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200">
                      <Check className="h-3.5 w-3.5 text-neutral-700" />
                    </div>
                    <p className="text-sm sm:text-base text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
              No sales con ideas… sales con estructura
            </h2>

            <div className="mb-8 inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white/10 p-4 text-left">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-cefin-red" />
              <p className="text-sm sm:text-base font-medium">
                27 y 28 de abril de 2026, 6:00 p.m. a 8:00 p.m.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-xl bg-white/5 p-5 sm:p-6">
                <p className="mb-2 text-lg font-bold text-cefin-red">Sabes</p>
                <p className="text-sm sm:text-base text-neutral-300">qué vender</p>
              </div>
              <div className="rounded-xl bg-white/5 p-5 sm:p-6">
                <p className="mb-2 text-lg font-bold text-cefin-red">Sabes</p>
                <p className="text-sm sm:text-base text-neutral-300">cómo venderlo</p>
              </div>
              <div className="rounded-xl bg-white/5 p-5 sm:p-6">
                <p className="mb-2 text-lg font-bold text-cefin-red">Sabes</p>
                <p className="text-sm sm:text-base text-neutral-300">por dónde empezar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="relative">
              <div className="relative mx-auto aspect-square max-w-sm sm:max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-cefin-red/10 -rotate-3" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/parado-placa.jpg"
                    alt="Alfredo Cobos"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                Soy Alfredo Cobos
              </h2>

              <div className="mb-8 space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
                <p>Durante años enseñé sin tener un negocio estructurado.</p>
                <p>
                  Hasta que entendí algo:{' '}
                  <strong className="text-neutral-900">
                    el conocimiento no se vende solo.
                  </strong>
                </p>
                <p>
                  Hoy he construido un sistema para convertir conocimiento en ingresos reales…
                  y eso es lo que vas a trabajar aquí.
                </p>
              </div>

              <div className="space-y-4">
                {authorityItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cefin-red/10">
                      <item.icon className="h-5 w-5 text-cefin-red" />
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

      {/* BONUSES */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <SectionTitle title="Bonos incluidos" />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-neutral-100"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-cefin-red/10">
                  <bonus.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cefin-red" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-neutral-700">
                  {bonus.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precio" className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-xl text-center">
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-900 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
              <h2 className="mb-2 text-xl sm:text-2xl font-bold">
                Acceso al Bootcamp
              </h2>

              <div className="mb-6 flex items-end justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-bold">$497</span>
                <span className="text-lg sm:text-xl text-neutral-400">MXN</span>
              </div>

              <p className="mb-8 text-sm sm:text-base text-neutral-400">
                Este no es un curso. Es una experiencia para estructurar lo que sabes.
              </p>

              <CTAButton
                variant="primary"
                size="lg"
                className="mb-6 w-full justify-center"
              >
                Quiero mi lugar ahora
              </CTAButton>

              <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Cupo limitado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  <span>Acceso en vivo</span>
                </div>
              </div>
            </div>

            <p className="mt-5 sm:mt-6 text-sm text-neutral-500">
              Precio especial por esta edición
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <SectionTitle title="Preguntas frecuentes" />
          <div className="mx-auto max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Si sabes hacer algo… ya puedes empezar
            </h2>

            <p className="mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl text-neutral-300">
              No necesitas más información… necesitas estructura.
            </p>

            <CTAButton href="#precio" variant="primary" size="lg" showArrow>
              Quiero entrar al Bootcamp
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}