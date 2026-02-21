import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Eye, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Sparkles, Monitor, Smartphone } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import type { Language } from '@/lib/i18n';

interface Props {
  lang: Language;
  content: SiteContent;
}

type CheckStatus = 'good' | 'warning' | 'bad' | 'neutral';

interface SEOCheck {
  label: string;
  status: CheckStatus;
  message: string;
  value: string;
}

function formatUrlBreadcrumb(url: string): string {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    const host = parsed.hostname.replace('www.', '');
    if (parts.length === 0) return host;
    return `${host} > ${parts.join(' > ')}`;
  } catch {
    return url || 'www.example.com';
  }
}

function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + '...';
}

export const SerpPreviewTool = ({ lang, content }: Props) => {
  const t = content.freeTools.serpPreview;
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');

  const checks = useMemo((): SEOCheck[] => {
    const results: SEOCheck[] = [];
    const titleLen = metaTitle.length;
    const descLen = metaDescription.length;
    const kw = keyword.trim().toLowerCase();

    // Title length check
    if (titleLen === 0) {
      results.push({
        label: t.checks.titleLength,
        status: 'neutral',
        message: t.checks.titleLengthBad,
        value: `${titleLen}/60`,
      });
    } else if (titleLen >= 30 && titleLen <= 60) {
      results.push({
        label: t.checks.titleLength,
        status: 'good',
        message: t.checks.titleLengthGood,
        value: `${titleLen}/60`,
      });
    } else if (titleLen > 60 && titleLen <= 65) {
      results.push({
        label: t.checks.titleLength,
        status: 'warning',
        message: t.checks.titleLengthWarning,
        value: `${titleLen}/60`,
      });
    } else {
      results.push({
        label: t.checks.titleLength,
        status: 'bad',
        message: t.checks.titleLengthBad,
        value: `${titleLen}/60`,
      });
    }

    // Description length check
    if (descLen === 0) {
      results.push({
        label: t.checks.descLength,
        status: 'neutral',
        message: t.checks.descLengthBad,
        value: `${descLen}/160`,
      });
    } else if (descLen >= 120 && descLen <= 160) {
      results.push({
        label: t.checks.descLength,
        status: 'good',
        message: t.checks.descLengthGood,
        value: `${descLen}/160`,
      });
    } else if ((descLen >= 80 && descLen < 120) || (descLen > 160 && descLen <= 170)) {
      results.push({
        label: t.checks.descLength,
        status: 'warning',
        message: t.checks.descLengthWarning,
        value: `${descLen}/160`,
      });
    } else {
      results.push({
        label: t.checks.descLength,
        status: 'bad',
        message: t.checks.descLengthBad,
        value: `${descLen}/160`,
      });
    }

    // Keyword checks (only if keyword provided)
    if (kw) {
      const titleLower = metaTitle.toLowerCase();
      const descLower = metaDescription.toLowerCase();

      // Keyword in title
      results.push({
        label: t.checks.keywordInTitle,
        status: titleLower.includes(kw) ? 'good' : 'bad',
        message: titleLower.includes(kw) ? t.checks.keywordInTitleGood : t.checks.keywordInTitleBad,
        value: '',
      });

      // Keyword in description
      results.push({
        label: t.checks.keywordInDesc,
        status: descLower.includes(kw) ? 'good' : 'bad',
        message: descLower.includes(kw) ? t.checks.keywordInDescGood : t.checks.keywordInDescBad,
        value: '',
      });

      // Keyword near start of title
      if (titleLower.includes(kw)) {
        const kwIndex = titleLower.indexOf(kw);
        const isNearStart = kwIndex <= titleLen / 2;
        results.push({
          label: t.checks.keywordAtStart,
          status: isNearStart ? 'good' : 'warning',
          message: isNearStart ? t.checks.keywordAtStartGood : t.checks.keywordAtStartBad,
          value: '',
        });
      }
    }

    return results;
  }, [metaTitle, metaDescription, keyword, t.checks]);

  const StatusIcon = ({ status }: { status: CheckStatus }) => {
    switch (status) {
      case 'good':
        return <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />;
      case 'bad':
        return <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />;
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />;
    }
  };

  const SerpCard = ({ mobile = false }: { mobile?: boolean }) => {
    const displayTitle = metaTitle || (lang === 'fr' ? 'Titre de votre page' : 'Your page title');
    const displayDesc = metaDescription || (lang === 'fr' ? 'Votre meta description appara\u00eetra ici. R\u00e9digez un texte accrocheur pour encourager les clics depuis les r\u00e9sultats de recherche.' : 'Your meta description will appear here. Write compelling text to encourage clicks from search results.');
    const displayUrl = url || 'https://www.example.com/page';
    const maxTitle = mobile ? 55 : 60;
    const maxDesc = mobile ? 120 : 160;

    return (
      <div className={`rounded-lg border border-border bg-white dark:bg-zinc-900 p-4 ${mobile ? 'max-w-[380px]' : 'max-w-[600px]'}`}>
        {/* URL breadcrumb line */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-muted-foreground">
              {(() => {
                try {
                  return new URL(displayUrl).hostname.charAt(0).toUpperCase();
                } catch {
                  return 'E';
                }
              })()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground truncate">
              {formatUrlBreadcrumb(displayUrl)}
            </p>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl text-blue-700 dark:text-blue-400 hover:underline cursor-pointer leading-snug mb-1">
          {truncateText(displayTitle, maxTitle)}
        </h3>
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {truncateText(displayDesc, maxDesc)}
        </p>
      </div>
    );
  };

  const hasInput = metaTitle.length > 0 || metaDescription.length > 0;

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Eye className="h-4 w-4" />
          {lang === 'fr' ? 'Outil gratuit' : 'Free tool'}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* Input Form */}
      <div className="mx-auto max-w-2xl mb-12">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          {/* Meta Title */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-foreground">
                {t.titleLabel}
              </label>
              <span className={`text-xs font-mono ${metaTitle.length > 60 ? 'text-red-500' : metaTitle.length >= 30 ? 'text-green-600' : 'text-muted-foreground'}`}>
                {metaTitle.length}/60
              </span>
            </div>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              maxLength={200}
            />
          </div>

          {/* Meta Description */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-foreground">
                {t.descriptionLabel}
              </label>
              <span className={`text-xs font-mono ${metaDescription.length > 160 ? 'text-red-500' : metaDescription.length >= 120 ? 'text-green-600' : 'text-muted-foreground'}`}>
                {metaDescription.length}/160
              </span>
            </div>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
              rows={3}
              maxLength={300}
            />
          </div>

          {/* URL and Keyword */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {t.urlLabel}
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t.urlPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {t.keywordLabel}
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={t.keywordPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SERP Preview */}
      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="desktop" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="desktop" className="gap-2">
              <Monitor className="h-4 w-4" />
              {t.desktopTab}
            </TabsTrigger>
            <TabsTrigger value="mobile" className="gap-2">
              <Smartphone className="h-4 w-4" />
              {t.mobileTab}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="desktop" className="flex justify-center">
            <SerpCard mobile={false} />
          </TabsContent>
          <TabsContent value="mobile" className="flex justify-center">
            <SerpCard mobile={true} />
          </TabsContent>
        </Tabs>

        {/* SEO Checks */}
        {hasInput && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">
              {lang === 'fr' ? 'V\u00e9rifications SEO' : 'SEO Checks'}
            </h2>
            <div className="space-y-3">
              {checks.map((check, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <StatusIcon status={check.status} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{check.label}</p>
                    <p className="text-sm text-muted-foreground">{check.message}</p>
                  </div>
                  {check.value && (
                    <span className="text-sm font-mono text-muted-foreground flex-shrink-0">
                      {check.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12 text-center">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">{t.cta.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t.cta.description}
          </p>
          <Button size="lg" className="font-semibold" asChild>
            <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
              {t.cta.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      {t.faq && t.faq.items.length > 0 && (
        <section className="py-24 border-t border-border mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t.faq.title}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card hover:border-foreground/20 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Dark CTA Section */}
      <section className="bg-foreground text-background rounded-2xl mt-16">
        <div className="py-20 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {lang === 'fr'
                ? "Pr\u00eat \u00e0 d\u00e9velopper votre trafic avec un assistant IA SEO ?"
                : "Ready to grow your traffic with an AI SEO assistant?"}
            </h2>
            <p className="text-lg text-background/70">
              {lang === 'fr'
                ? "Essayez Asking Franklin gratuitement pendant 7 jours. Aucune carte bancaire requise."
                : "Try Asking Franklin free for 7 days. No credit card required."}
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? "J'essaye gratuitement" : "Try it for free"}
                <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
