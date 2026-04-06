import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import RegistrationForm from '@/components/RegistrationForm';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import { Check, X, Clock, Users, Video, Award, DollarSign, BookOpen } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cefin-red/10 rounded-full mb-6">
                <span className="text-cefin-red font-semibold text-sm">CLASE GRATUITA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                Cómo monetizar tu conocimiento y convertirlo en un{' '}
                <span className="text-cefin-red">negocio real</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Aunque hoy no estés vendiendo online o no tengas una estructura clara.
              </p>
              <VideoPlaceholder className="mb-8" />
            </div>
            <div>
              {/* Bullets */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100 mb-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  En esta clase vas a entender:
                </h3>
                <div className="space-y-4">
                  {bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cefin-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-cefin-red" />
                      </div>
                      <p className="text-neutral-700">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-neutral-900 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Reserva tu lugar ahora
                </h3>
                <RegistrationForm buttonText="Quiero mi lugar" variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Strip */}
      <section className="bg-cefin-red py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-white">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              <span className="font-medium">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">No se repite constantemente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who Teaches */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
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
              <div className="space-y-4 text-neutral-600 text-lg leading-relaxed mb-8">
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

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Esto es lo que probablemente te está pasando"
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 mb-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-lg text-neutral-700">{problem}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl text-neutral-700">
                No es falta de conocimiento… <span className="font-bold text-cefin-red">es falta de sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Truth */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              No necesitas más información
            </h2>
            <p className="text-xl text-neutral-300">
              Necesitas entender cómo estructurar lo que ya sabes 
              para convertirlo en algo vendible.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Lo que verás en la clase"
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {classContent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-neutral-50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-cefin-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not For You / For You */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Si hoy sabes algo… ya tienes lo más importante
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Lo que sigue no es aprender más… es estructurarlo.
            </p>
            <div className="bg-neutral-900 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Reserva tu lugar ahora
              </h3>
              <RegistrationForm buttonText="Quiero entrar a la clase" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Reminder */}
      <section className="bg-cefin-red py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-white text-center">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              <span className="font-medium">Acceso en vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Cupo limitado</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">No se repite constantemente</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
