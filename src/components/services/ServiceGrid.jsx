'use client';

export default function ServiceGrid() {
  const services = [
    { icon: '🌐', title: 'Business Websites', desc: 'Fast, responsive, and SEO-optimized sites that act as your 24/7 digital storefront.' },
    { icon: '📱', title: 'Web Apps & Portals', desc: 'Custom inventory management, booking systems, and internal tools for your business.' },
    { icon: '🛒', title: 'E-Commerce Solutions', desc: 'Sell your local products globally with integrated payment gateways and cart systems.' },
    { icon: '🔍', title: 'Local SEO', desc: 'Dominate Google Maps and local search results so customers find you first.' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-24">
      {services.map((service, idx) => (
        <div key={idx} className="p-8 border transition-all group rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--theme-glass)',
            backdropFilter: 'blur(8px)',
            borderColor: 'var(--theme-border)',
          }}>
          <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold mb-3"
            style={{ color: 'var(--theme-text-main)' }}>
            {service.title}
          </h3>
          <p className="font-medium leading-relaxed"
            style={{ color: 'var(--theme-text-muted)' }}>
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  );
}