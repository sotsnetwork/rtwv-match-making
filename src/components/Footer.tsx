import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-background/95 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                The RTWV Match
              </span>
            </div>
            <p className="text-muted-foreground">
              Connecting Christian Singles Through Purpose & Love
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/watch" className="block text-muted-foreground hover:text-accent transition-colors">
                Watch
              </Link>
              <Link to="/download" className="block text-muted-foreground hover:text-accent transition-colors">
                Download App
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rtwvmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/50 border border-glass-border rounded-full flex items-center justify-center hover:bg-accent hover:text-background transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@rtwvmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/50 border border-glass-border rounded-full flex items-center justify-center hover:bg-accent hover:text-background transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 RTWV Academy LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
