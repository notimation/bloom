import { useState, useEffect } from 'react';
import { translations, type Locale } from '../lib/translations';

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>('en');
  
  useEffect(() => {
    // Detect user's preferred language
    const browserLang = navigator.language.split('-')[0] as Locale;
    const supportedLocale = translations[browserLang] ? browserLang : 'en';
    setLocale(supportedLocale);
  }, []);
  
  const t = translations[locale];
  
  const getImageSrc = (baseName: string) => {
    return locale === 'es' ? `${baseName}_(ES).png` : `${baseName}.png`;
  };
  
  return { t, locale, setLocale, getImageSrc };
}