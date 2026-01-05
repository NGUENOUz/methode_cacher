import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from './translations';

const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    if (stored && (stored === 'fr' || stored === 'en' || stored === 'es')) {
      return stored as Language;
    }
    return detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language] as TranslationKey;

  return { t, language, setLanguage };
};
