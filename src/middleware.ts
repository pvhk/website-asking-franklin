import { defineMiddleware } from 'astro:middleware';
import type { Language } from './lib/i18n';
import { urlMap } from './lib/i18n';

const supportedLanguages: Language[] = ['en', 'fr'];
const defaultLanguage: Language = 'en';

// Cookie name for language preference
const LANGUAGE_COOKIE = 'preferred-language';

/**
 * Parse Accept-Language header to get preferred language
 * Example: "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
 */
function getPreferredLanguage(acceptLanguageHeader: string | null): Language {
  if (!acceptLanguageHeader) {
    return defaultLanguage;
  }

  // Parse the Accept-Language header
  const languages = acceptLanguageHeader
    .split(',')
    .map((lang) => {
      const [locale, qValue] = lang.trim().split(';q=');
      const quality = qValue ? parseFloat(qValue) : 1.0;
      // Extract base language (e.g., "fr" from "fr-FR")
      const baseLang = locale.split('-')[0].toLowerCase();
      return { lang: baseLang, quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first supported language
  for (const { lang } of languages) {
    if (supportedLanguages.includes(lang as Language)) {
      return lang as Language;
    }
  }

  return defaultLanguage;
}

/**
 * Detect the language of the current path
 */
function getCurrentLanguageFromPath(pathname: string): Language | null {
  // Normalize trailing slash
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  // If the path is in the urlMap, determine language from the mapping
  if (urlMap[normalized]) {
    // If the EN version equals the normalized path, it's EN
    if (urlMap[normalized].en === normalized) return 'en';
    // If the FR version equals the normalized path, it's FR
    if (urlMap[normalized].fr === normalized) return 'fr';
  }

  // Fallback: paths starting with /fr are French
  if (normalized.startsWith('/fr')) return 'fr';

  // Root and other known EN paths
  if (normalized === '/' || normalized.startsWith('/features') || normalized.startsWith('/pricing') ||
      normalized.startsWith('/terms') || normalized.startsWith('/legal-notice') ||
      normalized.startsWith('/privacy-policy') || normalized.startsWith('/knowledge-base')) {
    return 'en';
  }

  return null;
}

/**
 * Get the alternate URL for a path in the target language
 */
function getAlternatePathForLang(pathname: string, targetLang: Language): string | null {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const mapping = urlMap[normalized];
  if (mapping && mapping[targetLang] && mapping[targetLang] !== normalized) {
    return mapping[targetLang];
  }
  return null;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, redirect, url } = context;
  const pathname = url.pathname;

  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_') ||
    pathname.includes('.') ||
    pathname.startsWith('/api/')
  ) {
    return next();
  }

  // Check if user has a language preference cookie
  const cookieLanguage = cookies.get(LANGUAGE_COOKIE)?.value as Language | undefined;

  // Detect current language from path
  const currentLang = getCurrentLanguageFromPath(pathname);

  // --- Auto-redirect based on browser language (first visit only, no cookie set) ---
  if (!cookieLanguage) {
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLang = getPreferredLanguage(acceptLanguage);

    // Set cookie to remember preference
    cookies.set(LANGUAGE_COOKIE, preferredLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      sameSite: 'lax',
    });

    // If the user's preferred language differs from the current page language,
    // redirect to the alternate version of this page
    if (currentLang && preferredLang !== currentLang) {
      const alternatePath = getAlternatePathForLang(pathname, preferredLang);
      if (alternatePath) {
        return redirect(alternatePath, 302);
      }
    }
  }

  // Update cookie based on current page language (user navigated manually)
  if (currentLang && currentLang !== cookieLanguage) {
    cookies.set(LANGUAGE_COOKIE, currentLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      sameSite: 'lax',
    });
  }

  return next();
});
