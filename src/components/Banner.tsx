import type { Language } from '@/lib/i18n';

interface BannerProps {
  lang: Language;
}

export const Banner = ({ lang }: BannerProps) => {
  const text = lang === 'fr'
    ? '🎶 All I want for Christmas is... plus de trafic ! 🎶 Obtenez -50% avec le code "XMAS50". Passez d\'invisible à incontournable !'
    : '🎶 All I want for Christmas is... more traffic ! 🎶 Get 50% off with code "XMAS50". From invisible to unmissable!';

  return (
    <div
      className="sticky top-20 z-40 relative w-full py-3 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #D42426 0%, #800020 100%)'
      }}
    >
      {/* Left organic blob shape - Christmas red gradient */}
      <div
        className="absolute left-0 top-0 w-80 h-40 md:w-[500px] md:h-60 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #D42426 0%, #8B0000 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
          transform: 'translate(-25%, -30%) rotate(-10deg)',
        }}
      />

      {/* Left small red circle */}
      <div
        className="absolute left-20 md:left-40 top-14 md:top-20 w-20 h-20 md:w-28 md:h-28 opacity-40"
        style={{
          background: 'radial-gradient(circle, #D42426, #B22222)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Right organic blob shape - burgundy to red gradient */}
      <div
        className="absolute right-0 top-0 w-80 h-40 md:w-[500px] md:h-60 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #D42426 0%, #800020 100%)',
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          filter: 'blur(60px)',
          transform: 'translate(25%, -30%) rotate(10deg)',
        }}
      />

      {/* Right top medium burgundy circle */}
      <div
        className="absolute right-24 md:right-40 top-10 md:top-14 w-16 h-16 md:w-24 md:h-24 opacity-40"
        style={{
          background: 'radial-gradient(circle, #800020, #660018)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Right bottom dark red circle */}
      <div
        className="absolute right-16 md:right-28 top-20 md:top-28 w-14 h-14 md:w-20 md:h-20 opacity-40"
        style={{
          background: 'radial-gradient(circle, #8B0000, #660000)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Text content */}
      <div className="container relative z-10">
        <p className="text-sm md:text-base font-semibold text-white leading-relaxed drop-shadow-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

