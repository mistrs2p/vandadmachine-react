import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isFa = lang === 'fa';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'ارتباط مستقیم با کارخانه و دفتر مهندسی' : 'Factory & Engineering Headquarters'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'پاسخگویی سریع کارشناسان' : 'Direct Inquiry Response'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'تماس با شرکت شیمی صنعت ونداد' : 'Contact Vandad Machinery'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'جهت مشاوره در خصوص انتخاب تجهیزات، آزمون مواد در واحد پایلوت، بازدید از خطوط در حال ساخت در کارخانه یا استعلام قیمت رسمی با ما تماس حاصل فرمایید.'
              : 'Contact our engineering specialists for sizing consultations, factory visits at Abbas Abad, or official commercial quotations.'}
          </p>
        </div>

        {/* 2-Column Grid: Coordinates & Interactive Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{isFa ? 'شماره تماس مستقیم کارخانه و فروش:' : 'Direct Phone Lines:'}</span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={`tel:${COMPANY_INFO.phone_landline}`}
                      className="text-sm font-bold text-white hover:text-amber-400 font-mono tabular-nums"
                    >
                      {isFa ? COMPANY_INFO.phone_landline_display_fa : COMPANY_INFO.phone_landline}
                    </a>
                    <span className="text-slate-600">/</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone_mobile}`}
                      className="text-sm font-bold text-amber-400 hover:text-amber-300 font-mono tabular-nums"
                    >
                      {isFa ? COMPANY_INFO.phone_mobile_display_fa : COMPANY_INFO.phone_mobile}
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{isFa ? 'شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰ | پنجشنبه‌ها ۸:۰۰ الی ۱۳:۰۰' : 'Sat - Wed 08:00 - 17:00 | Thu 08:00 - 13:00'}</span>
              </div>
            </div>

            {/* Email & WhatsApp Card */}
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{isFa ? 'پست الکترونیکی رسمی:' : 'Corporate Email:'}</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-amber-400 font-mono"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 rounded text-xs text-emerald-400 transition-colors"
                >
                  <span className="font-semibold">{isFa ? 'ارتباط مستقیم از طریق واتس‌اپ کارشناس' : 'Chat with Engineering via WhatsApp'}</span>
                  <span className="font-mono text-[11px]">{COMPANY_INFO.phone_mobile}</span>
                </a>
              </div>
            </div>

            {/* Factory Address Card */}
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {isFa ? 'محل کارخانه و کارگاه ساخت:' : 'Factory & Fabrication Plant:'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {isFa ? COMPANY_INFO.address_fa : COMPANY_INFO.address_en}
                  </p>
                  <span className="text-[11px] text-slate-500 font-mono block mt-2">
                    {isFa ? `کد پستی: ${COMPANY_INFO.postal_code}` : `Postal Code: ${COMPANY_INFO.postal_code}`}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-lg p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              {isFa ? 'ارسال پیام و هماهنگی جلسه حضوری' : 'Send Direct Message or Meeting Request'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {isFa
                ? 'فرم زیر را تکمیل کنید تا مهندسین شیمی صنعت ونداد حداکثر ظرف ۲ ساعت کاری با شما تماس بگیرند.'
                : 'Fill out this brief form and our technical desk will get in touch within 2 business hours.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {isFa ? 'پیام شما با موفقیت ثبت شد' : 'Message Transmitted Successfully'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {isFa
                    ? 'کارشناسان فنی ونداد در اسرع وقت جهت هماهنگی جلسه و بررسی درخواست با شما تماس خواهند گرفت.'
                    : 'Our engineering department will contact you promptly at the provided phone number.'}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
                >
                  {isFa ? 'ارسال یک پیام جدید' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {isFa ? 'نام و نام خانوادگی / شرکت *' : 'Your Name / Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isFa ? 'مثال: مهندس رادمنش (شرکت کیمیا)' : 'e.g., Apex Chemical Corp.'}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {isFa ? 'شماره تماس مستقیم *' : 'Direct Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isFa ? '۰۹۱۲XXXXXXX' : '+98 912 ...'}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'پست الکترونیکی (اختیاری)' : 'Corporate Email (Optional)'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isFa ? 'موضوع پیام یا شرح نیازمندی تجهیزات *' : 'Description of Equipment Requirements *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isFa
                        ? 'لطفاً نام ماده، ظرفیت مورد نظر، یا درخواست تست پایلوت را شرح دهید...'
                        : 'Please specify material type, estimated evaporation capacity, or pilot test requests...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  <span>{isFa ? 'ارسال پیام به دفتر مهندسی' : 'Send Message to Engineering Desk'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
