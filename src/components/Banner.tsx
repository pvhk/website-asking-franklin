import type { Language } from '@/lib/i18n';

interface BannerProps {
  lang: Language;
}

export const Banner = ({ lang }: BannerProps) => {
  const text = lang === 'fr' 
    ? 'Black Friday : -50% sur tous nos abonnements code "FRANKLIN50". Passez d\'invisible à incontournable !'
    : 'Black Friday : - 50% off our subscriptions code "FRANKLIN50". Go from invisible to unmissable !';

  return (
    <div className="sticky top-20 z-40 relative w-full bg-black py-3 text-center overflow-hidden">
      {/* Left organic blob shape - fuchsia to purple gradient */}
      <div 
        className="absolute left-0 top-0 w-80 h-40 md:w-[500px] md:h-60 opacity-90"
        style={{
          background: 'linear-gradient(135deg, hsl(330 100% 70%) 0%, hsl(280 80% 50%) 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
          transform: 'translate(-25%, -30%) rotate(-10deg)',
        }}
      />
      
      {/* Left small fuchsia circle */}
      <div 
        className="absolute left-20 md:left-40 top-14 md:top-20 w-20 h-20 md:w-28 md:h-28 opacity-80"
        style={{
          background: 'radial-gradient(circle, hsl(330 100% 70%), hsl(330 100% 60%))',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Right organic blob shape - fuchsia to blue-purple gradient */}
      <div 
        className="absolute right-0 top-0 w-80 h-40 md:w-[500px] md:h-60 opacity-90"
        style={{
          background: 'linear-gradient(135deg, hsl(330 100% 70%) 0%, hsl(260 80% 50%) 100%)',
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          filter: 'blur(60px)',
          transform: 'translate(25%, -30%) rotate(10deg)',
        }}
      />
      
      {/* Right top medium purple circle */}
      <div 
        className="absolute right-24 md:right-40 top-10 md:top-14 w-16 h-16 md:w-24 md:h-24 opacity-80"
        style={{
          background: 'radial-gradient(circle, hsl(280 70% 60%), hsl(280 70% 50%))',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Right bottom dark blue-purple circle */}
      <div 
        className="absolute right-16 md:right-28 top-20 md:top-28 w-14 h-14 md:w-20 md:h-20 opacity-80"
        style={{
          background: 'radial-gradient(circle, hsl(260 80% 50%), hsl(260 80% 40%))',
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

