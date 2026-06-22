'use client';

import { useState, useEffect } from 'react';

// Use your actual background images from public/assets/images/
const backgroundImages = [
  '/assets/images/hero-bg-1.webp',
  '/assets/images/hero-bg-2.webp',
  '/assets/images/hero-bg-3.webp',
  '/assets/images/hero-bg-4.webp',
  '/assets/images/hero-bg-5.webp',
  // Add more if you have them
];

// Predefined themes for each image (you can customize per image)
const themes = [
  { // for hero-bg-1
    '--theme-text-main': '#ffffff',
    '--theme-text-muted': 'rgba(255,255,255,0.9)',
    '--theme-glass': 'rgba(255,255,255,0.15)',
    '--theme-accent': '#22d3ee',
    '--theme-border': 'rgba(255,255,255,0.2)',
    '--theme-shadow': '0 8px 32px rgba(0,0,0,0.2)',
  },
  { // for hero-bg-2
    '--theme-text-main': '#f8fafc',
    '--theme-text-muted': '#e2e8f0',
    '--theme-glass': 'rgba(0,0,0,0.2)',
    '--theme-accent': '#f59e0b',
    '--theme-border': 'rgba(255,255,255,0.15)',
    '--theme-shadow': '0 8px 32px rgba(0,0,0,0.25)',
  },
  { // for hero-bg-3
    '--theme-text-main': '#0f172a',
    '--theme-text-muted': '#334155',
    '--theme-glass': 'rgba(255,255,255,0.35)',
    '--theme-accent': '#7e22ce',
    '--theme-border': 'rgba(0,0,0,0.1)',
    '--theme-shadow': '0 8px 32px rgba(0,0,0,0.1)',
  },
  { // for hero-bg-4
    '--theme-text-main': '#f3e8ff',
    '--theme-text-muted': '#d8b4fe',
    '--theme-glass': 'rgba(0,0,0,0.25)',
    '--theme-accent': '#f0abfc',
    '--theme-border': 'rgba(243,232,255,0.2)',
    '--theme-shadow': '0 8px 32px rgba(0,0,0,0.3)',
  },
  { // for hero-bg-5
    '--theme-text-main': '#ffffff',
    '--theme-text-muted': '#cffafe',
    '--theme-glass': 'rgba(0,0,0,0.15)',
    '--theme-accent': '#a5f3fc',
    '--theme-border': 'rgba(34,211,238,0.2)',
    '--theme-shadow': '0 8px 32px rgba(0,0,0,0.2)',
  },
];

export default function PageBackground() {
  const [bgInfo, setBgInfo] = useState(null);

  useEffect(() => {
    // Pick a random image and its corresponding theme
    const index = Math.floor(Math.random() * backgroundImages.length);
    const src = backgroundImages[index];
    const theme = themes[index % themes.length]; // fallback if themes length mismatch

    setBgInfo({ src, theme });

    // Inject theme variables into root
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  if (!bgInfo) return <div className="fixed inset-0 -z-50 bg-black"></div>;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-slow-zoom"
        style={{ backgroundImage: `url('${bgInfo.src}')` }}
      />
      {/* 40% transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}