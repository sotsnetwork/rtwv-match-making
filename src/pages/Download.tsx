import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Verified Christian singles only",
  "Faith-based matching algorithm",
  "Safe & monitored chat environment",
  "Apply to appear on the live show",
  "Connect through shared values",
  "Purpose-driven relationships",
];

const Download = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Get Matched{" "}
                  <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                    Anytime, Anywhere
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Download RTWV Match to begin your purpose-driven connection journey. Available on iOS and Android.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  Download Now
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-card hover:bg-card/80 text-foreground border border-glass-border"
                    onClick={() => window.open("https://apps.apple.com", "_blank")}
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    App Store
                  </Button>
                  <Button
                    size="lg"
                    className="bg-card hover:bg-card/80 text-foreground border border-glass-border"
                    onClick={() => window.open("https://play.google.com", "_blank")}
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] p-4 shadow-glow">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
                      <Smartphone size={80} className="text-accent" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                        <p className="text-muted-foreground">RTWV Match Mobile App</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-accent text-background px-4 py-2 rounded-full font-semibold shadow-glow"
                >
                  2,500+ Members
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-6 -right-6 bg-highlight text-background px-4 py-2 rounded-full font-semibold shadow-glow"
                >
                  Faith-Based ✝
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
