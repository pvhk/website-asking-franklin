import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import {
  Search,
  Target,
  BarChart3,
  Sparkles,
  MessageSquare,
  FileText,
  Palette,
  Globe,
  ArrowRight,
  Check,
  Zap,
  Brain,
  PenTool,
} from 'lucide-react';

interface Props {
  lang: Language;
  content: SiteContent;
}

const getAnimationContent = (lang: Language) => [
  lang === 'fr' ? "Comment Franklin écrit vos articles" : "How Franklin Writes Your Articles",
  lang === 'fr'
    ? "Étape 1: Boire du café. Étape 2: Analyser Google. Étape 3: Écrire du contenu génial..."
    : "Step 1: Drink coffee. Step 2: Analyze Google. Step 3: Write awesome content...",
  lang === 'fr' ? "Pourquoi Franklin est meilleur qu'un stagiaire" : "Why Franklin Beats Your Intern",
  lang === 'fr'
    ? "Il ne demande jamais de pause, ne se plaint pas du WiFi, et son SEO est toujours au top."
    : "Never asks for breaks, doesn't complain about WiFi, and the SEO is always on point.",
];

const AIContentAnimation = ({ lang }: { lang: Language }) => {
  const [cycle, setCycle] = useState(0);
  const [texts, setTexts] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const content = getAnimationContent(lang);
    let isMounted = true;
    const typeText = async () => {
      // Reset all texts
      setTexts(['', '', '', '']);
      setActiveIndex(0);

      for (let i = 0; i < content.length; i++) {
        if (!isMounted) return;
        setActiveIndex(i);
        const text = content[i];
        for (let j = 0; j <= text.length; j++) {
          if (!isMounted) return;
          await new Promise((r) => setTimeout(r, 25));
          setTexts((prev) => {
            const newTexts = [...prev];
            newTexts[i] = text.slice(0, j);
            return newTexts;
          });
        }
        // Pause between lines
        await new Promise((r) => setTimeout(r, 500));
      }

      // Wait then restart
      await new Promise((r) => setTimeout(r, 3000));
      if (isMounted) setCycle((c) => c + 1);
    };

    typeText();
    return () => {
      isMounted = false;
    };
  }, [cycle, lang]);

  return (
    <div className="space-y-3 font-mono text-sm h-[180px]">
      <h3 className="text-lg font-bold text-primary h-7">
        {texts[0]}
        {activeIndex === 0 && <span className="animate-pulse">|</span>}
      </h3>
      <p className="text-muted-foreground leading-relaxed h-12">
        {texts[1]}
        {activeIndex === 1 && <span className="animate-pulse">|</span>}
      </p>
      <div className="pt-2">
        <h4 className="text-md font-semibold text-primary/80 h-6">
          {texts[2]}
          {activeIndex === 2 && <span className="animate-pulse">|</span>}
        </h4>
        <p className="text-muted-foreground text-xs mt-1 h-10">
          {texts[3]}
          {activeIndex === 3 && <span className="animate-pulse">|</span>}
        </p>
      </div>
    </div>
  );
};

export const FeatureOptimizedContent = ({ lang, content }: Props) => {
  const pageContent = content.features.optimizedContent;

  const featureBlocks = [
    {
      icon: Brain,
      title: lang === 'fr' ? 'Recherche & Analyse SERP' : 'SERP Research & Analysis',
      description: lang === 'fr'
        ? "Avant d'écrire, comprenez exactement ce que Google attend. Franklin analyse les 10 premiers résultats pour vous donner un avantage compétitif."
        : "Before writing, understand exactly what Google expects. Franklin analyzes the top 10 results to give you a competitive advantage.",
      features: lang === 'fr'
        ? [
            'Analyse automatique des 10 premiers résultats Google',
            'Extraction des mots-clés secondaires pertinents',
            'Identification des questions fréquentes (PAA)',
            'Benchmark de la longueur et structure optimales',
          ]
        : [
            'Automatic analysis of top 10 Google results',
            'Extraction of relevant secondary keywords',
            'Identification of frequently asked questions (PAA)',
            'Benchmark of optimal length and structure',
          ],
      gradient: 'from-violet-500/20 to-purple-500/20',
    },
    {
      icon: PenTool,
      title: lang === 'fr' ? 'Génération de contenu IA' : 'AI Content Generation',
      description: lang === 'fr'
        ? "Notre IA génère des articles complets, structurés et optimisés SEO. Vous gardez le contrôle total sur le ton, le style et les modifications."
        : "Our AI generates complete, structured, and SEO-optimized articles. You maintain full control over tone, style, and edits.",
      features: lang === 'fr'
        ? [
            'Plans d\'articles générés automatiquement',
            'Contenu unique et sans plagiat',
            'Respect de votre charte éditoriale',
            'Éditeur WYSIWYG intégré pour personnaliser',
          ]
        : [
            'Automatically generated article outlines',
            'Unique, plagiarism-free content',
            'Respects your editorial guidelines',
            'Built-in WYSIWYG editor for customization',
          ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Target,
      title: lang === 'fr' ? 'Optimisation SEO en temps réel' : 'Real-time SEO Optimization',
      description: lang === 'fr'
        ? "Pendant que vous écrivez, Franklin analyse votre contenu et vous guide pour maximiser vos chances de classement."
        : "As you write, Franklin analyzes your content and guides you to maximize your ranking potential.",
      features: lang === 'fr'
        ? [
            'Score SEO calculé instantanément',
            'Vérification de la densité des mots-clés',
            'Analyse de la structure (H1, H2, liens)',
            'Suggestions d\'amélioration personnalisées',
          ]
        : [
            'SEO score calculated instantly',
            'Keyword density verification',
            'Structure analysis (H1, H2, links)',
            'Personalized improvement suggestions',
          ],
      gradient: 'from-emerald-500/20 to-green-500/20',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{pageContent.label}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {pageContent.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pageContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-14 px-8 rounded-full group" asChild>
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {lang === 'fr' ? 'Essayer gratuitement' : 'Try it for free'}
                  <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      {featureBlocks.map((block, blockIndex) => {
        const Icon = block.icon;
        const isEven = blockIndex % 2 === 0;

        return (
          <section
            key={blockIndex}
            className={`py-24 ${blockIndex === 0 ? 'border-t' : ''} border-b border-border ${
              !isEven ? 'bg-secondary/30' : ''
            }`}
          >
            <div className="container">
              <div className={`grid gap-12 lg:gap-20 lg:grid-cols-2 items-center max-w-6xl mx-auto`}>
                {/* Text Content */}
                <div className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {lang === 'fr' ? `Étape ${blockIndex + 1}` : `Step ${blockIndex + 1}`}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {block.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {block.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border"
                      >
                        <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className={`relative rounded-3xl bg-gradient-to-br ${block.gradient} p-8 md:p-12`}>
                    <div className="absolute inset-0 rounded-3xl bg-card/80 backdrop-blur-sm border border-border"></div>
                    <div className="relative">
                      {blockIndex === 0 && (
                        <div className="space-y-4">
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                            {lang === 'fr' ? 'Analyse SERP pour' : 'SERP Analysis for'}
                          </div>
                          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                            <span className="text-lg font-semibold">"best project management tools"</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mt-6">
                            <div className="p-4 rounded-xl bg-card border border-border text-center">
                              <div className="text-2xl font-bold text-primary">2,400</div>
                              <div className="text-xs text-muted-foreground">{lang === 'fr' ? 'Volume mensuel' : 'Monthly volume'}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border text-center">
                              <div className="text-2xl font-bold text-primary">42</div>
                              <div className="text-xs text-muted-foreground">{lang === 'fr' ? 'Difficulté' : 'Difficulty'}</div>
                            </div>
                          </div>
                        </div>
                      )}
                      {blockIndex === 1 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <AIContentAnimation lang={lang} />
                        </div>
                      )}
                      {blockIndex === 2 && (
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{lang === 'fr' ? 'Score SEO' : 'SEO Score'}</span>
                            <span className="text-3xl font-bold text-primary">87/100</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full" style={{ width: '87%' }}></div>
                          </div>
                          <div className="space-y-2">
                            {[
                              { label: lang === 'fr' ? 'Mots' : 'Words', value: '1,847', ok: true },
                              { label: 'H1', value: '1', ok: true },
                              { label: 'H2', value: '6', ok: true },
                              { label: lang === 'fr' ? 'Mot-clé densité' : 'Keyword density', value: '2.1%', ok: true },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-card/50">
                                <span className="text-sm text-muted-foreground">{item.label}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium">{item.value}</span>
                                  <Check className="h-4 w-4 text-emerald-500" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CMS Integrations */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label mb-4">
              {lang === 'fr' ? 'Intégrations CMS' : 'CMS Integrations'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {lang === 'fr' ? 'Publiez directement sur votre CMS' : 'Publish directly to your CMS'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {lang === 'fr'
                ? 'Connectez votre CMS et publiez vos articles optimisés en un clic.'
                : 'Connect your CMS and publish your optimized articles with one click.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {/* WordPress */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <svg viewBox="0 0 120 120" className="h-8 w-8 text-[#21759b]" fill="currentColor">
                <g><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" /><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" /><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" /><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" /><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" /></g>
              </svg>
              <div>
                <p className="font-semibold">WordPress</p>
                <p className="text-xs text-green-600 font-medium">{lang === 'fr' ? 'Disponible' : 'Available'}</p>
              </div>
            </div>
            {/* Webflow */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 opacity-75">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#4353ff]" fill="currentColor">
                <path d="M17.802 8.56s-1.946 6.027-2.087 6.498c-.047-.404-.907-6.498-.907-6.498s-2.502-.009-2.502-.009l-1.755 5.707c-.043-.32-.576-5.707-.576-5.707H7.063l1.403 8.86h2.825l1.604-5.203c.058.404.754 5.203.754 5.203h2.799l3.49-8.851h-2.136z"/>
              </svg>
              <div>
                <p className="font-semibold text-muted-foreground">Webflow</p>
                <p className="text-xs text-amber-600 font-medium">{lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}</p>
              </div>
            </div>
            {/* Strapi */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 opacity-75">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#4945ff]" fill="currentColor">
                <path d="M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0 0 23.484 0zm-.5 8.035H.126l7.058 7.058zM15.96 16.32v7.058L23 16.32zm-8.777 0a.502.502 0 0 0-.498.502v6.676h6.676c.28 0 .503-.222.503-.502V16.32z"/>
              </svg>
              <div>
                <p className="font-semibold text-muted-foreground">Strapi</p>
                <p className="text-xs text-amber-600 font-medium">{lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}</p>
              </div>
            </div>
            {/* Custom */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 opacity-75">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              <div>
                <p className="font-semibold text-muted-foreground">Custom API</p>
                <p className="text-xs text-amber-600 font-medium">{lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background">
        <div className="container py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {pageContent.cta.title}
            </h2>
            <p className="text-xl text-background/70">
              {pageContent.cta.description}
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {pageContent.cta.button}
                <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
