import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Loader2, ArrowRight, Sparkles } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import type { Language } from '@/lib/i18n';

interface SuggestionItem {
  word: string;
  suggestions: string[];
}

interface SuggestionBlock {
  type: string;
  data: SuggestionItem[];
}

interface GoogleSuggestsResult {
  keyword: string;
  data: SuggestionBlock[];
}

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Fran\u00e7ais' },
];

const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States', flag: '\ud83c\uddfa\ud83c\uddf8' },
  { value: 'gb', label: 'United Kingdom', flag: '\ud83c\uddec\ud83c\udde7' },
  { value: 'ca', label: 'Canada', flag: '\ud83c\udde8\ud83c\udde6' },
  { value: 'au', label: 'Australia', flag: '\ud83c\udde6\ud83c\uddfa' },
  { value: 'fr', label: 'France', flag: '\ud83c\uddeb\ud83c\uddf7' },
  { value: 'be', label: 'Belgium', flag: '\ud83c\udde7\ud83c\uddea' },
  { value: 'ch', label: 'Switzerland', flag: '\ud83c\udde8\ud83c\udded' },
  { value: 'lu', label: 'Luxembourg', flag: '\ud83c\uddf1\ud83c\uddfa' },
];

interface Props {
  lang: Language;
  content: SiteContent;
}

export const GoogleSuggestsTool = ({ lang, content }: Props) => {
  const t = content.freeTools.googleSuggests;
  const [keyword, setKeyword] = useState('');
  const [language, setLanguage] = useState(lang === 'fr' ? 'fr' : 'en');
  const [country, setCountry] = useState(lang === 'fr' ? 'fr' : 'us');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GoogleSuggestsResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sectionLabels: Record<string, string> = {
    questions: t.sections.questions,
    comparaisons: t.sections.comparisons,
    prepositions: t.sections.prepositions,
    related: t.sections.related,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/google-suggests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: keyword.trim(),
          language,
          country,
        }),
      });

      if (res.status === 429) {
        setError(t.rateLimitMessage);
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t.errorMessage);
        return;
      }

      setResult(data);
    } catch {
      setError(t.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const totalSuggestions = result
    ? result.data.reduce(
        (total, block) =>
          total + block.data.reduce((sum, item) => sum + item.suggestions.length, 0),
        0
      )
    : 0;

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Search className="h-4 w-4" />
          {lang === 'fr' ? 'Outil gratuit' : 'Free tool'}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl mb-12">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.placeholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              maxLength={200}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                {t.languageLabel}
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                {t.countryLabel}
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {COUNTRY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.flag} {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full font-semibold" disabled={loading || !keyword.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.loadingLabel}
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                {t.buttonLabel}
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="mx-auto max-w-2xl mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-center text-destructive">
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {lang === 'fr' ? 'R\u00e9sultats pour' : 'Results for'}{' '}
              <span className="text-primary">&ldquo;{result.keyword}&rdquo;</span>
            </h2>
            <span className="text-sm text-muted-foreground">
              {totalSuggestions} suggestion{totalSuggestions !== 1 ? 's' : ''}
            </span>
          </div>

          {totalSuggestions === 0 && (
            <p className="text-center text-muted-foreground py-8">{t.noResults}</p>
          )}

          {result.data.map((block) => {
            const nonEmptyItems = block.data.filter((item) => item.suggestions.length > 0);
            if (nonEmptyItems.length === 0) return null;

            return (
              <div key={block.type} className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  {sectionLabels[block.type] || block.type}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {nonEmptyItems.map((item) => (
                    <div
                      key={item.word}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wide">
                        {item.word}
                      </h4>
                      <ul className="space-y-1">
                        {item.suggestions.map((suggestion, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-foreground hover:text-primary transition-colors cursor-default"
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

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
      )}

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
