import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-elevated hover:shadow-elevated-lg transition-all duration-500 border border-neutral-100">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 rounded-xl bg-cefin-red flex items-center justify-center shadow-lg shadow-cefin-red/30">
          <Quote className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-6 pt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      {/* Quote Text */}
      <p className="text-neutral-700 text-lg leading-relaxed mb-8">
        "{testimonial.quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
          <span className="text-xl font-bold text-neutral-600">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-bold text-neutral-900 text-lg">{testimonial.name}</p>
          <p className="text-neutral-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
