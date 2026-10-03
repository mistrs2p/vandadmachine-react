import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenRFQ }) => {
  const isFa = lang === 'fa';

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-lg font-bold text-white block">
              {isFa ? COMPANY_INFO.name_fa : COMPANY_INFO.brand_en}
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isFa
                ? 'طراحی، مدلسازی CFD و ساخت ماشین‌آلات پیشرفته اسپری درایر، روتاری اتمایزرهای دور بالای دانش‌بنیان، گرانول‌سازهای بستر سیال و درام فلیکر برای صنایع مادر کشور.'
                : 'Turnkey engineering and fabrication of industrial spray drying plants, knowledge-based rotary atomizers, and process equipment.'}
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-500">
              <div>{isFa ? 'عضو شرکت‌های دانش‌بنیان ریاست جمهوری' : 'Certified National Knowledge-Based Enterprise'}</div>
              <div>{isFa ? 'شهرک صنعتی عباس‌آباد، تهران' : 'Abbas Abad Industrial City, Tehran'}</div>
            </div>
          </div>

          {/* Quick Equipment Links */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              {isFa ? 'تجهیزات و ماشین‌آلات' : 'Process Equipment'}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'اسپری درایر صنعتی' : 'Industrial Spray Dryers'}
                </a>
              </li>
              <li>
                <a href="#atomizer" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'روتاری اتمایزر دور بالا' : 'Precision Rotary Atomizers'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'گرانول‌ساز بستر سیال' : 'Fluid Bed Granulators'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'خشک‌کن بستر سیال لرزشی' : 'Vibrating Fluid Bed Dryers'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'درام فلیکر صنعتی' : 'Cooling Drum Flakers'}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              {isFa ? 'بخش‌های سایت' : 'Navigation'}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'محاسبه‌گر ظرفیت تبخیر' : 'Evaporation Sizing Tool'}
                </a>
              </li>
              <li>
                <a href="#powders" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'محصولات پودری و تست پایلوت' : 'Powders & Trial Lab'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'خدمات ساخت و اورهال' : 'Engineering Services'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenRFQ}
                  className="hover:text-amber-400 transition-colors text-start cursor-pointer"
                >
                  {isFa ? 'استعلام قیمت و پیش‌فاکتور' : 'Request RFQ Quote'}
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {isFa ? 'آدرس و راه‌های ارتباطی' : 'Factory & Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Direct Coordinates */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              {isFa ? 'ارتباط مستقیم کارخانه' : 'Contact Coordinates'}
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone_landline}`} className="hover:text-white font-mono">
                  {isFa ? COMPANY_INFO.phone_landline_display_fa : COMPANY_INFO.phone_landline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone_mobile}`} className="hover:text-white font-mono">
                  {isFa ? COMPANY_INFO.phone_mobile_display_fa : COMPANY_INFO.phone_mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  {isFa ? COMPANY_INFO.address_fa : COMPANY_INFO.address_en}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} {isFa ? COMPANY_INFO.name_fa : COMPANY_INFO.brand_en}. {isFa ? 'کلیه حقوق محفوظ است.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>GMP Sanitary Design</span>
            <span aria-hidden="true">·</span>
            <span>ASME Code Construction</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
