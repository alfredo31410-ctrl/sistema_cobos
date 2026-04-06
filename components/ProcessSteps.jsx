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
      {/* Connection Line - Desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent -translate-y-1/2" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Card */}
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-elevated border border-neutral-100 hover:shadow-elevated-lg transition-all duration-500 hover:-translate-y-1">
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark flex items-center justify-center shadow-lg shadow-cefin-red/20">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-6 h-6 text-neutral-300 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                )}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
