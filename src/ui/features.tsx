import React from 'react';
import { motion } from 'framer-motion';
import { Brain, PenLine, Share2, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: PenLine,
      title: t('features.formatting.title'),
      description: t('features.formatting.description')
    },
    {
      icon: Share2,
      title: t('features.sharing.title'),
      description: t('features.sharing.description')
    },
    {
      icon: Search,
      title: t('features.search.title'),
      description: t('features.search.description')
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('features.title')}
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('features.subtitle')}
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle 
                      className="text-xl font-bold text-black"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription 
                      className="text-gray-600 text-center leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features; 