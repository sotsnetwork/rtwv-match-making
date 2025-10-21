import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Heart, Tv } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Apply",
    description: "Sign up and submit your verified profile.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    description: "We confirm ID and selfie to keep the community authentic.",
  },
  {
    icon: Heart,
    title: "Match",
    description: "Select up to 3 potential matches and connect if both approve.",
  },
  {
    icon: Tv,
    title: "Show & Connect",
    description: "Join the live show or continue building genuine connections.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How RTWV Match Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to find your faith-based connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur border border-glass-border rounded-2xl p-8 h-full shadow-glow hover:shadow-hover-glow transition-all">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold shadow-glow">
                  {index + 1}
                </div>

                <div className="mb-6 text-accent group-hover:scale-110 transition-transform">
                  <step.icon size={48} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
