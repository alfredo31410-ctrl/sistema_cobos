import { GraduationCap, Clock3, Sparkles, CalendarDays } from 'lucide-react';

export default function BootcampPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
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

        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cefin-red/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-cefin-red/10 blur-2xl" />

        <div className="page-container relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cefin-red/20 sm:h-20 sm:w-20">
              <GraduationCap className="h-8 w-8 text-cefin-red sm:h-10 sm:w-10" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cefin-red px-4 py-2 text-white shadow-lg shadow-cefin-red/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                Bootcamp de pago
              </span>
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Construye tu negocio con tu conocimiento
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg lg:text-xl">
              Estamos preparando esta experiencia para ayudarte a estructurar,
              vender y aterrizar tu conocimiento con más claridad.
            </p>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 text-center sm:rounded-3xl sm:p-8 lg:p-10 xl:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-200 sm:h-24 sm:w-24">
                <GraduationCap className="h-10 w-10 text-neutral-400 sm:h-12 sm:w-12" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
                Próximamente
              </h2>

              <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg lg:text-xl">
                El Bootcamp aún no está disponible. Estamos afinando todos los
                detalles para que cuando abra, tengas una experiencia clara,
                práctica y enfocada en resultados.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white sm:px-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cefin-red opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cefin-red" />
                </span>
                <span className="text-sm font-medium sm:text-base">
                  Próximamente
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT WILL BE */}
      <section className="bg-neutral-50 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center sm:mb-10 lg:mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
                ¿Qué será este Bootcamp?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-lg">
                Una experiencia enfocada en ayudarte a convertir lo que sabes en
                una oferta más clara, más estructurada y con dirección real.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:h-16 sm:w-16">
                  <GraduationCap className="h-7 w-7 text-cefin-red sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Estructura
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  Te ayudará a ordenar tu conocimiento para que se convierta en
                  algo vendible.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:h-16 sm:w-16">
                  <CalendarDays className="h-7 w-7 text-cefin-red sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Aplicación
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  No será solo teoría. La idea es aterrizarlo de forma práctica y
                  accionable.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:col-span-2 sm:p-7 lg:col-span-1">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:h-16 sm:w-16">
                  <Clock3 className="h-7 w-7 text-cefin-red sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Próximo lanzamiento
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  Estamos trabajando para abrirlo muy pronto con una propuesta
                  bien construida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}