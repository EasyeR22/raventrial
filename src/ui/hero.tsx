import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@/components/ui/button';
import ClickSpark from '@/components/ui/click-spark';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const BlurText = ({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) => {
    const words = text.split(' ');
    
    return (
      <div className={className} style={style}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{
        background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 1) 20%, hsla(0, 0%, 88%, 1) 100%)'
      }}
    >
      <motion.div
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
          <BlurText
            text={t('hero.title')}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg focus:ring-1 ring-gray-300"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  {t('hero.cta')}
                </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              <ClickSpark sparkColor="#000000" sparkCount={10} sparkSize={5}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border border-gray-300 hover:bg-gray-50 shadow-lg focus:ring-1 ring-gray-300"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  {t('hero.cta_demo')}
                </Button>
              </ClickSpark>
            </motion.div>
          </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero; 