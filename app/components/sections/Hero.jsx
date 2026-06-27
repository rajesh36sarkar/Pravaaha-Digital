'use client';
import { useApp } from '@/app/context/AppContext';

export default function Hero() {
  const { siteContent } = useApp();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8 animate-float">
          🚀 24×7 Digital Presence for Your Business
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="block">Your Digital Presence</span>
          <span className="gradient-text block mt-2">Starts Here</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
          Open your shop 24×7 for customers worldwide. Starting from just ₹10,000+ GST.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="#contact" className="btn-primary px-8 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-lg shadow-pink-500/20">
            Get Started →
          </a>
          <a href="#works" className="btn-outline px-8 py-3.5 rounded-2xl text-white/80 font-medium text-sm">
            View Our Work
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">₹10,000+</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Starting Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24×7</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Always Open</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}