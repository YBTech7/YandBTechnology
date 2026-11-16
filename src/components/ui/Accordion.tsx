import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(items[0] ? [items[0].id] : []);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className="divide-y divide-[#4A372A]/12 dark:divide-[#D9BE9D]/15 border-y border-[#4A372A]/12 dark:border-[#D9BE9D]/15">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base sm:text-lg font-semibold text-[#4A372A] dark:text-[#FFF9F4] hover:text-[#916E55] dark:hover:text-[#D9BE9D] transition-colors min-h-[44px]"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-[15px] leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
