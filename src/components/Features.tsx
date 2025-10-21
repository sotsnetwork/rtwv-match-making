import { motion } from "framer-motion";
import { ShieldCheck, Cross, MessageCircle, Tv2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description: "Every member completes identity and selfie verification for trust and safety.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Cross,
    title: "Faith-Based Principles",
    description: "Rooted in Christian values that guide conversations and connections.",
    gradient: "from-accent to-highlight",
  },
  {
    icon: MessageCircle,
    title: "Safe & Time-Limited Chat",
    description: "Engage meaningfully within a monitored, respectful chat space.",
    gradient: "from-highlight to-primary",
  },
  {
    icon: Tv2,
    title: "Live Show Experience",
    description: "Apply to be part of RTWV Match Live — where faith and love meet publicly.",
    gradient: "from-secondary to-accent",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            App Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a meaningful, faith-based connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 h-full shadow-glow hover:shadow-hover-glow transition-all">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={32} className="text-background" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
