import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Integrations: React.FC = () => {
  const { t } = useLanguage();
  
  const integrations = [
    {
      name: 'Slack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
      alt: 'Slack logo'
    },
    {
      name: 'Microsoft Teams',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
      alt: 'Microsoft Teams logo'
    },
    {
      name: 'Zoom',
      logo: 'src/assets/zoom.png',
      alt: 'Zoom logo'
    },
    {
      name: 'Google Meet',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/512px-Google_Meet_icon_%282020%29.svg.png',
      alt: 'Google Meet logo'
    },
    {
      name: 'HubSpot',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png',
      alt: 'HubSpot logo'
    },
    {
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png',
      alt: 'Salesforce logo'
    },
    {
      name: 'Notion',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      alt: 'Notion logo'
    },
    {
      name: 'Jira',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png',
      alt: 'Jira Logo'
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
            {t('integrations.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('integrations.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {integrations.map((integration, index) => (
                         <motion.div
               key={index}
               className="flex items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105"
               whileHover={{ 
                 scale: 1.05,
                 transition: { duration: 0.2 }
               }}
               initial={{ opacity: 0.5, filter: 'grayscale(100%)' }}
               whileInView={{ 
                 opacity: 1, 
                 filter: 'grayscale(0%)',
                 transition: { 
                   duration: 0.6, 
                   delay: index * 0.1 
                 }
               }}
               viewport={{ once: true }}
             >
              <img
                src={integration.logo}
                alt={integration.alt}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p 
            className="text-gray-500"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('integrations.coming_soon')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations; 