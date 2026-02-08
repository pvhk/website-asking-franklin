import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import {
  TrendingUp,
  BarChart3,
  Sparkles,
  Users,
  Search,
  Lightbulb,
  PieChart,
  History,
  ArrowRight,
  Check,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from 'lucide-react';

interface Props {
  lang: Language;
  content: SiteContent;
}

export const FeatureDataInsights = ({ lang, content }: Props) => {
  const pageContent = content.features.dataInsights;

  const featureBlocks = [
    {
      icon: Search,
      title: lang === 'fr' ? 'Analyse de mots-clés' : 'Keyword Analysis',
      description: lang === 'fr'
        ? "Découvrez les mots-clés sur lesquels vous vous positionnez et identifiez de nouvelles opportunités de croissance."
        : "Discover the keywords you rank for and identify new growth opportunities.",
      features: lang === 'fr'
        ? [
            'Volume de recherche mensuel estimé',
            'Score de difficulté de positionnement',
            'Tendances saisonnières',
            'Suggestions de mots-clés connexes',
          ]
        : [
            'Estimated monthly search volume',
            'Ranking difficulty score',
            'Seasonal trends',
            'Related keyword suggestions',
          ],
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      icon: TrendingUp,
      title: lang === 'fr' ? 'Suivi de positions' : 'Position Tracking',
      description: lang === 'fr'
        ? "Surveillez l'évolution de vos classements Google semaine après semaine et identifiez les tendances."
        : "Monitor your Google rankings week over week and identify trends.",
      features: lang === 'fr'
        ? [
            '12 buckets de position (Top 1, 2-3, 4-10...)',
            'Détection des gains et pertes de position',
            'Historique des mouvements',
            'Alertes sur les changements importants',
          ]
        : [
            '12 position buckets (Top 1, 2-3, 4-10...)',
            'Detection of position gains and losses',
            'Movement history',
            'Alerts on significant changes',
          ],
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Lightbulb,
      title: lang === 'fr' ? 'Opportunités SEO' : 'SEO Opportunities',
      description: lang === 'fr'
        ? "Franklin identifie automatiquement les mots-clés à fort potentiel que vous devriez cibler."
        : "Franklin automatically identifies high-potential keywords you should target.",
      features: lang === 'fr'
        ? [
            'Score d\'opportunité calculé par IA',
            'Analyse de la concurrence SERP',
            'Estimation du trafic potentiel',
            'Recommandations d\'articles à créer',
          ]
        : [
            'AI-calculated opportunity score',
            'SERP competition analysis',
            'Potential traffic estimation',
            'Article creation recommendations',
          ],
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <BarChart3 className="h-4 w-4 text-primary" />
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

      {/* Stats Highlight */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">
                {lang === 'fr' ? 'Métriques par domaine' : 'Metrics per domain'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">
                {lang === 'fr' ? 'Données par mot-clé' : 'Data points per keyword'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">
                {lang === 'fr' ? 'Buckets de position' : 'Position buckets'}
              </div>
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
            className={`py-24 border-b border-border ${!isEven ? 'bg-secondary/30' : ''}`}
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
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                            {lang === 'fr' ? 'Analyse du mot-clé' : 'Keyword Analysis'}
                          </div>
                          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                            <span className="text-lg font-semibold">"content marketing strategy"</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
                              <span className="text-sm text-muted-foreground">{lang === 'fr' ? 'Volume' : 'Volume'}</span>
                              <span className="font-semibold">8,100 / {lang === 'fr' ? 'mois' : 'mo'}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
                              <span className="text-sm text-muted-foreground">{lang === 'fr' ? 'Difficulté' : 'Difficulty'}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                  <div className="w-3/5 h-full bg-amber-500 rounded-full"></div>
                                </div>
                                <span className="font-semibold">58</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
                              <span className="text-sm text-muted-foreground">CPC</span>
                              <span className="font-semibold">$4.20</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {blockIndex === 1 && (
                        <div className="space-y-6">
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                            {lang === 'fr' ? 'Distribution des positions' : 'Position Distribution'}
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { pos: 'Top 1', count: 12, color: 'bg-primary' },
                              { pos: '2-3', count: 28, color: 'bg-primary/80' },
                              { pos: '4-10', count: 45, color: 'bg-primary/60' },
                              { pos: '11-20', count: 67, color: 'bg-primary/40' },
                            ].map((item) => (
                              <div key={item.pos} className="text-center p-3 rounded-xl bg-card border border-border">
                                <div className={`w-full h-2 ${item.color} rounded-full mb-2`}></div>
                                <div className="text-lg font-bold">{item.count}</div>
                                <div className="text-xs text-muted-foreground">{item.pos}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border mt-4">
                            <div className="flex items-center gap-2">
                              <ArrowUpRight className="h-5 w-5 text-emerald-500" />
                              <span className="text-sm">{lang === 'fr' ? 'Gains cette semaine' : 'Gains this week'}</span>
                            </div>
                            <span className="text-lg font-bold text-emerald-500">+18</span>
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                            <div className="flex items-center gap-2">
                              <ArrowDownRight className="h-5 w-5 text-red-500" />
                              <span className="text-sm">{lang === 'fr' ? 'Pertes cette semaine' : 'Losses this week'}</span>
                            </div>
                            <span className="text-lg font-bold text-red-500">-5</span>
                          </div>
                        </div>
                      )}
                      {blockIndex === 2 && (
                        <div className="space-y-4">
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                            {lang === 'fr' ? 'Opportunités détectées' : 'Detected Opportunities'}
                          </div>
                          {[
                            { keyword: 'email marketing automation', score: 87, volume: '3.2K' },
                            { keyword: 'social media calendar', score: 72, volume: '5.1K' },
                            { keyword: 'B2B lead generation', score: 65, volume: '2.8K' },
                          ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-card border border-border">
                              <div className="flex items-start justify-between mb-2">
                                <span className="font-medium text-sm">{item.keyword}</span>
                                <span className="text-xs text-muted-foreground">{item.volume}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full"
                                    style={{ width: `${item.score}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-semibold text-primary">{item.score}</span>
                              </div>
                            </div>
                          ))}
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

      {/* Position Buckets Visual */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">
                {lang === 'fr' ? 'Suivi granulaire' : 'Granular Tracking'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {lang === 'fr'
                  ? '12 buckets pour une vision complète'
                  : '12 buckets for complete visibility'}
              </h2>
              <p className="text-muted-foreground text-lg">
                {lang === 'fr'
                  ? 'Visualisez la distribution de vos positions et surveillez chaque mouvement.'
                  : 'Visualize your position distribution and monitor every movement.'}
              </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
              {['Top 1', '2-3', '4-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'].map(
                (bucket, index) => (
                  <div
                    key={bucket}
                    className={`p-4 rounded-xl text-center border transition-all hover:scale-105 ${
                      index === 0
                        ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                        : index < 3
                        ? 'bg-primary/20 border-primary/30'
                        : 'bg-card border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="text-sm font-medium">{bucket}</div>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted-foreground">
                  {lang === 'fr' ? 'Nouveau' : 'New'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-muted-foreground">
                  {lang === 'fr' ? 'En hausse' : 'Up'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm text-muted-foreground">
                  {lang === 'fr' ? 'En baisse' : 'Down'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-muted-foreground">
                  {lang === 'fr' ? 'Perdu' : 'Lost'}
                </span>
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
