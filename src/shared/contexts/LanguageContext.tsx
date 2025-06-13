import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Header
    'nav.pricing': 'Стоимость',
    'nav.reviews': 'Отзывы',
    'nav.partners': 'Партнерам',
    'nav.faq': 'FAQ',
    'nav.create': 'Создать',
    'language.current': '🇷🇺 Русская версия',
    'language.switch': '🇬🇧 English version',
    
    // Hero
    'hero.title': 'Больше никогда не печатайте заметки встреч',
    'hero.subtitle': 'ИИ-ноттейкер для звонков',
    'hero.platforms': 'в',
    'hero.description': 'Получите готовую к отправке сводку за секунды с помощью ИИ-транскрипции и умного форматирования.',
    'hero.tagline': 'Без ручных записей. Без потерь.',
    'hero.try': 'Попробуйте за',
    'hero.minutes': '5 минут',
    'hero.cta': 'Начать',
    'hero.cta_demo': 'Смотреть демо',
    
    // Features
    'features.title': 'Все что нужно для лучших встреч',
    'features.subtitle': 'Трансформируйте рабочий процесс встреч с помощью интеллектуальной автоматизации и бесшовной интеграции.',
    'features.ai.title': 'ИИ-анализ',
    'features.ai.description': 'Продвинутое машинное обучение извлекает ключевые инсайты и задачи из ваших разговоров автоматически.',
    'features.formatting.title': 'Умное форматирование',
    'features.formatting.description': 'Профессиональные сводки с правильной структурой, маркированными списками и выделенными решениями готовы к отправке.',
    'features.sharing.title': 'Мгновенная отправка',
    'features.sharing.description': 'Распространение в один клик участникам команды, заинтересованным лицам или в ваши любимые инструменты продуктивности.',
    'features.search.title': 'Архив с поиском',
    'features.search.description': 'Найдите любое обсуждение, решение или деталь из прошлых встреч с мощными возможностями поиска.',
    'features.cta': 'Готовы трансформировать ваши встречи?',
    'features.cta_button': 'Начать →',
    
    // Integrations
    'integrations.title': 'Работает с вашими любимыми инструментами',
    'integrations.subtitle': 'Бесшовная интеграция с платформами, которые вы уже используете каждый день.',
    'integrations.coming_soon': 'И многие другие интеграции скоро появятся',
    
    // Pricing
    'pricing.title': '💼 Тарифы',
    'pricing.subtitle': 'Выберите план, который подходит вашей команде. Изменяйте тариф в любое время.',
    'pricing.monthly': 'Месячно',
    'pricing.annual': 'Годовой',
    'pricing.discount': 'экономия 17%',
    'pricing.note': 'Все тарифы включают 14-дневный бесплатный период. Кредитная карта не требуется.',
    'pricing.mobile_tip': '💡 3D эффект наклона лучше всего работает на десктопе',
    
    // Pricing Plans
    'plan.lite.name': 'Lite',
    'plan.lite.description': 'Для личных встреч',
    'plan.pro.name': 'Pro',
    'plan.pro.description': 'Для небольших команд',
    'plan.enterprise.name': 'Enterprise',
    'plan.enterprise.description': 'Для крупных команд и организаций',
    
    // Pricing Features
    'feature.lite.1': 'До 3 часов записи в месяц',
    'feature.lite.2': 'Автоматическая транскрибация',
    'feature.lite.3': 'Экспорт заметок в PDF',
    'feature.lite.4': 'Интеграция с Google Meet',
    
    'feature.pro.1': 'До 30 часов записи в месяц',
    'feature.pro.2': 'Транскрибация и краткие итоги',
    'feature.pro.3': 'Интеграции: Slack, Zoom, Google Meet',
    'feature.pro.4': 'Экспорт в Word и PDF',
    'feature.pro.5': 'Приоритетная обработка',
    
    'feature.enterprise.1': 'Неограниченные часы записи',
    'feature.enterprise.2': 'Совместная работа в командах',
    'feature.enterprise.3': 'Все интеграции: Slack, Zoom, Meet, Notion и др.',
    'feature.enterprise.4': 'Персонализированные отчеты',
    'feature.enterprise.5': 'Персональный менеджер и SLA 99.9%',
    
    // Plan specific
    'plan.popular': 'Самый популярный',
    'plan.from': 'от',
    'plan.currency': '$',
    'plan.per_month': 'в месяц',
    'plan.per_month_annual': 'в месяц при годовой оплате',
    'plan.get_started': 'Начать работу',
    'plan.features': 'Включено',
    'plan.free': 'БЕСПЛАТНО',
    'plan.save': 'экономия 17%',
    'plan.contact': 'Свяжитесь с нами',
    'plan.lets_talk': 'Обсуждается',
    
    // Reviews
    'reviews.title': 'Что говорят наши пользователи',
    'reviews.subtitle': 'Присоединяйтесь к тысячам команд, которые уже трансформировали свои встречи',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на самые популярные вопросы о нашем сервисе',
    
    // Footer
    'footer.product': 'Продукт',
    'footer.company': 'Компания',
    'footer.support': 'Поддержка',
    'footer.legal': 'Правовая информация',
    'footer.rights': 'Все права защищены.',
    
    // Mobile CTA
    'mobile_cta.title': 'Готовы начать?',
    'mobile_cta.subtitle': 'Присоединяйтесь к тысячам команд, которые уже используют наш ИИ-ноттейкер',
    'mobile_cta.button': 'Попробовать бесплатно'
  },
  en: {
    // Header
    'nav.pricing': 'Pricing',
    'nav.reviews': 'Reviews',
    'nav.partners': 'Partners',
    'nav.faq': 'FAQ',
    'nav.create': 'Create',
    'language.current': '🇬🇧 English version',
    'language.switch': '🇷🇺 Русская версия',
    
    // Hero
    'hero.title': 'Never type meeting notes again',
    'hero.subtitle': 'AI notetaker for calls',
    'hero.platforms': 'in',
    'hero.description': 'Get ready-to-send summaries in seconds with AI transcription and smart formatting.',
    'hero.tagline': 'No manual notes. Nothing missed.',
    'hero.try': 'Try it in',
    'hero.minutes': '5 minutes',
    'hero.cta': 'Get Started',
    'hero.cta_demo': 'Watch Demo',
    
    // Features
    'features.title': 'Everything you need for better meetings',
    'features.subtitle': 'Transform your meeting workflow with intelligent automation and seamless integration.',
    'features.ai.title': 'AI-Powered Analysis',
    'features.ai.description': 'Advanced machine learning extracts key insights and action items from your conversations automatically.',
    'features.formatting.title': 'Smart Formatting',
    'features.formatting.description': 'Professional summaries with proper structure, bullet points, and highlighted decisions ready to share.',
    'features.sharing.title': 'Instant Sharing',
    'features.sharing.description': 'One-click distribution to team members, stakeholders, or your favorite productivity tools.',
    'features.search.title': 'Searchable Archive',
    'features.search.description': 'Find any discussion, decision, or detail from past meetings with powerful search capabilities.',
    'features.cta': 'Ready to transform your meetings?',
    'features.cta_button': 'Get Started →',
    
    // Integrations
    'integrations.title': 'Works with your favorite tools',
    'integrations.subtitle': 'Seamlessly integrate with the platforms you already use every day.',
    'integrations.coming_soon': 'And many more integrations coming soon',
    
    // Pricing
    'pricing.title': '💼 Pricing',
    'pricing.subtitle': 'Choose the plan that fits your team. Change anytime.',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.discount': 'Save 17%',
    'pricing.note': 'All plans include a 14-day free trial. No credit card required.',
    'pricing.mobile_tip': '💡 3D tilt effect works best on desktop',
    
    // Pricing Plans
    'plan.lite.name': 'Lite',
    'plan.lite.description': 'For personal meetings',
    'plan.pro.name': 'Pro',
    'plan.pro.description': 'For small teams',
    'plan.enterprise.name': 'Enterprise',
    'plan.enterprise.description': 'For large teams and organizations',
    
    // Pricing Features
    'feature.lite.1': 'Up to 3 hours of recording per month',
    'feature.lite.2': 'Auto transcription',
    'feature.lite.3': 'Export notes to PDF',
    'feature.lite.4': 'Google Meet integration',
    
    'feature.pro.1': 'Up to 30 hours/month',
    'feature.pro.2': 'Transcripts + summaries',
    'feature.pro.3': 'Slack, Zoom, Google Meet',
    'feature.pro.4': 'Export to Word & PDF',
    'feature.pro.5': 'Priority processing',
    
    'feature.enterprise.1': 'Unlimited recording hours',
    'feature.enterprise.2': 'Team collaboration',
    'feature.enterprise.3': 'All integrations: Slack, Zoom, Meet, Notion etc.',
    'feature.enterprise.4': 'Custom reports',
    'feature.enterprise.5': 'Dedicated manager + SLA 99.9%',
    
    // Plan specific
    'plan.popular': 'Most Popular',
    'plan.from': 'from',
    'plan.currency': '$',
    'plan.per_month': 'per month',
    'plan.per_month_annual': 'per month, billed annually',
    'plan.get_started': 'Get Started',
    'plan.features': 'Includes',
    'plan.free': 'FREE',
    'plan.save': 'Save 17%',
    'plan.contact': 'Contact us',
    'plan.lets_talk': "Let's talk",
    
    // Reviews
    'reviews.title': 'What our users say',
    'reviews.subtitle': 'Join thousands of teams who have already transformed their meetings',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most popular questions about our service',
    
    // Footer
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    
    // Mobile CTA
    'mobile_cta.title': 'Ready to get started?',
    'mobile_cta.subtitle': 'Join thousands of teams already using our AI notetaker',
    'mobile_cta.button': 'Try for free'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 