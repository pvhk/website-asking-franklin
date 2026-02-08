import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { withBase } from '@/lib/baseUrl';
import { ArrowRight, Clock } from 'lucide-react';

interface KnowledgeBaseProps {
  lang: Language;
  content: SiteContent;
}

export const KnowledgeBase = ({ lang, content }: KnowledgeBaseProps) => {
  const kb = content.knowledgeBase;

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="section-label">
              {lang === 'fr' ? 'Ressources' : 'Resources'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {kb.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {kb.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="container pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {kb.articles.map((article) => {
            const articleUrl = withBase(
              lang === 'fr'
                ? `/fr/base-de-connaissances/${article.slug}`
                : `/knowledge-base/${article.slug}`
            );

            return (
              <a key={article.slug} href={articleUrl} className="block group">
                <Card className="h-full border-border hover-lift bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      {article.readTime && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {lang === 'fr' ? 'Prêt à créer du contenu ?' : 'Ready to create content?'}
            </h2>
            <p className="text-xl text-background/70">
              {lang === 'fr'
                ? 'Essayez Asking Franklin gratuitement.'
                : 'Try Asking Franklin for free.'}
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? 'Commencer gratuitement' : 'Start free trial'}
                <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
