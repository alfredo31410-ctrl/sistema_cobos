import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import RegistrationForm from '@/components/RegistrationForm';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import { Check, X, Clock, Users, Video, Award, DollarSign, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

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
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cefin-red/5 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cefin-red/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cefin-red text-white rounded-full mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold text-sm">CLASE GRATUITA</span>
              </div>
              
              {/* Headline */}
              <h1 className="headline-lg text-neutral-900 mb-6">
                Cómo monetizar tu conocimiento y convertirlo en un{' '}
                <span className="text-cefin-red">negocio real</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-neutral-500 mb-10 max-w-2xl">
                Aunque hoy no estés vendiendo online o no tengas una estructura clara.
              </p>
              
              {/* Video */}
              <VideoPlaceholder className="mb-10" />
              
              {/* Bullets */}
              <div className="bg-white rounded-3xl p-8 shadow-elevated border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  En esta clase vas a entender:
                </h3>
                <div className="grid gap-4">
                  {bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-cefin-red/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-cefin-red" />
                      </div>
                      <p className="text-neutral-700 text-lg pt-0.5">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="bg-cefin-dark rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    Reserva tu lugar ahora
                  </h3>
                  <p className="text-neutral-400 text-center mb-8">
                    Cupo limitado para esta edición
                  </p>
                  <RegistrationForm buttonText="Quiero mi lugar" variant="dark" />
                  
                  {/* Urgency indicators */}
                  <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Video className="w-4 h-4 text-cefin-red" />
                      <span>En vivo</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Users className="w-4 h-4 text-cefin-red" />
                      <span>Limitado</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Clock className="w-4 h-4 text-cefin-red" />
                      <span>Único</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          URGENCY STRIP
          ============================================ */}
      <section className="bg-cefin-red py-5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-white">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5" />
              <span className="font-semibold">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">No se repite constantemente</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHO TEACHES
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-cefin-red/10 to-transparent rounded-[2rem] transform -rotate-3" />
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sentado.jpg"
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
                Tu instructor
              </span>
              <h2 className="headline-md text-neutral-900 mb-8">
                Soy Alfredo Cobos
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed mb-10">
                <p>
                  Durante años enseñé, compartí conocimiento y generé valor… 
                  pero sin convertirlo en un negocio real.
                </p>
                <p>
                  Hasta que entendí algo: <strong className="text-neutral-900">el conocimiento no se vende solo… 
                  necesita estructura.</strong>
                </p>
                <p>
                  Hoy ayudo a personas a hacer exactamente eso.
                </p>
              </div>
              
              {/* Authority Items */}
              <div className="space-y-4">
                {authorityItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-cefin-red/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cefin-red" />
                    </div>
                    <span className="text-neutral-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROBLEM SECTION
          ============================================ */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="El problema"
            title="Esto es lo que probablemente te está pasando"
            size="large"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-6 lg:p-8 bg-white rounded-2xl shadow-soft hover:shadow-elevated border border-neutral-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                    <X className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-lg text-neutral-700 pt-2">{problem}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-semibold text-neutral-900">
                No es falta de conocimiento… <span className="text-cefin-red">es falta de sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          NEW TRUTH
          ============================================ */}
      <section className="section-padding-sm gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              No necesitas más información
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-300">
              Necesitas entender cómo estructurar lo que ya sabes 
              para convertirlo en algo vendible.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT YOU'LL SEE
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            eyebrow="Contenido"
            title="Lo que verás en la clase"
            size="large"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-5">
              {classContent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-white hover:shadow-elevated hover:border-transparent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-cefin-red/20">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-lg text-neutral-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOR WHOM
          ============================================ */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Not For You */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-soft border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                Para quién NO es
              </h3>
              <div className="space-y-5">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-neutral-600 text-lg pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For You */}
            <div className="bg-cefin-dark p-8 lg:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Para quién SÍ es
              </h3>
              <div className="space-y-5">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-cefin-red flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-neutral-300 text-lg pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-block text-cefin-red font-semibold text-sm uppercase tracking-wider mb-4">
              Última oportunidad
            </span>
            <h2 className="headline-md text-neutral-900 mb-4">
              Si hoy sabes algo… ya tienes lo más importante
            </h2>
            <p className="text-xl text-neutral-500 mb-12">
              Lo que sigue no es aprender más… es estructurarlo.
            </p>
            
            <div className="bg-cefin-dark p-8 lg:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Reserva tu lugar ahora
              </h3>
              <p className="text-neutral-400 mb-8">
                Cupo limitado para esta edición
              </p>
              <RegistrationForm buttonText="Quiero entrar a la clase" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL REMINDER
          ============================================ */}
      <section className="bg-cefin-red py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-white">
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5" />
              <span className="font-semibold">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">No se repite constantemente</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
