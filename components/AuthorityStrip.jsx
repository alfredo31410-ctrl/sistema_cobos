import { Award, Users, Target, Zap } from 'lucide-react';

const authorityItems = [
  { icon: Award, text: 'Empresario del conocimiento' },
  { icon: Target, text: 'Creador del Sistema Cobos' },
  { icon: Zap, text: 'Estrategia + Estructura + Ejecución' },
  { icon: Users, text: 'Negocios basados en conocimiento' },
];

export default function AuthorityStrip() {
  return (
    <section className="bg-cefin-dark py-6 lg:py-8 border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {authorityItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center lg:justify-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cefin-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cefin-red/20 transition-colors">
                <item.icon className="w-5 h-5 text-cefin-red" />
              </div>
              <span className="text-white/90 text-sm lg:text-base font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
