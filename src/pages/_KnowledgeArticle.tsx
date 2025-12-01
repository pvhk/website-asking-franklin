import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Language } from '@/lib/i18n';
import { withBase } from '@/lib/baseUrl';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface KnowledgeArticleProps {
  lang: Language;
}

export const KnowledgeArticle = ({ lang }: KnowledgeArticleProps) => {
  const isEnglish = lang === 'en';
  const backUrl = withBase(lang === 'fr' ? '/fr/base-de-connaissances' : '/knowledge-base');
  
  return (
    <>
      {/* Breadcrumb */}
      <section className="container py-6">
        <a
          href={backUrl}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {isEnglish ? 'Back to Knowledge Base' : 'Retour à la Base de Connaissances'}
        </a>
      </section>

      {/* Article Header */}
      <section className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-accent text-accent-foreground border-0 px-4 py-1.5">
            <BookOpen className="h-4 w-4 mr-2" />
            {isEnglish ? 'Getting Started' : 'Démarrage'}
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {isEnglish 
              ? 'Getting Started with Asking Franklin'
              : 'Débuter avec Asking Franklin'
            }
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{isEnglish ? 'December 1, 2025' : '1 décembre 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{isEnglish ? '5 min read' : '5 min de lecture'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container py-8 md:py-12">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          {isEnglish ? (
            <>
              <p className="lead">
                Welcome to Asking Franklin! This guide will walk you through everything you need to know to start creating 
                SEO-optimized content that ranks in Google and becomes a reference for AI assistants like ChatGPT, Perplexity, and Gemini.
              </p>

              <h2>What is Asking Franklin?</h2>
              <p>
                Asking Franklin is an AI-powered SEO content creation assistant designed to help you produce high-quality, 
                optimized content quickly and efficiently. Unlike traditional AI writing tools, Asking Franklin:
              </p>
              <ul>
                <li>Analyzes real-time search intent to understand what your audience is looking for</li>
                <li>Examines top-ranking content (SERP analysis) to identify SEO opportunities</li>
                <li>Optimizes for both traditional SEO and Large Language Models (LLMs)</li>
                <li>Acts as a conversational assistant that learns from your expertise</li>
              </ul>

              <h2>Getting Started: Your First Article</h2>
              <p>
                Creating your first article with Asking Franklin is simple. Follow these steps to get started:
              </p>

              <h3>Step 1: Choose Your Keyword</h3>
              <p>
                Start by entering the main keyword or topic you want to write about. Asking Franklin will analyze this keyword 
                to discover:
              </p>
              <ul>
                <li>Search volumes and competition levels</li>
                <li>Related keywords and topics</li>
                <li>Questions people are asking</li>
                <li>Trending searches in your niche</li>
              </ul>

              <h3>Step 2: Review Search Intent Analysis</h3>
              <p>
                Asking Franklin automatically analyzes the search intent behind your keyword. This analysis shows you:
              </p>
              <ul>
                <li>What type of content users are looking for (informational, transactional, navigational)</li>
                <li>Common questions and pain points</li>
                <li>Content formats that perform well</li>
              </ul>

              <h3>Step 3: Examine SERP Analysis</h3>
              <p>
                The tool analyzes the top 10 search results for your keyword to identify:
              </p>
              <ul>
                <li>Content structures that rank well</li>
                <li>Key topics covered by competitors</li>
                <li>Gaps and opportunities in existing content</li>
                <li>Optimal content length and format</li>
              </ul>

              <h3>Step 4: Generate Your Article Plan</h3>
              <p>
                Based on the analysis, Asking Franklin creates a comprehensive article plan that includes:
              </p>
              <ul>
                <li>An optimized content structure with headings and subheadings</li>
                <li>Key topics to cover</li>
                <li>Recommended sections based on SERP analysis</li>
                <li>SEO optimization suggestions</li>
              </ul>

              <h3>Step 5: Create Your Content</h3>
              <p>
                With your plan ready, Asking Franklin generates your article. You can:
              </p>
              <ul>
                <li>Generate the entire article automatically</li>
                <li>Edit sections and provide specific instructions</li>
                <li>Add your expertise and unique insights</li>
                <li>Request revisions or expansions on specific points</li>
              </ul>

              <h2>Working with the Franklin Assistant</h2>
              <p>
                One of Asking Franklin's most powerful features is its conversational AI assistant. Think of it as a 
                collaborative writing partner that:
              </p>
              <ul>
                <li>Understands context from your previous instructions</li>
                <li>Adapts its writing style to match your brand voice</li>
                <li>Incorporates your expertise and specific requirements</li>
                <li>Helps you refine and improve content iteratively</li>
              </ul>

              <h2>SEO Optimization Features</h2>
              <p>
                Asking Franklin includes comprehensive SEO optimization tools:
              </p>
              
              <h3>E-E-A-T Optimization</h3>
              <p>
                The tool helps you demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness by:
              </p>
              <ul>
                <li>Suggesting credible sources and references</li>
                <li>Identifying areas where you can showcase expertise</li>
                <li>Recommending trust signals to include</li>
              </ul>

              <h3>Technical SEO</h3>
              <p>
                Asking Franklin handles technical SEO elements including:
              </p>
              <ul>
                <li>Proper heading structure (H1, H2, H3)</li>
                <li>Meta descriptions and title tags</li>
                <li>Internal linking suggestions</li>
                <li>Schema markup recommendations</li>
              </ul>

              <h2>LLM Optimization</h2>
              <p>
                Beyond traditional SEO, Asking Franklin optimizes your content to become a reference source for AI assistants 
                like ChatGPT and Perplexity. This means:
              </p>
              <ul>
                <li>Structuring information in ways LLMs can easily reference</li>
                <li>Including clear, authoritative statements</li>
                <li>Providing comprehensive coverage of topics</li>
                <li>Using proper citations and data</li>
              </ul>

              <h2>Best Practices</h2>
              <p>
                To get the most out of Asking Franklin:
              </p>
              <ul>
                <li><strong>Be specific with instructions:</strong> The more context you provide, the better the results</li>
                <li><strong>Iterate and refine:</strong> Use the conversational assistant to polish your content</li>
                <li><strong>Add your expertise:</strong> Let the AI handle structure while you add unique insights</li>
                <li><strong>Review and edit:</strong> Always review AI-generated content and add your personal touch</li>
                <li><strong>Test different approaches:</strong> Experiment with different keywords and content angles</li>
              </ul>

              <h2>Next Steps</h2>
              <p>
                Now that you understand the basics, you're ready to start creating great content! Here's what to do next:
              </p>
              <ol>
                <li>Sign up for a free 7-day trial at <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">app.askingfranklin.com</a></li>
                <li>Choose your first keyword and explore the analysis features</li>
                <li>Generate your first article and see the results</li>
                <li>Explore advanced features like WordPress integration and multi-domain tracking</li>
              </ol>

              <p>
                Have questions? Check out our other knowledge base articles or contact our support team at{' '}
                <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>
              </p>
            </>
          ) : (
            <>
              <p className="lead">
                Bienvenue sur Asking Franklin ! Ce guide vous explique tout ce que vous devez savoir pour commencer à créer 
                du contenu optimisé SEO qui se positionne dans Google et devient une référence pour les assistants IA comme 
                ChatGPT, Perplexity et Gemini.
              </p>

              <h2>Qu'est-ce qu'Asking Franklin ?</h2>
              <p>
                Asking Franklin est un assistant de création de contenu SEO alimenté par l'IA, conçu pour vous aider à produire 
                du contenu de haute qualité et optimisé rapidement et efficacement. Contrairement aux outils d'écriture IA 
                traditionnels, Asking Franklin :
              </p>
              <ul>
                <li>Analyse l'intention de recherche en temps réel pour comprendre ce que votre audience recherche</li>
                <li>Examine le contenu le mieux classé (analyse SERP) pour identifier les opportunités SEO</li>
                <li>Optimise à la fois pour le SEO traditionnel et les grands modèles de langage (LLMs)</li>
                <li>Agit comme un assistant conversationnel qui apprend de votre expertise</li>
              </ul>

              <h2>Démarrage : Votre Premier Article</h2>
              <p>
                Créer votre premier article avec Asking Franklin est simple. Suivez ces étapes pour commencer :
              </p>

              <h3>Étape 1 : Choisissez Votre Mot-Clé</h3>
              <p>
                Commencez par entrer le mot-clé principal ou le sujet sur lequel vous souhaitez écrire. Asking Franklin 
                analysera ce mot-clé pour découvrir :
              </p>
              <ul>
                <li>Les volumes de recherche et les niveaux de concurrence</li>
                <li>Les mots-clés et sujets connexes</li>
                <li>Les questions que les gens posent</li>
                <li>Les recherches tendances dans votre niche</li>
              </ul>

              <h3>Étape 2 : Consultez l'Analyse de l'Intention de Recherche</h3>
              <p>
                Asking Franklin analyse automatiquement l'intention de recherche derrière votre mot-clé. Cette analyse vous montre :
              </p>
              <ul>
                <li>Le type de contenu que les utilisateurs recherchent (informationnel, transactionnel, navigationnel)</li>
                <li>Les questions et points de douleur courants</li>
                <li>Les formats de contenu qui fonctionnent bien</li>
              </ul>

              <h3>Étape 3 : Examinez l'Analyse SERP</h3>
              <p>
                L'outil analyse les 10 premiers résultats de recherche pour votre mot-clé afin d'identifier :
              </p>
              <ul>
                <li>Les structures de contenu qui se classent bien</li>
                <li>Les sujets clés couverts par les concurrents</li>
                <li>Les lacunes et opportunités dans le contenu existant</li>
                <li>La longueur et le format de contenu optimaux</li>
              </ul>

              <h3>Étape 4 : Générez Votre Plan d'Article</h3>
              <p>
                Sur la base de l'analyse, Asking Franklin crée un plan d'article complet qui comprend :
              </p>
              <ul>
                <li>Une structure de contenu optimisée avec titres et sous-titres</li>
                <li>Les sujets clés à couvrir</li>
                <li>Les sections recommandées basées sur l'analyse SERP</li>
                <li>Des suggestions d'optimisation SEO</li>
              </ul>

              <h3>Étape 5 : Créez Votre Contenu</h3>
              <p>
                Avec votre plan prêt, Asking Franklin génère votre article. Vous pouvez :
              </p>
              <ul>
                <li>Générer l'article entier automatiquement</li>
                <li>Modifier des sections et fournir des instructions spécifiques</li>
                <li>Ajouter votre expertise et vos insights uniques</li>
                <li>Demander des révisions ou des développements sur des points spécifiques</li>
              </ul>

              <h2>Travailler avec l'Assistant Franklin</h2>
              <p>
                L'une des fonctionnalités les plus puissantes d'Asking Franklin est son assistant IA conversationnel. 
                Considérez-le comme un partenaire d'écriture collaboratif qui :
              </p>
              <ul>
                <li>Comprend le contexte de vos instructions précédentes</li>
                <li>Adapte son style d'écriture pour correspondre à la voix de votre marque</li>
                <li>Intègre votre expertise et vos exigences spécifiques</li>
                <li>Vous aide à affiner et améliorer le contenu de manière itérative</li>
              </ul>

              <h2>Fonctionnalités d'Optimisation SEO</h2>
              <p>
                Asking Franklin comprend des outils d'optimisation SEO complets :
              </p>
              
              <h3>Optimisation E-E-A-T</h3>
              <p>
                L'outil vous aide à démontrer l'Expérience, l'Expertise, l'Autorité et la Fiabilité en :
              </p>
              <ul>
                <li>Suggérant des sources et références crédibles</li>
                <li>Identifiant les zones où vous pouvez montrer votre expertise</li>
                <li>Recommandant des signaux de confiance à inclure</li>
              </ul>

              <h3>SEO Technique</h3>
              <p>
                Asking Franklin gère les éléments SEO techniques incluant :
              </p>
              <ul>
                <li>Structure de titres appropriée (H1, H2, H3)</li>
                <li>Meta descriptions et balises de titre</li>
                <li>Suggestions de liens internes</li>
                <li>Recommandations de balisage schema</li>
              </ul>

              <h2>Optimisation LLM</h2>
              <p>
                Au-delà du SEO traditionnel, Asking Franklin optimise votre contenu pour qu'il devienne une source de référence 
                pour les assistants IA comme ChatGPT et Perplexity. Cela signifie :
              </p>
              <ul>
                <li>Structurer l'information de manière à ce que les LLMs puissent facilement y faire référence</li>
                <li>Inclure des déclarations claires et faisant autorité</li>
                <li>Fournir une couverture complète des sujets</li>
                <li>Utiliser des citations et données appropriées</li>
              </ul>

              <h2>Meilleures Pratiques</h2>
              <p>
                Pour tirer le meilleur parti d'Asking Franklin :
              </p>
              <ul>
                <li><strong>Soyez précis dans vos instructions :</strong> Plus vous fournissez de contexte, meilleurs sont les résultats</li>
                <li><strong>Itérez et affinez :</strong> Utilisez l'assistant conversationnel pour peaufiner votre contenu</li>
                <li><strong>Ajoutez votre expertise :</strong> Laissez l'IA gérer la structure pendant que vous ajoutez des insights uniques</li>
                <li><strong>Relisez et éditez :</strong> Relisez toujours le contenu généré par l'IA et ajoutez votre touche personnelle</li>
                <li><strong>Testez différentes approches :</strong> Expérimentez avec différents mots-clés et angles de contenu</li>
              </ul>

              <h2>Prochaines Étapes</h2>
              <p>
                Maintenant que vous comprenez les bases, vous êtes prêt à commencer à créer du contenu de qualité ! Voici quoi faire ensuite :
              </p>
              <ol>
                <li>Inscrivez-vous pour un essai gratuit de 7 jours sur <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">app.askingfranklin.com</a></li>
                <li>Choisissez votre premier mot-clé et explorez les fonctionnalités d'analyse</li>
                <li>Générez votre premier article et voyez les résultats</li>
                <li>Explorez les fonctionnalités avancées comme l'intégration WordPress et le suivi multi-domaines</li>
              </ol>

              <p>
                Vous avez des questions ? Consultez nos autres articles de la base de connaissances ou contactez notre équipe 
                de support à <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>
              </p>
            </>
          )}
        </article>
      </section>

      {/* Related Articles */}
      <section className="container py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            {isEnglish ? 'Related Articles' : 'Articles Connexes'}
          </h2>
          <Card className="bg-gradient-accent border-border">
            <CardContent className="p-6">
              <p className="text-muted-foreground text-center">
                {isEnglish 
                  ? 'More articles coming soon! Check back regularly for new content.'
                  : 'Plus d\'articles à venir ! Revenez régulièrement pour du nouveau contenu.'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {isEnglish
                ? 'Ready to Create Your First Article?'
                : 'Prêt à Créer Votre Premier Article ?'}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {isEnglish
                ? 'Start your free 7-day trial and experience the power of AI-assisted SEO content creation.'
                : 'Commencez votre essai gratuit de 7 jours et découvrez la puissance de la création de contenu SEO assistée par IA.'}
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {isEnglish ? 'Start Free Trial' : 'Commencer l\'Essai Gratuit'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

