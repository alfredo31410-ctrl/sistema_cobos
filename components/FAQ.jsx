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
          <AccordionTrigger className="text-left text-lg font-medium text-neutral-900 hover:text-cefin-red py-6">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 pb-6">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
