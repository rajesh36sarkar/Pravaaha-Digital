'use client';

import Link from 'next/link';

export default function HeroSection({ t, locale }) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ backgroundColor: 'var(--theme-accent)' }} />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ backgroundColor: 'var(--theme-accent)' }} style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        
        <div className="inline-block mb-8 px-5 py-2 rounded-sm border backdrop-blur-md shadow-lg animate-slide-up"
          style={{
            borderColor: 'var(--theme-border)',
            backgroundColor: 'var(--theme-glass)',
            color: 'var(--theme-text-muted)',
          }}
        >
          <span className="mr-2 text-lg leading-none animate-pulse"
            style={{ color: 'var(--theme-accent)' }}>●</span> 
          Live in West Bengal
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-8 animate-scale-up drop-shadow-2xl"
          style={{
            color: 'var(--theme-text-main)',
            animationDelay: '0.3s',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
          {t?.hero?.title || "Your Digital Address. Your Bengal. Your Future."}
        </h1>
        
        <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-medium animate-fade-in drop-shadow-md"
          style={{
            color: 'var(--theme-text-muted)',
            animationDelay: '0.6s',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
          {t?.hero?.subtitle || "We build fast, affordable, and stunning digital solutions for local businesses."}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          <Link 
            href={`/${locale}/services`}
            className="w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-sm hover:-translate-y-1 transition-all duration-300 shadow-lg"
            style={{
              backgroundColor: 'var(--theme-accent)',
              color: '#000000',
            }}
          >
            {t?.hero?.cta_primary || "Start Building"}
          </Link>
          <Link 
            href={`/${locale}/showcase`}
            className="w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-sm hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border-2"
            style={{
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-text-main)',
              backgroundColor: 'var(--theme-glass)',
            }}
          >
            {t?.hero?.cta_secondary || "View Projects"}
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-medium animate-fade-in"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-muted)' }}>
            <span className="text-xl">✓</span> 100+ clients
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-muted)' }}>
            <span className="text-xl">✓</span> 24h delivery
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-muted)' }}>
            <span className="text-xl">✓</span> 99.9% uptime
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-muted)' }}>
            <span className="text-xl">✓</span> SSL secure
          </div>
        </div>
      </div>
    </section>
  );
}