import { Sparkles } from 'lucide-react';

export default function SistemaCobosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] items-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
        <div className="page-container py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-cefin-red/20">
              <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-cefin-red" />
            </div>

            <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Sistema Cobos™
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-neutral-300">
              El sistema completo para convertir tu conocimiento en un negocio escalable.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 sm:p-8 lg:p-12 xl:p-16 text-center">
              <div className="mx-auto mb-6 sm:mb-8 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-neutral-200">
                <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-neutral-400" />
              </div>

              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                Muy pronto
              </h2>

              <p className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-500">
                Estamos preparando todos los detalles del Sistema Cobos™.
                Pronto podrás acceder al programa completo.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 sm:px-6 py-3 text-white">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cefin-red opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cefin-red" />
                </span>
                <span className="text-sm sm:text-base font-medium">En desarrollo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              ¿Qué es el Sistema Cobos™?
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              <div className="text-center rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-neutral-100">
                <div className="mx-auto mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm">
                  <span className="text-2xl sm:text-3xl font-bold text-cefin-red">E</span>
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  Estrategia
                </h3>
                <p className="text-sm sm:text-base text-neutral-600">
                  Claridad sobre qué vender y a quién
                </p>
              </div>

              <div className="text-center rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-neutral-100">
                <div className="mx-auto mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm">
                  <span className="text-2xl sm:text-3xl font-bold text-cefin-red">E</span>
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  Estructura
                </h3>
                <p className="text-sm sm:text-base text-neutral-600">
                  Un sistema organizado para vender
                </p>
              </div>

              <div className="text-center rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-neutral-100 sm:col-span-2 lg:col-span-1">
                <div className="mx-auto mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm">
                  <span className="text-2xl sm:text-3xl font-bold text-cefin-red">E</span>
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-neutral-900">
                  Ejecución
                </h3>
                <p className="text-sm sm:text-base text-neutral-600">
                  Acción enfocada en resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}