import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch Our Latest Episode
          </h2>
          <p className="text-xl text-muted-foreground">
            See real faith-based connections unfold on RTWV Match Live
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video rounded-3xl overflow-hidden border-2 border-glass-border shadow-glow bg-card/30 backdrop-blur">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/50 to-primary/30">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto shadow-hover-glow">
                  <Play size={36} className="text-background ml-1" fill="currentColor" />
                </div>
                <p className="text-lg text-muted-foreground">Video Coming Soon</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link to="/watch">
              <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10">
                Watch All Episodes
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
