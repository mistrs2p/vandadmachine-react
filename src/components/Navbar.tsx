import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#products', label_fa: 'تجهیزات صنعتی', label_en: 'Machinery' },
    { href: '#calculator', label_fa: 'محاسبه‌گر ظرفیت', label_en: 'Sizing Tool' },
    { href: '#atomizer', label_fa: 'روتاری اتمایزر', label_en: 'Atomizer Tech' },
    { href: '#powders', label_fa: 'محصولات پودری', label_en: 'Powders & Lab' },
    { href: '#services', label_fa: 'خدمات مهندسی', label_en: 'Services' },
    { href: '#contact', label_fa: 'تماس و کارخانه', label_en: 'Contact' },
  ];

  const isFa = lang === 'fa';

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="/"
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          {isFa ? COMPANY_INFO.name_fa : COMPANY_INFO.brand_en}
        </a>

        {/* Zone 2: 4-6 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              {isFa ? link.label_fa : link.label_en}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-md hover:border-slate-700 transition-colors whitespace-nowrap"
            title={isFa ? 'Switch to English' : 'تغییر به فارسی'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{isFa ? 'EN' : 'فارسی'}</span>
          </button>

          <button
            onClick={onOpenRFQ}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-sm shadow-amber-500/10"
          >
            <span>{isFa ? 'استعلام قیمت و مشاوره' : 'Request Quotation'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 rounded-md transition-colors"
              >
                {isFa ? link.label_fa : link.label_en}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <span>{isFa ? 'استعلام قیمت و مشاوره فنی' : 'Request Quotation & Sizing'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
