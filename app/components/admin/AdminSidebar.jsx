'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/app/context/AppContext';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logoutAdmin } = useApp();

  const links = [
    { href: '/admin', label: '📊 Dashboard' },
    { href: '/admin/services', label: '🛠 Services' },
    { href: '/admin/works', label: '📁 Works' },
    { href: '/admin/faqs', label: '❓ FAQs' },
    { href: '/admin/settings', label: '⚙️ Settings' },
    { href: '/admin/submissions', label: '📩 Submissions' },
  ];

  return (
    <aside className="w-64 h-full min-h-screen bg-black/40 border-r border-white/5 p-4 flex flex-col">
      <div className="mb-6">
        <span className="text-2xl">⚡</span>
        <span className="font-bold ml-2 gradient-text">Pravaaha Admin</span>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
              pathname === link.href
                ? 'bg-pink-500/20 text-pink-400'
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => {
          logoutAdmin();
          window.location.href = '/';
        }}
        className="mt-6 px-4 py-2.5 rounded-xl border border-white/10 text-white/40 hover:text-white text-sm transition-colors"
      >
        Logout
      </button>
    </aside>
  );
}