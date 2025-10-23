import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Watch", href: "/watch" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform">
              <Logo size={32} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              The RTWV Match
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/90 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="http://realitymatchmakingshow.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform shadow-hover-glow">
                Get Matched Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/90 hover:text-accent transition-colors font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="http://realitymatchmakingshow.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    Get Matched Now
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
