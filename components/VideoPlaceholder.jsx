import { Play } from 'lucide-react';

export default function VideoPlaceholder({ className = '' }) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl ${className}`}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-cefin-red/10 to-transparent" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <button
          type="button"
          aria-label="Reproducir video"
          className="group relative flex items-center justify-center"
        >
          {/* Pulse Ring */}
          <span
            className="absolute inset-0 rounded-full bg-cefin-red/30 animate-ping"
            style={{ animationDuration: '2s' }}
          />

          {/* Button */}
          <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-cefin-red shadow-2xl shadow-cefin-red/40 transition-transform duration-300 group-hover:scale-110">
            <Play
              className="ml-0.5 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white"
              fill="white"
            />
          </span>
        </button>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
        <p className="text-xs sm:text-sm font-medium text-white/60">
          Ver presentación
        </p>
      </div>
    </div>
  );
}