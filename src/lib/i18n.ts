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

// URL mapping for language switcher and hreflang
export const urlMap: Record<string, Record<Language, string>> = {
  // Homepage
  '/': { en: '/', fr: '/fr' },
  '/fr': { en: '/', fr: '/fr' },

  // Pricing
  '/pricing': { en: '/pricing', fr: '/fr/tarifs' },
  '/fr/tarifs': { en: '/pricing', fr: '/fr/tarifs' },

  // Features
  '/features/write-optimized-content': { en: '/features/write-optimized-content', fr: '/fr/fonctionnalites/contenu-optimise' },
  '/fr/fonctionnalites/contenu-optimise': { en: '/features/write-optimized-content', fr: '/fr/fonctionnalites/contenu-optimise' },
  '/features/data-insights': { en: '/features/data-insights', fr: '/fr/fonctionnalites/donnees-insights' },
  '/fr/fonctionnalites/donnees-insights': { en: '/features/data-insights', fr: '/fr/fonctionnalites/donnees-insights' },
  '/features/autopilot': { en: '/features/autopilot', fr: '/fr/fonctionnalites/autopilot' },
  '/fr/fonctionnalites/autopilot': { en: '/features/autopilot', fr: '/fr/fonctionnalites/autopilot' },

  // Knowledge Base index
  '/knowledge-base': { en: '/knowledge-base', fr: '/fr/base-de-connaissances' },
  '/fr/base-de-connaissances': { en: '/knowledge-base', fr: '/fr/base-de-connaissances' },

  // Knowledge Base articles
  '/knowledge-base/getting-started-with-asking-franklin': { en: '/knowledge-base/getting-started-with-asking-franklin', fr: '/fr/base-de-connaissances/getting-started-with-asking-franklin' },
  '/fr/base-de-connaissances/getting-started-with-asking-franklin': { en: '/knowledge-base/getting-started-with-asking-franklin', fr: '/fr/base-de-connaissances/getting-started-with-asking-franklin' },
  '/knowledge-base/how-to-connect-wordpress-to-asking-franklin': { en: '/knowledge-base/how-to-connect-wordpress-to-asking-franklin', fr: '/fr/base-de-connaissances/how-to-connect-wordpress-to-asking-franklin' },
  '/fr/base-de-connaissances/how-to-connect-wordpress-to-asking-franklin': { en: '/knowledge-base/how-to-connect-wordpress-to-asking-franklin', fr: '/fr/base-de-connaissances/how-to-connect-wordpress-to-asking-franklin' },

  // Legal pages
  '/terms': { en: '/terms', fr: '/fr/cgv-cgu' },
  '/fr/cgv-cgu': { en: '/terms', fr: '/fr/cgv-cgu' },
  '/legal-notice': { en: '/legal-notice', fr: '/fr/mentions-legales' },
  '/fr/mentions-legales': { en: '/legal-notice', fr: '/fr/mentions-legales' },
  '/privacy-policy': { en: '/privacy-policy', fr: '/fr/politique-de-confidentialite' },
  '/fr/politique-de-confidentialite': { en: '/privacy-policy', fr: '/fr/politique-de-confidentialite' },
};

/**
 * Get the alternate URL for a given path in the target language.
 * Used for hreflang tags and language switcher.
 */
export const getAlternateUrl = (currentPath: string, targetLang: Language): string => {
  // Remove trailing slash for consistent lookup (except root)
  const normalizedPath = currentPath !== '/' && currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
  return urlMap[normalizedPath]?.[targetLang] || (targetLang === 'fr' ? '/fr' : '/');
};
