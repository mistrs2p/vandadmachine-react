import React, { useState } from 'react';
import { Language } from '../types';
import { Wind, Flame, Cog, Layers, Filter, Fan, ChevronRight, Info } from 'lucide-react';

interface ProcessDiagramProps {
  lang: Language;
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ lang }) => {
  const isFa = lang === 'fa';
  const [activeStep, setActiveStep] = useState<number>(3); // Default on Atomizer

  const steps = [
    {
      id: 1,
      name_fa: '۱. فیلتراسیون هوای محیط',
      name_en: '1. Air Intake & Filtration',
      tagline_fa: 'فیلترهای هپا و پیش‌فیلتر G4/F9',
      tagline_en: 'Pre-filters G4/F9 & HEPA H13',
      icon: Wind,
      temp_fa: 'دمای محیط (~۲۰°C)',
      temp_en: 'Ambient (~20°C)',
      desc_fa: 'هوای ورودی از محیط توسط فیلترهای استاندارد بهداشتی عاری از هرگونه گردوغبار و آلاینده‌های میکروبی می‌شود تا برای مصارف غذایی و دارویی استانداردسازی گردد.',
      desc_en: 'Ambient air enters through multi-stage industrial filters (pre-filter and high-efficiency HEPA) ensuring 99.9% airborne particulate removal for food & GMP pharma grades.'
    },
    {
      id: 2,
      name_fa: '۲. ژنراتور هوای گرم',
      name_en: '2. Hot Air Generator',
      tagline_fa: 'مبدل حرارتی غیرمستقیم یا مشعل مستقیم',
      tagline_en: 'Indirect heat exchanger / direct burner',
      icon: Flame,
      temp_fa: '۱۴۰ الی ۳۵۰ درجه سانتی‌گراد',
      temp_en: '140°C - 350°C',
      desc_fa: 'هوا از روی مبدل استیل عبور کرده و بدون آلودگی به گازهای احتراق، تا دمای مطلوب فرآیند گرم می‌شود. کنترل دمای ورودی به صورت حلقه بسته (PID) توسط PLC زیمنس انجام می‌گیرد.',
      desc_en: 'Process air is heated to target temperature using indirect gas/steam heat exchangers or clean direct gas burners, controlled precisely via Siemens closed-loop PID controllers.'
    },
    {
      id: 3,
      name_fa: '۳. روتاری اتمایزر دانش‌بنیان',
      name_en: '3. Precision Rotary Atomizer',
      tagline_fa: 'سرعت ۱۰ تا ۲۰ هزار دور در دقیقه',
      tagline_en: '10,000 - 20,000 RPM wheel',
      icon: Cog,
      temp_fa: 'پاشش میکرونی (قطرات ۲۰ تا ۷۰ میکرون)',
      temp_en: 'Micro-droplets (20-70 µm)',
      desc_fa: 'قلب تپنده سیستم؛ مایع ورودی توسط پمپ دوزینگ به دیسک چرخان اتمایزر ونداد تزریق شده و بلافاصله به ابری همگن از قطرات میکرونی در داخل جریان گردابی هوای گرم تبدیل می‌شود.',
      desc_en: 'The core engineered module: High-pressure feed pump meters the liquid slurry to Vandad’s balanced spinning disc, dispersing it instantaneously into billions of micro-droplets.'
    },
    {
      id: 4,
      name_fa: '۴. محفظه خشک‌کن پاششی',
      name_en: '4. Drying Chamber Tower',
      tagline_fa: 'استنلس استیل ۳۱۶L با چکش‌های پنوماتیک',
      tagline_en: 'Sanitary 316L with pneumatic hammers',
      icon: Layers,
      temp_fa: 'تبخیر در کسر ثانیه (افت دما به ۸۰°C)',
      temp_en: 'Flash evaporation in milliseconds',
      desc_fa: 'آب موجود در قطرات در کسر ثانیه به دلیل سطح تماس وسیع تبخیر شده و ذرات پودر خشک تشکیل می‌گردند. دمای ماده به دلیل تبخیر خنک‌کننده آب هرگز بالا نرفته و مواد حساس حفظ می‌شوند.',
      desc_en: 'Intense heat and mass transfer vaporizes water instantaneously. Latent heat absorption cools the droplets, ensuring heat-sensitive ingredients never suffer thermal denaturation.'
    },
    {
      id: 5,
      name_fa: '۵. سیکلون راندمان بالا',
      name_en: '5. High-Efficiency Cyclone',
      tagline_fa: 'جداسازی گریز از مرکز ذرات جامد',
      tagline_en: 'Centrifugal vortex powder separation',
      icon: Filter,
      temp_fa: 'راندمان جداسازی ۹۸.۵٪',
      temp_en: '98.5% recovery rate',
      desc_fa: 'جریان گردابی هوا بیش از ۹۸ درصد از پودر خشک را تحت نیروی گریز از مرکز جدا کرده و از انتهای مخروطی سیکلون از طریق روتاری ولو وارد مخزن جمع‌آوری و بسته‌بندی می‌کند.',
      desc_en: 'High-velocity vortex dynamics spin out over 98% of the dry powder into the bottom discharge cone, feeding directly into rotary airlock valves for continuous bagging.'
    },
    {
      id: 6,
      name_fa: '۶. بگ‌فیلتر پالس جت و اگزاست فن',
      name_en: '6. Baghouse Filter & Exhaust Fan',
      tagline_fa: 'حذف کامل غبار و انتشار هوای پاک',
      tagline_en: 'Zero-emission pulse-jet filtration & ID fan',
      icon: Fan,
      temp_fa: 'راندمان کل سیستم بالای ۹۹.۸٪',
      temp_en: 'Overall system yield > 99.8%',
      desc_fa: 'ذرات میکرونی باقیمانده در هوا توسط کیسه‌های فیلتر ضدالکتریسیته ساکن با شستشوی ضربه‌ای هوای فشرده (Pulse-Jet) گرفته شده و هوای کاملاً تمیز توسط فن سانتریفیوژ به اتمسفر تخلیه می‌شود.',
      desc_en: 'Sub-micron dust is arrested by anti-static conductive filter sleeves cleaned by automated reverse pulse-jet compressed air, ensuring clean emissions compliant with environmental codes.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'مهندسی خط فرآیند' : 'Process Engineering Architecture'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'شماتیک P&ID خشک‌کن پاششی' : 'Interactive P&ID Workflow'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'مراحل عملکرد سیستم اسپری درایر شیمی صنعت ونداد' : 'How the Vandad Spray Drying Plant Works'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'روی هر مرحله از فرآیند ۶ گانه کلیک کنید تا عملکرد فنی، شرایط دمایی و جزئیات مهندسی تجهیزات را مشاهده نمایید.'
              : 'Click any stage in the flow diagram below to inspect temperature transitions, operational dynamics, and engineering details.'}
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3.5 rounded-lg border text-start transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400/10 border-amber-400 shadow-md shadow-amber-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-amber-400' : 'text-slate-500'
                  }`}>
                    0{step.id}
                  </span>
                </div>
                <div className={`text-xs font-semibold line-clamp-1 ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {isFa ? step.name_fa.split('. ')[1] : step.name_en.split('. ')[1]}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-mono">
                  {isFa ? step.temp_fa : step.temp_en}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Engineering Card */}
        {(() => {
          const selected = steps.find((s) => s.id === activeStep) || steps[2];
          const Icon = selected.icon;
          return (
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {isFa ? selected.name_fa : selected.name_en}
                    </h3>
                    <div className="text-xs text-amber-400 font-medium">
                      {isFa ? selected.tagline_fa : selected.tagline_en}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs bg-slate-950 px-4 py-2.5 rounded-md border border-slate-800 self-start md:self-auto">
                  <span className="text-slate-400">{isFa ? 'شرایط فرآیندی:' : 'Operating Regime:'}</span>
                  <span className="font-mono text-white font-semibold">{isFa ? selected.temp_fa : selected.temp_en}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                    {isFa ? selected.desc_fa : selected.desc_en}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2 p-2.5 bg-slate-950/60 rounded border border-slate-850">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{isFa ? 'کنترل خودکار دور و دما از طریق تاچ اسکرین HMI' : 'Fully automated control loops via HMI telemetry'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-slate-950/60 rounded border border-slate-850">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{isFa ? 'متریال استاندارد استیل ضد زنگ ۳۱۶L گرید دارویی' : 'Sanitary 316L stainless steel contact metallurgy'}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-950 p-4 rounded-md border border-slate-800/80 text-xs space-y-2">
                  <div className="font-semibold text-slate-200 mb-2">
                    {isFa ? 'مزیت مهندسی شیمی صنعت ونداد:' : 'Vandad Engineering Edge:'}
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[13px]">
                    {isFa
                      ? 'تمامی اجزای مسیر جریان هوا و ذرات بر اساس آنالیز افت فشار و سرعت ته‌نشینی طراحی گردیده تا کمترین رسوب دیواره و بالاترین راندمان مصرف انرژی حرارتی حاصل شود.'
                      : 'All ductwork velocities and chamber fluid patterns are validated to prevent wall caking while minimizing fan kilowatt draw.'}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
