// React Router removed for Astro compatibility
import type { SiteContent } from '@/content/types';
import { withBase, withBaseImage } from '@/lib/baseUrl';

interface FooterProps {
  content: SiteContent;
}

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-gradient-accent">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1 space-y-4">
            <img src={withBaseImage('/logo.svg')} alt={content.siteName} className="h-12 md:h-14 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">{content.footer.description}</p>
          </div>

          {content.footer.links.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  const href = isExternal ? item.href : withBase(item.href);
                  return (
                    <li key={item.href}>
                      <a
                        href={href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        {item.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground font-medium">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
