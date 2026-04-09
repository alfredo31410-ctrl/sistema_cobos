import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import AuthorityStrip from '@/components/AuthorityStrip';
import PillarsGrid from '@/components/PillarsGrid';
import ProcessSteps from '@/components/ProcessSteps';
import TestimonialCard from '@/components/TestimonialCard';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';

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
      {/* ============================================
          HERO SECTION - Dominante y Premium
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50/80 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cefin-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cefin-red/3 rounded-full blur-2xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cefin-red/10 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-cefin-red" />
                <span className="text-cefin-red font-semibold text-sm">Sistema Cobos™</span>
              </div>
              
              {/* Headline */}
              <h1 className="headline-xl text-neutral-900 mb-8">
                Monetiza tu conocimiento y conviértelo en un{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-cefin-red">negocio real</span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-cefin-red/10 -z-0" />
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-neutral-500 leading-relaxed mb-10 max-w-xl">
                Aprende a estructurar, vender y escalar lo que sabes con un 
                sistema claro y enfocado en resultados.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
                  Quiero registrarme a la clase gratis
                </CTAButton>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-neutral-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-neutral-900">36K+</p>
                  <p className="text-sm text-neutral-500">Alumnos</p>
                </div>
                <div className="w-px h-12 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-neutral-900">$1M+</p>
                  <p className="text-sm text-neutral-500">Generados</p>
                </div>
                <div className="w-px h-12 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-neutral-900">5+</p>
                  <p className="text-sm text-neutral-500">Años</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[4/5] max-w-lg lg:max-w-xl mx-auto lg:ml-auto">
                  {/* Decorative Background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-cefin-red/20 to-cefin-red/5 rounded-[2.5rem] transform rotate-3" />
                  <div className="absolute -inset-4 bg-gradient-to-tl from-neutral-200/50 to-transparent rounded-[2.5rem] transform -rotate-2" />
                  
                  {/* Image */}
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-900/20">
                    <Image
  src="/images/alfredo-hero.png"
  alt="Alfredo Cobos"
  width={800}
  height={1000}
  className="object-cover"
  priority
/>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
                  </div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 lg:left-0 bg-white rounded-2xl p-6 shadow-elevated-lg border border-neutral-100 max-w-xs">
                  <p className="text-sm text-neutral-500 mb-1">Resultados reales</p>
                  <p className="text-lg font-bold text-neutral-900">+250,000 USD en 7 meses</p>
                  <p className="text-sm text-cefin-red font-medium">Placa Black One Hotmart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <AuthorityStrip />

      {/* ============================================
          PROBLEMA SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="El problema"
            title="Sabes hacer algo valioso… pero eso no significa que tengas un negocio"
            size="large"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-6 lg:p-8 bg-neutral-50/80 rounded-2xl border border-neutral-100 hover:bg-white hover:shadow-elevated hover:border-transparent transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                    <X className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed pt-2">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          NUEVA VERDAD SECTION
          ============================================ */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cefin-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cefin-red/10 rounded-full blur-2xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-cefin-red font-semibold text-sm uppercase tracking-wider mb-6">
              La nueva verdad
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
              El problema no es tu conocimiento…
              <br />
              <span className="text-cefin-red">es que no está estructurado para venderse</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-neutral-300 mb-14 leading-relaxed max-w-3xl mx-auto">
              Monetizar conocimiento no depende de tener más contenido.
              Depende de tener un sistema que te permita estructurar, vender y escalar lo que sabes.
            </p>
            
            <CTAButton href="/clase-gratis" variant="outlineLight" size="xl" showArrow>
              Accede a la clase gratuita
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================
          SISTEMA SECTION - Introducción
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="El sistema"
            title="La estructura detrás de un negocio basado en conocimiento"
            subtitle="Existe una forma clara de convertir lo que sabes en un negocio. No se trata de improvisar… se trata de seguir un sistema."
            size="large"
          />
          <PillarsGrid />
        </div>
      </section>

      {/* ============================================
          PROCESO SECTION
          ============================================ */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="El camino"
            title="Un camino claro para monetizar tu conocimiento"
            size="large"
          />
          <ProcessSteps />
          
          <div className="text-center mt-20">
            <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
              Empezar ahora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================
          SOBRE ALFREDO SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-cefin-red/10 to-transparent rounded-[2rem] transform -rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tl from-neutral-100 to-transparent rounded-[2rem] transform rotate-2" />
                
                {/* Image */}
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
                  <Image
  src="/images/alfredo-placa.png"
  alt="Alfredo Cobos"
  width={800}
  height={800}
  className="object-cover"
/>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <span className="inline-block text-cefin-red font-semibold text-sm uppercase tracking-wider mb-4">
                Sobre mí
              </span>
              
              <h2 className="headline-md text-neutral-900 mb-8">
                Soy Alfredo Cobos
              </h2>
              
              <div className="space-y-5 text-lg text-neutral-600 leading-relaxed mb-10">
                <p>
                  Durante años hice lo que la mayoría hace: enseñar, explicar, compartir valor… 
                  pero sin una estructura clara para convertir eso en un negocio.
                </p>
                <p>
                  Hasta que entendí algo: <strong className="text-neutral-900 font-semibold">el conocimiento por sí solo no genera ingresos. 
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
              
              <CTAButton href="/sobre-mi" variant="outline" showArrow>
                Conoce mi historia completa
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIOS SECTION
          ============================================ */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="Testimonios"
            title="Resultados reales"
            subtitle="Experiencias de personas que estructuraron su conocimiento y lo convirtieron en negocio."
            size="large"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CIERRE / CTA FINAL SECTION
          ============================================ */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cefin-red/10 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-cefin-red font-semibold text-sm uppercase tracking-wider mb-6">
              Empieza hoy
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Si ya sabes algo,<br />ya puedes empezar
            </h2>
            
            <p className="text-xl lg:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto">
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
