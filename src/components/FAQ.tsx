import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does verification work?",
    answer: "Users upload a valid ID and selfie. Our verification partner confirms authenticity before approval to ensure a safe and trusted community.",
  },
  {
    question: "Is RTWV Match free?",
    answer: "Basic membership is free, while premium experiences like Fast-Track and Coaching require a subscription.",
  },
  {
    question: "Can I appear on the live show?",
    answer: "Yes! Verified users can apply directly from the app for a chance to appear on the RTWV Match Live Show.",
  },
  {
    question: "What makes RTWV Match faith-based?",
    answer: "Our platform operates with biblical values and respect for all participants. Every feature is designed to honor Christian principles of love, respect, and purpose.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about RTWV Match
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 pb-4"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
