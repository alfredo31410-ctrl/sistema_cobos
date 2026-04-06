import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import { Check, Award, Users, DollarSign, Trophy, BookOpen, Rocket } from 'lucide-react';

const achievements = [
  { icon: DollarSign, text: 'Generar millones de pesos año tras año con CEFIN, desde 2019' },
  { icon: Users, text: 'Construir un ecosistema de formación con más de 36,000 alumnos' },
  { icon: BookOpen, text: 'Desarrollar programas que convierten conocimiento en ingresos reales' },
  { icon: Trophy, text: 'Placa Black One de Hotmart por vender +250,000 USD en menos de 7 meses' },
  { icon: Rocket, text: 'Camino hacia la Placa Black Moon con meta de 1,000,000 USD en un año' },
  { icon: Award, text: 'Pionero adoptando metodologías exitosas de Brasil en México' },
];

const forYouItems = [
  'Sabes hacer algo, pero no lo monetizas',
  'Enseñas, pero no vendes',
  'Tienes experiencia, pero no un negocio',
  'Quieres dejar de improvisar',
];

export default function SobreMiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
              No empecé con un negocio…<br />
              <span className="text-cefin-red">empecé sabiendo hacer algo</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Y como muchos, pensé que eso era suficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Reality Block */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-cefin-red/10 rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1508243529287-e21914733111?w=800&h=1000&fit=crop"
                    alt="Alfredo Cobos"
                    width={800}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                La realidad
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>Durante mucho tiempo hice lo que hace la mayoría:</p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cefin-red rounded-full" />
                    Enseñar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cefin-red rounded-full" />
                    Explicar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cefin-red rounded-full" />
                    Compartir conocimiento
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cefin-red rounded-full" />
                    Ayudar a otros
                  </li>
                </ul>
                <p>
                  Y sí… <strong className="text-neutral-900">era bueno en eso.</strong>
                </p>
                <p className="text-xl font-medium text-neutral-900">
                  Pero había un problema: eso no era un negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Break */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              El quiebre
            </h2>
            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
              <p>Puedes saber mucho.</p>
              <p>Puedes explicar bien.</p>
              <p>Puedes tener experiencia.</p>
              <p className="text-xl text-white font-medium">Y aún así…</p>
              <ul className="space-y-3 text-neutral-400">
                <li>→ No saber vender</li>
                <li>→ No saber estructurar</li>
                <li>→ No saber crecer</li>
              </ul>
              <p className="text-xl text-cefin-red font-semibold pt-4">
                Porque nadie te enseña eso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Change */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
              El cambio
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                En algún punto entendí algo que cambió todo:
              </p>
              <blockquote className="text-2xl lg:text-3xl font-bold text-neutral-900 border-l-4 border-cefin-red pl-6 py-4">
                El conocimiento no se vende solo… necesita estructura.
              </blockquote>
              <p>
                Ahí dejé de pensar como alguien que enseña… 
                <strong className="text-neutral-900"> y empecé a construir algo distinto.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-12">
              Resultados y autoridad real
            </h2>
            <div className="grid gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-cefin-red/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-cefin-red" />
                  </div>
                  <p className="text-lg text-neutral-700 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-neutral-900 rounded-xl">
              <p className="text-lg text-white font-medium">
                Y algo más importante que los números: 
                <span className="text-cefin-red"> haber convertido conocimiento en un negocio replicable.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Today */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Lo que hago hoy
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Hoy hago algo muy específico:
                </p>
                <p className="text-xl text-neutral-900 font-medium">
                  Ayudo a personas que saben hacer algo…
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cefin-red" />
                    A estructurarlo
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cefin-red" />
                    Convertirlo en una oferta clara
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cefin-red" />
                    Y transformarlo en un negocio real
                  </li>
                </ul>
                <p className="text-neutral-900 font-medium">
                  Sin vueltas. Sin teoría innecesaria. Sin humo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-cefin-red/10 rounded-3xl transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=800&fit=crop"
                    alt="Alfredo Cobos enseñando"
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="py-24 lg:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              El Sistema
            </h2>
            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
              <p>Todo esto no salió de la nada.</p>
              <p>Se convirtió en una forma de trabajar.</p>
              <p>En una lógica clara.</p>
              <p className="text-3xl font-bold text-white pt-4">En un sistema.</p>
              <p className="text-2xl font-bold text-cefin-red">Sistema Cobos™</p>
              <p className="text-neutral-400 pt-4">
                No es inspiración. Es estructura aplicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 text-center">
              ¿Para quién es esto?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 text-center">
              Esto es para ti si:
            </p>
            <div className="grid gap-4">
              {forYouItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-neutral-50 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-cefin-red flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Si hoy sabes algo… ya tienes lo más difícil
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Lo que sigue no es aprender más. Es estructurarlo.
            </p>
            <CTAButton href="/clase-gratis" variant="primary" size="lg" showArrow>
              Empieza aquí: Monetiza tu conocimiento
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
