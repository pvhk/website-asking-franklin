import { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, Copy, Check, ArrowRight, Sparkles, Plus, Trash2, ExternalLink, FileText, HelpCircle, ShoppingBag, MapPin, ListOrdered, ChevronRight, Building2, User } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import type { Language } from '@/lib/i18n';

interface Props {
  lang: Language;
  content: SiteContent;
}

interface FieldDefinition {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'url' | 'date' | 'number' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface ArrayFieldDefinition {
  key: string;
  label: string;
  addLabel: string;
  fields: FieldDefinition[];
}

interface SchemaTypeConfig {
  label: string;
  labelFr: string;
  icon: typeof FileText;
  fields: FieldDefinition[];
  arrayFields?: ArrayFieldDefinition[];
  build: (values: Record<string, string>, arrays: Record<string, Record<string, string>[]>) => object;
}

const SCHEMA_TYPES: Record<string, SchemaTypeConfig> = {
  article: {
    label: 'Article',
    labelFr: 'Article',
    icon: FileText,
    fields: [
      { key: 'headline', label: 'Headline', type: 'text', required: true, placeholder: 'Your article title' },
      { key: 'author', label: 'Author Name', type: 'text', required: true, placeholder: 'John Doe' },
      { key: 'datePublished', label: 'Date Published', type: 'date', required: true },
      { key: 'dateModified', label: 'Date Modified', type: 'date' },
      { key: 'image', label: 'Image URL', type: 'url', placeholder: 'https://example.com/image.jpg' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'A brief description of the article' },
      { key: 'publisher', label: 'Publisher Name', type: 'text', placeholder: 'Your Company' },
    ],
    build: (v) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: v.headline || '',
        author: { '@type': 'Person', name: v.author || '' },
        datePublished: v.datePublished || '',
      };
      if (v.dateModified) schema.dateModified = v.dateModified;
      if (v.image) schema.image = v.image;
      if (v.description) schema.description = v.description;
      if (v.publisher) schema.publisher = { '@type': 'Organization', name: v.publisher };
      return schema;
    },
  },
  faq: {
    label: 'FAQ Page',
    labelFr: 'Page FAQ',
    icon: HelpCircle,
    fields: [],
    arrayFields: [
      {
        key: 'questions',
        label: 'Questions',
        addLabel: 'Add Question',
        fields: [
          { key: 'question', label: 'Question', type: 'text', required: true, placeholder: 'What is...?' },
          { key: 'answer', label: 'Answer', type: 'textarea', required: true, placeholder: 'The answer to the question' },
        ],
      },
    ],
    build: (_v, arrays) => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (arrays.questions || [])
        .filter((q) => q.question && q.answer)
        .map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
    }),
  },
  product: {
    label: 'Product',
    labelFr: 'Produit',
    icon: ShoppingBag,
    fields: [
      { key: 'name', label: 'Product Name', type: 'text', required: true, placeholder: 'Product Name' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Product description' },
      { key: 'image', label: 'Image URL', type: 'url', placeholder: 'https://example.com/product.jpg' },
      { key: 'brand', label: 'Brand', type: 'text', placeholder: 'Brand Name' },
      { key: 'price', label: 'Price', type: 'text', placeholder: '29.99' },
      { key: 'currency', label: 'Currency', type: 'select', options: [
        { value: 'USD', label: 'USD' }, { value: 'EUR', label: 'EUR' }, { value: 'GBP', label: 'GBP' },
        { value: 'CAD', label: 'CAD' }, { value: 'AUD', label: 'AUD' }, { value: 'CHF', label: 'CHF' },
      ]},
      { key: 'availability', label: 'Availability', type: 'select', options: [
        { value: 'https://schema.org/InStock', label: 'In Stock' },
        { value: 'https://schema.org/OutOfStock', label: 'Out of Stock' },
        { value: 'https://schema.org/PreOrder', label: 'Pre-order' },
      ]},
    ],
    build: (v) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: v.name || '',
      };
      if (v.description) schema.description = v.description;
      if (v.image) schema.image = v.image;
      if (v.brand) schema.brand = { '@type': 'Brand', name: v.brand };
      if (v.price) {
        schema.offers = {
          '@type': 'Offer',
          price: v.price,
          priceCurrency: v.currency || 'USD',
          ...(v.availability && { availability: v.availability }),
        };
      }
      return schema;
    },
  },
  localBusiness: {
    label: 'Local Business',
    labelFr: 'Commerce local',
    icon: MapPin,
    fields: [
      { key: 'name', label: 'Business Name', type: 'text', required: true, placeholder: 'My Business' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Business description' },
      { key: 'url', label: 'Website URL', type: 'url', placeholder: 'https://www.mybusiness.com' },
      { key: 'phone', label: 'Phone', type: 'text', placeholder: '+1-555-123-4567' },
      { key: 'street', label: 'Street Address', type: 'text', placeholder: '123 Main Street' },
      { key: 'city', label: 'City', type: 'text', placeholder: 'New York' },
      { key: 'region', label: 'State/Region', type: 'text', placeholder: 'NY' },
      { key: 'postalCode', label: 'Postal Code', type: 'text', placeholder: '10001' },
      { key: 'country', label: 'Country', type: 'text', placeholder: 'US' },
      { key: 'latitude', label: 'Latitude', type: 'text', placeholder: '40.7128' },
      { key: 'longitude', label: 'Longitude', type: 'text', placeholder: '-74.0060' },
    ],
    build: (v) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: v.name || '',
      };
      if (v.description) schema.description = v.description;
      if (v.url) schema.url = v.url;
      if (v.phone) schema.telephone = v.phone;
      if (v.street || v.city) {
        schema.address = {
          '@type': 'PostalAddress',
          ...(v.street && { streetAddress: v.street }),
          ...(v.city && { addressLocality: v.city }),
          ...(v.region && { addressRegion: v.region }),
          ...(v.postalCode && { postalCode: v.postalCode }),
          ...(v.country && { addressCountry: v.country }),
        };
      }
      if (v.latitude && v.longitude) {
        schema.geo = {
          '@type': 'GeoCoordinates',
          latitude: v.latitude,
          longitude: v.longitude,
        };
      }
      return schema;
    },
  },
  howTo: {
    label: 'How-To',
    labelFr: 'Tutoriel (HowTo)',
    icon: ListOrdered,
    fields: [
      { key: 'name', label: 'Title', type: 'text', required: true, placeholder: 'How to...' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'A brief description of this how-to' },
      { key: 'totalTime', label: 'Total Time (ISO 8601)', type: 'text', placeholder: 'PT30M (30 minutes)' },
    ],
    arrayFields: [
      {
        key: 'steps',
        label: 'Steps',
        addLabel: 'Add Step',
        fields: [
          { key: 'name', label: 'Step Title', type: 'text', required: true, placeholder: 'Step title' },
          { key: 'text', label: 'Step Description', type: 'textarea', required: true, placeholder: 'What to do in this step' },
        ],
      },
    ],
    build: (v, arrays) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: v.name || '',
      };
      if (v.description) schema.description = v.description;
      if (v.totalTime) schema.totalTime = v.totalTime;
      schema.step = (arrays.steps || [])
        .filter((s) => s.name && s.text)
        .map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        }));
      return schema;
    },
  },
  breadcrumb: {
    label: 'Breadcrumb',
    labelFr: "Fil d'Ariane",
    icon: ChevronRight,
    fields: [],
    arrayFields: [
      {
        key: 'items',
        label: 'Breadcrumb Items',
        addLabel: 'Add Item',
        fields: [
          { key: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Page name' },
          { key: 'url', label: 'URL', type: 'url', required: true, placeholder: 'https://example.com/page' },
        ],
      },
    ],
    build: (_v, arrays) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (arrays.items || [])
        .filter((item) => item.name)
        .map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          ...(item.url && { item: item.url }),
        })),
    }),
  },
  organization: {
    label: 'Organization',
    labelFr: 'Organisation',
    icon: Building2,
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Organization Name' },
      { key: 'url', label: 'Website URL', type: 'url', placeholder: 'https://www.example.com' },
      { key: 'logo', label: 'Logo URL', type: 'url', placeholder: 'https://www.example.com/logo.png' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Organization description' },
      { key: 'sameAs', label: 'Social Links (comma separated)', type: 'textarea', placeholder: 'https://twitter.com/..., https://linkedin.com/...' },
    ],
    build: (v) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: v.name || '',
      };
      if (v.url) schema.url = v.url;
      if (v.logo) schema.logo = v.logo;
      if (v.description) schema.description = v.description;
      if (v.sameAs) {
        schema.sameAs = v.sameAs.split(',').map((s) => s.trim()).filter(Boolean);
      }
      return schema;
    },
  },
  person: {
    label: 'Person',
    labelFr: 'Personne',
    icon: User,
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true, placeholder: 'John Doe' },
      { key: 'url', label: 'Website URL', type: 'url', placeholder: 'https://johndoe.com' },
      { key: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'Software Engineer' },
      { key: 'worksFor', label: 'Works For', type: 'text', placeholder: 'Company Name' },
      { key: 'image', label: 'Photo URL', type: 'url', placeholder: 'https://example.com/photo.jpg' },
      { key: 'sameAs', label: 'Social Links (comma separated)', type: 'textarea', placeholder: 'https://twitter.com/..., https://linkedin.com/...' },
    ],
    build: (v) => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: v.name || '',
      };
      if (v.url) schema.url = v.url;
      if (v.jobTitle) schema.jobTitle = v.jobTitle;
      if (v.worksFor) schema.worksFor = { '@type': 'Organization', name: v.worksFor };
      if (v.image) schema.image = v.image;
      if (v.sameAs) {
        schema.sameAs = v.sameAs.split(',').map((s) => s.trim()).filter(Boolean);
      }
      return schema;
    },
  },
};

function syntaxHighlightJSON(json: string): string {
  return json.replace(
    /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'text-orange-500'; // number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-primary font-medium'; // key
          match = match.replace(/:$/, '');
          return `<span class="${cls}">${match}</span>:`;
        } else {
          cls = 'text-green-600 dark:text-green-400'; // string
        }
      } else if (/true|false/.test(match)) {
        cls = 'text-blue-500'; // boolean
      } else if (/null/.test(match)) {
        cls = 'text-muted-foreground'; // null
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export const SchemaGeneratorTool = ({ lang, content }: Props) => {
  const t = content.freeTools.schemaGenerator;
  const [selectedType, setSelectedType] = useState('article');
  const [values, setValues] = useState<Record<string, string>>({});
  const [arrays, setArrays] = useState<Record<string, Record<string, string>[]>>({});
  const [copied, setCopied] = useState(false);

  const config = SCHEMA_TYPES[selectedType];

  const handleTypeChange = useCallback((type: string) => {
    setSelectedType(type);
    setValues({});
    setArrays({});
    setCopied(false);
  }, []);

  const handleFieldChange = useCallback((key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleArrayItemChange = useCallback((arrayKey: string, index: number, fieldKey: string, value: string) => {
    setArrays((prev) => {
      const arr = [...(prev[arrayKey] || [])];
      arr[index] = { ...arr[index], [fieldKey]: value };
      return { ...prev, [arrayKey]: arr };
    });
  }, []);

  const addArrayItem = useCallback((arrayKey: string) => {
    setArrays((prev) => ({
      ...prev,
      [arrayKey]: [...(prev[arrayKey] || []), {}],
    }));
  }, []);

  const removeArrayItem = useCallback((arrayKey: string, index: number) => {
    setArrays((prev) => ({
      ...prev,
      [arrayKey]: (prev[arrayKey] || []).filter((_, i) => i !== index),
    }));
  }, []);

  const jsonOutput = useMemo(() => {
    try {
      const schema = config.build(values, arrays);
      return JSON.stringify(schema, null, 2);
    } catch {
      return '{}';
    }
  }, [config, values, arrays]);

  const highlightedJson = useMemo(() => syntaxHighlightJSON(jsonOutput), [jsonOutput]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = jsonOutput;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderField = (field: FieldDefinition, value: string, onChange: (val: string) => void) => {
    const baseInputClass = 'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary';
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClass} resize-none`}
            rows={3}
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClass}
          >
            <option value="">--</option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={field.type === 'date' ? 'date' : field.type === 'url' ? 'url' : 'text'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={baseInputClass}
          />
        );
    }
  };

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Code className="h-4 w-4" />
          {lang === 'fr' ? 'Outil gratuit' : 'Free tool'}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* Schema Type Selector */}
      <div className="mx-auto max-w-6xl mb-8">
        <label className="block text-sm font-medium text-foreground mb-3">
          {t.schemaTypeLabel}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {Object.entries(SCHEMA_TYPES).map(([key, cfg]) => {
            const Icon = cfg.icon;
            const isActive = key === selectedType;
            return (
              <button
                key={key}
                onClick={() => handleTypeChange(key)}
                className={`flex flex-col items-center gap-1.5 rounded-lg border p-3 text-sm transition-colors ${
                  isActive
                    ? 'border-primary bg-primary/5 text-primary font-medium'
                    : 'border-border bg-card hover:border-primary/30 text-muted-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs text-center leading-tight">{lang === 'fr' ? cfg.labelFr : cfg.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form + Preview */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Form */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            {config.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {renderField(field, values[field.key] || '', (val) => handleFieldChange(field.key, val))}
              </div>
            ))}

            {/* Array fields */}
            {config.arrayFields?.map((arrayField) => (
              <div key={arrayField.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">{arrayField.label}</label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem(arrayField.key)}
                    className="gap-1"
                  >
                    <Plus className="h-3 w-3" />
                    {arrayField.addLabel}
                  </Button>
                </div>
                {(arrays[arrayField.key] || []).map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border bg-background p-4 space-y-3 relative">
                    <button
                      type="button"
                      onClick={() => removeArrayItem(arrayField.key, idx)}
                      className="absolute top-2 right-2 text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <span className="text-xs font-medium text-muted-foreground">
                      #{idx + 1}
                    </span>
                    {arrayField.fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-xs text-muted-foreground mb-1">{field.label}</label>
                        {renderField(
                          field,
                          item[field.key] || '',
                          (val) => handleArrayItemChange(arrayField.key, idx, field.key, val)
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                {(!arrays[arrayField.key] || arrays[arrayField.key].length === 0) && (
                  <p className="text-sm text-muted-foreground text-center py-4 border border-dashed border-border rounded-lg">
                    {lang === 'fr'
                      ? `Cliquez sur "${arrayField.addLabel}" pour commencer`
                      : `Click "${arrayField.addLabel}" to get started`
                    }
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: JSON Preview */}
        <div className="rounded-xl border border-border bg-card shadow-sm flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-sm font-medium text-foreground">{t.previewLabel}</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-500" />
                    {t.copiedMessage}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    {t.copyButton}
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2"
              >
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {lang === 'fr' ? 'Valider' : 'Validate'}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap break-all">
              <code dangerouslySetInnerHTML={{ __html: highlightedJson }} />
            </pre>
          </div>
          {/* Script tag hint */}
          <div className="p-4 border-t border-border bg-muted/50 rounded-b-xl">
            <p className="text-xs text-muted-foreground">
              {lang === 'fr'
                ? 'Collez ce JSON-LD dans une balise <script type="application/ld+json"> dans votre HTML.'
                : 'Paste this JSON-LD inside a <script type="application/ld+json"> tag in your HTML.'}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mx-auto max-w-5xl mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12 text-center">
        <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">{t.cta.title}</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          {t.cta.description}
        </p>
        <Button size="lg" className="font-semibold" asChild>
          <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
            {t.cta.button}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* FAQ Section */}
      {t.faq && t.faq.items.length > 0 && (
        <section className="py-24 border-t border-border mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-6">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t.faq.title}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, index) => (
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
        </section>
      )}

      {/* Dark CTA Section */}
      <section className="bg-foreground text-background rounded-2xl mt-16">
        <div className="py-20 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {lang === 'fr'
                ? "Pr\u00eat \u00e0 d\u00e9velopper votre trafic avec un assistant IA SEO ?"
                : "Ready to grow your traffic with an AI SEO assistant?"}
            </h2>
            <p className="text-lg text-background/70">
              {lang === 'fr'
                ? "Essayez Asking Franklin gratuitement pendant 7 jours. Aucune carte bancaire requise."
                : "Try Asking Franklin free for 7 days. No credit card required."}
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full group" asChild>
              <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? "J'essaye gratuitement" : "Try it for free"}
                <ArrowRight className="ml-2 h-5 w-5 btn-arrow" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
