import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                How we protect and use your information
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <div className="prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-bold mb-6 text-primary">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  participate in our matchmaking program, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Personal identification information (name, age, location)</li>
                  <li>Contact information (email address, phone number)</li>
                  <li>Profile information and photos</li>
                  <li>Verification documents (ID, selfie for verification)</li>
                  <li>Communication preferences and feedback</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-primary">How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Provide and improve our matchmaking services</li>
                  <li>Verify participant identity and eligibility</li>
                  <li>Facilitate connections between compatible participants</li>
                  <li>Communicate with you about the program</li>
                  <li>Ensure safety and compliance with our terms</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-primary">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>With your explicit consent for matchmaking purposes</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and the safety of participants</li>
                  <li>With service providers who assist in our operations</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-primary">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">Your Rights</h2>
                <p className="mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt out of communications</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-primary">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@rtwvacademy.com</p>
                  <p><strong>Address:</strong> RTWV Academy LTD</p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Last updated: January 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
