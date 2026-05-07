'use client';

import { useState } from 'react';
import { Lang } from '@/lib/content';

interface NavbarProps {
  t: {
    nav: Record<string, string>;
  };
  lang: Lang;
  setLang: (l: Lang) => void;
}

const navItems = [
  { key: 'intro', href: '#intro' },
  { key: 'literature', href: '#literature' },
  { key: 'methodology', href: '#methodology' },
  { key: 'results', href: '#platform' },
  { key: 'references', href: '#references' },
];

export default function Navbar({ t, lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-indigo-700 text-sm sm:text-base leading-tight">
              ICFI 2026
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang('zh')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === 'zh'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              EN
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden ml-2 p-2 rounded text-gray-500 hover:text-indigo-600"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-gray-700 hover:text-indigo-600 font-medium"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
