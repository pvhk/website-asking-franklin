import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterFormProps {
  lang: 'fr' | 'en';
}

export const NewsletterForm = ({ lang }: NewsletterFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!firstName || !email) {
      toast({
        title: lang === 'fr' ? 'Champs requis' : 'Required fields',
        description: lang === 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: lang === 'fr' ? 'Acceptation requise' : 'Acceptance required',
        description: lang === 'fr' ? 'Veuillez accepter de recevoir La Dépêche' : 'Please accept to receive The Dispatch',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, lang }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      toast({
        title: lang === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        description: data.message,
      });

      // Reset form
      setFirstName('');
      setEmail('');
      setAcceptTerms(false);
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: lang === 'fr' ? 'Erreur' : 'Error',
        description: error.message || (lang === 'fr' ? "Une erreur s'est produite lors de l'inscription" : 'An error occurred while subscribing'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-border shadow-xl">
      <CardHeader>
        <CardTitle>{lang === 'fr' ? 'Devenez un CADOR du contenu' : 'Become a Content BOSS'}</CardTitle>
        <CardDescription>
          {lang === 'fr' 
            ? "La news 100% tips et hacks qu'il vous faut, chaque mois, pour faire décoller votre stratégie de contenus à l'ère de l'IA" 
            : 'The 100% tips and hacks newsletter you need, every month, to boost your content strategy in the AI era'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={lang === 'fr' ? 'Votre prénom' : 'Your first name'}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={lang === 'fr' ? 'Votre adresse email' : 'Your email address'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
          </div>

          <div className="flex items-start space-x-3 py-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              className="mt-1"
              disabled={isLoading}
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              {lang === 'fr'
                ? "En soumettant ce formulaire, j'indique vouloir recevoir La Dépêche d'Asking Franklin pour bénéficier mensuellement de nouveaux tips concoctés par l'équipe."
                : "By submitting this form, I agree to receive The Dispatch from Asking Franklin to benefit from monthly tips crafted by the team."}
            </label>
          </div>

          <Button
            className="w-full shadow-primary"
            size="lg"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {lang === 'fr' ? 'Inscription...' : 'Subscribing...'}
              </>
            ) : (
              <>
                {lang === 'fr' ? "S'inscrire gratuitement" : 'Subscribe for free'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
