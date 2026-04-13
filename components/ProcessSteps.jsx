import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Entiende',
    description: 'Entender por qué hoy no estás monetizando tu conocimiento',
  },
  {
    number: '02',
    title: 'Estructura',
    description: 'Estructurar tu conocimiento como negocio vendible',
  },
  {
    number: '03',
    title: 'Escala',
    description: 'Construir y escalar un sistema real de ingresos',
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative">
      {/* Connection line desktop */}
      <div className="pointer-events-none absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent lg:block" />

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Top row */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark shadow-lg shadow-cefin-red/20">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-16 z-10 h-5 w-5 text-neutral-300" />
                )}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}