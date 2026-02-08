import { enContent } from '@/content/en';
import { frContent } from '@/content/fr';

export type Language = 'en' | 'fr';

export const languages: Language[] = ['en', 'fr'];

export const defaultLanguage: Language = 'en';

export const content = {
  en: enContent,
  fr: frContent,
};

export const getContent = (lang: Language) => content[lang] || content[defaultLanguage];

// URL mapping for language switcher
export const urlMap: Record<string, Record<Language, string>> = {
  '/': { en: '/', fr: '/fr' },
  '/fr': { en: '/', fr: '/fr' },
  '/pricing': { en: '/pricing', fr: '/fr/tarifs' },
  '/fr/tarifs': { en: '/pricing', fr: '/fr/tarifs' },
  '/terms': { en: '/terms', fr: '/fr/cgv-cgu' },
  '/fr/cgv-cgu': { en: '/terms', fr: '/fr/cgv-cgu' },
  '/legal-notice': { en: '/legal-notice', fr: '/fr/mentions-legales' },
  '/fr/mentions-legales': { en: '/legal-notice', fr: '/fr/mentions-legales' },
  '/privacy-policy': { en: '/privacy-policy', fr: '/fr/politique-de-confidentialite' },
  '/fr/politique-de-confidentialite': { en: '/privacy-policy', fr: '/fr/politique-de-confidentialite' },
};

export const getAlternateUrl = (currentPath: string, targetLang: Language): string => {
  return urlMap[currentPath]?.[targetLang] || (targetLang === 'fr' ? '/fr' : '/');
};
