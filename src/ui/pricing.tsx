import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '@/components/ui/pricing-card';
import { useLanguage } from '@/shared/contexts/LanguageContext';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: t('plan.lite.name'),
      description: t('plan.lite.description'),
      monthlyPrice: 9,
      annualPrice: 8,
      features: [
        `${t('До 10')} ${t('feature.recording_hours')}`,
        `5ГБ ${t('feature.storage')}`,
        `${t('До 3')} ${t('feature.team_members')}`,
        `${t('Базовая')} ${t('feature.analytics')}`,
        t('feature.export')
      ],
      popular: false
    },
    {
      name: t('plan.pro.name'),
      description: t('plan.pro.description'),
      monthlyPrice: 35,
      annualPrice: 29,
      features: [
        `${t('До 50')} ${t('feature.recording_hours')}`,
        `50ГБ ${t('feature.storage')}`,
        `${t('До 15')} ${t('feature.team_members')}`,
        `${t('Расширенная')} ${t('feature.analytics')}`,
        t('feature.integrations'),
        t('feature.support')
      ],
      popular: true
    },
    {
      name: t('plan.enterprise.name'),
      description: t('plan.enterprise.description'),
      monthlyPrice: 55,
      annualPrice: 49,
      features: [
        t('feature.unlimited_recording'),
        `500ГБ ${t('feature.storage')}`,
        t('feature.unlimited_members'),
        t('feature.advanced_analytics'),
        t('feature.all_integrations'),
        t('feature.personal_manager'),
        t('feature.sla')
      ],
      popular: false
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-8"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-black mb-6"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {t('pricing.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t('pricing.subtitle')}
            </motion.p>

            {/* Enhanced Pricing Toggle */}
            <motion.div 
              className="flex items-center justify-center space-x-6 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span 
                className={`text-lg font-medium transition-all duration-300 ${!isAnnual ? 'text-black scale-105' : 'text-gray-500'}`}
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                {t('pricing.monthly')}
              </span>
              <motion.button
                className="relative w-20 h-10 bg-gray-200 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-md"
                onClick={() => setIsAnnual(!isAnnual)}
                animate={{ backgroundColor: isAnnual ? '#374151' : '#e5e7eb' }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-8 h-8 bg-white rounded-full shadow-lg"
                  animate={{ x: isAnnual ? 40 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </motion.button>
              <span 
                className={`text-lg font-medium transition-all duration-300 ${isAnnual ? 'text-black scale-105' : 'text-gray-500'}`}
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                {t('pricing.annual')}
                <motion.span 
                  className="ml-2 text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.15 }}
                >
                  {t('pricing.discount')}
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isAnnual={isAnnual}
            />
          ))}
        </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p 
              className="text-gray-500 text-lg"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {t('pricing.note')}
            </motion.p>
          </motion.div>

        {/* Mobile Tip */}
        <motion.div 
          className="lg:hidden text-center mt-8 p-4 bg-white bg-opacity-80 border border-gray-200 rounded-xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gilroy, sans-serif' }}>
            {t('pricing.mobile_tip')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;