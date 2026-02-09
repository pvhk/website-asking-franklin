import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Rocket, Check, ArrowRight, Clock, Zap, BarChart3, Globe } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

      {/* Use Cases */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">
                {lang === 'fr' ? 'Cas d\'usage' : 'Use cases'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {lang === 'fr' ? 'Qui va bénéficier d\'Autopilot ?' : 'Who will benefit from Autopilot?'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: lang === 'fr' ? 'Agences SEO' : 'SEO Agencies',
                  description: lang === 'fr'
                    ? 'Gérez le contenu de dizaines de clients simultanément sans sacrifier la qualité. Autopilot produit des articles optimisés en masse.'
                    : 'Manage content for dozens of clients simultaneously without sacrificing quality. Autopilot produces optimized articles at scale.',
                },
                {
                  icon: BarChart3,
                  title: lang === 'fr' ? 'E-commerce' : 'E-commerce',
                  description: lang === 'fr'
                    ? 'Créez automatiquement des fiches produits, guides d\'achat et contenus de catégorie optimisés pour le SEO et les IA.'
                    : 'Automatically create product pages, buying guides, and category content optimized for SEO and AI engines.',
                },
                {
                  icon: Globe,
                  title: lang === 'fr' ? 'Éditeurs de contenu' : 'Content Publishers',
                  description: lang === 'fr'
                    ? 'Publiez du contenu frais quotidiennement sur vos blogs et médias. Autopilot maintient un calendrier éditorial constant.'
                    : 'Publish fresh content daily across your blogs and media. Autopilot maintains a consistent editorial calendar.',
                },
              ].map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl border border-border bg-card">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Other Features */}
      <section className="py-24 border-t border-border bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="section-label mb-6">
              {lang === 'fr' ? 'Disponible maintenant' : 'Available now'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {lang === 'fr' ? 'En attendant, explorez nos fonctionnalités' : 'In the meantime, explore our features'}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <a href={lang === 'fr' ? '/fr/fonctionnalites/contenu-optimise' : '/features/write-optimized-content'} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {lang === 'fr' ? 'Contenu optimisé SEO & GEO' : 'SEO & GEO Optimized Content'}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {lang === 'fr' ? 'Rédigez du contenu qui se positionne sur Google et les moteurs IA.' : 'Write content that ranks on Google and AI engines.'}
              </p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                {lang === 'fr' ? 'Découvrir' : 'Learn more'} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a href={lang === 'fr' ? '/fr/fonctionnalites/donnees-insights' : '/features/data-insights'} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {lang === 'fr' ? 'Données & Insights SEO' : 'SEO Data & Insights'}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {lang === 'fr' ? 'Prenez des décisions basées sur les données avec 100+ métriques.' : 'Make data-driven decisions with 100+ metrics.'}
              </p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                {lang === 'fr' ? 'Découvrir' : 'Learn more'} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {pageContent.faq && pageContent.faq.items.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <p className="section-label mb-6">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {pageContent.faq.title}
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {pageContent.faq.items.map((item, index) => (
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
          </div>
        </section>
      )}

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
