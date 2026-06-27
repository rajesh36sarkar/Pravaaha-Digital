'use client';

import { useApp } from '@/app/context/AppContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useApp();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full glass shadow-lg border border-white/5"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}