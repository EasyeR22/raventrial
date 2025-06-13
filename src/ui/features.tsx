import React from 'react';
import { motion } from 'framer-motion';
import { Brain, PenLine, Share2, Search, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      iconBg: 'bg-gradient-to-r from-gray-800 to-gray-900'
    },
    {
      icon: PenLine,
      title: t('features.formatting.title'),
      description: t('features.formatting.description'),
      iconBg: 'bg-gradient-to-r from-gray-700 to-gray-800'
    },
    {
      icon: Share2,
      title: t('features.sharing.title'),
      description: t('features.sharing.description'),
      iconBg: 'bg-gradient-to-r from-gray-600 to-gray-700'
    },
    {
      icon: Search,
      title: t('features.search.title'),
      description: t('features.search.description'),
      iconBg: 'bg-gradient-to-r from-gray-800 to-gray-900'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-8"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-gray-600" />
            <span 
              className="text-gray-700 font-semibold text-sm"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              Powered by AI
            </span>
          </motion.div>
          
          <h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-8"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {t('features.title')}
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t('features.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full relative overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white backdrop-blur-sm">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 ${feature.iconBg} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                    <CardTitle 
                      className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'Gilroy, sans-serif' }}
                    >
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-6 pb-8">
                    <CardDescription 
                      className="text-gray-700 text-center leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'Gilroy, sans-serif' }}
                    >
                      {feature.description}
                    </CardDescription>
                    
                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
            <Zap className="w-6 h-6 text-gray-600" />
            <span 
              className="text-gray-700 font-semibold text-lg"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {t('features.cta')}
            </span>
            <motion.button
              className="ml-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('features.cta_button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 