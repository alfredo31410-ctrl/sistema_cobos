import { Lightbulb, Package, TrendingUp, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Claridad',
    description: 'Qué sabes y a quién ayudas',
  },
  {
    icon: Package,
    title: 'Oferta',
    description: 'Cómo convertirlo en algo vendible',
  },
  {
    icon: TrendingUp,
    title: 'Conversión',
    description: 'Cómo atraer y vender',
  },
  {
    icon: Rocket,
    title: 'Escalamiento',
    description: 'Cómo crecer y sistematizar',
  },
];

export default function PillarsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((pillar, index) => (
        <Card 
          key={index} 
          className="border-0 shadow-none bg-neutral-50 hover:bg-neutral-100 transition-colors"
        >
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
              <pillar.icon className="w-8 h-8 text-cefin-red" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {pillar.title}
            </h3>
            <p className="text-neutral-600">
              {pillar.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
