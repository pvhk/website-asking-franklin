import { defineMiddleware } from 'astro:middleware';
import type { Language } from './lib/i18n';

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
 * Detect if the current path is already in a specific language
 */
function getCurrentLanguageFromPath(pathname: string): Language | null {
  // Check if path starts with /fr
  if (pathname.startsWith('/fr') || pathname === '/fr') {
    return 'fr';
  }
  // Root and other paths are English
  if (
    pathname === '/' ||
    pathname.startsWith('/pricing') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/legal-notice') ||
    pathname.startsWith('/privacy-policy') ||
    pathname.startsWith('/knowledge-base')
  ) {
    return 'en';
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

  // Only redirect on homepage visit (first visit or direct access)
  if (pathname === '/' && !cookieLanguage) {
    // Get browser preferred language
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLang = getPreferredLanguage(acceptLanguage);

    // If browser prefers French, redirect to /fr
    if (preferredLang === 'fr') {
      // Set cookie to remember preference
      cookies.set(LANGUAGE_COOKIE, 'fr', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false,
        sameSite: 'lax',
      });
      return redirect('/fr', 302);
    } else {
      // Set English as preference
      cookies.set(LANGUAGE_COOKIE, 'en', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false,
        sameSite: 'lax',
      });
    }
  }

  // Update cookie based on current language
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
