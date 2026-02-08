import type { Language } from './i18n';

const BASE_URL = 'https://www.askingfranklin.com';

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  url: string;
  name: string;
  description: string;
  inLanguage: string[];
  publisher: {
    '@id': string;
  };
}

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
}

export interface WebPageSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  isPartOf: {
    '@id': string;
  };
  about: {
    '@id': string;
  };
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  brand: {
    '@id': string;
  };
  offers: {
    '@type': string;
    priceCurrency: string;
    price: string;
    priceValidUntil: string;
    availability: string;
  };
}

export const buildWebSiteSchema = (): WebSiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Asking Franklin',
  description: 'Asking Franklin is the AI SEO assistant (assistant IA SEO) that analyzes search intent, writes optimized content, and helps you rank in Google and generative AI engines like ChatGPT, Perplexity, and Gemini.',
  inLanguage: ['en-US', 'fr-FR'],
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
});

export const buildOrganizationSchema = (): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Asking Franklin',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  sameAs: [
    'https://www.linkedin.com/company/asking-franklin',
    'https://twitter.com/askingfranklin',
  ],
});

export const buildWebPageSchema = (
  url: string,
  title: string,
  description: string,
  lang: Language
): WebPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name: title,
  description,
  inLanguage: lang === 'fr' ? 'fr-FR' : 'en-US',
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  about: {
    '@id': `${BASE_URL}/#organization`,
  },
});

export const buildFAQPageSchema = (
  faqItems: Array<{ question: string; answer: string }>
): FAQPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export interface SoftwareApplicationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  url: string;
  offers: {
    '@type': string;
    priceCurrency: string;
    price: string;
    priceValidUntil: string;
    availability: string;
  };
  aggregateRating: {
    '@type': string;
    ratingValue: string;
    ratingCount: string;
  };
}

export const buildSoftwareApplicationSchema = (lang: Language): SoftwareApplicationSchema => {
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Asking Franklin',
    description: lang === 'fr'
      ? "Asking Franklin est l'assistant IA SEO qui analyse les intentions de recherche, rédige du contenu optimisé pour Google et les moteurs IA comme ChatGPT, Perplexity et Gemini."
      : 'Asking Franklin is the AI SEO assistant that analyzes search intent, writes optimized content for Google and AI engines like ChatGPT, Perplexity, and Gemini.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: BASE_URL,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '49',
      priceValidUntil: validUntil.toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '300',
    },
  };
};

export const buildProductSchema = (
  name: string,
  description: string,
  price: string,
  currency: string = 'USD'
): ProductSchema => {
  // Calculate priceValidUntil (1 year from now)
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);
  
  // Extract numeric price from string (e.g., "$89" -> "89")
  const numericPrice = price.replace(/[^0-9.]/g, '');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@id': `${BASE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price: numericPrice,
      priceValidUntil: validUntil.toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
    },
  };
};

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export const buildBreadcrumbListSchema = (
  items: Array<{ name: string; url?: string }>
): BreadcrumbListSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url ? { item: item.url } : {}),
  })),
});

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  author: { '@type': string; name: string; url: string };
  publisher: { '@id': string };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: { '@type': string; '@id': string };
  inLanguage: string;
}

export const buildArticleSchema = (
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  lang: Language,
  dateModified?: string
): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  author: {
    '@type': 'Organization',
    name: 'Asking Franklin',
    url: 'https://www.askingfranklin.com',
  },
  publisher: {
    '@id': `https://www.askingfranklin.com/#organization`,
  },
  datePublished,
  dateModified: dateModified || datePublished,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
  },
  inLanguage: lang === 'fr' ? 'fr-FR' : 'en-US',
});

export interface HowToSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  step: Array<{
    '@type': string;
    name: string;
    text: string;
    position: number;
  }>;
}

export const buildHowToSchema = (
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>
): HowToSchema => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  description,
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    name: s.name,
    text: s.text,
    position: i + 1,
  })),
});
