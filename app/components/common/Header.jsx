'use client';

import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';
import AdminLoginModal from '../admin/AdminLoginModal';

export default function Header() {
  const { darkMode, isAdmin, logoutAdmin } = useApp();
  const [showLogin, setShowLogin] = useState(false);
  const navItems = ['Home', 'Services', 'Works', 'Testimonials', 'FAQ', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b ${darkMode ? 'bg-black/50 border-white/5' : 'bg-white/80 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text">Pravaaha</span>
              <span className={darkMode ? 'text-white/60' : 'text-gray-600'}> Enterprise</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {isAdmin && <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">Admin</span>}
            <button
              onClick={() => {
                if (isAdmin) {
                  logoutAdmin();
                } else {
                  setShowLogin(true);
                }
              }}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-colors ${isAdmin ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'border border-pink-500/40 text-pink-400 hover:bg-pink-500/10'}`}
            >
              {isAdmin ? 'Logout' : 'Admin'}
            </button>
          </div>
        </div>
      </header>
      {showLogin && <AdminLoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}