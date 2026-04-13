import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import AuthorityStrip from '@/components/AuthorityStrip';
import PillarsGrid from '@/components/PillarsGrid';
import ProcessSteps from '@/components/ProcessSteps';
import TestimonialCard from '@/components/TestimonialCard';
import { X, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Por fin entendí cómo convertir lo que sé en algo que la gente quiere pagar. El sistema es claro y funciona.',
    name: 'María González',
    role: 'Consultora de Marketing',
  },
  {
    quote:
      'Dejé de improvisar y empecé a tener resultados reales. La estructura lo cambia todo.',
    name: 'Carlos Ramírez',
    role: 'Coach de Negocios',
  },
  {
    quote:
      'Pensé que sabía vender, pero no tenía un sistema. Ahora genero ingresos consistentes.',
    name: 'Ana Martínez',
    role: 'Experta en Finanzas',
  },
];

const problems = [
  'Sabes enseñar, pero no vendes con estructura',
  'Tienes conocimiento, pero no una oferta clara',
  'Publicas contenido, pero no generas ingresos',
  'No sabes cómo convertir lo que sabes en un negocio',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-neutral-50/80 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-cefin-red/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full bg-cefin-red/5 blur-2xl" />

        <div className="page-container relative py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Text */}
            <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cefin-red/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cefin-red" />
                <span className="text-xs sm:text-sm font-semibold text-cefin-red">
                  Sistema Cobos™
                </span>
              </div>

              <h1 className="headline-xl mb-6 sm:mb-8 text-neutral-900">
                Monetiza tu conocimiento y conviértelo en un{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-cefin-red">negocio real</span>
                  <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 sm:h-4 bg-cefin-red/10" />
                </span>
              </h1>

              <p className="body-lg mb-8 sm:mb-10 max-w-xl">
                Aprende a estructurar, vender y escalar lo que sabes con un
                sistema claro y enfocado en resultados.
              </p>

              <div className="mb-10 sm:mb-12 flex flex-col gap-4 sm:flex-row">
                <CTAButton
                  href="/clase-gratis"
                  variant="primary"
                  size="lg"
                  showArrow
                  fullWidth={false}
                >
                  Quiero registrarme a la clase gratis
                </CTAButton>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-neutral-100 pt-6 sm:pt-8 sm:max-w-xl">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    36K+
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500">Alumnos</p>
                </div>

                <div className="border-l border-r border-neutral-200 px-2 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    $1M+
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500">Generados</p>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    5+
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500">Años</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-7">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:ml-auto lg:max-w-xl">
                <div className="relative aspect-[4/5]">
                  <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-cefin-red/20 to-cefin-red/5 rotate-3" />
                  <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-tl from-neutral-200/50 to-transparent -rotate-2" />

                  <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl shadow-neutral-900/20">
                    <Image
                      src="/images/alfredo-placa.jpg"
                      alt="Alfredo Cobos"
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 lg:absolute lg:-bottom-6 lg:left-0 lg:mt-0 lg:max-w-xs">
                  <div className="rounded-2xl border border-neutral-100 bg-white p-5 sm:p-6 shadow-xl">
                    <p className="mb-1 text-sm text-neutral-500">Resultados reales</p>
                    <p className="text-base sm:text-lg font-bold text-neutral-900">
                      +250,000 USD en 7 meses
                    </p>
                    <p className="text-sm font-medium text-cefin-red">
                      Placa Black One Hotmart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthorityStrip />

      {/* PROBLEMA */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="El problema"
            title="Sabes hacer algo valioso… pero eso no significa que tengas un negocio"
            size="large"
          />

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 transition-colors group-hover:bg-red-500">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 transition-colors group-hover:text-white" />
                  </div>
                  <p className="pt-1 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-700">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA VERDAD */}
      <section className="section-padding gradient-dark relative overflow-hidden text-white">
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

        <div className="absolute top-0 left-1/4 h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-cefin-red/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-52 w-52 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full bg-cefin-red/10 blur-2xl" />

        <div className="page-container relative">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-5 sm:mb-6 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-cefin-red">
              La nueva verdad
            </span>

            <h2 className="mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
              El problema no es tu conocimiento…
              <br className="hidden sm:block" />
              <span className="text-cefin-red">
                {' '}es que no está estructurado para venderse
              </span>
            </h2>

            <p className="mx-auto mb-10 sm:mb-14 max-w-3xl text-base sm:text-lg lg:text-2xl leading-relaxed text-neutral-300">
              Monetizar conocimiento no depende de tener más contenido.
              Depende de tener un sistema que te permita estructurar, vender y escalar lo que sabes.
            </p>

            <CTAButton href="/clase-gratis" variant="outlineLight" size="xl" showArrow>
              Accede a la clase gratuita
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="El sistema"
            title="La estructura detrás de un negocio basado en conocimiento"
            subtitle="Existe una forma clara de convertir lo que sabes en un negocio. No se trata de improvisar… se trata de seguir un sistema."
            size="large"
          />
          <PillarsGrid />
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="El camino"
            title="Un camino claro para monetizar tu conocimiento"
            size="large"
          />
          <ProcessSteps />

          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
              Empezar ahora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SOBRE ALFREDO */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg aspect-square">
                <div className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-cefin-red/10 to-transparent -rotate-3" />
                <div className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-tl from-neutral-100 to-transparent rotate-2" />

                <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] shadow-2xl">
                  <Image
                    src="/images/alfredo-hero.png"
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
                Sobre mí
              </span>

              <h2 className="headline-md mb-6 sm:mb-8 text-neutral-900">
                Soy Alfredo Cobos
              </h2>

              <div className="mb-8 sm:mb-10 space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
                <p>
                  Durante años hice lo que la mayoría hace: enseñar, explicar, compartir valor…
                  pero sin una estructura clara para convertir eso en un negocio.
                </p>
                <p>
                  Hasta que entendí algo:{' '}
                  <strong className="font-semibold text-neutral-900">
                    el conocimiento por sí solo no genera ingresos.
                    Necesita estructura, estrategia y dirección.
                  </strong>
                </p>
                <p>
                  A partir de ahí, dejé de solo enseñar… y empecé a construir un sistema.
                </p>
                <p>
                  Hoy ayudo a personas a hacer lo mismo: tomar lo que ya saben, estructurarlo
                  correctamente y convertirlo en un negocio real.
                </p>
              </div>

              <CTAButton href="/sobre-mi" variant="outline" showArrow>
                Conoce mi historia completa
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="Testimonios"
            title="Resultados reales"
            subtitle="Experiencias de personas que estructuraron su conocimiento y lo convirtieron en negocio."
            size="large"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding gradient-dark relative overflow-hidden text-white">
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

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] lg:h-[800px] lg:w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cefin-red/10 blur-3xl" />

        <div className="page-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 sm:mb-6 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-cefin-red">
              Empieza hoy
            </span>

            <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Si ya sabes algo,
              <br />
              ya puedes empezar
            </h2>

            <p className="mx-auto mb-10 sm:mb-12 max-w-2xl text-base sm:text-lg lg:text-2xl text-neutral-300">
              No necesitas más información. Necesitas estructura.
            </p>

            <CTAButton href="/clase-gratis" variant="primary" size="xl" showArrow>
              Quiero entrar a la clase gratis
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}