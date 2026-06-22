import ServiceGrid from '@/components/services/ServiceGrid';
import PricingCards from '@/components/services/PricingCards';

export const metadata = {
  title: 'Services & Pricing | Pravaaha Digital',
};

export default async function ServicesPage({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen pb-24 relative z-10">
      <div className="pt-24 pb-16 border-b"
        style={{ borderColor: 'var(--theme-border)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: 'var(--theme-text-main)' }}>Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto font-medium"
            style={{ color: 'var(--theme-text-muted)' }}>
            From basic digital addresses to complex ecosystems, we build technology that scales your local business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24">
        <ServiceGrid />
        
        <div className="text-center mb-16 mt-32">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: 'var(--theme-text-main)' }}>Transparent Pricing</h2>
          <p style={{ color: 'var(--theme-text-muted)' }}>No hidden fees. Just honest work for honest businesses.</p>
        </div>
        
        <PricingCards locale={locale} />
      </div>
    </div>
  );
}