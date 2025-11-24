import { withBase } from '@/lib/baseUrl';
import { withBaseImage } from '@/lib/baseUrl';
// Layout removed - using Astro layout
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/NewsletterForm';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { ArrowRight, Search, Sparkles, Zap, MessageSquare, TrendingUp, Star } from 'lucide-react';
import quentinImage from '@/assets/quentin-barjon.jpeg';
import marletImage from '@/assets/marlet-kervolin.jpeg';
import benoitImage from '@/assets/benoit-gaillat.jpeg';
import logo3DNatives from '@/assets/logos/3d-natives.png';
import logoFrenchTech from '@/assets/logos/french-tech.png';
import logoArgos from '@/assets/logos/argos-veterinaire.png';
import logoJDC from '@/assets/logos/jdc-logo.png';
import logoPikka from '@/assets/logos/pikka.png';
import logoSudOuest from '@/assets/logos/sud-ouest.png';
import logoKaboom from '@/assets/logos/kaboom-kitchen.png';
import logoUrgo from '@/assets/logos/urgo.png';
import blogTop10Techniques from '@/assets/blog/top-10-techniques-redaction-web.jpg';
import blog3Secrets from '@/assets/blog/3-secrets-excellent-redacteur.jpg';
import blog3Etapes from '@/assets/blog/3-etapes-contenu-engage.jpg';
import step0Image from '@/assets/Step0-Keywords-opportunities.webp';
import step1Image from '@/assets/step1-keyword.png';
import step2Image from '@/assets/step2-serp.webp';
import step3Image from '@/assets/step3-plan.png';
import step4Image from '@/assets/step4-article.png';
interface HomeProps {
  lang: Language;
  content: SiteContent;
}
export const Home = ({
  lang,
  content
}: HomeProps) => {
  const currentPath = lang === 'fr' ? '/fr' : '/';

  return (
    <>
      {/* Hero Section - 2 Column Layout */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-6 animate-fade-in-up">
              <Badge className="w-fit bg-accent text-accent-foreground border-0 px-4 py-1.5 text-sm font-medium">
                {lang === 'fr' ? '🚀 Assistant IA SEO nouvelle génération' : '🚀 Next-gen AI SEO Assistant'}
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                {content.home.hero.title}
              </h1>
              
              <div className="max-w-2xl space-y-4">
                {lang === 'fr' ? (
                  <>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Vous passez des heures à créer du contenu... <span className="text-foreground font-semibold">sans générer le trafic que vous méritez ?</span>
                    </p>
                    
                    <p className="text-xl md:text-2xl leading-relaxed">
                      <span className="text-primary font-bold">Asking Franklin</span> <span className="text-foreground font-medium">est l'assistant IA de rédaction SEO qui change la donne.</span>
                    </p>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Notre outil <span className="text-foreground font-medium">analyse ce que cherchent réellement vos clients</span>, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans <span className="text-foreground font-semibold">Google</span> ET deviennent des sources de référence pour les IA génératives comme <span className="text-foreground font-semibold">ChatGPT, Perplexity et Gemini</span>.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Spending hours creating content... <span className="text-foreground font-semibold">without generating the traffic you deserve?</span>
                    </p>
                    
                    <p className="text-xl md:text-2xl leading-relaxed">
                      <span className="text-primary font-bold">Asking Franklin</span> <span className="text-foreground font-medium">is the AI SEO writing assistant that changes the game.</span>
                    </p>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Our tool <span className="text-foreground font-medium">analyzes what your customers are really searching for</span>, detects untapped opportunities, and helps you create content that ranks in <span className="text-foreground font-semibold">Google</span> AND becomes a reference source for generative AI like <span className="text-foreground font-semibold">ChatGPT, Perplexity, and Gemini</span>.
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="shadow-primary text-base" asChild>
                  <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                    {content.home.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href={withBase(lang === 'fr' ? '/fr/tarifs' : '/pricing')}>
                    {lang === 'fr' ? 'Voir les tarifs' : 'View pricing'}
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background h-10 w-10">
                    <AvatarImage src={withBaseImage(quentinImage)} />
                    <AvatarFallback>QB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-10 w-10">
                    <AvatarImage src={withBaseImage(marletImage)} />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-10 w-10">
                    <AvatarImage src={withBaseImage(benoitImage)} />
                    <AvatarFallback>BG</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'fr' ? 'Utilisé par 300+ rédacteurs' : 'Used by 300+ writers'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Video Demo */}
            <div className="relative animate-fade-in-up lg:animate-float">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/ZB95aUZp-Hs" title="Asking Franklin Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logos Section */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="container">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">
            {lang === 'fr' ? 'Ils nous font confiance' : 'Trusted by'}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              <div className="flex items-center justify-around min-w-full gap-12 px-4">
                <img src={withBaseImage(logo3DNatives)} alt="3D Natives" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoFrenchTech)} alt="French Tech" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoArgos)} alt="Argos Vétérinaire" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoJDC)} alt="JDC" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoPikka)} alt="Pikka" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoSudOuest)} alt="Sud Ouest" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoKaboom)} alt="Kaboom Kitchen" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                
              </div>
              <div className="flex items-center justify-around min-w-full gap-12 px-4">
                <img src={withBaseImage(logo3DNatives)} alt="3D Natives" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoFrenchTech)} alt="French Tech" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoArgos)} alt="Argos Vétérinaire" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoJDC)} alt="JDC" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoPikka)} alt="Pikka" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoSudOuest)} alt="Sud Ouest" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoKaboom)} alt="Kaboom Kitchen" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                <img src={withBaseImage(logoUrgo)} alt="Urgo" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            {content.home.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.home.howItWorks.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {content.home.howItWorks.features.map((feature, index) => {
          const icons = [Search, Sparkles, Zap, MessageSquare, TrendingUp];
          const IconComponent = icons[index];
          return <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Steps with Images */}
        <div className="space-y-24 mt-24">
          {content.home.howItWorks.steps.map((step, index) => {
          const stepImages = [step0Image, step1Image, step2Image, step3Image, step4Image];
          const isEven = index % 2 === 0;
          return <div key={index} className={`grid gap-12 lg:grid-cols-2 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${!isEven ? 'lg:order-2' : ''} space-y-6`}>
                  <div className="inline-block">
                    <Badge className="text-sm font-semibold px-3 py-1">
                      {lang === 'fr' ? `Étape ${index + 1}` : `Step ${index + 1}`}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <Button variant="outline" className="group" asChild>
                      <a href={step.ctaUrl || "https://app.askingfranklin.com/register"} target="_blank" rel="noopener noreferrer">
                        {step.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </div>
                
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  {index === 4 ? (
                    <div className="relative px-8 pt-0 pb-0 overflow-visible">
                      <div className="absolute top-0 left-0 right-0 bottom-16 rounded-2xl shadow-xl border border-border bg-transparent" />
                      <img src={withBaseImage(stepImages[index])} alt={step.title} className="relative w-full h-auto scale-[1.18] translate-y-4" />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-muted">
                      <img src={withBaseImage(stepImages[index])} alt={step.title} className="w-full h-auto" />
                    </div>
                  )}
                </div>
              </div>;
        })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-accent py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {content.home.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {lang === 'fr' ? 'Découvrez ce que nos utilisateurs disent de nous' : 'See what our users say about us'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {content.home.testimonials.items.map((testimonial, index) => {
            const images = [quentinImage, marletImage, benoitImage];
            return <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={withBaseImage(images[index])} />
                        <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container py-20 md:py-28">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
              {content.home.blog.title}
            </h2>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <a href="https://blog.askingfranklin.com/" target="_blank" rel="noopener noreferrer">
              {lang === 'fr' ? 'Voir tous les articles' : 'View all articles'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {content.home.blog.items.map((post, index) => {
          const images = [blogTop10Techniques, blog3Secrets, blog3Etapes];
          return <Card key={index} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={withBaseImage(images[index])} alt={post.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Blog
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {lang === 'fr' ? 'Lire l\'article' : 'Read article'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <a href="https://blog.askingfranklin.com/" target="_blank" rel="noopener noreferrer">
              {lang === 'fr' ? 'Voir tous les articles' : 'View all articles'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-accent border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary text-primary-foreground">
                {lang === 'fr' ? '📧 Newsletter exclusive' : '📧 Exclusive newsletter'}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {lang === 'fr' ? 'La Dépêche - Newsletter SEO' : 'The Dispatch - SEO Newsletter'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {lang === 'fr' 
                  ? "Recevez chaque mois nos meilleurs conseils content, les dernières tendances IA en content marketing et SEO."
                  : 'Receive our best content tips, the latest AI trends in content marketing and SEO every month.'}
              </p>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {lang === 'fr'
                  ? "En bref, que des tips actionnables dénichés par l'équipe d'Asking Franklin !"
                  : "In short, only actionable tips uncovered by the Asking Franklin team!"}
              </p>
              <ul className="space-y-2">
                {(lang === 'fr' 
                  ? ['Ici, no bullshit.', 'Pas de veille classique,', 'que des découvertes,', "des retours d'expériences..."]
                  : ['Here, no bullshit.', 'No classic monitoring,', 'only discoveries,', 'feedback...']).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <NewsletterForm lang={lang} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {content.home.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {lang === 'fr' ? 'Tout ce que vous devez savoir sur Asking Franklin' : 'Everything you need to know about Asking Franklin'}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {content.home.faq.items.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {lang === 'fr' ? 'Prêt à transformer votre stratégie SEO ?' : 'Ready to transform your SEO strategy?'}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {lang === 'fr' ? 'Rejoignez des centaines de rédacteurs et marketeurs qui utilisent Asking Franklin pour créer du contenu qui performe.' : 'Join hundreds of writers and marketers using Asking Franklin to create high-performing content.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base shadow-xl" asChild>
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {content.home.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href={withBase(lang === 'fr' ? '/fr/tarifs' : '/pricing')}>
                  {lang === 'fr' ? 'Voir les tarifs' : 'View pricing'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};