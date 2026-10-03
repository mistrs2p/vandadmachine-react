import React from 'react';
import { Language } from '../types';
import { ArrowDown, ArrowUpRight, Calculator, CheckCircle2 } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  lang: Language;
  onOpenRFQ: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenRFQ, onScrollToCalculator }) => {
  const isFa = lang === 'fa';

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      {/* Subtle technical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed editorial trust kicker (Zero-pill rule: clean text with dividers) */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-amber-400 mb-6">
          <span>{isFa ? 'شرکت دانش‌بنیان ماشین‌آلات فرآیندی' : 'Certified Knowledge-Based Process Engineering'}</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>{isFa ? 'تولید ملی روتاری اتمایزر دور بالا' : 'High-Speed Precision Rotary Atomizers'}</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>{isFa ? 'شهرک صنعتی عباس‌آباد تهران' : 'Abbas Abad Industrial Park, Tehran'}</span>
        </div>

        {/* Marquee Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] [text-wrap:balance]">
              {isFa ? (
                <>
                  سازنده تخصصی <span className="text-amber-400">اسپری درایر صنعتی</span> و روتاری اتمایزر
                </>
              ) : (
                <>
                  Precision Engineering of <span className="text-amber-400">Industrial Spray Dryers</span> & Rotary Atomizers
                </>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isFa
                ? 'طراحی، مدلسازی CFD و ساخت ماشین‌آلات پیشرفته خشک‌کن پاششی، گرانول‌سازهای بستر سیال و درام فلیکر برای صنایع شیمیایی، پتروشیمی، دارویی و غذایی کشور با تضمین دانه‌بندی و تست پایلوت.'
                : 'Turnkey engineering, CFD optimization, and fabrication of advanced spray drying systems, fluid bed granulators, and cooling drum flakers for chemical, pharmaceutical, mineral, and dairy industries.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-md shadow-amber-500/10 cursor-pointer"
              >
                <span>{isFa ? 'درخواست استعلام قیمت و مشاوره' : 'Request Equipment Quotation'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{isFa ? 'محاسبه‌گر ظرفیت تبخیر آب' : 'Evaporation Sizing Calculator'}</span>
              </button>
            </div>

            {/* Adjacent Proof Metrics (Claim-to-Proof Adjacency rule) */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">10-2,000</div>
                <div className="text-xs text-slate-400 mt-1">{isFa ? 'ظرفیت تبخیر (kg/h)' : 'Evap. Capacity (kg/h)'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">20,000</div>
                <div className="text-xs text-slate-400 mt-1">{isFa ? 'حداکثر دور اتمایزر (RPM)' : 'Max Atomizer Speed'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">316L / 304</div>
                <div className="text-xs text-slate-400 mt-1">{isFa ? 'استیل بهداشتی و دارویی' : 'Sanitary Metallurgy'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-1">{isFa ? 'تست پایلوت آزمایشگاهی' : 'Pilot Trial Support'}</div>
              </div>
            </div>

          </div>

          {/* Focal Image Container with technical specs overlay */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-slate-800 bg-slate-900/80 p-2 shadow-2xl">
              <ResilientImage
                src="https://vandadmachinery.com/wp-content/uploads/2024/09/اسپری-درایر9.jpg"
                alt={isFa ? 'خط تولید اسپری درایر شیمی صنعت ونداد' : 'Vandad Industrial Spray Dryer Tower'}
                className="w-full h-80 sm:h-96 rounded-md object-cover"
                category="spray_dryer"
              />

              <div className="p-4 bg-slate-950/90 rounded-md mt-2 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-slate-200">
                    {isFa ? 'برج خشک‌کن پاششی صنعتی ونداد' : 'Vandad Industrial Spray Tower'}
                  </span>
                  <span className="font-mono text-amber-400">VSD Series</span>
                </div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{isFa ? 'سیستم بازیابی دوسطحی: سیکلون راندمان بالا + بگ فیلتر' : 'Dual Recovery: High-efficiency cyclone + baghouse'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{isFa ? 'مجهز به کنترل هوشمند دمای ورودی/خروجی زیمنس' : 'Siemens PLC automated thermal delta control'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
