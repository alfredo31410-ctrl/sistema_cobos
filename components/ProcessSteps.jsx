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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-neutral-200" />
          )}
          
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <span className="text-5xl lg:text-6xl font-bold text-cefin-red/20">
                {step.number}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
              {step.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
