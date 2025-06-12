import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../ui/hero';
import Features from '../../ui/features';
import Integrations from '../../ui/integrations';
import Reviews from '../../ui/reviews';
import Pricing from '../../ui/pricing';
import FAQ from '../../ui/faq';
import Footer from '../../ui/footer';
import MobileCTA from '../../ui/mobile-cta';

const Landing: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <Hero />
      <Features />
      <Integrations />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
      <MobileCTA />
    </motion.main>
  );
};

export default Landing; 