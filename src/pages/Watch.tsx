import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const episodes = [
  {
    title: "Episode 1 — Faith Meets Love",
    description: "Meet the first couples of the season.",
  },
  {
    title: "Episode 2 — The Power of Purpose",
    description: "Deeper conversations and prayer-led connections.",
  },
  {
    title: "Episode 3 — Building on Faith",
    description: "Watch as relationships deepen through shared values.",
  },
];

const Watch = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Watch The RTWV Match Live
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience real faith-based connections as they unfold on our live show
            </p>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-glass-border shadow-glow bg-card/30 backdrop-blur">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/50 to-primary/30">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto shadow-hover-glow">
                    <Play size={48} className="text-background ml-2" fill="currentColor" />
                  </div>
                  <p className="text-2xl font-semibold">Featured Episode</p>
                  <p className="text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Episode Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl overflow-hidden shadow-glow hover:shadow-hover-glow transition-all">
                  <div className="aspect-video bg-gradient-to-br from-secondary/50 to-primary/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-background ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                    <p className="text-muted-foreground">{episode.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Watch;
