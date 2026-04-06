import { Play } from 'lucide-react';

export default function VideoPlaceholder({ className = '' }) {
  return (
    <div className={`relative aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-cefin-red/10 to-transparent" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="group relative">
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-cefin-red/30 animate-ping" style={{ animationDuration: '2s' }} />
          
          {/* Button */}
          <span className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-cefin-red flex items-center justify-center shadow-2xl shadow-cefin-red/40 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" fill="white" />
          </span>
        </button>
      </div>
      
      {/* Bottom Text */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white/60 text-sm font-medium">
          Ver presentación
        </p>
      </div>
    </div>
  );
}
