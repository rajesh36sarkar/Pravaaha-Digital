'use client';

import { useApp } from '@/app/context/AppContext';

export default function Footer() {
  const { siteContent } = useApp();
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <span className="text-white/30">
          © 2026 <span className="gradient-text">{siteContent.settings.businessName}</span>. All rights reserved.
        </span>
        <div className="flex gap-6 text-white/30">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}