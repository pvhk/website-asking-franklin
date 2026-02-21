// React Router removed for Astro compatibility
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Menu, X, ChevronDown, Sparkles, Zap, BookOpen, FileText, PenTool, BarChart3, Rocket, Search, Eye, Code, Wrench } from 'lucide-react';
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

  const featuresDropdownItems = [
    {
      icon: PenTool,
      title: lang === 'fr' ? 'Contenu optimisé' : 'Write optimized content',
      description: lang === 'fr' ? 'SEO & GEO pour Google et les IA' : 'SEO & GEO for Google and AI',
      href: withBase(lang === 'fr' ? '/fr/fonctionnalites/contenu-optimise' : '/features/write-optimized-content'),
    },
    {
      icon: BarChart3,
      title: lang === 'fr' ? 'Décisions sur les données' : 'Make decisions on data',
      description: lang === 'fr' ? 'Analytics et insights SEO' : 'SEO analytics and insights',
      href: withBase(lang === 'fr' ? '/fr/fonctionnalites/donnees-insights' : '/features/data-insights'),
    },
    {
      icon: Rocket,
      title: 'Autopilot',
      description: lang === 'fr' ? 'Bientôt disponible' : 'Coming soon',
      href: withBase(lang === 'fr' ? '/fr/fonctionnalites/autopilot' : '/features/autopilot'),
      comingSoon: true,
    },
  ];

  const freeToolsDropdownItems = [
    {
      icon: Search,
      title: 'Google Suggests',
      description: lang === 'fr' ? 'Suggestions de mots-cl\u00e9s' : 'Keyword suggestions',
      href: withBase(lang === 'fr' ? '/fr/outils-gratuits/google-suggests' : '/free-tools/google-suggests'),
    },
    {
      icon: Eye,
      title: lang === 'fr' ? 'Aper\u00e7u SERP' : 'SERP Preview',
      description: lang === 'fr' ? 'Pr\u00e9visualisez vos meta tags' : 'Preview your meta tags',
      href: withBase(lang === 'fr' ? '/fr/outils-gratuits/apercu-serp' : '/free-tools/serp-preview'),
    },
    {
      icon: FileText,
      title: lang === 'fr' ? 'Compteur de mots' : 'Word Counter',
      description: lang === 'fr' ? 'Analysez votre contenu' : 'Analyze your content',
      href: withBase(lang === 'fr' ? '/fr/outils-gratuits/compteur-de-mots' : '/free-tools/word-counter'),
    },
    {
      icon: Code,
      title: lang === 'fr' ? 'G\u00e9n\u00e9rateur Schema' : 'Schema Generator',
      description: lang === 'fr' ? 'Donn\u00e9es structur\u00e9es JSON-LD' : 'JSON-LD structured data',
      href: withBase(lang === 'fr' ? '/fr/outils-gratuits/generateur-schema' : '/free-tools/schema-generator'),
    },
  ];

  const resourcesDropdownItems = [
    {
      icon: BookOpen,
      title: lang === 'fr' ? 'Base de connaissances' : 'Knowledge Base',
      description: lang === 'fr' ? 'Guides et tutoriels' : 'Guides and tutorials',
      href: knowledgeUrl,
      external: false,
    },
    {
      icon: FileText,
      title: 'Blog',
      description: lang === 'fr' ? 'Articles et conseils SEO' : 'SEO articles and tips',
      href: 'https://blog.askingfranklin.com/',
      external: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav className="container flex h-20 items-center justify-between">
        <a href={homeUrl} className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <img src={withBaseImage('/logo.svg')} alt="Asking Franklin Logo" className="h-12 md:h-14" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Features Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
              <ChevronDown className="h-3 w-3 dropdown-arrow" />
            </button>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-background border border-border rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {featuresDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{item.title}</span>
                      {'comingSoon' in item && item.comingSoon && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                          {lang === 'fr' ? 'Bientôt' : 'Soon'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a href={pricingUrl} className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all">
            {content.nav.pricing}
          </a>

          {/* Free Tools Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {lang === 'fr' ? 'Outils Gratuits' : 'Free Tools'}
              <ChevronDown className="h-3 w-3 dropdown-arrow" />
            </button>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-background border border-border rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {freeToolsDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">{item.title}</span>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {lang === 'fr' ? 'Ressources' : 'Resources'}
              <ChevronDown className="h-3 w-3 dropdown-arrow" />
            </button>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-background border border-border rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {resourcesDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">{item.title}</span>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {lang === 'fr' && (
            <a
              href="https://ladepeche.askingfranklin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              {content.nav.laDepeche}
            </a>
          )}
          <LanguageSwitcher currentLang={lang} />
          <Button className="font-semibold" asChild>
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
            {/* Mobile Features Links */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
              </span>
              {featuresDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                  {'comingSoon' in item && item.comingSoon && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                      {lang === 'fr' ? 'Bientôt' : 'Soon'}
                    </span>
                  )}
                </a>
              ))}
            </div>
            <a
              href={pricingUrl}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.nav.pricing}
            </a>
            {/* Mobile Free Tools Links */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {lang === 'fr' ? 'Outils Gratuits' : 'Free Tools'}
              </span>
              {freeToolsDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </a>
              ))}
            </div>
            {/* Mobile Resources Links */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {lang === 'fr' ? 'Ressources' : 'Resources'}
              </span>
              {resourcesDropdownItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </a>
              ))}
            </div>
            {lang === 'fr' && (
              <a
                href="https://ladepeche.askingfranklin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {content.nav.laDepeche}
              </a>
            )}
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
