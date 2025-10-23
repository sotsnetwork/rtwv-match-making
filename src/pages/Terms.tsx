import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
                Terms of Use
              </h1>
              <p className="text-xl text-muted-foreground">
                Terms and Conditions for The RTWV Match
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur border border-glass-border rounded-2xl p-8 shadow-glow">
              <div className="prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-bold mb-6 text-primary">1. Acceptance of Terms</h2>
                <p className="mb-6">
                  By signing up, applying, or participating in The RTWV Match (the 'Program'), you agree to these
                  Terms and Conditions, our Privacy Policy, and Community Guidelines. If you disagree with any part
                  of these terms, you may not participate.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">2. Eligibility</h2>
                <p className="mb-4">
                  Participants must be at least 21 years old and legally single (unmarried, divorced, or widowed). All
                  participants must identify as Christians who share the values of faith, integrity, and purity.
                  Participation is voluntary and subject to approval after screening. RTWV Academy Ltd reserves the
                  right to accept, decline, or remove any participant at its discretion.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">3. Purpose of the Program</h2>
                <p className="mb-6">
                  The RTWV Match is a faith-based matchmaking and social experience designed to connect
                  Christian singles intentionally through conversation, prayer, and shared values. It is not a guarantee
                  of marriage, partnership, or romantic success.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">4. Participant Conduct</h2>
                <p className="mb-4">By joining, you agree to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Be respectful, honest, and kind to all participants and team members.</li>
                  <li>Abstain from vulgar, explicit, or suggestive behavior during or after the show.</li>
                  <li>Avoid harassment, manipulation, or emotional abuse of any form.</li>
                  <li>Refrain from sharing private conversations, screenshots, or personal data of others.</li>
                  <li>Avoid private contact (DMs, calls, or meetings) with other contestants unless authorized by RTWV.</li>
                  <li>Comply with all directions from RTWV moderators, coordinators, or producers.</li>
                </ul>
                <p className="mb-6">
                  <strong>Violation of these rules may result in suspension, disqualification, or permanent ban.</strong>
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">5. Safety and Verification</h2>
                <p className="mb-6">
                  All participants agree to complete identity verification (photo, ID, or video call). RTWV Academy Ltd
                  may request additional screening before or during the show. Participants must sign a consent form
                  before being featured in any Live or recorded session.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">6. Faith and Conduct Statement</h2>
                <p className="mb-6">
                  RTWV Match operates on Christian principles. Participants are expected to uphold biblical values of
                  purity, patience, forgiveness, and respect. They must engage in prayerful discernment before
                  committing to any relationship. RTWV reserves the right to remove any participant whose actions
                  contradict these principles.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">7. Confidentiality and Media Release</h2>
                <p className="mb-6">
                  By participating, you consent to being recorded, photographed, or featured on social media,
                  website, and future publications related to RTWV Match. You grant RTWV Academy Ltd full rights
                  to use your likeness, image, and testimonials for promotional and educational purposes without
                  additional compensation. Personal contact details and private communications will never be shared
                  publicly without your consent.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">8. Limitation of Liability</h2>
                <p className="mb-6">
                  RTWV Academy Ltd shall not be liable for any direct, indirect, incidental, special, or consequential
                  damages resulting from participation in the program, including but not limited to emotional distress,
                  relationship outcomes, or any other consequences of matchmaking activities.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">9. Modifications</h2>
                <p className="mb-6">
                  RTWV Academy Ltd reserves the right to modify these terms at any time. Participants will be notified
                  of significant changes, and continued participation constitutes acceptance of the updated terms.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-primary">10. Contact Information</h2>
                <p className="mb-6">
                  For questions regarding these terms, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> relationshiptalkswithvikkie@gmail.com</p>
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

export default Terms;
