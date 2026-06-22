export const metadata = { title: 'About Us | Pravaaha Digital' };

export default async function AboutPage({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen pb-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-block mb-6 px-4 py-1.5 font-bold tracking-wider uppercase text-sm rounded-sm"
              style={{
                backgroundColor: 'var(--theme-glass)',
                color: 'var(--theme-accent)',
                border: '1px solid var(--theme-border)',
              }}>
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight"
              style={{ color: 'var(--theme-text-main)' }}>
              Empowering Local Businesses in Bengal.
            </h1>
            
            <div className="space-y-6 text-lg leading-relaxed font-medium"
              style={{ color: 'var(--theme-text-muted)' }}>
              <p>
                At <strong style={{ color: 'var(--theme-text-main)' }}>Pravaaha Digital</strong>, we noticed a massive gap. While massive corporations use top-tier tech to multiply revenues, the local sweet shops, boutiques, and hardware stores of Bengal rely entirely on crowded WhatsApp groups.
              </p>
              <p>
                We believe <strong style={{ color: 'var(--theme-text-main)' }}>everyone deserves a digital address</strong>. A place they own, entirely independent of social media algorithms.
              </p>
            </div>
          </div>

          <div className="relative animate-scale-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow"
              style={{ backgroundColor: 'var(--theme-accent)', opacity: 0.2 }} />
            
            <div className="p-8 md:p-12 relative z-10"
              style={{
                backgroundColor: 'var(--theme-glass)',
                backdropFilter: 'blur(12px)',
                borderColor: 'var(--theme-border)',
                borderWidth: '1px',
                borderRadius: '0.25rem',
                boxShadow: 'var(--theme-shadow)',
              }}>
              <h3 className="text-3xl font-extrabold mb-4 inline-block pb-2 border-b-4"
                style={{
                  color: 'var(--theme-text-main)',
                  borderBottomColor: 'var(--theme-accent)',
                }}>
                Our Vision
              </h3>
              <p className="text-xl font-bold leading-relaxed mt-6"
                style={{ color: 'var(--theme-text-main)' }}>
                "To digitize 10,000 local businesses across West Bengal over the next 5 years, providing them with affordable, beautiful, and highly functional digital ecosystems."
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="border-l-2 pl-4"
                  style={{ borderColor: 'var(--theme-accent)' }}>
                  <div className="text-4xl font-black"
                    style={{ color: 'var(--theme-text-main)' }}>100+</div>
                  <div className="text-sm font-bold uppercase mt-1"
                    style={{ color: 'var(--theme-text-muted)' }}>Sites Launched</div>
                </div>
                <div className="border-l-2 pl-4"
                  style={{ borderColor: 'var(--theme-accent)' }}>
                  <div className="text-4xl font-black"
                    style={{ color: 'var(--theme-text-main)' }}>24h</div>
                  <div className="text-sm font-bold uppercase mt-1"
                    style={{ color: 'var(--theme-text-muted)' }}>Delivery Speed</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}