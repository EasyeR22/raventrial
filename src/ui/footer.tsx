import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const links = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Documentation', href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Copyright */}
          <div>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              © 2024 Raven AI. {t('footer.rights')}
            </p>
          </div>

          {/* Right side - Links and Social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0 md:space-x-8">
            {/* Links */}
            <div className="flex flex-wrap gap-6">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", duration: 0.2 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 