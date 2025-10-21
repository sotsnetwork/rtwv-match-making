import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Christian couple connecting through faith and love"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Connecting Christian Singles Through{" "}
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              Purpose & Love
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            RTWV Match brings verified, faith-led matchmaking to your pocket — apply for the show, get matched, and begin meaningful connections.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {["Verified Profiles", "Faith-Based", "Safe & Private"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-glass-border">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/download">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform shadow-glow text-lg px-8">
                Get Matched Now
              </Button>
            </Link>
            <Link to="/watch">
              <Button size="lg" variant="outline" className="border-accent/50 text-foreground hover:bg-accent/10 text-lg px-8 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Latest Episode
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
