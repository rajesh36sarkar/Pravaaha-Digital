'use client';
import { useApp } from '@/app/context/AppContext';

export default function Testimonials() {
  const { siteContent } = useApp();
  return (
    <section id="testimonials" className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-sm text-emerald-400/70 font-medium uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteContent.testimonials.map((t) => (
          <div key={t.id} className="glass p-6 rounded-3xl card-hover border border-white/5">
            <div className="text-yellow-400 text-lg mb-3">{'⭐'.repeat(t.rating)}</div>
            <p className="text-white/70 text-sm leading-relaxed">"{t.text}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-white/30 text-xs">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}