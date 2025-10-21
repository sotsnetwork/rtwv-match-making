import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast.error("Please enter your email");
      return;
    }
    
    if (!formData.consent) {
      toast.error("Please agree to receive communications");
      return;
    }

    // TODO: Connect to Lovable Cloud / Supabase
    console.log("Waitlist submission:", formData);
    
    toast.success("Thank you! You've been added to the waitlist.");
    setFormData({ name: "", email: "", interest: "", consent: false });
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/40 backdrop-blur border border-glass-border rounded-3xl p-8 md:p-12 shadow-glow"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-muted-foreground text-lg">
              Be the first to know when new episodes and matchmaking sessions open.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name (optional)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-input/50 border-border text-lg py-6"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-input/50 border-border text-lg py-6"
              />
            </div>

            <div>
              <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                <SelectTrigger className="bg-input/50 border-border text-lg py-6">
                  <SelectValue placeholder="What interests you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="get-matched">Get Matched</SelectItem>
                  <SelectItem value="apply-show">Apply for Live Show</SelectItem>
                  <SelectItem value="watch-episode">Watch Episode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                I agree to receive communications from RTWV Match. Privacy Policy applies.
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform shadow-hover-glow text-lg py-6"
            >
              Join the Waitlist
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
