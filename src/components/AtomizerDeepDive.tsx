import React from 'react';
import { Language } from '../types';
import { ResilientImage } from './ResilientImage';
import { Cog, Check, ShieldCheck, Gauge, Zap, Wrench, ArrowUpRight } from 'lucide-react';

interface AtomizerDeepDiveProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const AtomizerDeepDive: React.FC<AtomizerDeepDiveProps> = ({ lang, onOpenRFQ }) => {
  const isFa = lang === 'fa';

  const specs = [
    {
      icon: Gauge,
      title_fa: 'سرعت کاری ۱۰,۰۰۰ تا ۲۰,۰۰۰ RPM',
      title_en: '10,000 to 20,000 RPM Operating Range',
      desc_fa: 'تنظیم پیوسته سرعت چرخش به وسیله اینورترهای فرکانسی جهت کنترل دقیق سایز قطرات از ۱۵ الی ۷۵ میکرون.',
      desc_en: 'Continuous frequency inverter modulation allowing precise mean droplet diameter tuning from 15 to 75 µm.'
    },
    {
      icon: ShieldCheck,
      title_fa: 'بالانس دینامیکی گرید G0.4',
      title_en: 'ISO Dynamic Balancing Grade G0.4',
      desc_fa: 'بالانس فوق دقیق اسپیندل و دیسک جهت حذف هرگونه لرزش مکانیکی و کارکرد مداوم ۲۴ ساعته در پلنت‌های صنعتی.',
      desc_en: 'Ultra-precision high-speed balancing preventing harmonic vibrations and ensuring continuous 24/7 reliability.'
    },
    {
      icon: Zap,
      title_fa: 'بلبرینگ‌های سرامیکی های‌اسپید',
      title_en: 'Hybrid Ceramic Ultra-Speed Bearings',
      desc_fa: 'بهره‌گیری از ساچمه‌های سیلیکون نیترید (Si3N4) با اصطکاک ناچیز، مقاومت حرارتی بالا و طول عمر ۳ برابر.',
      desc_en: 'Silicon nitride ceramic rolling elements with negligible friction and extended service life under thermal stress.'
    },
    {
      icon: Wrench,
      title_fa: 'پکیج روان‌کاری گردشی تحت فشار',
      title_en: 'Pressurized Oil Circulation Skid',
      desc_fa: 'مجهز به سنسور فشار، دبی‌سنج و خنک‌کننده روغن با فرمان توقف اضطراری هوشمند در صورت افت فشار.',
      desc_en: 'Equipped with pressure switches, oil coolers, micro-filters, and automated safety interlocks.'
    }
  ];

  return (
    <section id="atomizer" className="py-16 md:py-24 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'فناوری دانش‌بنیان شرکت شیمی صنعت ونداد' : 'Knowledge-Based Proprietary Tech'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'قلب تپنده اسپری درایر' : 'The Heart of the Spray Dryer'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'مهندسی روتاری اتمایزر دور بالای ونداد' : 'Vandad High-Speed Precision Rotary Atomizer'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'تولید پودر با کیفیت و یکنواخت به پاشش دقیق مایع بستگی دارد. شیمی صنعت ونداد با بومی‌سازی ساخت اتمایزرهای دور بالا، ایران را از واردات این تجهیز حیاتی بی‌نیاز ساخته است.'
              : 'Powder quality and narrow particle size distribution directly depend on atomization precision. Vandad delivers domestic high-speed atomizer engineering with unmatched durability.'}
          </p>
        </div>

        {/* Bento-style Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg border border-slate-800 bg-slate-950 p-2 overflow-hidden shadow-2xl">
              <ResilientImage
                src="https://vandadmachinery.com/wp-content/uploads/2024/09/اتمایزر-شیمی-صنعت-ونداد.jpg"
                alt={isFa ? 'روتاری اتمایزر شیمی صنعت ونداد' : 'Vandad Rotary Atomizer Spindle Assembly'}
                category="atomizer"
                className="w-full h-80 sm:h-96 object-cover rounded-md"
              />
              <div className="p-3 bg-slate-900/90 rounded border border-slate-800/80 mt-2 text-xs flex items-center justify-between">
                <span className="text-slate-300 font-medium">
                  {isFa ? 'دیسک تیتانیومی ضدسایش با کانال‌های سرامیکی' : 'Titanium Wheel with Ceramic Inserts'}
                </span>
                <span className="font-mono text-amber-400 font-bold">Grade G0.4</span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-white block mb-1">
                {isFa ? 'خدمات اورهال و بالانس اتمایزرهای وارداتی:' : 'Retrofit & Overhaul for Imported Systems:'}
              </span>
              <p className="text-slate-400 leading-relaxed">
                {isFa
                  ? 'تعمیرات اساسی، تعویض برینگ‌های دور بالا، سنگ‌زنی اسپیندل و بالانس دینامیکی انواع اتمایزرهای نایرو (Niro)، نیوکا و سایر برندهای معتبر جهانی در کارخانه ونداد با گارانتی کتبی.'
                  : 'Complete overhaul, ceramic bearing replacement, and precision rebalancing for imported Niro and European atomizer units with OEM performance guarantees.'}
              </p>
            </div>
          </div>

          {/* Technical Grid (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-slate-950/80 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {isFa ? item.title_fa : item.title_en}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {isFa ? item.desc_fa : item.desc_en}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Retrofit & Quote CTA Bar */}
            <div className="p-6 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {isFa ? 'نیاز به خرید یا نوسازی روتاری اتمایزر دارید؟' : 'Need a Custom Atomizer or Complete Overhaul?'}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {isFa
                    ? 'مشاوره فنی رایگان جهت انتخاب دیسک، سرعت و متریال متناسب با خوراک شما'
                    : 'Get technical guidance on wheel diameter, channel geometry, and alloy metallurgy'}
                </p>
              </div>

              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{isFa ? 'استعلام قیمت اتمایزر' : 'Request Atomizer Quote'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
