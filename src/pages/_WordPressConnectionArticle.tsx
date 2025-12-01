import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Language } from '@/lib/i18n';
import { withBase, withBaseImage } from '@/lib/baseUrl';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, CheckCircle } from 'lucide-react';
import step1Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-1-go-to-wp-settings.png';
import step2Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-2-create-app-password-name.png';
import step3Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-3-copy-your-app-password.png';
import step4Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-4-go-to-asking-franklin-settings-and-click-domain.png';
import step5Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-5-connect-wp-with-username-and-password.png';
import step6Image from '@/assets/knowledge-base/how-to-connect-wp-to-asking-franklin/step-6-test-the-connection.png';

interface WordPressConnectionArticleProps {
  lang: Language;
}

export const WordPressConnectionArticle = ({ lang }: WordPressConnectionArticleProps) => {
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
            {isEnglish ? 'Tutorials' : 'Tutoriels'}
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {isEnglish 
              ? 'How to Connect WordPress to Asking Franklin'
              : 'Comment Connecter WordPress à Asking Franklin'
            }
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{isEnglish ? 'December 1, 2025' : '1 décembre 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{isEnglish ? '3 min read' : '3 min de lecture'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          {isEnglish ? (
            <>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Connecting your WordPress site to Asking Franklin allows you to publish your AI-generated content 
                  directly to your website with just one click. This guide will walk you through the simple setup process 
                  using WordPress Application Passwords.
                </p>

                <div className="not-prose bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Prerequisites</h3>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>A WordPress site (version 5.6 or higher recommended)</li>
                        <li>Administrator access to your WordPress site</li>
                        <li>An active Asking Franklin account</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2>Step 1: Access WordPress User Settings</h2>
                <p>
                  First, log in to your WordPress admin dashboard and navigate to your user profile settings.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step1Image)} 
                  alt="Step 1: Navigate to WordPress user settings"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 2: Create Application Password</h2>
                <p>
                  In your WordPress user profile, scroll down to the "Application Passwords" section. Enter a name 
                  for your application password (e.g., "Asking Franklin") and click "Add New Application Password".
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step2Image)} 
                  alt="Step 2: Create a new application password"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 3: Copy Your Application Password</h2>
                <p>
                  Once created, WordPress will display your new application password. <strong>Copy this password 
                  immediately</strong> as you won't be able to see it again. This is a one-time display for security 
                  reasons.
                </p>
                <div className="not-prose bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-6">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 m-0">
                    ⚠️ <strong>Important:</strong> Make sure to copy the password now. You won't be able to retrieve it later.
                  </p>
                </div>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step3Image)} 
                  alt="Step 3: Copy your application password"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 4: Open Asking Franklin Settings</h2>
                <p>
                  Now, switch to Asking Franklin. Navigate to your settings page and click on the "Manage" button of the "Domain" section 
                  to configure your WordPress connection.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step4Image)} 
                  alt="Step 4: Go to Asking Franklin settings and click Domain"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 5: Enter WordPress Credentials</h2>
                <p>
                  In the WordPress connection form, enter the following information:
                </p>
                <ul>
                  <li><strong>WordPress URL:</strong> Your wordpress site's URL (e.g., https://yoursite.com, it can be different from your main domain. For example for asking franklin it's https://blog.askingfranklin.com)</li>
                  <li><strong>Username:</strong> Your WordPress username (not the app name, but your username)</li>
                  <li><strong>Application Password:</strong> The password you copied in Step 3</li>
                </ul>
                <p>
                  Click "Connect" to establish the connection.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step5Image)} 
                  alt="Step 5: Enter WordPress credentials in Asking Franklin"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 6: Test the Connection</h2>
                <p>
                  Once you've entered your credentials, Asking Franklin will test the connection to your WordPress site. 
                  You should see a success message confirming that your site is connected.
                </p>
                <p>
                  Congratulations! Your WordPress site is now connected to Asking Franklin, and you can publish content 
                  directly from the platform.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step6Image)} 
                  alt="Step 6: Test the WordPress connection"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Troubleshooting Tips</h2>
                <p>
                  If you encounter issues while connecting your WordPress site, try these solutions:
                </p>
                
                <h3>Connection Failed Error</h3>
                <ul>
                  <li>Verify that your WordPress URL is correct and includes https:// or http://</li>
                  <li>Make sure your WordPress site is accessible and not behind a firewall</li>
                  <li>Check that you're using the correct username (not your email address)</li>
                  <li>Ensure you copied the application password correctly without any extra spaces</li>
                </ul>

                <h3>Application Passwords Not Available</h3>
                <ul>
                  <li>Update WordPress to version 5.6 or higher</li>
                  <li>Ensure your site uses HTTPS (application passwords require SSL)</li>
                  <li>Check if your hosting provider has disabled this feature</li>
                </ul>

                <h3>Publishing Issues</h3>
                <ul>
                  <li>Verify that your WordPress user account has permission to publish posts</li>
                  <li>Check if your WordPress REST API is enabled</li>
                  <li>Ensure no security plugins are blocking REST API requests</li>
                </ul>

                <h2>Next Steps</h2>
                <p>
                  Now that your WordPress site is connected, you can:
                </p>
                <ul>
                  <li>Generate SEO-optimized articles in Asking Franklin</li>
                  <li>Publish directly to WordPress with one click</li>
                  <li>Edit and refine content before publishing</li>
                </ul>

                <p>
                  Need help? Contact our support team at{' '}
                  <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Connecter votre site WordPress à Asking Franklin vous permet de publier votre contenu généré par IA 
                  directement sur votre site web en un seul clic. Ce guide vous guidera à travers le processus de 
                  configuration simple utilisant les mots de passe d'application WordPress.
                </p>

                <div className="not-prose bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Prérequis</h3>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>Un site WordPress (version 5.6 ou supérieure recommandée)</li>
                        <li>Accès administrateur à votre site WordPress</li>
                        <li>Un compte Asking Franklin actif</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2>Étape 1 : Accéder aux Paramètres Utilisateur WordPress</h2>
                <p>
                  Tout d'abord, connectez-vous à votre tableau de bord d'administration WordPress et accédez aux 
                  paramètres de votre profil utilisateur.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step1Image)} 
                  alt="Étape 1 : Accéder aux paramètres utilisateur WordPress"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Étape 2 : Créer un Mot de Passe d'Application</h2>
                <p>
                  Dans votre profil utilisateur WordPress, faites défiler jusqu'à la section "Mots de passe d'application". 
                  Entrez un nom pour votre mot de passe d'application (par exemple, "Asking Franklin") et cliquez sur 
                  "Ajouter un nouveau mot de passe d'application".
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step2Image)} 
                  alt="Étape 2 : Créer un nouveau mot de passe d'application"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Étape 3 : Copier Votre Mot de Passe d'Application</h2>
                <p>
                  Une fois créé, WordPress affichera votre nouveau mot de passe d'application. <strong>Copiez ce mot de 
                  passe immédiatement</strong> car vous ne pourrez plus le voir. C'est un affichage unique pour des 
                  raisons de sécurité.
                </p>
                <div className="not-prose bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-6">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 m-0">
                    ⚠️ <strong>Important :</strong> Assurez-vous de copier le mot de passe maintenant. Vous ne pourrez pas le récupérer plus tard.
                  </p>
                </div>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step3Image)} 
                  alt="Étape 3 : Copier votre mot de passe d'application"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Étape 4 : Ouvrir les Paramètres Asking Franklin</h2>
                <p>
                  Maintenant, passez à Asking Franklin. Accédez à votre page de paramètres et cliquez sur le bouton 
                  "Gérer" de la section "Domaine" pour configurer votre connexion WordPress.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step4Image)} 
                  alt="Étape 4 : Aller dans les paramètres Asking Franklin et cliquer sur Domaine"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Étape 5 : Entrer les Identifiants WordPress</h2>
                <p>
                  Dans le formulaire de connexion WordPress, entrez les informations suivantes :
                </p>
                <ul>
                  <li><strong>URL WordPress :</strong> L'URL de votre site WordPress (par exemple, https://votresite.com, elle peut être différente de votre domaine principal. Par exemple pour Asking Franklin c'est https://blog.askingfranklin.com)</li>
                  <li><strong>Nom d'utilisateur :</strong> Votre nom d'utilisateur WordPress (pas le nom de l'application, mais votre nom d'utilisateur)</li>
                  <li><strong>Mot de passe d'application :</strong> Le mot de passe que vous avez copié à l'étape 3</li>
                </ul>
                <p>
                  Cliquez sur "Connecter" pour établir la connexion.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step5Image)} 
                  alt="Étape 5 : Entrer les identifiants WordPress dans Asking Franklin"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Étape 6 : Tester la Connexion</h2>
                <p>
                  Une fois que vous avez entré vos identifiants, Asking Franklin testera la connexion à votre site WordPress. 
                  Vous devriez voir un message de succès confirmant que votre site est connecté.
                </p>
                <p>
                  Félicitations ! Votre site WordPress est maintenant connecté à Asking Franklin, et vous pouvez publier 
                  du contenu directement depuis la plateforme.
                </p>
              </div>

              <div className="not-prose my-8">
                <img 
                  src={withBaseImage(step6Image)} 
                  alt="Étape 6 : Tester la connexion WordPress"
                  className="rounded-lg border border-border shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Conseils en cas de soucis...</h2>
                <p>
                  Si vous rencontrez des problèmes lors de la connexion de votre site WordPress, essayez ces solutions :
                </p>
                
                <h3>Erreur de Connexion Échouée</h3>
                <ul>
                  <li>Vérifiez que votre URL WordPress est correcte et inclut https:// ou http://</li>
                  <li>Assurez-vous que votre site WordPress est accessible et non derrière un pare-feu</li>
                  <li>Vérifiez que vous utilisez le bon nom d'utilisateur (pas votre adresse e-mail)</li>
                  <li>Assurez-vous d'avoir copié le mot de passe d'application correctement sans espaces supplémentaires</li>
                </ul>

                <h3>Mots de Passe d'Application Non Disponibles</h3>
                <ul>
                  <li>Mettez à jour WordPress vers la version 5.6 ou supérieure</li>
                  <li>Assurez-vous que votre site utilise HTTPS (les mots de passe d'application nécessitent SSL)</li>
                  <li>Vérifiez si votre hébergeur a désactivé cette fonctionnalité</li>
                </ul>

                <h3>Problèmes de Publication</h3>
                <ul>
                  <li>Vérifiez que votre compte utilisateur WordPress a la permission de publier des articles</li>
                  <li>Vérifiez si votre API REST WordPress est activée</li>
                  <li>Assurez-vous qu'aucun plugin de sécurité ne bloque les requêtes de l'API REST</li>
                </ul>

                <h2>Prochaines Étapes</h2>
                <p>
                  Maintenant que votre site WordPress est connecté, vous pouvez :
                </p>
                <ul>
                  <li>Générer des articles optimisés SEO dans Asking Franklin</li>
                  <li>Publier directement sur WordPress en un clic</li>
                  <li>Modifier et affiner le contenu avant de publier</li>
                </ul>

                <p>
                  Besoin d'aide ? Contactez notre équipe de support à{' '}
                  <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>
                </p>
              </div>
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
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:-translate-y-1 transition-all duration-300 border-border">
              <a href={withBase(lang === 'fr' ? '/fr/base-de-connaissances/getting-started-with-asking-franklin' : '/knowledge-base/getting-started-with-asking-franklin')}>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-xs mb-3">
                    {isEnglish ? 'Getting Started' : 'Démarrage'}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                    {isEnglish 
                      ? 'Getting Started with Asking Franklin'
                      : 'Débuter avec Asking Franklin'
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish
                      ? 'Learn the basics of using Asking Franklin to create SEO-optimized content.'
                      : 'Apprenez les bases de l\'utilisation d\'Asking Franklin pour créer du contenu optimisé SEO.'
                    }
                  </p>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {isEnglish
                ? 'Ready to Streamline Your Content Publishing?'
                : 'Prêt à Simplifier la Publication de Votre Contenu ?'}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {isEnglish
                ? 'Connect your WordPress site to Asking Franklin and publish SEO-optimized content in one click.'
                : 'Connectez votre site WordPress à Asking Franklin et publiez du contenu optimisé SEO en un clic.'
              }
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

