import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's it about?",
    answer: "A faith-based matchmaking program connecting singles with shared godly values for Christ-centered relationships leading to marriage.",
  },
  {
    question: "Who can join?",
    answer: "Christian singles (21+) from any country, not just Nigeria.",
  },
  {
    question: "How it works:",
    answer: "Runs in seasons — 5 episodes per season. First come, first served!",
  },
  {
    question: "Registration closes:",
    answer: "🗓 November (First Season airs in December) 💌 Don't miss this chance to connect with purpose!",
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
