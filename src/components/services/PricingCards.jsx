'use client';

import { PLAN_NAMES } from '@/lib/i18n';
import Link from 'next/link';

export default function PricingCards({ locale }) {
  const names = PLAN_NAMES[locale] || PLAN_NAMES.en;

  const plans = [
    {
      id: 'pro',
      name: names.pro,
      price: '10,000',
      target: 'For first-timers wanting a digital address.',
      features: ['5-page static website', 'WhatsApp & Maps sync', '1 round of revision', '1 month free support'],
      isPopular: false,
    },
    {
      id: 'max',
      name: names.max,
      price: '30,000',
      target: 'For businesses ready to go viral.',
      features: ['Everything in PRO', 'FREE Domain + Hosting', 'Payment gateway', 'Dynamic CMS Panel', '3 rounds of revision'],
      isPopular: true,
    },
    {
      id: 'ultra',
      name: names.ultra,
      price: '50,000+',
      target: 'For dreamers wanting reality.',
      features: ['Fully custom UI/UX', 'Bespoke databases', 'Voice Search', 'Full E-commerce', 'Dedicated Manager'],
      isPopular: false,
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start py-8">
      {plans.map((plan) => (
        <div 
          key={plan.id} 
          className="relative p-10 border rounded-sm transition-all duration-300 hover:-translate-y-2"
          style={{
            backgroundColor: 'var(--theme-glass)',
            backdropFilter: 'blur(12px)',
            borderColor: plan.isPopular ? 'var(--theme-accent)' : 'var(--theme-border)',
            boxShadow: plan.isPopular ? 'var(--theme-shadow)' : 'none',
          }}
        >
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm shadow-md"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: '#000000',
              }}>
              Most Selected
            </div>
          )}
          
          <div className="mb-8 pb-6"
            style={{ borderBottom: '1px solid var(--theme-border)' }}>
            <h3 className="text-3xl font-black mb-2 uppercase"
              style={{ color: 'var(--theme-text-main)' }}>
              {plan.name}
            </h3>
            <p className="text-sm h-10 font-medium"
              style={{ color: 'var(--theme-text-muted)' }}>
              {plan.target}
            </p>
          </div>
          
          <div className="mb-8">
            <span className="text-5xl font-black tracking-tighter"
              style={{ color: 'var(--theme-text-main)' }}>
              ₹{plan.price}
            </span>
            <span className="text-sm font-bold ml-2"
              style={{ color: 'var(--theme-text-muted)' }}>
              +GST
            </span>
          </div>
          
          <ul className="mb-10 space-y-5">
            {plan.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="shrink-0 font-bold"
                  style={{ color: 'var(--theme-accent)' }}>✓</span>
                <span className="font-semibold"
                  style={{ color: 'var(--theme-text-main)' }}>{feat}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href={`/${locale}/contact?plan=${plan.id}`}
            className={`block w-full py-5 text-center font-black transition-all duration-300 rounded-sm hover:scale-105`}
            style={{
              backgroundColor: plan.isPopular ? 'var(--theme-accent)' : 'var(--theme-glass)',
              color: plan.isPopular ? '#000000' : 'var(--theme-text-main)',
              border: plan.isPopular ? 'none' : '1px solid var(--theme-border)',
            }}
          >
            Select {plan.name}
          </Link>
        </div>
      ))}
    </div>
  );
}