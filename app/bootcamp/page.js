import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FAQ from '@/components/FAQ';
import { Check, X, Clock, Users, Video, Calendar, Gift, Award, DollarSign } from 'lucide-react';

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
    answer: 'No es necesario. El Bootcamp está diseñado para empezar desde cero con estructura.',
  },
  {
    question: '¿Y si no tengo audiencia?',
    answer: 'Aquí empiezas desde estructura. No necesitas seguidores para crear un negocio basado en conocimiento.',
  },
  {
    question: '¿Y si ya sé mucho?',
    answer: 'El problema no es saber… es estructurar. Este Bootcamp te ayuda a organizar lo que ya sabes para que se pueda vender.',
  },
  {
    question: '¿Es en vivo?',
    answer: 'Sí, el Bootcamp es en vivo los días 27 y 28 de abril de 2026, de 6:00 p.m. a 8:00 p.m.',
  },
  {
    question: '¿Qué pasa si no puedo asistir en vivo?',
    answer: 'Tendrás acceso a las grabaciones por 3 meses después del evento.',
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cefin-red rounded-full mb-6">
                <span className="text-white font-semibold text-sm">BOOTCAMP DE PAGO</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                Construye tu negocio con tu conocimiento{' '}
                <span className="text-cefin-red">en 2 días</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                Deja de improvisar y estructura lo que sabes en una oferta clara, 
                vendible y con potencial real.
              </p>
              <VideoPlaceholder className="mb-8" />
            </div>
            <div>
              {/* Promise Box */}
              <div className="bg-white text-neutral-900 p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold mb-6">
                  En este Bootcamp vas a salir con:
                </h3>
                <div className="space-y-4 mb-8">
                  {promiseItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cefin-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-cefin-red" />
                      </div>
                      <p className="text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl mb-6">
                  <Calendar className="w-6 h-6 text-cefin-red" />
                  <div>
                    <p className="font-bold">27 y 28 de abril de 2026</p>
                    <p className="text-sm text-neutral-600">6:00 p.m. a 8:00 p.m.</p>
                  </div>
                </div>
                <CTAButton href="#precio" variant="primary" size="lg" className="w-full justify-center">
                  Quiero entrar al Bootcamp
                </CTAButton>
              </div>

              {/* Urgency */}
              <div className="bg-cefin-red/10 border border-cefin-red/20 p-4 rounded-xl">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>Evento en vivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Cupo limitado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>No es contenido grabado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              No necesitas más cursos
            </h2>
            <p className="text-xl text-neutral-600 mb-4">
              Necesitas entender por qué lo que ya sabes no se está convirtiendo en dinero.
            </p>
            <p className="text-xl text-neutral-900 font-medium">
              Porque el problema no es tu conocimiento… 
              <span className="text-cefin-red"> es que no está estructurado.</span>
            </p>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For You */}
            <div className="bg-neutral-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Para quién SÍ es
              </h3>
              <div className="space-y-4">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cefin-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not For You */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Para quién NO es
              </h3>
              <div className="space-y-4">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <p className="text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Do Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Qué harás en el Bootcamp"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-cefin-red text-white rounded-lg mb-6">
                <span className="font-bold">Día 1</span>
              </div>
              <div className="space-y-4">
                {day1Content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cefin-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cefin-red" />
                    </div>
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-neutral-900 text-white rounded-lg mb-6">
                <span className="font-bold">Día 2</span>
              </div>
              <div className="space-y-4">
                {day2Content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-neutral-700" />
                    </div>
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              No sales con ideas… sales con estructura
            </h2>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-xl mb-8 inline-flex">
              <Calendar className="w-6 h-6 text-cefin-red" />
              <p className="font-medium">27 y 28 de abril de 2026, 6:00 p.m. a 8:00 p.m.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl">
                <p className="text-cefin-red font-bold text-lg mb-2">Sabes</p>
                <p className="text-neutral-300">qué vender</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <p className="text-cefin-red font-bold text-lg mb-2">Sabes</p>
                <p className="text-neutral-300">cómo venderlo</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <p className="text-cefin-red font-bold text-lg mb-2">Sabes</p>
                <p className="text-neutral-300">por dónde empezar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-cefin-red/10 rounded-3xl transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/sentado.png"
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
              <div className="space-y-4 text-neutral-600 text-lg leading-relaxed mb-8">
                <p>
                  Durante años enseñé sin tener un negocio estructurado.
                </p>
                <p>
                  Hasta que entendí algo: <strong className="text-neutral-900">el conocimiento no se vende solo.</strong>
                </p>
                <p>
                  Hoy he construido un sistema para convertir conocimiento en ingresos reales… 
                  y eso es lo que vas a trabajar aquí.
                </p>
              </div>
              <div className="space-y-4">
                {authorityItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cefin-red/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-cefin-red" />
                    </div>
                    <span className="text-neutral-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Bonos incluidos"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-cefin-red/10 flex items-center justify-center flex-shrink-0">
                  <bonus.icon className="w-6 h-6 text-cefin-red" />
                </div>
                <p className="text-lg text-neutral-700 font-medium">{bonus.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precio" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-neutral-900 text-white p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-2">
                Acceso al Bootcamp
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-5xl font-bold">$497</span>
                <span className="text-xl text-neutral-400">MXN</span>
              </div>
              <p className="text-neutral-400 mb-8">
                Este no es un curso. Es una experiencia para estructurar lo que sabes.
              </p>
              <CTAButton variant="primary" size="lg" className="w-full justify-center mb-6">
                Quiero mi lugar ahora
              </CTAButton>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Cupo limitado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>Acceso en vivo</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Precio especial por esta edición
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Preguntas frecuentes"
          />
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Si sabes hacer algo… ya puedes empezar
            </h2>
            <p className="text-xl text-neutral-300 mb-10">
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
