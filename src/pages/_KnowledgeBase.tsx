import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { withBase } from '@/lib/baseUrl';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface KnowledgeBaseProps {
  lang: Language;
  content: SiteContent;
}

export const KnowledgeBase = ({ lang, content }: KnowledgeBaseProps) => {
  const kb = content.knowledgeBase;
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge className="bg-accent text-accent-foreground border-0 px-4 py-1.5">
              <BookOpen className="h-4 w-4 mr-2" />
              {lang === 'fr' ? '📚 Centre de connaissances' : '📚 Knowledge Center'}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {kb.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {kb.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {kb.articles.map((article) => {
            const articleUrl = withBase(
              lang === 'fr' 
                ? `/fr/base-de-connaissances/${article.slug}` 
                : `/knowledge-base/${article.slug}`
            );
            
            return (
              <Card
                key={article.slug}
                className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer border-border"
              >
                <a href={articleUrl} className="block">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      {article.readTime && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lang === 'fr'
                ? 'Prêt à créer du contenu qui performe ?'
                : 'Ready to create content that performs?'}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {lang === 'fr'
                ? 'Essayez Asking Franklin gratuitement pendant 7 jours.'
                : 'Try Asking Franklin free for 7 days.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.askingfranklin.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-xl"
              >
                {lang === 'fr' ? 'Commencer gratuitement' : 'Start free trial'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

