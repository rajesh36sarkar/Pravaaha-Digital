// Force static generation
export const dynamic = 'force-static';

import { getTranslation } from '@/lib/i18n';
import HeroSection from '@/components/home/HeroSection';
import LossCalculator from '@/components/home/LossCalculator';
import LiveCounter from '@/components/home/LiveCounter';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === 'bn' ? 'Pravaaha Digital | আপনার ডিজিটাল ঠিকানা' : 'Pravaaha Digital | Your Digital Address',
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getTranslation(locale);

  return (
    <div className="flex flex-col w-full">
      <HeroSection t={t} locale={locale} />
      <LiveCounter />
      <LossCalculator />
      
      <section className="py-24 bg-transparent relative z-10 text-center px-6 border-y"
        style={{ borderColor: 'var(--theme-border)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
            style={{ color: 'var(--theme-text-main)' }}>
            Trusted by Local Businesses
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="text-2xl font-bold" style={{ color: 'var(--theme-text-muted)' }}>🏪 BongBites</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--theme-text-muted)' }}>🔧 Sen Hardware</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--theme-text-muted)' }}>📚 Vidya Coaching</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--theme-text-muted)' }}>🏡 Ananda Realty</span>
          </div>
          <div className="mt-12">
            <a 
              href={`/${locale}/services`}
              className="inline-block px-10 py-4 font-bold text-lg rounded-sm hover:scale-105 transition-all shadow-lg"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: '#000000',
              }}
            >
              View Our Pricing Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}