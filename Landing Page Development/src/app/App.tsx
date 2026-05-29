import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ClientLogos } from "./components/ClientLogos";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { FloatingWAButton } from "./components/FloatingWAButton";

/* ─── Analytics placeholders ───────────────────────────────────────────────
   Replace with real GTM/GA4 IDs before deploying to production.
   GTM: window.dataLayer push + GTM snippet
   GA4: gtag('config', 'G-XXXXXXXXXX')
─────────────────────────────────────────────────────────────────────────── */
function Analytics() {
  useEffect(() => {
    /* TODO: Google Tag Manager */
    // (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXXX');

    /* TODO: Google Analytics 4 */
    // window.gtag('js', new Date());
    // window.gtag('config', 'G-XXXXXXXXXX');
  }, []);
  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Analytics />
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Social Proof / Client Logos */}
        <ClientLogos />

        {/* 3. Problem Identification */}
        <ProblemSection />

        {/* 4. Solution, USP & Benefits */}
        <section id="solution">
          <SolutionSection />
        </section>

        {/* 5. Workflow */}
        <section id="workflow">
          <WorkflowSection />
        </section>

        {/* 6. Testimonials (Swiper.js) */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* 7. FAQ (native details/summary) */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* 8. Final CTA with Urgency */}
        <FinalCTASection />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWAButton />
    </div>
  );
}
