import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingProps {
  lang: Language;
  content: SiteContent;
}

export const Pricing = ({ lang, content }: PricingProps) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const currentPath = lang === 'fr' ? '/fr/tarifs' : '/pricing';

  // Prepare products data for schema.org
  const productsData = content.pricing.plans.map((plan) => ({
    name: plan.name,
    description: plan.description,
    price: billingPeriod === 'annual' ? plan.priceAnnual : plan.price,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge className="bg-accent text-accent-foreground border-0 px-4 py-1.5">
              {lang === 'fr' ? '💰 Tarification simple et transparente' : '💰 Simple, transparent pricing'}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {content.pricing.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {content.pricing.subtitle}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-secondary rounded-xl shadow-md">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? 'Mensuel' : 'Monthly'}
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-primary-foreground shadow-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? 'Annuel' : 'Annual'}
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                  {lang === 'fr' ? '-20%' : '-20%'}
                </Badge>
              </button>
            </div>
            {billingPeriod === 'annual' && (
              <p className="text-sm text-primary font-medium animate-fade-in-up">
                {lang === 'fr' ? '🎉 Économisez 2 mois en payant annuellement' : '🎉 Save 2 months by paying annually'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {content.pricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'border-primary shadow-primary bg-gradient-accent'
                  : 'border-border hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 text-sm font-bold shadow-lg">
                    {lang === 'fr' ? '⭐ Le plus populaire' : '⭐ Most popular'}
                  </Badge>
                </div>
              )}

              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
                </div>

                <div>
                  {billingPeriod === 'annual' && plan.priceAnnualStrikethrough && (
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {plan.priceAnnualStrikethrough}
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {billingPeriod === 'monthly' ? plan.price : plan.priceAnnual}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {billingPeriod === 'monthly'
                        ? plan.period
                        : lang === 'fr'
                        ? '/12 mois'
                        : '/12 months'}
                    </span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {lang === 'fr' ? 'Facturé en une fois' : 'Billed once'}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.highlighted ? 'shadow-primary' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>
              {lang === 'fr'
                ? 'Noté 4.9/5 par nos utilisateurs'
                : 'Rated 4.9/5 by our users'}
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-accent py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {content.pricing.faq.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {lang === 'fr'
                  ? 'Questions fréquentes sur nos tarifs'
                  : 'Frequently asked questions about pricing'}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {content.pricing.faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lang === 'fr'
                ? 'Prêt à améliorer votre SEO ?'
                : 'Ready to improve your SEO?'}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {lang === 'fr'
                ? 'Essayez Asking Franklin gratuitement pendant 7 jours, sans engagement.'
                : 'Try Asking Franklin free for 7 days, no commitment required.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {lang === 'fr' ? 'Commencer gratuitement' : 'Start free trial'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
