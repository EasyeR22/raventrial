import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ClickSpark from '@/components/ui/click-spark';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: "How accurate are the AI-generated summaries?",
      answer: "Our AI achieves 95%+ accuracy in capturing key points, decisions, and action items. The system is continuously learning and improving based on user feedback and real-world usage patterns."
    },
    {
      question: "Which video conferencing platforms do you support?",
      answer: "We currently support Zoom, Google Meet, Microsoft Teams, and Slack calls. We're actively working on adding support for more platforms based on user demand."
    },
    {
      question: "Is my meeting data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your meeting recordings are processed securely and automatically deleted after summary generation unless you choose to save them."
    },
    {
      question: "Can I customize the summary format?",
      answer: "Yes! You can choose from multiple summary templates, create custom formats, and even train the AI to focus on specific types of information that matter most to your team or industry."
    },
    {
      question: "What happens if I exceed my plan's recording limits?",
      answer: "You'll receive notifications as you approach your limit. If exceeded, you can either upgrade your plan or purchase additional hours. We never interrupt ongoing meetings - overages are handled gracefully."
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {t('faq.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger 
                  className="text-left text-lg font-semibold text-black hover:text-gray-700 py-6"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-gray-600 leading-relaxed pb-6"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p 
            className="text-gray-600 mb-4"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            Still have questions?
          </p>
          <ClickSpark sparkColor="#000000" sparkCount={6} sparkSize={3}>
            <motion.button
              className="text-black font-semibold hover:text-gray-700 underline underline-offset-4"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              Contact our support team
            </motion.button>
          </ClickSpark>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 