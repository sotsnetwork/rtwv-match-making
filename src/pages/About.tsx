import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Users, Target, Shield, Globe, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>
              <h2 className="text-3xl font-semibold mb-4">The RTWV Match</h2>
              <p className="text-2xl text-muted-foreground italic">
                Where Faith Meets Connection.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <p className="text-lg leading-relaxed mb-6">
                The RTWV Match is a faith-centered matchmaking platform and reality experience created by 
                <strong> Relationship Talks With Vikkie (RTWV Academy Ltd)</strong> — a global movement 
                dedicated to building godly, emotionally healthy relationships that last. It was founded on 
                the <strong>30th of August, 2025</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that <strong>love is not luck — it's alignment, purpose, and divine timing</strong>.
                Our mission is to connect Christian singles intentionally, helping them meet people who 
                share their faith, values, and vision for kingdom marriage.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-6 shadow-glow"
              >
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">✨ Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a safe, Spirit-led space where Christian singles can meet, connect, and build 
                  relationships rooted in faith, purpose, and godly character — while breaking cultural 
                  stigmas around intentional, prayerful matchmaking.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-6 shadow-glow"
              >
                <Star className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">💫 Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading Christian matchmaking and relationship movement — inspiring 
                  thousands of faith-based love stories, covenant marriages, and healed hearts across 
                  the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-6 shadow-glow"
              >
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">💎 Our Core Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Faith:</strong> Divine connection orchestrated by God's timing</li>
                  <li><strong>Integrity:</strong> Truth, transparency, and respect</li>
                  <li><strong>Purpose:</strong> Alignment with God's plan</li>
                  <li><strong>Community:</strong> Growth with accountability and grace</li>
                  <li><strong>Healing:</strong> Wholeness before union</li>
                </ul>
              </motion.div>
            </div>

            {/* What Makes Us Different */}
            <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <h3 className="text-3xl font-bold mb-6 text-center">🌍 What Makes Us Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>Spirit-led screening and matching process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>Counseling and coaching before connection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>Verified participants who value purity and purpose</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>Live matchmaking shows hosted by Coach Vikkie on Instagram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>Safe follow-up phases through community accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Founder */}
            <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <h3 className="text-3xl font-bold mb-6 text-center">🕊 Our Founder</h3>
              <div className="text-center">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Boluwatife Victoria Abiodun (Coach Vikkie)</strong> is a Christian Relationship, 
                  Marriage and Family Therapist, Counselor and founder of RTWV Academy Ltd, a faith-based 
                  relationship and marriage coaching platform that has reached thousands globally through 
                  counseling, books, workshops, and media.
                </p>
                <p className="text-lg leading-relaxed">
                  Her vision for The RTWV Match was born out of a desire to help singles find genuine, 
                  God-centered love, not by chance, but through prayer, wisdom, and purpose.
                </p>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <h3 className="text-3xl font-bold mb-6 text-center">💍 Our Promise</h3>
              <p className="text-lg text-center mb-6">
                Every connection made through The RTWV Match will always uphold:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Godly Standards</h4>
                </div>
                <div>
                  <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Emotional Safety</h4>
                </div>
                <div>
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Honesty & Respect</h4>
                </div>
              </div>
              <p className="text-xl text-center mt-8 font-semibold">
                We don't just help people find love — we help them prepare for it.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
