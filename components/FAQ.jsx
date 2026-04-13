'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ({ items }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-neutral-200"
        >
          <AccordionTrigger className="py-5 sm:py-6 text-left text-base sm:text-lg font-medium text-neutral-900 transition-colors hover:text-cefin-red">
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="pb-5 sm:pb-6 pr-8 sm:pr-10 text-sm sm:text-base leading-relaxed text-neutral-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}