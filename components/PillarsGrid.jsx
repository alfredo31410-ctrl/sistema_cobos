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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {pillars.map((pillar, index) => (
        <div 
          key={index} 
          className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-elevated hover:shadow-elevated-lg transition-all duration-500 hover:-translate-y-1 border border-neutral-100"
        >
          {/* Number Badge */}
          <span className="absolute top-6 right-6 text-6xl font-bold text-neutral-100 group-hover:text-cefin-red/10 transition-colors">
            {pillar.number}
          </span>
          
          {/* Icon */}
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cefin-red to-cefin-red-dark flex items-center justify-center mb-6 shadow-lg shadow-cefin-red/20">
            <pillar.icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Content */}
          <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
            {pillar.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  );
}
