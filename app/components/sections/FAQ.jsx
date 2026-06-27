'use client';
import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';

export default function FAQ() {
  const { siteContent } = useApp();
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="section-padding max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-sm text-purple-400/70 font-medium uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </div>
      <div className="space-y-3">
        {siteContent.faqs.map((faq, idx) => (
          <div key={faq.id} className="glass rounded-2xl overflow-hidden border border-white/5">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/5 transition-colors"
            >
              <span>{faq.q}</span>
              <span className="text-white/40 text-xl">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-6 pb-4 text-white/50 text-sm leading-relaxed">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}