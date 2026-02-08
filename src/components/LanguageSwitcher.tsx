// React Router removed for Astro compatibility
import { getAlternateUrl, type Language } from '@/lib/i18n';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { getBaseUrl, withBase } from '@/lib/baseUrl';

interface LanguageSwitcherProps {
  currentLang: Language;
}

const languages = [
  { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
];

export const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const switchToLanguage = (targetLang: Language) => {
    if (targetLang === currentLang) return;
    const base = getBaseUrl();
    let currentPath = window.location.pathname;
    if (base && currentPath.startsWith(base)) {
      currentPath = currentPath.slice(base.length) || '/';
    }
    const newPath = getAlternateUrl(currentPath, targetLang);
    window.location.href = withBase(newPath);
  };

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-lg hover:bg-secondary"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage?.flag}</span>
        <ChevronDown className="h-3 w-3 dropdown-arrow" />
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 w-40 bg-background border border-border rounded-xl shadow-lg p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => switchToLanguage(language.code)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-left"
          >
            <span className="text-base">{language.flag}</span>
            <span className="text-sm font-medium text-foreground flex-1">{language.label}</span>
            {language.code === currentLang && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
