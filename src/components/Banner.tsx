import type { Language } from '@/lib/i18n';

interface BannerProps {
  lang: Language;
}

export const Banner = ({ lang }: BannerProps) => {
  const text = lang === 'fr'
    ? '🎶 All I want for Christmas is... plus de trafic ! 🎶 Obtenez -50% avec le code "XMAS50". Passez d\'invisible à incontournable !'
    : '🎶 All I want for Christmas is... more traffic ! 🎶 Get 50% off with code "XMAS50". From invisible to unmissable!';

  return (
    <div className="sticky top-20 z-40 w-full py-3 text-center bg-primary">
      {/* Text content */}
      <div className="container">
        <p className="text-sm md:text-base font-semibold text-primary-foreground leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
