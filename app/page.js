import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import AuthorityStrip from '@/components/AuthorityStrip';
import PillarsGrid from '@/components/PillarsGrid';
import ProcessSteps from '@/components/ProcessSteps';
import TestimonialCard from '@/components/TestimonialCard';
import { ArrowRight, Check, X } from 'lucide-react';

const testimonials = [
  {
    quote: 'Por fin entendí cómo convertir lo que sé en algo que la gente quiere pagar. El sistema es claro y funciona.',
    name: 'María González',
    role: 'Consultora de Marketing',
  },
  {
    quote: 'Dejé de improvisar y empecé a tener resultados reales. La estructura lo cambia todo.',
    name: 'Carlos Ramírez',
    role: 'Coach de Negocios',
  },
  {
    quote: 'Pensé que sabía vender, pero no tenía un sistema. Ahora genero ingresos consistentes.',
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                Monetiza tu conocimiento y conviértelo en un{' '}
                <span className="text-cefin-red">negocio real</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Aprende a estructurar, vender y escalar lo que sabes con un 
                sistema claro y enfocado en resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
                  Quiero registrarme a la clase gratis
                </CTAButton>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-cefin-red/10 rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1508835277982-1c1b0e205603?w=800&h=1000&fit=crop"
                    alt="Alfredo Cobos"
                    width={800}
                    height={1000}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <AuthorityStrip />

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Sabes hacer algo valioso… pero eso no significa que tengas un negocio"
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-lg text-neutral-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Truth Section */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              El problema no es tu conocimiento…<br />
              <span className="text-cefin-red">es que no está estructurado para venderse</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Monetizar conocimiento no depende de tener más contenido.
              Depende de tener un sistema que te permita estructurar, vender y escalar lo que sabes.
            </p>
            <CTAButton href="/clase-gratis" variant="outlineLight" size="lg" showArrow>
              Accede a la clase gratuita
            </CTAButton>
          </div>
        </div>
      </section>

      {/* System Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="La estructura detrás de un negocio basado en conocimiento"
            subtitle="Existe una forma clara de convertir lo que sabes en un negocio. No se trata de improvisar… se trata de seguir un sistema."
          />
          <PillarsGrid />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Un camino claro para monetizar tu conocimiento"
          />
          <ProcessSteps />
          <div className="text-center mt-16">
            <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
              Empezar ahora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-cefin-red/10 rounded-3xl transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop"
                    alt="Alfredo Cobos"
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Soy Alfredo Cobos
              </h2>
              <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
                <p>
                  Durante años hice lo que la mayoría hace: enseñar, explicar, compartir valor… 
                  pero sin una estructura clara para convertir eso en un negocio.
                </p>
                <p>
                  Hasta que entendí algo: <strong className="text-neutral-900">el conocimiento por sí solo no genera ingresos. 
                  Necesita estructura, estrategia y dirección.</strong>
                </p>
                <p>
                  A partir de ahí, dejé de solo enseñar… y empecé a construir un sistema.
                </p>
                <p>
                  Hoy ayudo a personas a hacer lo mismo: tomar lo que ya saben, estructurarlo 
                  correctamente y convertirlo en un negocio real.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/sobre-mi" variant="outline" showArrow>
                  Conoce mi historia
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Resultados reales"
            subtitle="Experiencias de personas que estructuraron su conocimiento y lo convirtieron en negocio."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Si ya sabes algo, ya puedes empezar
            </h2>
            <p className="text-xl text-neutral-300 mb-10">
              No necesitas más información. Necesitas estructura.
            </p>
            <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
              Quiero entrar a la clase gratis
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
