import { Play } from 'lucide-react';

export default function VideoPlaceholder({ className = '' }) {
  return (
    <div className={`relative aspect-video bg-neutral-900 rounded-xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-20 h-20 rounded-full bg-cefin-red/90 hover:bg-cefin-red flex items-center justify-center transition-colors">
          <Play className="w-8 h-8 text-white ml-1" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
