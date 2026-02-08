import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Rocket, Check, ArrowRight, Clock } from 'lucide-react';

interface Props {
  lang: Language;
  content: SiteContent;
}

export const FeatureAutopilot = ({ lang, content }: Props) => {
  const pageContent = content.features.autopilot;

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{pageContent.label}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {pageContent.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pageContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">
                {lang === 'fr' ? "Ce qui arrive" : "What's coming"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {lang === 'fr'
                  ? 'Automatisation complète de votre contenu'
                  : 'Complete content automation'}
              </h2>
            </div>

            <div className="space-y-4">
              {pageContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Teaser */}
      <section className="py-24 border-t border-border bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl border-2 border-dashed border-border bg-card/50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">
                  {lang === 'fr'
                    ? 'Bientôt disponible'
                    : 'Coming soon'}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {lang === 'fr'
                    ? "Nous travaillons dur pour vous apporter l'automatisation de contenu la plus intelligente. Inscrivez-vous pour être notifié du lancement."
                    : "We're working hard to bring you the smartest content automation. Sign up to be notified when we launch."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-8 rounded-full group" asChild>
                    <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                      {pageContent.cta.button}
                      <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meanwhile CTA */}
      <section className="bg-foreground text-background">
        <div className="container py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {lang === 'fr'
                ? 'En attendant, commencez dès maintenant'
                : 'Meanwhile, get started today'}
            </h2>
            <p className="text-xl text-background/70">
              {lang === 'fr'
                ? 'Créez du contenu optimisé SEO avec Franklin et préparez-vous pour le mode Autopilot.'
                : 'Create SEO-optimized content with Franklin and get ready for Autopilot mode.'}
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? 'Essayer gratuitement' : 'Try free for 7 days'}
                <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
