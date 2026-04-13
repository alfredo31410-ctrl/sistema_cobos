import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Quote Icon */}
      <div className="absolute -top-3 left-5 sm:-top-4 sm:left-6 lg:left-8">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-cefin-red shadow-lg shadow-cefin-red/30">
          <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
      </div>

      {/* Stars */}
      <div className="mb-5 flex gap-1 pt-4 sm:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-700 sm:mb-8">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 sm:gap-4 border-t border-neutral-100 pt-5 sm:pt-6">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300">
          <span className="text-lg sm:text-xl font-bold text-neutral-600">
            {testimonial.name.charAt(0)}
          </span>
        </div>

        <div className="min-w-0">
          <p className="truncate text-base sm:text-lg font-bold text-neutral-900">
            {testimonial.name}
          </p>
          <p className="text-sm sm:text-base text-neutral-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}