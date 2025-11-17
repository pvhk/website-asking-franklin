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
  description: 'AI Assistant for SEO Content - Create content that ranks in Google and becomes a reference source for generative AI',
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
