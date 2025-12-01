// React Router removed for Astro compatibility
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { withBase, withBaseImage } from '@/lib/baseUrl';

interface HeaderProps {
  lang: Language;
  content: SiteContent;
}

export const Header = ({ lang, content }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeUrl = withBase(lang === 'fr' ? '/fr' : '/');
  const pricingUrl = withBase(lang === 'fr' ? '/fr/tarifs' : '/pricing');
  const knowledgeUrl = withBase(lang === 'fr' ? '/fr/base-de-connaissances' : '/knowledge-base');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <nav className="container flex h-20 items-center justify-between">
        <a href={homeUrl} className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <img src={withBaseImage('/logo.svg')} alt="Asking Franklin Logo" className="h-12 md:h-14" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href={homeUrl} className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all">
            {content.nav.home}
          </a>
          <a href={pricingUrl} className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all">
            {content.nav.pricing}
          </a>
          <a
            href="https://blog.askingfranklin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
          >
            {content.nav.blog}
          </a>
          <a href={knowledgeUrl} className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all">
            {content.nav.knowledge}
          </a>
          <a
            href="https://ladepeche.askingfranklin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
          >
            {content.nav.laDepeche}
          </a>
          <LanguageSwitcher currentLang={lang} />
          <Button className="shadow-primary font-semibold" asChild>
            <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
              {content.nav.cta}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href={homeUrl}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.nav.home}
            </a>
            <a
              href={pricingUrl}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.nav.pricing}
            </a>
            <a
              href="https://blog.askingfranklin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {content.nav.blog}
            </a>
            <a
              href={knowledgeUrl}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.nav.knowledge}
            </a>
            <a
              href="https://ladepeche.askingfranklin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {content.nav.laDepeche}
            </a>
            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLang={lang} />
              <Button asChild className="w-full">
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {content.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
