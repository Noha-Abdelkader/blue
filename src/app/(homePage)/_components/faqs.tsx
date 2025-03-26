import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqList: string[] = [
  " How do I join the game?",
  " When will the next level be available?",
  " How is the leaderboard calculated?",
  " Can I replay a level?",
];

export default function FAQS() {
  return (
    <section>
      <div className="sec_wrap padd">
        <header>
          <h2>FAQS</h2>
          <p>Everything You Need to Know to Dominate the Challenge!</p>
        </header>

        <Accordion type="single" collapsible className="max-w-xl m-auto">
          {faqList.map((el: string, index: number) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{el}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
