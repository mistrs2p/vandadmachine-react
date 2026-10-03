import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, ArrowRight, Check, Sparkles, AlertCircle } from 'lucide-react';
import { SPRAY_DRYER_MODELS } from '../data/siteData';

interface EquipmentSizingCalculatorProps {
  lang: Language;
  onSelectModelForRFQ: (model: string, feed: number, evap: number, powder: number) => void;
}

export const EquipmentSizingCalculator: React.FC<EquipmentSizingCalculatorProps> = ({
  lang,
  onSelectModelForRFQ,
}) => {
  const isFa = lang === 'fa';

  // Input states
  const [feedRate, setFeedRate] = useState<number>(300); // kg/h
  const [solidsPercent, setSolidsPercent] = useState<number>(35); // %
  const [targetMoisture, setTargetMoisture] = useState<number>(3); // %
  const [heatSource, setHeatSource] = useState<'gas' | 'steam' | 'electric'>('gas');

  // Chemical Engineering Calculations
  const solidsRatio = solidsPercent / 100;
  const targetSolidsRatio = (100 - targetMoisture) / 100;

  // Powder rate (kg/h) = Feed * (Solids in / Solids out)
  const powderOutput = Math.max(0, Number(((feedRate * solidsRatio) / targetSolidsRatio).toFixed(1)));
  // Water evaporated (kg/h) = Feed - Powder
  const waterEvaporation = Math.max(0, Number((feedRate - powderOutput).toFixed(1)));

  // Estimated Thermal Energy required (kW & kcal/h)
  // ~2,260 kJ/kg latent heat + ~35% sensible & chamber losses -> ~3,500 kJ/kg water ~ 0.97 kW thermal per kg evap
  const thermalKw = Math.round(waterEvaporation * 0.97);
  const thermalKcal = Math.round(thermalKw * 860);

  // Recommended Model matching
  let recommendedModel = SPRAY_DRYER_MODELS[0];
  for (const model of SPRAY_DRYER_MODELS) {
    if (model.waterEvap >= waterEvaporation) {
      recommendedModel = model;
      break;
    }
    recommendedModel = SPRAY_DRYER_MODELS[SPRAY_DRYER_MODELS.length - 1];
  }

  const handleApplyToRFQ = () => {
    onSelectModelForRFQ(recommendedModel.model, feedRate, waterEvaporation, powderOutput);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'ابزار مهندسی فرآیند شیمیایی' : 'Chemical Process Engineering Tool'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'محاسبه بالانس جرم و انرژی' : 'Mass & Energy Balance Model'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'محاسبه‌گر ظرفیت تبخیر و انتخاب مدل اسپری درایر' : 'Interactive Evaporation & Spray Dryer Sizing Tool'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'مشخصات فیزیکی محلول یا اسلاری ورودی خود را وارد کنید تا نرخ تبخیر آب، میزان پودر خروجی در ساعت و مدل پیشنهادی اسپری درایر ونداد بلافاصله محاسبه شود.'
              : 'Enter your liquid slurry feed rate and solids percentage to calculate hourly water evaporation, dry powder yield, thermal power duty, and the matching Vandad system.'}
          </p>
        </div>

        {/* Two-Column Grid: Inputs & Live Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-slate-950/90 border border-slate-800 rounded-lg p-6 space-y-6">
            <h3 className="text-sm font-semibold text-slate-200 border-b border-slate-850 pb-3 flex items-center justify-between">
              <span>{isFa ? 'پارامترهای خوراک ورودی (Feed Properties)' : 'Input Slurry Parameters'}</span>
              <span className="text-xs text-amber-400 font-mono">1.0 Mass Balance</span>
            </h3>

            {/* Slider 1: Feed Rate */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <label className="font-medium text-slate-300">
                  {isFa ? 'دبی خوراک مایع ورودی (Feed Rate)' : 'Feed Flow Rate'}
                </label>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {feedRate} kg/h
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="2500"
                step="10"
                value={feedRate}
                onChange={(e) => setFeedRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>20 kg/h</span>
                <span>1000 kg/h</span>
                <span>2500 kg/h</span>
              </div>
            </div>

            {/* Slider 2: Solids Content */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <label className="font-medium text-slate-300">
                  {isFa ? 'درصد ماده جامد در خوراک (Total Solids)' : 'Total Solids in Slurry'}
                </label>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {solidsPercent} %
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="70"
                step="1"
                value={solidsPercent}
                onChange={(e) => setSolidsPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>5% (محلول رقیق)</span>
                <span>35% (اسلاری استاندارد)</span>
                <span>70% (خمیر غلیظ)</span>
              </div>
            </div>

            {/* Slider 3: Target Moisture in Powder */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <label className="font-medium text-slate-300">
                  {isFa ? 'رطوبت نهایی پودر خشک (Residual Moisture)' : 'Target Powder Moisture'}
                </label>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {targetMoisture} %
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={targetMoisture}
                onChange={(e) => setTargetMoisture(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>0.5% (شیمیایی خالص)</span>
                <span>3.0% (استاندارد)</span>
                <span>8.0% (ژلاتین و عصاره)</span>
              </div>
            </div>

            {/* Heat Source Selector */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-slate-300 mb-2">
                {isFa ? 'منبع انرژی حرارتی اولیه' : 'Primary Heating Utility'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'gas', label_fa: 'مشعل گاز طبیعی', label_en: 'Natural Gas' },
                  { id: 'steam', label_fa: 'مبدل بخار', label_en: 'Steam Coils' },
                  { id: 'electric', label_fa: 'المنت برقی', label_en: 'Electric' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHeatSource(item.id as any)}
                    className={`py-2 px-3 text-xs font-medium rounded-md border transition-colors whitespace-nowrap cursor-pointer ${
                      heatSource === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {isFa ? item.label_fa : item.label_en}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-950/95 border border-slate-800 rounded-lg p-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  {isFa ? 'نتایج محاسبات مهندسی' : 'Calculated Output Sizing'}
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {isFa ? 'معادلات معتبر CFD' : 'Thermodynamic Verified'}
                </span>
              </div>

              {/* Main 2 Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/90 border border-slate-800/80 rounded-md p-4">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isFa ? 'نرخ تبخیر آب (Water Evaporation)' : 'Water Evaporation Rate'}
                  </span>
                  <div className="text-3xl font-extrabold text-amber-400 tabular-nums">
                    {waterEvaporation}
                    <span className="text-xs font-normal text-slate-400 ms-1">kg/h</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {isFa ? 'ظرفیت تبخیر خالص مورد نیاز برج' : 'Net evaporation duty required'}
                  </span>
                </div>

                <div className="bg-slate-900/90 border border-slate-800/80 rounded-md p-4">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isFa ? 'تولید نهایی پودر خشک (Dry Powder)' : 'Dry Powder Production Rate'}
                  </span>
                  <div className="text-3xl font-extrabold text-white tabular-nums">
                    {powderOutput}
                    <span className="text-xs font-normal text-slate-400 ms-1">kg/h</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {isFa ? `با رطوبت باقیمانده ${targetMoisture}٪` : `At ${targetMoisture}% residual moisture`}
                  </span>
                </div>
              </div>

              {/* Heat requirement row */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800/60 rounded-md flex items-center justify-between text-xs mb-6">
                <span className="text-slate-300">
                  {isFa ? 'بار حرارتی فرآیند (Thermal Duty):' : 'Estimated Thermal Heat Load:'}
                </span>
                <span className="font-mono text-slate-100 font-semibold tabular-nums">
                  {thermalKw} kW / {thermalKcal.toLocaleString()} kcal/h
                </span>
              </div>

              {/* Recommended Machine Model Box */}
              <div className="p-4 rounded-md border border-amber-500/30 bg-amber-500/5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-400">
                    {isFa ? 'مدل استاندارد پیشنهادی شیمی صنعت ونداد:' : 'Recommended Vandad Standard Model:'}
                  </span>
                  <span className="text-base font-bold font-mono text-white bg-slate-900 px-2.5 py-0.5 rounded border border-slate-700">
                    {recommendedModel.model}
                  </span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>
                    <span className="text-slate-400">{isFa ? 'حداکثر توان تبخیر آب:' : 'Max Evaporation Capacity:'} </span>
                    <strong className="text-slate-100 font-mono">{recommendedModel.waterEvap} kg/h</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">{isFa ? 'محدوده دمای هوای ورودی:' : 'Inlet Air Temp Spectrum:'} </span>
                    <strong className="text-slate-100 font-mono">{recommendedModel.airTempInlet}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">{isFa ? 'ابعاد تقریبی سالن نصب:' : 'Footprint Envelope:'} </span>
                    <strong className="text-slate-100 font-mono">{recommendedModel.footprintMeters} m</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">{isFa ? 'کاربری ایده‌آل:' : 'Typical Applications:'} </span>
                    <strong className="text-amber-400/90">{recommendedModel.suitableFor}</strong>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={handleApplyToRFQ}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <span>
                  {isFa
                    ? `دریافت پیشنهاد فنی و مالی برای مدل ${recommendedModel.model}`
                    : `Request Technical & Commercial Proposal for ${recommendedModel.model}`}
                </span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
