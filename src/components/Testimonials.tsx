import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";

const testimonials = [
  {
    name: "Amina & Joseph",
    photo: couple1,
    quote: "We met on RTWV Match — love found us through faith.",
  },
  {
    name: "Rachel & David",
    photo: couple2,
    quote: "A faith-first process that brought us together in purpose.",
  },
  {
    name: "Sarah & Emmanuel",
    photo: couple3,
    quote: "Purpose met faith — and love followed.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Couples Matched Through RTWV Match
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories of faith-led connections
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl overflow-hidden shadow-glow hover:shadow-hover-glow transition-all">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <Quote className="text-accent" size={32} />
                  <p className="text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-accent text-lg">
                    — {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
