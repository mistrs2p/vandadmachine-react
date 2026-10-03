import React, { useState } from 'react';
import { Language, PowderProduct } from '../types';
import { POWDER_PRODUCTS } from '../data/siteData';
import { FlaskConical, Check, ArrowUpRight, Beaker, FileText } from 'lucide-react';

interface PowderProductsLabProps {
  lang: Language;
  onOpenPilotRFQ: (productName: string) => void;
}

export const PowderProductsLab: React.FC<PowderProductsLabProps> = ({
  lang,
  onOpenPilotRFQ,
}) => {
  const isFa = lang === 'fa';
  const [selectedPowder, setSelectedPowder] = useState<PowderProduct>(POWDER_PRODUCTS[0]);

  return (
    <section id="powders" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'محصولات پودری و خدمات کارمزدی' : 'Powder Products & Toll Spray Drying'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'مرکز تست پایلوت مواد' : 'Pilot Trial Laboratory'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'محصولات پودری فرآوری‌شده با اسپری درایرهای ونداد' : 'Powder Products & Laboratory Testing'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'شرکت شیمی صنعت ونداد علاوه بر ساخت ماشین‌آلات، راهکارهای جامع خشک‌سازی و تولید پودرهای با خلوص بالا برای صنایع دارویی، غذایی و کشاورزی ارائه می‌دهد.'
              : 'Beyond equipment manufacturing, Vandad operates an in-house powder trial lab producing high-purity inorganic salts, food ingredients, and toll spray drying services.'}
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Powder Selection List (4 columns) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              {isFa ? 'انتخاب ماده پودری جهت بررسی آنالیز' : 'Select Product to Inspect Analysis'}
            </span>

            {POWDER_PRODUCTS.map((powder) => {
              const isSelected = selectedPowder.id === powder.id;
              return (
                <button
                  key={powder.id}
                  onClick={() => setSelectedPowder(powder)}
                  className={`w-full p-3.5 rounded-lg border text-start transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/10 border-amber-400 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      {isFa ? powder.name_fa.split(' (')[0] : powder.name_en}
                    </span>
                    {powder.chemicalFormula && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {powder.chemicalFormula}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">
                    {isFa ? powder.category_fa : powder.category_en}
                  </span>
                </button>
              );
            })}

            {/* Pilot Plant Banner */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg mt-6">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-2">
                <FlaskConical className="w-4 h-4" />
                <span>{isFa ? 'تست رایگان نمونه در واحد پایلوت' : 'Pilot Trial Service for Your Raw Feed'}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {isFa
                  ? 'هنوز در مورد رفتار خشک‌شدن محلول خود مطمئن نیستید؟ نمونه ۱۰ لیتری خود را برای آزمایشگاه ونداد ارسال کنید تا مشخصات پودر و سرعت تبخیر سنجیده شود.'
                  : 'Send a 10-liter sample of your solution to our lab in Tehran to validate particle morphology, bulk density, and drying temperatures prior to plant investment.'}
              </p>
              <button
                onClick={() => onOpenPilotRFQ(isFa ? selectedPowder.name_fa : selectedPowder.name_en)}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center cursor-pointer"
              >
                {isFa ? 'درخواست نوبت تست پایلوت مواد' : 'Schedule Pilot Test Trial'}
              </button>
            </div>
          </div>

          {/* Active Product Detailed Card (7 columns) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-lg p-6 lg:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {isFa ? selectedPowder.name_fa : selectedPowder.name_en}
                </h3>
                <span className="text-xs text-amber-400 font-medium">
                  {isFa ? selectedPowder.category_fa : selectedPowder.category_en}
                </span>
              </div>

              {selectedPowder.chemicalFormula && (
                <div className="px-3 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-amber-400">
                  {selectedPowder.chemicalFormula}
                </div>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {isFa ? selectedPowder.description_fa : selectedPowder.description_en}
            </p>

            {/* Quality & Mesh Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 bg-slate-950 rounded border border-slate-850">
                <span className="text-[11px] text-slate-500 block">{isFa ? 'خلوص / ماده موثره' : 'Assay / Purity'}</span>
                <span className="text-xs font-bold text-white font-mono">{selectedPowder.specifications.purity}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded border border-slate-850">
                <span className="text-[11px] text-slate-500 block">{isFa ? 'رطوبت باقیمانده' : 'Residual Moisture'}</span>
                <span className="text-xs font-bold text-amber-400 font-mono">{selectedPowder.specifications.moisture}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded border border-slate-850">
                <span className="text-[11px] text-slate-500 block">{isFa ? 'مش دانه‌بندی' : 'Mesh Distribution'}</span>
                <span className="text-xs font-bold text-white font-mono">{selectedPowder.specifications.meshSize}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded border border-slate-850">
                <span className="text-[11px] text-slate-500 block">{isFa ? 'ظاهر و رنگ' : 'Visual Color'}</span>
                <span className="text-xs font-bold text-slate-200 truncate block">{selectedPowder.specifications.color}</span>
              </div>
            </div>

            {/* Industrial Uses */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-850 mb-6">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                {isFa ? 'کاربردهای اصلی در صنایع:' : 'Principal Industrial Applications:'}
              </span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {(isFa ? selectedPowder.industrialUses_fa : selectedPowder.industrialUses_en).map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                {isFa ? 'امکان تولید در مقیاس صنعتی با خطوط اسپری درایر ونداد' : 'Available for bulk supply or toll spray drying production'}
              </span>

              <button
                onClick={() => onOpenPilotRFQ(isFa ? selectedPowder.name_fa : selectedPowder.name_en)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <span>{isFa ? 'استعلام قیمت خرید / تولید کارمزد' : 'Inquire Powder Order / Toll Drying'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
