import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TiltCard from './tilt-card';
import ClickSpark from './click-spark';
import { useLanguage } from '@/shared/contexts/LanguageContext';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  features: string[];
  popular?: boolean;
  isEnterprise?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index, isAnnual }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
    >
      <TiltCard
        tiltIntensity={4}
        scaleOnHover={1.01}
        glareEffect={true}
        className="h-full"
      >
        <Card 
          className={`h-full relative bg-white border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
            plan.popular 
              ? 'border-gray-900 shadow-2xl' 
              : 'border-gray-200 shadow-lg hover:shadow-xl'
          }`}
          style={{
            background: plan.popular 
              ? 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%)' 
              : 'rgba(255, 255, 255, 0.98)'
          }}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-3 z-10">
              <span 
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                {t('plan.popular')}
              </span>
            </div>
          )}
          
          <CardHeader className={`text-center relative z-10 ${plan.popular ? 'pt-16 pb-8' : 'pt-8 pb-8'}`}>
            <CardTitle 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {plan.name}
            </CardTitle>
            <CardDescription 
              className="text-gray-600 text-base"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {plan.description}
            </CardDescription>
            
            <div className="mt-8">
              <div className="flex items-baseline justify-center">
                <motion.span 
                   className="text-5xl font-bold text-gray-900"
                   style={{ fontFamily: 'Gilroy, sans-serif' }}
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring", duration: 0.2 }}
                 >
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </motion.span>
                {(typeof (isAnnual ? plan.annualPrice : plan.monthlyPrice) === 'number' || 
                 (typeof (isAnnual ? plan.annualPrice : plan.monthlyPrice) === 'string' && 
                  typeof (isAnnual ? plan.annualPrice : plan.monthlyPrice) === 'string' &&
                  (isAnnual ? plan.annualPrice : plan.monthlyPrice).toString().startsWith('$'))) ? (
                  <span 
                    className="text-xl text-gray-500 ml-1"
                    style={{ fontFamily: 'Gilroy, sans-serif' }}
                  >
                    / мес
                  </span>
                ) : null}
              </div>
              {isAnnual && plan.name !== 'Enterprise' && (
                <motion.p 
                  className="text-sm text-gray-500 mt-2"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {plan.name === 'Lite' ? (
                    <span className="text-green-600 font-medium">{t('plan.free')}</span>
                  ) : (
                    <span className="text-blue-600 font-medium">{t('plan.save')}</span>
                  )}
                </motion.p>
              )}
              {!isAnnual && (
                <p 
                  className="text-sm text-gray-500 mt-2"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  {t('plan.per_month')}
                </p>
              )}
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8 relative z-10">
            <div className="mb-8">
                              <motion.div
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", duration: 0.2 }}
              >
                <ClickSpark 
                  sparkColor={plan.popular ? "#ffffff" : "#000000"} 
                  sparkCount={plan.popular ? 12 : 8} 
                  sparkSize={plan.popular ? 6 : 4}
                >
                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform-gpu ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 shadow-lg hover:shadow-2xl' 
                        : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900'
                    }`}
                    style={{ 
                      fontFamily: 'Gilroy, sans-serif',
                      boxShadow: plan.popular ? '0 10px 25px rgba(0, 0, 0, 0.15)' : undefined
                    }}
                  >
                    {t('plan.get_started')}
                  </Button>
                </ClickSpark>
              </motion.div>
            </div>

            <div className="space-y-1 mb-6">
              <p 
                className="text-sm font-semibold text-gray-900 uppercase tracking-wide"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                {t('plan.features')}
              </p>
            </div>

            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  </div>
                  <span 
                    className="text-gray-700 text-sm leading-relaxed"
                    style={{ fontFamily: 'Gilroy, sans-serif' }}
                  >
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
};

export default PricingCard; 