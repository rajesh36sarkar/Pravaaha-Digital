'use client';

import { useRef, useEffect, useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

const Counter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const step = Math.ceil(value / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="p-6 border rounded-sm transition-colors group"
      style={{
        borderColor: 'var(--theme-border)',
        backgroundColor: 'var(--theme-glass)',
        backdropFilter: 'blur(4px)',
      }}>
      <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors group-hover:opacity-80"
        style={{ color: 'var(--theme-text-main)' }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold uppercase tracking-wider"
        style={{ color: 'var(--theme-text-muted)' }}>
        {label}
      </div>
    </div>
  );
};

export default function LiveCounter() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: 'var(--theme-text-main)' }}>
          Built at Lightning Speed
        </h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg"
          style={{ color: 'var(--theme-text-muted)' }}>
          We don't believe in making you wait months. Your basic digital address can be live and generating leads in less than a day.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter value={24} suffix="h" label="Hours to Launch" />
          <Counter value={99.9} suffix="%" label="Uptime Guarantee" />
          <Counter value={1} suffix="h" label="Support Response" />
          <Counter value={100} suffix="+" label="Satisfied Clients" />
        </div>
      </div>
    </section>
  );
}