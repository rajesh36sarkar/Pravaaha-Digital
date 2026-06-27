'use client';

import { useApp } from '@/app/context/AppContext';
import Header from '@/app/components/common/Header';
import Hero from '@/app/components/sections/Hero';
import Services from '@/app/components/sections/Services';
import Works from '@/app/components/sections/Works';
import Testimonials from '@/app/components/sections/Testimonials';
import FAQ from '@/app/components/sections/FAQ';
import Contact from '@/app/components/sections/Contact';
import Footer from '@/app/components/common/Footer';
import ChatWidget from '@/app/components/chat/ChatWidget';
import ThemeToggle from '@/app/components/common/ThemeToggle';

export default function Home() {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0a0a0f] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Works />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <ThemeToggle />
    </div>
  );
}