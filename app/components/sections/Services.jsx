'use client';
import { useApp } from '@/app/context/AppContext';

export default function Services() {
  const { siteContent } = useApp();
  return (
    <section id="services" className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-sm text-pink-400/70 font-medium uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mt-3">
          Comprehensive digital solutions to grow your business online.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteContent.services.map((service) => (
          <div key={service.id} className="glass p-8 rounded-3xl card-hover border border-white/5">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-white/50 text-sm mt-2 leading-relaxed">{service.desc}</p>
            <div className="mt-4 inline-block px-4 py-1.5 rounded-full glass text-sm font-semibold gradient-text">
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}