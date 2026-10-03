import React from 'react';
import { Language } from '../types';
import { ENGINEERING_SERVICES } from '../data/siteData';
import { FlaskConical, Layers, Cpu, Wrench, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenRFQ }) => {
  const isFa = lang === 'fa';

  const iconMap: Record<string, any> = {
    FlaskConical,
    Layers,
    Cpu,
    Wrench
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'خدمات فنی و مهندسی تخصصی' : 'Specialized Engineering Services'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'پشتیبانی کامل از ایده تا راه‌اندازی' : 'Turnkey EPC Support'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'خدمات مهندسی فرآیند و ساخت تجهیزات' : 'Process Engineering & Turnkey Plant Services'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'تیم مهندسی چندتخصصی ونداد شامل متخصصین مکانیک، متالورژی، کنترل و مهندسی شیمی در تمام فازهای پروژه در کنار شماست.'
              : 'Our interdisciplinary team of mechanical, metallurgy, electrical, and chemical engineers guides your plant from slurry analysis to full commercial operation.'}
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                className="bg-slate-950/80 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Editorial numbering without mechanical slashes */}
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      0{index + 1}.
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {isFa ? service.title_fa : service.title_en}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {isFa ? service.fullDesc_fa : service.fullDesc_en}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-850">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {isFa ? 'اقدامات و دستاوردهای این خدمت:' : 'Key Deliverables:'}
                    </span>
                    {(isFa ? service.deliverables_fa : service.deliverables_en).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {isFa ? 'پشتیبانی فنی در محل کارخانه' : 'On-site factory execution'}
                  </span>
                  <button
                    onClick={onOpenRFQ}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{isFa ? 'مشاوره و درخواست خدمت' : 'Inquire Service'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
