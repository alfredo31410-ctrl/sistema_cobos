import { Sparkles } from 'lucide-react';

export default function SistemaCobosPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white sm:min-h-[55vh] lg:min-h-[60vh]">
        <div className="page-container py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cefin-red/20 sm:mb-8 sm:h-20 sm:w-20">
              <Sparkles className="h-8 w-8 text-cefin-red sm:h-10 sm:w-10" />
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Sistema Cobos™
            </h1>

            <p className="mx-auto max-w-2xl text-base text-neutral-300 sm:text-lg lg:text-xl">
              El sistema completo para convertir tu conocimiento en un negocio escalable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 text-center sm:rounded-3xl sm:p-8 lg:p-12 xl:p-16">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-200 sm:mb-8 sm:h-24 sm:w-24">
                <Sparkles className="h-10 w-10 text-neutral-400 sm:h-12 sm:w-12" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-neutral-900 sm:mb-4 sm:text-3xl lg:text-4xl">
                Muy pronto
              </h2>

              <p className="mb-6 text-base leading-relaxed text-neutral-500 sm:mb-8 sm:text-lg lg:text-xl">
                Estamos preparando todos los detalles del Sistema Cobos™.
                Pronto podrás acceder al programa completo.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white sm:px-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cefin-red opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cefin-red" />
                </span>
                <span className="text-sm font-medium sm:text-base">En desarrollo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900 sm:mb-10 sm:text-3xl lg:text-4xl">
              ¿Qué es el Sistema Cobos™?
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:mb-6 sm:h-16 sm:w-16">
                  <span className="text-2xl font-bold text-cefin-red sm:text-3xl">E</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Estrategia
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  Claridad sobre qué vender y a quién.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:mb-6 sm:h-16 sm:w-16">
                  <span className="text-2xl font-bold text-cefin-red sm:text-3xl">E</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Estructura
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  Un sistema organizado para vender.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm sm:col-span-2 sm:p-7 lg:col-span-1">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm sm:mb-6 sm:h-16 sm:w-16">
                  <span className="text-2xl font-bold text-cefin-red sm:text-3xl">E</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">
                  Ejecución
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  Acción enfocada en resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
