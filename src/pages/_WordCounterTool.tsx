import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, ArrowRight, Sparkles, BarChart3, BookOpen, Hash } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import type { Language } from '@/lib/i18n';

interface Props {
  lang: Language;
  content: SiteContent;
}

// Common stop words for EN and FR
const STOP_WORDS_EN = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
  'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'shall',
  'it', 'its', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'we', 'they',
  'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'our', 'their', 'not', 'no',
  'so', 'if', 'as', 'up', 'out', 'about', 'into', 'over', 'after', 'all', 'also', 'just',
  'than', 'then', 'more', 'very', 'what', 'which', 'who', 'when', 'where', 'how', 'why',
]);

const STOP_WORDS_FR = new Set([
  'le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'et', 'ou', 'mais', 'en', 'au',
  'aux', 'ce', 'cette', 'ces', 'mon', 'ton', 'son', 'ma', 'ta', 'sa', 'mes', 'tes', 'ses',
  'notre', 'votre', 'leur', 'nos', 'vos', 'leurs', 'je', 'tu', 'il', 'elle', 'on', 'nous',
  'vous', 'ils', 'elles', 'ne', 'pas', 'plus', 'que', 'qui', 'quoi', 'est', 'sont', 'a',
  'ont', 'dans', 'sur', 'pour', 'par', 'avec', 'sans', 'tout', 'tous', 'comme', 'si', 'se',
  'aussi', 'bien', 'entre', 'sous', 'apr\u00e8s', 'avant', 'chez', 'd\u00e8s', 'donc', 'car',
  'ni', 'peu', 'tr\u00e8s', 'trop', 'ici', 'o\u00f9', 'quand', 'comment', 'pourquoi',
]);

function getWords(text: string): string[] {
  return text.match(/\b[\w\u00C0-\u024F']+\b/g) || [];
}

function countSentences(text: string): number {
  if (!text.trim()) return 0;
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  return sentences.length;
}

function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 1;
}

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z\u00C0-\u024F]/g, '');
  if (w.length <= 3) return 1;
  let count = 0;
  const vowels = /[aeiouy\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc]/;
  let prevVowel = false;
  for (let i = 0; i < w.length; i++) {
    const isVowel = vowels.test(w[i]);
    if (isVowel && !prevVowel) count++;
    prevVowel = isVowel;
  }
  // Silent e
  if (w.endsWith('e') && count > 1) count--;
  return Math.max(count, 1);
}

function calculateFleschScore(text: string): number {
  const words = getWords(text);
  const sentences = countSentences(text);
  if (words.length === 0 || sentences === 0) return 0;
  const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const score = 206.835 - 1.015 * (words.length / sentences) - 84.6 * (totalSyllables / words.length);
  return Math.max(0, Math.min(100, Math.round(score * 10) / 10));
}

function getReadabilityLevel(score: number, lang: Language): string {
  if (lang === 'fr') {
    if (score >= 70) return 'Tr\u00e8s facile \u00e0 lire';
    if (score >= 60) return 'Facile \u00e0 lire';
    if (score >= 50) return 'Assez facile';
    if (score >= 30) return 'Difficile';
    return 'Tr\u00e8s difficile';
  }
  if (score >= 70) return 'Easy to read';
  if (score >= 60) return 'Standard';
  if (score >= 50) return 'Fairly difficult';
  if (score >= 30) return 'Difficult';
  return 'Very difficult';
}

function getTopWords(text: string, lang: Language, n: number): Array<{ word: string; count: number }> {
  const stopWords = lang === 'fr' ? STOP_WORDS_FR : STOP_WORDS_EN;
  const words = getWords(text).map((w) => w.toLowerCase()).filter((w) => w.length > 2 && !stopWords.has(w));
  const freq: Record<string, number> = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([word, count]) => ({ word, count }));
}

function getTopBigrams(text: string, lang: Language, n: number): Array<{ phrase: string; count: number }> {
  const stopWords = lang === 'fr' ? STOP_WORDS_FR : STOP_WORDS_EN;
  const words = getWords(text).map((w) => w.toLowerCase());
  const freq: Record<string, number> = {};
  for (let i = 0; i < words.length - 1; i++) {
    if (stopWords.has(words[i]) && stopWords.has(words[i + 1])) continue;
    const bigram = `${words[i]} ${words[i + 1]}`;
    freq[bigram] = (freq[bigram] || 0) + 1;
  }
  return Object.entries(freq)
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([phrase, count]) => ({ phrase, count }));
}

export const WordCounterTool = ({ lang, content }: Props) => {
  const t = content.freeTools.wordCounter;
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');

  const stats = useMemo(() => {
    const words = getWords(text);
    const wordCount = words.length;
    const charCount = text.length;
    const sentenceCount = countSentences(text);
    const paragraphCount = countParagraphs(text);
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    const fleschScore = calculateFleschScore(text);
    const avgSentenceLen = sentenceCount > 0 ? Math.round(wordCount / sentenceCount * 10) / 10 : 0;
    const avgWordLen = wordCount > 0 ? Math.round(text.replace(/\s+/g, '').length / wordCount * 10) / 10 : 0;

    // Keyword density
    let kwCount = 0;
    let kwDensity = 0;
    if (keyword.trim() && wordCount > 0) {
      const kwLower = keyword.trim().toLowerCase();
      const textLower = text.toLowerCase();
      let idx = 0;
      while ((idx = textLower.indexOf(kwLower, idx)) !== -1) {
        kwCount++;
        idx += kwLower.length;
      }
      kwDensity = Math.round((kwCount / wordCount) * 100 * 100) / 100;
    }

    const topWords = getTopWords(text, lang, 10);
    const topBigrams = getTopBigrams(text, lang, 5);

    return {
      wordCount,
      charCount,
      sentenceCount,
      paragraphCount,
      readingTime,
      fleschScore,
      avgSentenceLen,
      avgWordLen,
      kwCount,
      kwDensity,
      topWords,
      topBigrams,
    };
  }, [text, keyword, lang]);

  const fleschColor = stats.fleschScore >= 60 ? 'text-green-600' : stats.fleschScore >= 30 ? 'text-orange-500' : 'text-red-500';
  const densityColor = stats.kwDensity >= 1 && stats.kwDensity <= 3 ? 'text-green-600' : stats.kwDensity > 0 ? 'text-orange-500' : 'text-muted-foreground';

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <FileText className="h-4 w-4" />
          {lang === 'fr' ? 'Outil gratuit' : 'Free tool'}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-5xl">
        {/* Textarea + keyword input */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm mb-8">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.placeholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y min-h-[200px]"
            rows={10}
          />
          <div className="mt-4">
            <label className="block text-sm font-medium text-foreground mb-1">
              {t.keywordLabel}
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.keywordPlaceholder}
              className="w-full max-w-sm rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: t.stats.words, value: stats.wordCount.toLocaleString(), icon: Hash },
            { label: t.stats.characters, value: stats.charCount.toLocaleString(), icon: FileText },
            { label: t.stats.sentences, value: stats.sentenceCount.toLocaleString(), icon: FileText },
            { label: t.stats.paragraphs, value: stats.paragraphCount.toLocaleString(), icon: BookOpen },
            { label: t.stats.readingTime, value: `~${stats.readingTime} min`, icon: BookOpen },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Detailed Analysis Tabs */}
        {stats.wordCount > 0 && (
          <Tabs defaultValue="keywords" className="mb-12">
            <TabsList className="mb-4">
              <TabsTrigger value="keywords" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                {t.topKeywordsTitle}
              </TabsTrigger>
              {keyword.trim() && (
                <TabsTrigger value="density" className="gap-2">
                  <Hash className="h-4 w-4" />
                  {t.densityTitle}
                </TabsTrigger>
              )}
              <TabsTrigger value="readability" className="gap-2">
                <BookOpen className="h-4 w-4" />
                {t.readabilityTitle}
              </TabsTrigger>
            </TabsList>

            {/* Top Keywords Tab */}
            <TabsContent value="keywords">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Single words */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold mb-4">
                    {lang === 'fr' ? 'Mots les plus fr\u00e9quents' : 'Most frequent words'}
                  </h3>
                  {stats.topWords.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {lang === 'fr' ? 'Aucun mot trouv\u00e9' : 'No words found'}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {stats.topWords.map((item) => {
                        const maxCount = stats.topWords[0]?.count || 1;
                        const pct = (item.count / maxCount) * 100;
                        return (
                          <div key={item.word} className="flex items-center gap-3">
                            <span className="text-sm font-medium w-24 truncate">{item.word}</span>
                            <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary/70 rounded-full transition-all"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground w-8 text-right">{item.count}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Bigrams */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold mb-4">
                    {lang === 'fr' ? 'Expressions fr\u00e9quentes' : 'Frequent phrases'}
                  </h3>
                  {stats.topBigrams.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {lang === 'fr' ? 'Pas assez de contenu' : 'Not enough content'}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {stats.topBigrams.map((item) => {
                        const maxCount = stats.topBigrams[0]?.count || 1;
                        const pct = (item.count / maxCount) * 100;
                        return (
                          <div key={item.phrase} className="flex items-center gap-3">
                            <span className="text-sm font-medium w-32 truncate">{item.phrase}</span>
                            <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary/70 rounded-full transition-all"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground w-8 text-right">{item.count}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Keyword Density Tab */}
            {keyword.trim() && (
              <TabsContent value="density">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {lang === 'fr' ? 'Occurrences' : 'Occurrences'}
                      </p>
                      <p className="text-3xl font-bold">{stats.kwCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {lang === 'fr' ? 'Densit\u00e9' : 'Density'}
                      </p>
                      <p className={`text-3xl font-bold ${densityColor}`}>
                        {stats.kwDensity}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {lang === 'fr' ? 'Recommandation' : 'Recommendation'}
                      </p>
                      <p className="text-sm mt-1">
                        {stats.kwDensity >= 1 && stats.kwDensity <= 3
                          ? (lang === 'fr' ? 'Bonne densit\u00e9' : 'Good density')
                          : stats.kwDensity > 3
                            ? (lang === 'fr' ? 'Trop \u00e9lev\u00e9e (risque de suroptimisation)' : 'Too high (risk of keyword stuffing)')
                            : stats.kwDensity > 0
                              ? (lang === 'fr' ? 'Un peu faible, essayez 1-3%' : 'A bit low, aim for 1-3%')
                              : (lang === 'fr' ? 'Mot-cl\u00e9 non trouv\u00e9' : 'Keyword not found')
                        }
                      </p>
                    </div>
                  </div>
                  {/* Density bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>0%</span>
                      <span className="text-green-600">1-3%</span>
                      <span>5%+</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                      <div className="absolute left-[20%] w-[40%] h-full bg-green-100 dark:bg-green-900/30" />
                      <div
                        className={`h-full rounded-full transition-all ${
                          stats.kwDensity >= 1 && stats.kwDensity <= 3
                            ? 'bg-green-500'
                            : stats.kwDensity > 3
                              ? 'bg-red-500'
                              : 'bg-orange-400'
                        }`}
                        style={{ width: `${Math.min(stats.kwDensity * 20, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Readability Tab */}
            <TabsContent value="readability">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Flesch Score</p>
                    <p className={`text-3xl font-bold ${fleschColor}`}>{stats.fleschScore}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getReadabilityLevel(stats.fleschScore, lang)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {lang === 'fr' ? 'Mots / phrase' : 'Words / sentence'}
                    </p>
                    <p className="text-3xl font-bold">{stats.avgSentenceLen}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stats.avgSentenceLen > 25
                        ? (lang === 'fr' ? 'Phrases longues' : 'Long sentences')
                        : stats.avgSentenceLen > 15
                          ? (lang === 'fr' ? 'Bonne longueur' : 'Good length')
                          : (lang === 'fr' ? 'Phrases courtes' : 'Short sentences')
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {lang === 'fr' ? 'Caract. / mot' : 'Chars / word'}
                    </p>
                    <p className="text-3xl font-bold">{stats.avgWordLen}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {lang === 'fr' ? 'Temps de lecture' : 'Reading time'}
                    </p>
                    <p className="text-3xl font-bold">~{stats.readingTime}</p>
                    <p className="text-sm text-muted-foreground mt-1">min</p>
                  </div>
                </div>
                {/* Flesch score bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>{lang === 'fr' ? 'Difficile' : 'Difficult'}</span>
                    <span>{lang === 'fr' ? 'Standard' : 'Standard'}</span>
                    <span>{lang === 'fr' ? 'Facile' : 'Easy'}</span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-red-200 via-orange-200 to-green-200 dark:from-red-900/30 dark:via-orange-900/30 dark:to-green-900/30 rounded-full overflow-hidden relative">
                    <div
                      className="absolute top-0 h-full w-1.5 bg-foreground rounded-full transition-all"
                      style={{ left: `${Math.min(stats.fleschScore, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
