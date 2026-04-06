import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardContent className="p-8">
        <Quote className="w-10 h-10 text-cefin-red/20 mb-4" />
        <p className="text-neutral-700 text-lg leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
            <span className="text-neutral-600 font-semibold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <p className="font-semibold text-neutral-900">{testimonial.name}</p>
            <p className="text-sm text-neutral-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
