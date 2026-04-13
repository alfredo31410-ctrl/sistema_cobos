import { Lightbulb, Package, TrendingUp, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Claridad',
    description: 'Qué sabes y a quién ayudas',
    number: '01',
  },
  {
    icon: Package,
    title: 'Oferta',
    description: 'Cómo convertirlo en algo vendible',
    number: '02',
  },
  {
    icon: TrendingUp,
    title: 'Conversión',
    description: 'Cómo atraer y vender',
    number: '03',
  },
  {
    icon: Rocket,
    title: 'Escalamiento',
    description: 'Cómo crecer y sistematizar',
    number: '04',
  },
];

export default function PillarsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
      {pillars.map((pillar, index) => (
        <div
          key={index}
          className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Number */}
          <span className="pointer-events-none absolute top-4 right-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 transition-colors duration-300 group-hover:text-cefin-red/10">
            {pillar.number}
          </span>

          {/* Icon */}
          <div className="relative mb-4 sm:mb-5 lg:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark shadow-lg shadow-cefin-red/20">
            <pillar.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
            {pillar.title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  );
}