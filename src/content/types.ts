export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  image?: string;
  cta?: string;
  ctaUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceAnnual: string;
  priceAnnualStrikethrough: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface BlogArticle {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
}

export interface LegalSection {
  title: string;
  content: string;
}

export interface SiteContent {
  siteName: string;
  siteDescription: string;
  nav: {
    home: string;
    pricing: string;
    blog: string;
    knowledge: string;
    laDepeche: string;
    cta: string;
  };
  home: {
    meta: { title: string; description: string; };
    hero: { title: string; subtitle: string; cta: string; };
    testimonials: {
      title: string;
      anchor: string;
      items: Testimonial[];
    };
    blog: {
      title: string;
      anchor: string;
      items: BlogArticle[];
      cta: string;
    };
    howItWorks: { title: string; subtitle: string; anchor: string; features: Feature[]; steps: HowItWorksStep[]; };
    faq: { title: string; anchor: string; items: FAQItem[]; };
  };
  pricing: {
    meta: { title: string; description: string; };
    title: string;
    subtitle: string;
    plans: PricingPlan[];
    faq: { title: string; items: FAQItem[]; };
  };
  knowledgeBase: {
    meta: { title: string; description: string; };
    title: string;
    subtitle: string;
    articles: KnowledgeArticle[];
  };
  terms: { meta: { title: string; description: string; }; title: string; intro?: string; sections: LegalSection[]; };
  legalNotice: { meta: { title: string; description: string; }; title: string; intro?: string; sections: LegalSection[]; };
  privacyPolicy: { meta: { title: string; description: string; }; title: string; intro?: string; sections: LegalSection[]; };
  footer: {
    description: string;
    links: { title: string; items: Array<{ label: string; href: string }>; }[];
    copyright: string;
  };
}
