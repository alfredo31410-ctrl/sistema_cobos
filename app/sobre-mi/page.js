import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import {
  Check,
  Award,
  Users,
  DollarSign,
  Trophy,
  BookOpen,
  Rocket,
} from 'lucide-react';

const achievements = [
  {
    icon: DollarSign,
    text: 'Generar millones de pesos año tras año con CEFIN, desde 2019',
  },
  {
    icon: Users,
    text: 'Construir un ecosistema de formación con más de 36,000 alumnos',
  },
  {
    icon: BookOpen,
    text: 'Desarrollar programas que convierten conocimiento en ingresos reales',
  },
  {
    icon: Trophy,
    text: 'Placa Black One de Hotmart por vender +250,000 USD en menos de 7 meses',
  },
  {
    icon: Rocket,
    text: 'Camino hacia la Placa Black Moon con meta de 1,000,000 USD en un año',
  },
  {
    icon: Award,
    text: 'Pionero adoptando metodologías exitosas de Brasil en México',
  },
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
      <section className="relative flex min-h-[55vh] items-center bg-gradient-to-br from-neutral-50 to-white sm:min-h-[60vh] lg:min-h-[70vh]">
        <div className="page-container py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-tight text-neutral-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              No empecé con un negocio…
              <br />
              <span className="text-cefin-red">empecé sabiendo hacer algo</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg lg:text-xl">
              Y como muchos, pensé que eso era suficiente.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] max-w-sm sm:max-w-md">
                <div className="absolute inset-0 rotate-3 rounded-3xl bg-cefin-red/10" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/realidad.png"
                    alt="Alfredo Cobos"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900 sm:mb-8 sm:text-3xl lg:text-4xl">
                La realidad
              </h2>

              <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:space-y-6 sm:text-base lg:text-lg">
                <p>Durante mucho tiempo hice lo que hace la mayoría:</p>

                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cefin-red" />
                    Enseñar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cefin-red" />
                    Explicar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cefin-red" />
                    Compartir conocimiento
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cefin-red" />
                    Ayudar a otros
                  </li>
                </ul>

                <p>
                  Y sí… <strong className="text-neutral-900">era bueno en eso.</strong>
                </p>

                <p className="text-base font-medium text-neutral-900 sm:text-lg lg:text-xl">
                  Pero había un problema: eso no era un negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl lg:text-4xl">
              El quiebre
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-neutral-300 sm:space-y-6 sm:text-base lg:text-lg">
              <p>Puedes saber mucho.</p>
              <p>Puedes explicar bien.</p>
              <p>Puedes tener experiencia.</p>

              <p className="text-base font-medium text-white sm:text-lg lg:text-xl">
                Y aún así…
              </p>

              <ul className="space-y-3 text-neutral-400">
                <li>→ No saber vender</li>
                <li>→ No saber estructurar</li>
                <li>→ No saber crecer</li>
              </ul>

              <p className="pt-2 text-base font-semibold text-cefin-red sm:pt-4 sm:text-lg lg:text-xl">
                Porque nadie te enseña eso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 sm:mb-8 sm:text-3xl lg:text-4xl">
              El cambio
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:space-y-6 sm:text-base lg:text-lg">
              <p>En algún punto entendí algo que cambió todo:</p>

              <blockquote className="border-l-4 border-cefin-red py-3 pl-4 text-xl font-bold leading-tight text-neutral-900 sm:py-4 sm:pl-6 sm:text-2xl lg:text-3xl">
                El conocimiento no se vende solo… necesita estructura.
              </blockquote>

              <p>
                Ahí dejé de pensar como alguien que enseña…
                <strong className="text-neutral-900">
                  {' '}
                  y empecé a construir algo distinto.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-neutral-900 sm:mb-10 sm:text-3xl lg:text-4xl">
              Resultados y autoridad real
            </h2>

            <div className="grid gap-4 sm:gap-5 lg:gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm sm:p-5 lg:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cefin-red/10 sm:h-12 sm:w-12">
                    <item.icon className="h-5 w-5 text-cefin-red sm:h-6 sm:w-6" />
                  </div>
                  <p className="pt-1 text-sm text-neutral-700 sm:text-base lg:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-neutral-900 p-5 sm:mt-8 sm:p-6">
              <p className="text-base font-medium text-white sm:text-lg">
                Y algo más importante que los números:
                <span className="text-cefin-red">
                  {' '}
                  haber convertido conocimiento en un negocio replicable.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900 sm:mb-8 sm:text-3xl lg:text-4xl">
                Lo que hago hoy
              </h2>

              <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:space-y-6 sm:text-base lg:text-lg">
                <p>Hoy hago algo muy específico:</p>

                <p className="text-base font-medium text-neutral-900 sm:text-lg lg:text-xl">
                  Ayudo a personas que saben hacer algo…
                </p>

                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-cefin-red" />
                    A estructurarlo
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-cefin-red" />
                    Convertirlo en una oferta clara
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-cefin-red" />
                    Y transformarlo en un negocio real
                  </li>
                </ul>

                <p className="font-medium text-neutral-900">
                  Sin vueltas. Sin teoría innecesaria. Sin humo.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-square max-w-sm sm:max-w-md">
                <div className="absolute inset-0 -rotate-3 rounded-3xl bg-cefin-red/10" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/enseñando.png"
                    alt="Alfredo Cobos enseñando"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white">
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl lg:text-4xl">
              El Sistema
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-neutral-300 sm:space-y-6 sm:text-base lg:text-lg">
              <p>Todo esto no salió de la nada.</p>
              <p>Se convirtió en una forma de trabajar.</p>
              <p>En una lógica clara.</p>

              <p className="pt-2 text-2xl font-bold text-white sm:pt-4 sm:text-3xl">
                En un sistema.
              </p>

              <p className="text-xl font-bold text-cefin-red sm:text-2xl">
                Sistema Cobos™
              </p>

              <p className="pt-2 text-neutral-400 sm:pt-4">
                No es inspiración. Es estructura aplicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-neutral-900 sm:mb-8 sm:text-3xl lg:text-4xl">
              ¿Para quién es esto?
            </h2>

            <p className="mb-6 text-center text-sm text-neutral-600 sm:mb-8 sm:text-base lg:text-lg">
              Esto es para ti si:
            </p>

            <div className="grid gap-4">
              {forYouItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-neutral-50 p-4 sm:p-5 lg:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cefin-red">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm text-neutral-700 sm:text-base lg:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-2xl font-bold text-neutral-900 sm:mb-6 sm:text-3xl lg:text-4xl">
              Si hoy sabes algo… ya tienes lo más difícil
            </h2>

            <p className="mb-8 text-base text-neutral-600 sm:mb-10 sm:text-lg lg:text-xl">
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
