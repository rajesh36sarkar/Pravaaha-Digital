'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

export default function Navbar({ t, locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/showcase`, label: t.showcase },
    { href: `/${locale}/about`, label: t.about },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: 'var(--theme-glass, rgba(255,255,255,0.1))',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--theme-border, rgba(255,255,255,0.1))',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3 group z-50">
            <div className="transition-transform duration-500 group-hover:scale-105">
              <Logo className="w-12 h-12" />
            </div>
            <span className="text-2xl font-black tracking-tighter transition-colors drop-shadow"
              style={{ color: 'var(--theme-text-main)', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Pravaaha
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold transition-all hover:-translate-y-0.5 drop-shadow"
                style={{
                  color: pathname === link.href ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link href={`/${locale}/contact`}>
              <span className="px-6 py-2.5 text-sm font-bold border-2 transition-all rounded-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--theme-accent)',
                  color: 'var(--theme-accent)',
                  backgroundColor: 'var(--theme-glass)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {t.contact}
              </span>
            </Link>
          </nav>

          <button
            className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-8 h-1 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
              style={{ backgroundColor: 'var(--theme-text-main)' }} />
            <span className={`block w-8 h-1 rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: 'var(--theme-text-main)' }} />
            <span className={`block w-8 h-1 rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
              style={{ backgroundColor: 'var(--theme-text-main)' }} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm shadow-2xl flex flex-col px-8 pt-32 animate-slide-left"
            style={{
              backgroundColor: 'var(--theme-glass)',
              backdropFilter: 'blur(16px)',
              borderLeft: '1px solid var(--theme-border)',
            }}>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black transition-colors drop-shadow"
                  style={{
                    color: pathname === link.href ? 'var(--theme-accent)' : 'var(--theme-text-main)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full h-px my-4" style={{ backgroundColor: 'var(--theme-border)' }} />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsOpen(false)}
                className="inline-block w-full py-4 text-center font-bold text-xl rounded-sm shadow-md"
                style={{
                  backgroundColor: 'var(--theme-accent)',
                  color: '#000000',
                }}
              >
                {t.contact}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}