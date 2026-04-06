import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PlaceholderSection({ title, description }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="border-2 border-dashed border-neutral-300 bg-neutral-50">
          <CardContent className="py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-neutral-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-neutral-500 max-w-md mx-auto">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
