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

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <p className="section-label">
              {lang === 'fr' ? 'Tarification' : 'Pricing'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {content.pricing.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {content.pricing.subtitle}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-card border border-border rounded-full">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? 'Mensuel' : 'Monthly'}
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? 'Annuel' : 'Annual'}
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container pb-32">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {content.pricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative hover-lift bg-card ${
                plan.highlighted ? 'border-2 border-primary' : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-full">
                    {lang === 'fr' ? 'Populaire' : 'Popular'}
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  {billingPeriod === 'annual' && plan.priceAnnualStrikethrough && (
                    <div className="text-sm text-muted-foreground line-through">
                      {plan.priceAnnualStrikethrough}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">
                      {billingPeriod === 'monthly' ? plan.price : plan.priceAnnual}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {billingPeriod === 'monthly' ? plan.period : lang === 'fr' ? '/an' : '/year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  className="w-full rounded-full h-12"
                  variant={plan.highlighted ? 'default' : 'outline'}
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

        {/* Trust */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>{lang === 'fr' ? 'Noté 4.9/5' : 'Rated 4.9/5'}</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {content.pricing.faq.title}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {content.pricing.faq.items.map((item, index) => (
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

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {lang === 'fr' ? 'Prêt à dominer Google ?' : 'Ready to dominate Google?'}
            </h2>
            <p className="text-xl text-background/70">
              {lang === 'fr'
                ? 'Essayez gratuitement pendant 7 jours.'
                : 'Try free for 7 days.'}
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
