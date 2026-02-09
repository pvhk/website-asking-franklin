import { useEffect, useRef, useState } from 'react';
import { withBase } from '@/lib/baseUrl';
import { withBaseImage } from '@/lib/baseUrl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { NewsletterForm } from '@/components/NewsletterForm';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { ArrowRight, Search, Sparkles, Zap, MessageSquare, TrendingUp, Star, FileText, Bot, Rocket, Loader2, Mail } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
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

const getHeroAnimationContent = (lang: Language) => [
  {
    keyword: lang === 'fr' ? 'meilleur CRM 2025' : 'best CRM 2025',
    lines: [
      lang === 'fr' ? '🔍 Analyse des 10 premiers résultats...' : '🔍 Analyzing top 10 results...',
      lang === 'fr' ? '✨ 47 mots-clés secondaires trouvés' : '✨ 47 secondary keywords found',
      lang === 'fr' ? '📝 Génération du plan optimisé...' : '📝 Generating optimized outline...',
      lang === 'fr' ? '🚀 Score SEO: 94/100 - Prêt à dominer!' : '🚀 SEO Score: 94/100 - Ready to dominate!',
    ],
  },
  {
    keyword: lang === 'fr' ? 'comment perdre du poids' : 'how to lose weight',
    lines: [
      lang === 'fr' ? '🔍 Espionnage de la concurrence...' : '🔍 Spying on competitors...',
      lang === 'fr' ? '🎯 12 questions PAA identifiées' : '🎯 12 PAA questions identified',
      lang === 'fr' ? '✍️ 2,847 mots de pur génie SEO' : '✍️ 2,847 words of pure SEO genius',
      lang === 'fr' ? '💪 Contenu meilleur que les autres!' : '💪 Content better than the rest!',
    ],
  },
  {
    keyword: lang === 'fr' ? 'recette pancakes moelleux' : 'fluffy pancake recipe',
    lines: [
      lang === 'fr' ? '🥞 Franklin adore les pancakes aussi' : '🥞 Franklin loves pancakes too',
      lang === 'fr' ? '📊 Analyse SERP en 3 secondes' : '📊 SERP analysis in 3 seconds',
      lang === 'fr' ? '🎨 Structure H1-H2 optimale créée' : '🎨 Optimal H1-H2 structure created',
      lang === 'fr' ? '😋 Article délicieusement optimisé!' : '😋 Deliciously optimized article!',
    ],
  },
];

const HeroTypewriter = ({ lang }: { lang: Language }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTypingKeyword, setIsTypingKeyword] = useState(true);
  const [displayedKeyword, setDisplayedKeyword] = useState('');

  const allContent = getHeroAnimationContent(lang);

  useEffect(() => {
    const content = allContent[contentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTypingKeyword) {
      // Type the keyword
      if (charIndex < content.keyword.length) {
        timeout = setTimeout(() => {
          setDisplayedKeyword(content.keyword.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 50);
      } else {
        // Keyword done, start typing lines
        timeout = setTimeout(() => {
          setIsTypingKeyword(false);
          setCharIndex(0);
        }, 500);
      }
    } else {
      // Type the content lines
      if (lineIndex < content.lines.length) {
        const line = content.lines[lineIndex];
        if (charIndex < line.length) {
          timeout = setTimeout(() => {
            setCurrentLine(line.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          }, 20);
        } else {
          // Line complete
          timeout = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, line]);
            setCurrentLine('');
            setLineIndex((l) => l + 1);
            setCharIndex(0);
          }, 300);
        }
      } else {
        // All lines done, wait and switch to next content
        timeout = setTimeout(() => {
          setContentIndex((i) => (i + 1) % allContent.length);
          setLineIndex(0);
          setCharIndex(0);
          setDisplayedLines([]);
          setCurrentLine('');
          setDisplayedKeyword('');
          setIsTypingKeyword(true);
        }, 2500);
      }
    }

    return () => clearTimeout(timeout);
  }, [contentIndex, lineIndex, charIndex, isTypingKeyword, allContent]);

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-muted-foreground font-mono">franklin.ai</span>
        </div>
        {/* Content */}
        <div className="p-4 font-mono text-sm h-[160px]">
          {/* Keyword input */}
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
            <span className="text-muted-foreground text-xs">{lang === 'fr' ? 'Mot-clé:' : 'Keyword:'}</span>
            <span className="text-primary font-semibold">
              {displayedKeyword}
              {isTypingKeyword && <span className="animate-pulse">|</span>}
            </span>
          </div>
          {/* Output lines */}
          <div className="space-y-1.5">
            {displayedLines.map((line, i) => (
              <div key={i} className="text-foreground/90 text-xs">{line}</div>
            ))}
            {currentLine && (
              <div className="text-foreground/90 text-xs">
                {currentLine}
                <span className="animate-pulse">|</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = ({ lang, content }: HomeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layoutShiftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mouse position
    const mouse = { x: -1000, y: -1000 };
    const mouseRadius = 150;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Dots configuration
    const dots: { x: number; y: number; vx: number; vy: number; size: number; baseSize: number; opacity: number; baseOpacity: number }[] = [];
    const numDots = 60;
    const primaryColor = { r: 109, g: 40, b: 217 }; // Purple primary

    for (let i = 0; i < numDots; i++) {
      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.25;
      dots.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size,
        baseSize: size,
        opacity,
        baseOpacity: opacity,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      dots.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < 0) dot.x = canvas.offsetWidth;
        if (dot.x > canvas.offsetWidth) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.offsetHeight;
        if (dot.y > canvas.offsetHeight) dot.y = 0;

        // Check distance to mouse
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        // Enlarge and brighten dots near mouse
        if (distToMouse < mouseRadius) {
          const scale = 1 + (1 - distToMouse / mouseRadius) * 0.8;
          dot.size = dot.baseSize * scale;
          dot.opacity = Math.min(1, dot.baseOpacity + (1 - distToMouse / mouseRadius) * 0.5);
        } else {
          dot.size = dot.baseSize;
          dot.opacity = dot.baseOpacity;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${dot.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby dots
      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach((other) => {
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            const lineOpacity = (1 - distance / 120) * 0.25;
            ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw connections from mouse to nearby dots
      dots.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(dot.x, dot.y);
          const lineOpacity = (1 - distance / mouseRadius) * 0.6;
          ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${lineOpacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const wrapper = layoutShiftRef.current;
    if (!wrapper) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      wrapper.style.setProperty('--layout-progress', '1');
      wrapper.style.setProperty('--layout-inverse', '0');
      wrapper.setAttribute('data-layout', 'split');
      return;
    }

    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.65;
      const end = viewportHeight * 0.15;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, rawProgress));
      const inverse = 1 - progress;

      const leftTitle = wrapper.querySelector('[data-title="pain"]') as HTMLElement | null;
      const rightTitle = wrapper.querySelector('[data-title="comparison"]') as HTMLElement | null;
      let lockRight = false;
      if (leftTitle && rightTitle) {
        const leftTop = leftTitle.getBoundingClientRect().top;
        const rightTop = rightTitle.getBoundingClientRect().top;
        const delta = rightTop - leftTop;
        lockRight = delta <= 24 && progress >= 0.3;
      }
      if (!lockRight && progress >= 0.55) {
        lockRight = true;
      }

      const appliedProgress = lockRight ? 1 : progress;
      const appliedInverse = 1 - appliedProgress;

      wrapper.style.setProperty('--layout-progress', appliedProgress.toFixed(4));
      wrapper.style.setProperty('--layout-inverse', appliedInverse.toFixed(4));
      wrapper.setAttribute('data-layout', appliedProgress < 0.35 ? 'center' : 'split');
      wrapper.setAttribute('data-lock-right', lockRight ? 'true' : 'false');
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Hero Section with animated background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated dots background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.8 }}
        />

        <div className="container relative z-10 py-24">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
            {/* Massive headline with Fraunces serif */}
            <h1 className="font-hero text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05]">
              {lang === 'fr' ? (
                <>
                  L'assistant IA SEO
                  <br />
                  qui booste votre trafic <span className="font-handwritten text-[1.15em] text-primary">SEO & GEO</span>
                </>
              ) : (
                <>
                  The AI SEO Assistant
                  <br />
                  that grows your <span className="font-handwritten text-[1.15em] text-primary">SEO & GEO</span> traffic
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {lang === 'fr'
                ? "L'assistant IA SEO qui analyse ce que cherchent vos clients et crée du contenu optimisé pour Google et les moteurs IA génératifs."
                : "The AI SEO assistant that analyzes what your customers search for and creates content optimized for Google and generative AI engines."}
            </p>

            {/* Animated demo */}
            <HeroTypewriter lang={lang} />

            {/* CTA */}
            <div className="flex flex-col items-center gap-2 pt-2">
              <Button size="lg" className="text-base h-14 px-10 rounded-full group" asChild>
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {content.home.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
                </a>
              </Button>
              <span className="text-sm text-muted-foreground">
                {lang === 'fr' ? 'Pas de carte bancaire requise' : 'No credit card required'}
              </span>
            </div>

            {/* Social proof - minimal */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[quentinImage, marletImage, benoitImage].map((img, i) => (
                  <Avatar key={i} className="border-2 border-background h-10 w-10">
                    <AvatarImage src={withBaseImage(img)} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>{lang === 'fr' ? '300+ utilisateurs' : '300+ users'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="container pb-32 -mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={lang === 'fr' ? "https://www.youtube.com/embed/ToUJIlwNGUI" : "https://www.youtube.com/embed/Bn72aTSQUqE"}
              title={lang === 'fr' ? "Démo Asking Franklin - Assistant IA SEO pour rédiger du contenu optimisé" : "Asking Franklin Demo - AI SEO Assistant for writing optimized content"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Trusted By - EchoNode style */}
      <section className="border-y border-border py-20">
        <div className="container">
          <p className="section-label text-center mb-12">
            {lang === 'fr' ? 'Ils nous font confiance' : 'Trusted by'}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[0, 1].map((set) => (
                <div key={set} className="flex items-center justify-around min-w-full gap-20 px-10">
                  <img src={withBaseImage(logo3DNatives)} alt="3D Natives utilise Asking Franklin comme assistant IA SEO" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoFrenchTech)} alt="French Tech - partenaire Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoArgos)} alt="Argos Vétérinaire fait confiance à l'assistant IA SEO Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoJDC)} alt="JDC utilise l'assistant IA SEO Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoPikka)} alt="Agence Pikka - client de l'assistant IA SEO Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoSudOuest)} alt="Sud Ouest utilise Asking Franklin pour le SEO" className="h-8 md:h-10 object-contain logo-grayscale" />
                  <img src={withBaseImage(logoKaboom)} alt="Kaboom Kitchen optimise son contenu SEO avec Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />
                  {set === 1 && <img src={withBaseImage(logoUrgo)} alt="Urgo fait confiance à l'assistant IA SEO Asking Franklin" className="h-8 md:h-10 object-contain logo-grayscale" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CMS Integrations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label mb-4">
              {lang === 'fr' ? 'Intégrations CMS' : 'CMS Integrations'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {lang === 'fr' ? 'Publiez votre contenu SEO directement sur votre CMS' : 'Publish your SEO content directly to your CMS'}
            </h2>
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

      {/* Pain Points + Comparison — Sticky Scroll (Surfer SEO style) */}
      <section className="py-32 border-t border-border">
        <div className="container">
          {/* Parent flex — align-items: flex-start via CSS class */}
          <div ref={layoutShiftRef} className="sticky-scroll-wrapper" data-layout="center">

            {/* ===== SIDEBAR LEFT — position: sticky ===== */}
            <div className="sidebar-left">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-10" data-title="pain">
                {lang === 'fr'
                  ? "L'optimisation de contenu est devenue un enfer technique."
                  : 'Content optimization has become a technical nightmare.'}
              </h2>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Search,
                    title: lang === 'fr' ? 'Recherche de mots-clés fastidieuse' : 'Tedious keyword research',
                    description: lang === 'fr'
                      ? 'Passer des heures sur des outils SEO pour trouver des volumes de recherche.'
                      : 'Spending hours on SEO tools just to find search volumes.',
                  },
                  {
                    icon: FileText,
                    title: lang === 'fr' ? 'Outils SEO trop chers et techniques' : 'SEO tools too expensive and technical',
                    description: lang === 'fr'
                      ? 'Nombreuses fonctionnalités et des tableaux de bord incompréhensibles.'
                      : 'Too many features and incomprehensible dashboards.',
                  },
                  {
                    icon: Bot,
                    title: lang === 'fr' ? "L'inconnue de l'IA" : 'The AI unknown',
                    description: lang === 'fr'
                      ? 'La peur que vos textes soient invisibles dans les réponses génératives (SGE/ChatGPT).'
                      : 'The fear that your content becomes invisible in generative AI responses (SGE/ChatGPT).',
                  },
                ].map((pain, index) => (
                  <Card key={index} className="border-border bg-card p-4">
                    <CardContent className="pt-4 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                        <pain.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{pain.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ===== CONTENT RIGHT — long content, defines parent height ===== */}
            <div className="content-right">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight" data-title="comparison">
                  {lang === 'fr' ? 'Pourquoi choisir notre assistant IA SEO comme copilote plutôt qu\'un outil classique ?' : 'Why choose our AI SEO assistant as your copilot over a traditional tool?'}
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 border-b border-border font-semibold text-muted-foreground">
                        {lang === 'fr' ? 'Fonctionnalité' : 'Feature'}
                      </th>
                      <th className="text-center p-4 border-b border-border font-semibold text-muted-foreground">
                        {lang === 'fr' ? 'Outils SEO Classiques' : 'Traditional SEO Tools'}
                      </th>
                      <th className="text-center p-4 border-b border-border font-semibold text-primary bg-primary/5 rounded-t-xl">
                        <div className="flex flex-col items-center gap-3">
                          <img src={withBaseImage('/logo.svg')} alt="Asking Franklin" className="h-10 w-auto" />
                          <span>{lang === 'fr' ? 'Assistant SEO IA' : 'AI SEO Assistant'}</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">
                        {lang === 'fr' ? 'Approche' : 'Approach'}
                      </td>
                      <td className="p-4 border-b border-border text-center text-muted-foreground">
                        {lang === 'fr' ? 'Analytique (Data froide)' : 'Analytical (Cold data)'}
                      </td>
                      <td className="p-4 border-b border-border text-center font-semibold bg-primary/5">
                        {lang === 'fr' ? 'Générative (Création active)' : 'Generative (Active creation)'}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">
                        {lang === 'fr' ? 'Compétence requise' : 'Required skill'}
                      </td>
                      <td className="p-4 border-b border-border text-center text-muted-foreground">
                        {lang === 'fr' ? 'Expert technique' : 'Technical expert'}
                      </td>
                      <td className="p-4 border-b border-border text-center font-semibold bg-primary/5">
                        {lang === 'fr' ? 'Débutant à Avancé' : 'Beginner to Advanced'}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">
                        {lang === 'fr' ? 'Cible' : 'Target'}
                      </td>
                      <td className="p-4 border-b border-border text-center text-muted-foreground">
                        {lang === 'fr' ? 'Robots Google uniquement' : 'Google bots only'}
                      </td>
                      <td className="p-4 border-b border-border text-center font-semibold bg-primary/5">
                        {lang === 'fr' ? 'Google + IA (ChatGPT/Bing)' : 'Google + AI (ChatGPT/Bing)'}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">
                        {lang === 'fr' ? 'Rédaction IA intégrée' : 'Built-in AI writing'}
                      </td>
                      <td className="p-4 border-b border-border text-center text-muted-foreground">
                        ❌
                      </td>
                      <td className="p-4 border-b border-border text-center font-semibold bg-primary/5">
                        ✅
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">
                        {lang === 'fr' ? 'Résultat' : 'Result'}
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        {lang === 'fr' ? 'Données brutes' : 'Raw data'}
                      </td>
                      <td className="p-4 text-center font-semibold bg-primary/5 rounded-b-xl">
                        {lang === 'fr' ? 'Article rédigé & optimisé' : 'Written & optimized article'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features - EchoNode style cards */}
      <section className="py-32 border-y border-border" id="features">
        <div className="container">
          <div className="text-center mb-20">
            <p className="section-label mb-6">
              {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {lang === 'fr' ? 'Toutes les fonctionnalités de votre assistant IA SEO' : 'All the features of your AI SEO assistant'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {content.home.howItWorks.features.slice(0, 6).map((feature, index) => {
              const icons = [Search, Sparkles, Zap, MessageSquare, TrendingUp, Search];
              const IconComponent = icons[index] || Search;

              // CTA links per feature card
              const ctaMap: Record<number, { labelFr: string; labelEn: string; hrefFr: string; hrefEn: string }> = {
                0: { labelFr: 'Découvrir', labelEn: 'Discover', hrefFr: '/fr/fonctionnalites/donnees-insights', hrefEn: '/features/data-insights' },
                1: { labelFr: 'Découvrir', labelEn: 'Discover', hrefFr: '/fr/fonctionnalites/contenu-optimise', hrefEn: '/features/write-optimized-content' },
                4: { labelFr: 'Découvrir', labelEn: 'Discover', hrefFr: '/fr/fonctionnalites/donnees-insights', hrefEn: '/features/data-insights' },
              };
              const cta = ctaMap[index];

              return (
                <Card key={index} className="border-border hover-lift bg-card p-2">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-muted-foreground leading-relaxed${cta ? ' mb-5' : ''}`}>{feature.description}</p>
                    {cta && (
                      <a
                        href={lang === 'fr' ? cta.hrefFr : cta.hrefEn}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
                      >
                        {lang === 'fr' ? cta.labelFr : cta.labelEn}
                        <ArrowRight className="h-4 w-4 btn-arrow" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Autopilote — Coming Soon (inside the grid) */}
            <Card className="relative overflow-hidden border-primary/20 hover-lift p-2"
              style={{
                background: 'linear-gradient(135deg, hsl(263 70% 50% / 0.06), hsl(263 70% 60% / 0.14))',
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="signal-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-destructive">
                    Coming soon
                  </span>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Autopilot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {lang === 'fr'
                    ? "Si vous voulez faire croître votre trafic rapidement et automatiquement, sans détériorer la qualité de contenu, c'est LA fonctionnalité qu'il vous faut et elle arrive bientôt."
                    : "If you want to grow your traffic fast and automatically, without sacrificing content quality, this is THE feature you need — and it's coming soon."}
                </p>
                <a
                  href={lang === 'fr' ? '/fr/fonctionnalites/autopilot' : '/features/autopilot'}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
                >
                  {lang === 'fr' ? 'Découvrir Autopilot' : 'Discover Autopilot'}
                  <ArrowRight className="h-4 w-4 btn-arrow" />
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-20">
            <p className="section-label mb-6">
              {lang === 'fr' ? 'Témoignages' : 'Testimonials'}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {content.home.testimonials.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {content.home.testimonials.items.map((testimonial, index) => {
              const images = [quentinImage, marletImage, benoitImage];
              return (
                <Card key={index} className="border-border hover-lift bg-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-8 leading-relaxed text-lg">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={withBaseImage(images[index])} />
                        <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Method/Steps - EchoNode style with step numbers */}
      <section className="py-32 border-t border-border" id="how-it-works">
        <div className="container">
          <div className="text-center mb-24">
            <p className="section-label mb-6">
              {lang === 'fr' ? 'Notre méthode' : 'Our Method'}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {lang === 'fr' ? 'Comment fonctionne notre assistant IA SEO' : 'How our AI SEO assistant works'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-32">
            {content.home.howItWorks.steps.map((step, index) => {
              const stepImages = [step0Image, step1Image, step2Image, step3Image, step4Image];
              const isEven = index % 2 === 0;
              const stepNumber = String(index + 1).padStart(2, '0');

              return (
                <div key={index} className={`grid gap-16 lg:grid-cols-2 items-center`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <p className="step-number">{stepNumber}</p>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {step.cta && (
                      <Button variant="outline" className="rounded-full group mt-4" asChild>
                        <a href={step.ctaUrl || "https://app.askingfranklin.com/register"} target="_blank" rel="noopener noreferrer">
                          {step.cta}
                          <ArrowRight className="ml-2 h-4 w-4 btn-arrow" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover-lift">
                      <img src={withBaseImage(stepImages[index])} alt={`${lang === 'fr' ? 'Assistant IA SEO' : 'AI SEO assistant'} - ${step.title}`} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-32 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="section-label mb-6">Blog</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {content.home.blog.title}
              </h2>
            </div>
            <Button variant="outline" asChild className="rounded-full group w-fit">
              <a href={lang === 'fr' ? 'https://blog.askingfranklin.com/' : 'https://blog.askingfranklin.com/en/'} target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? 'Voir tous les articles' : 'View all articles'}
                <ArrowRight className="ml-2 h-4 w-4 btn-arrow" />
              </a>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.home.blog.items.map((post, index) => {
              const images = [blogTop10Techniques, blog3Secrets, blog3Etapes];
              return (
                <Card key={index} className="group overflow-hidden border-border hover-lift bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={withBaseImage(images[index])}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pt-6">
                    <p className="text-sm text-primary font-medium mb-2">Blog</p>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
                    >
                      {lang === 'fr' ? "Lire l'article" : 'Read article'}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter - FR only */}
      {lang === 'fr' && (
        <section className="py-32">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="section-label">Newsletter</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  La Dépêche
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Recevez chaque mois nos meilleurs conseils SEO et les dernières tendances IA en content marketing.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {['No bullshit, que des tips actionnables', 'Retours d\'expériences exclusifs', 'Découvertes de l\'équipe'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-primary">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <NewsletterForm lang={lang} />
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA — Compact horizontal */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg" style={{ background: 'linear-gradient(135deg, hsl(263 70% 50% / 0.06), hsl(263 70% 60% / 0.14))' }}>
              <CardContent className="py-8 px-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  {/* Left — Title + subtitle */}
                  <div className="flex items-start gap-4 lg:flex-1 min-w-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold leading-tight">
                        {lang === 'fr'
                          ? 'Rejoignez + 1500 cadors du content IA'
                          : 'Join 1,500+ AI content pros'}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {lang === 'fr'
                          ? 'Tips, hacks et stratégies SEO & IA chaque mois dans votre boîte mail.'
                          : 'SEO & AI tips, hacks and strategies delivered monthly to your inbox.'}
                      </p>
                    </div>
                  </div>

                  {/* Right — Inline form */}
                  <div className="lg:flex-1">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const formData = new FormData(form);
                        const firstName = formData.get('firstName') as string;
                        const emailVal = formData.get('email') as string;
                        if (!firstName || !emailVal) return;
                        try {
                          const res = await fetch('/api/subscribe-newsletter', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ firstName, email: emailVal, lang }),
                          });
                          if (res.ok) form.reset();
                        } catch (_) {}
                      }}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <input
                        type="text"
                        name="firstName"
                        placeholder={lang === 'fr' ? 'Prénom' : 'First name'}
                        className="px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring sm:w-32"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={lang === 'fr' ? 'Email' : 'Email'}
                        className="px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring flex-1"
                        required
                      />
                      <Button type="submit" size="sm" className="whitespace-nowrap">
                        {lang === 'fr' ? "S'inscrire" : 'Subscribe'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {lang === 'fr' ? 'FAQ - Pourquoi utiliser notre assistant IA SEO : vos questions, nos réponses' : 'FAQ - Why use our AI SEO Assistant: your questions, our answers'}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {content.home.faq.items.map((item, index) => (
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

      {/* CTA - Dark section like EchoNode */}
      <section className="bg-foreground text-background">
        <div className="container py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {lang === 'fr' ? 'Prêt à booster votre trafic avec un assistant IA SEO ?' : 'Ready to grow your traffic with an AI SEO assistant?'}
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              {lang === 'fr'
                ? 'Rejoignez des centaines de rédacteurs qui créent du contenu SEO performant avec Asking Franklin, l\'assistant IA SEO de référence.'
                : 'Join hundreds of writers creating high-performing SEO content with Asking Franklin, the leading AI SEO assistant.'}
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
                <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                  {content.home.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
