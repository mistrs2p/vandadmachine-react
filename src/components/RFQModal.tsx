import React, { useState, useEffect } from 'react';
import { Language, RFQFormData } from '../types';
import { MACHINERY_PRODUCTS } from '../data/siteData';
import { X, CheckCircle2, ArrowRight, FileCheck, Send } from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialEquipment?: string;
  initialFeed?: number;
  initialEvap?: number;
  initialPowder?: number;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialEquipment = '',
  initialFeed,
  initialEvap,
  initialPowder,
}) => {
  const isFa = lang === 'fa';

  const [formData, setFormData] = useState<RFQFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    equipmentType: initialEquipment || 'اسپری درایر صنعتی (خشک‌کن پاششی)',
    feedRateKgH: initialFeed ? String(initialFeed) : '300',
    solidsPercentage: '35',
    desiredMoisture: '3',
    heatSource: 'gas',
    materialGrade: 'ss316l',
    projectStage: 'budgeting',
    projectNotes: initialEvap
      ? `محاسبه‌شده از ابزار سایت: تبخیر آب ${initialEvap} kg/h و پودر خروجی ${initialPowder} kg/h`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialEquipment) {
      setFormData(prev => ({
        ...prev,
        equipmentType: initialEquipment,
        feedRateKgH: initialFeed ? String(initialFeed) : prev.feedRateKgH,
        projectNotes: initialEvap
          ? `محاسبه‌شده از ابزار سایت: تبخیر آب ${initialEvap} kg/h و پودر خروجی ${initialPowder} kg/h`
          : prev.projectNotes
      }));
    }
  }, [initialEquipment, initialFeed, initialEvap, initialPowder]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-lg p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 end-4 p-2 text-slate-400 hover:text-white rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isFa ? 'درخواست استعلام قیمت شما با موفقیت ثبت شد' : 'Proposal Request Successfully Logged'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {isFa
                ? `درخواست پیش‌فاکتور فنی و مالی برای ${formData.equipmentType} ثبت گردید. کارشناسان فروش شیمی صنعت ونداد جهت دریافت دیتاشیت تکمیلی و ارائه پیش‌نویس قرارداد ظرف ۲۴ ساعت کاری با شماره ${formData.phone} تماس خواهند گرفت.`
                : `Your official technical & commercial RFQ for ${formData.equipmentType} has been assigned to a sales engineer. We will contact ${formData.phone} within 24 hours.`}
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                {isFa ? 'بستن پنجره' : 'Done & Close'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pe-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                <FileCheck className="w-4 h-4" />
                <span>{isFa ? 'فرم رسمی استعلام قیمت ماشین‌آلات و خطوط تولید' : 'Official Process Equipment Quotation Request'}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {isFa ? 'درخواست پیشنهاد فنی و پیش‌فاکتور ونداد' : 'Request Technical & Commercial Proposal'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isFa
                  ? 'مشخصات اولیه مورد نظر را وارد نمایید تا کارشناسان محاسبات هزینه و کاتالوگ دقیق را آماده سازند.'
                  : 'Specify your key process parameters to receive a formal preliminary engineering datasheet.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'نام و نام خانوادگی متقاضی *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={isFa ? 'مثال: مهندس حسینی' : 'e.g., Dr. Marcus Vance'}
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'نام شرکت / کارخانه *' : 'Company / Plant Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder={isFa ? 'مثال: داروسازی پایا' : 'e.g., BioPharm Industries'}
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'شماره تماس مستقیم کارشناس *' : 'Direct Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={isFa ? '۰۹۱۲XXXXXXX یا ۰۲۱XXXXXXX' : '+98 912...'}
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'پست الکترونیکی' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="engineer@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* Row 3: Equipment Type */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {isFa ? 'تجهیز یا خط تولید مورد نظر' : 'Target Equipment / System'}
                </label>
                <select
                  value={formData.equipmentType}
                  onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 focus:outline-none focus:border-amber-400"
                >
                  {MACHINERY_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={isFa ? prod.name_fa : prod.name_en}>
                      {isFa ? prod.name_fa : prod.name_en}
                    </option>
                  ))}
                  <option value={isFa ? 'خدمات تست پایلوت آزمایشگاهی' : 'Pilot Plant Testing Service'}>
                    {isFa ? 'خدمات تست پایلوت آزمایشگاهی' : 'Pilot Plant Testing Service'}
                  </option>
                  <option value={isFa ? 'خرید مواد پودری / تولید کارمزدی' : 'Bulk Powder Supply / Toll Drying'}>
                    {isFa ? 'خرید مواد پودری / تولید کارمزدی' : 'Bulk Powder Supply / Toll Drying'}
                  </option>
                  <option value={isFa ? 'اورهال و قطعات یدکی روتاری اتمایزر' : 'Atomizer Overhaul & Spare Parts'}>
                    {isFa ? 'اورهال و قطعات یدکی روتاری اتمایزر' : 'Atomizer Overhaul & Spare Parts'}
                  </option>
                </select>
              </div>

              {/* Row 4: Process Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-950 rounded-md border border-slate-800 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    {isFa ? 'دبی خوراک (kg/h)' : 'Feed Rate'}
                  </label>
                  <input
                    type="number"
                    value={formData.feedRateKgH}
                    onChange={(e) => setFormData({ ...formData, feedRateKgH: e.target.value })}
                    className="w-full px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    {isFa ? 'درصد ماده جامد' : 'Solids %'}
                  </label>
                  <input
                    type="number"
                    value={formData.solidsPercentage}
                    onChange={(e) => setFormData({ ...formData, solidsPercentage: e.target.value })}
                    className="w-full px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    {isFa ? 'منبع حرارتی' : 'Heat Source'}
                  </label>
                  <select
                    value={formData.heatSource}
                    onChange={(e) => setFormData({ ...formData, heatSource: e.target.value as any })}
                    className="w-full px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                  >
                    <option value="gas">{isFa ? 'گازسوز' : 'Gas'}</option>
                    <option value="steam">{isFa ? 'بخار' : 'Steam'}</option>
                    <option value="electric">{isFa ? 'برقی' : 'Electric'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    {isFa ? 'متریال بدنه' : 'Metallurgy'}
                  </label>
                  <select
                    value={formData.materialGrade}
                    onChange={(e) => setFormData({ ...formData, materialGrade: e.target.value as any })}
                    className="w-full px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                  >
                    <option value="ss316l">AISI 316L</option>
                    <option value="ss304">AISI 304</option>
                    <option value="titanium">{isFa ? 'تیتانیوم' : 'Titanium'}</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {isFa ? 'توضیحات تکمیلی یا الزامات خاص فرآیند' : 'Additional Process Constraints / Notes'}
                </label>
                <textarea
                  rows={2}
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  placeholder={isFa ? 'در صورت وجود اسیدیته، خورندگی یا حساسیت حرارتی قید فرمایید...' : 'Note any corrosiveness, viscosity, or thermal sensitivity...'}
                  className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 text-xs text-slate-400 hover:text-white rounded-md cursor-pointer"
                >
                  {isFa ? 'انصراف' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  <span>{isFa ? 'ثبت و ارسال استعلام قیمت رسمی' : 'Submit Formal RFQ'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
