'use client';

import { useState } from 'react';

export default function LossCalculator() {
  const [lostCustomers, setLostCustomers] = useState(5);
  const avgOrderValue = 500;
  const monthlyLoss = lostCustomers * avgOrderValue * 30;

  return (
    <section className="py-24 bg-transparent relative z-10 border-y"
      style={{ borderColor: 'var(--theme-border)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--theme-text-main)' }}>
            The Cost of Being Offline
          </h2>
          <p style={{ color: 'var(--theme-text-muted)' }}>
            Estimate how much revenue you are missing out on every month.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-sm shadow-lg relative overflow-hidden"
          style={{
            backgroundColor: 'var(--theme-glass)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--theme-border)',
            boxShadow: 'var(--theme-shadow)',
          }}>
          <div className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: 'var(--theme-accent)' }} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <label className="block font-semibold mb-6 text-lg"
                style={{ color: 'var(--theme-text-main)' }}>
                Estimated lost customers per day: <span style={{ color: 'var(--theme-accent)' }} className="text-2xl">{lostCustomers}</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={lostCustomers}
                onChange={(e) => setLostCustomers(Number(e.target.value))}
                className="w-full h-2 rounded-sm appearance-none cursor-pointer"
                style={{
                  accentColor: 'var(--theme-accent)',
                  background: 'var(--theme-border)',
                }}
              />
              <div className="flex justify-between text-xs mt-2"
                style={{ color: 'var(--theme-text-muted)' }}>
                <span>1 customer</span>
                <span>50+ customers</span>
              </div>
              <p className="text-sm mt-6"
                style={{ color: 'var(--theme-text-muted)' }}>
                *Assuming an average profit of ₹500 per customer.
              </p>
            </div>

            <div className="p-8 rounded-sm text-center shadow-inner"
              style={{
                backgroundColor: 'var(--theme-glass)',
                borderColor: 'var(--theme-border)',
                borderWidth: '1px',
              }}>
              <p className="font-medium mb-2"
                style={{ color: 'var(--theme-text-muted)' }}>
                Potential Monthly Loss
              </p>
              <h3 className="text-5xl font-extrabold mb-4"
                style={{ color: 'var(--theme-text-main)' }}>
                ₹{monthlyLoss.toLocaleString('en-IN')}
              </h3>
              <p className="text-sm font-semibold"
                style={{ color: 'var(--theme-accent)' }}>
                Stop leaving money on the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}