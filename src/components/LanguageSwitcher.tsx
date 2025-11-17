// React Router removed for Astro compatibility
import { Button } from '@/components/ui/button';
import { getAlternateUrl, type Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import { getBaseUrl, withBase } from '@/lib/baseUrl';

interface LanguageSwitcherProps {
  currentLang: Language;
}

export const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const switchLanguage = () => {
    const targetLang: Language = currentLang === 'en' ? 'fr' : 'en';
    const base = getBaseUrl();
    // Remove base path from current pathname to get the clean path
    let currentPath = window.location.pathname;
    if (base && currentPath.startsWith(base)) {
      currentPath = currentPath.slice(base.length) || '/';
    }
    const newPath = getAlternateUrl(currentPath, targetLang);
    window.location.href = withBase(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="flex items-center gap-2"
      aria-label={currentLang === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{currentLang === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
};
