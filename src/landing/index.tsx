import { useEffect } from "react";
import Navbar from "@/landing/components/Navbar";
import HeroSection from "@/landing/components/HeroSection";
import FeaturesSection from "@/landing/components/FeaturesSection";
import TestimonialsSection from "@/landing/components/TestimonialsSection";
import FAQSection from "@/landing/components/FAQSection";
import CTASection from "@/landing/components/CTASection";
import Footer from "@/landing/components/Footer";
import { motion } from "framer-motion";

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen overflow-x-hidden bg-dark-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};
