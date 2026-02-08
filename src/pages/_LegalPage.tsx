import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';

interface LegalPageProps {
  lang: Language;
  content: SiteContent;
  type: 'terms' | 'legalNotice' | 'privacyPolicy';
}

export const LegalPage = ({ lang, content, type }: LegalPageProps) => {
  const pageContent = content[type];

  return (
    <article className="container max-w-4xl py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">
        {pageContent.title}
      </h1>
      {pageContent.intro && (
        <p className="text-lg text-muted-foreground mb-8">{pageContent.intro}</p>
      )}
      <div className="space-y-8">
        {pageContent.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="text-foreground whitespace-pre-wrap leading-relaxed">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};
