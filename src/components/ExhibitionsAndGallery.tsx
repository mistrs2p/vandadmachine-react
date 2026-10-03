import React, { useState } from 'react';
import { Language } from '../types';
import { EXHIBITIONS_ARCHIVE } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { Calendar, MapPin, Check, Camera } from 'lucide-react';

interface ExhibitionsAndGalleryProps {
  lang: Language;
}

export const ExhibitionsAndGallery: React.FC<ExhibitionsAndGalleryProps> = ({ lang }) => {
  const isFa = lang === 'fa';
  const [activeTab, setActiveTab] = useState<string>(EXHIBITIONS_ARCHIVE[0].id);

  const selectedExpo = EXHIBITIONS_ARCHIVE.find(e => e.id === activeTab) || EXHIBITIONS_ARCHIVE[0];

  // Gallery of actual installations & exhibition photos from WordPress
  const galleryPhotos = [
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2024/07/IMG_20240612_135338_358.jpg',
      caption_fa: 'غرفه شیمی صنعت ونداد در نمایشگاه آگروفود',
      caption_en: 'Vandad Booth at Iran Agrofood Expo'
    },
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/اسپری-درایر-با-قطر-3-متر.jpg',
      caption_fa: 'مونتاژ بدنه برج اسپری درایر به قطر ۳ متر',
      caption_en: 'Fabrication of 3-Meter Diameter Spray Tower'
    },
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/اتمایزر-شیمی-صنعت-ونداد2.jpg',
      caption_fa: 'اسپیندل و روتاری اتمایزر دانش‌بنیان ونداد',
      caption_en: 'Vandad Precision Spindle Assembly'
    },
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2025/11/پالایش.jpg',
      caption_fa: 'حضور در نمایشگاه بین‌المللی نفت و گاز',
      caption_en: 'Oil & Gas Refining Exhibition Presentation'
    },
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2025/10/گرانول-ساز-بستر-سیال-1.jpg',
      caption_fa: 'دستگاه گرانول‌ساز بستر سیال در کارخانه',
      caption_en: 'Fluid Bed Granulator Assembly at Factory'
    },
    {
      url: 'https://vandadmachinery.com/wp-content/uploads/2024/03/درام-فلیکر.jpg',
      caption_fa: 'تست مکانیکی درام فلیکر استیل با تیغه اسکراپر',
      caption_en: 'Cooling Drum Flaker Functional Shop Testing'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <span>{isFa ? 'رویدادها و دستاوردهای صنعتی' : 'Industry Presence & Trade Shows'}</span>
            <span className="text-slate-600">·</span>
            <span>{isFa ? 'نمایشگاه‌های بین‌المللی' : 'Exhibitions & Plant Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {isFa ? 'حضور در نمایشگاه‌های بین‌المللی و کارنامه اجرایی' : 'Exhibitions & Manufacturing Gallery'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isFa
              ? 'گزارش تصویری از حضور شرکت شیمی صنعت ونداد در بزرگ‌ترین رویدادهای صنایع غذایی، نفت و گاز و صنعت کشور.'
              : 'Review our participation in Iran Agrofood, International Oil & Gas, and Tehran Industry Fairs, alongside shop-floor fabrication.'}
          </p>
        </div>

        {/* Exhibition Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-3">
          {EXHIBITIONS_ARCHIVE.map((item) => {
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`py-2 px-4 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                {isFa ? item.event_fa : item.event_en} ({item.year})
              </button>
            );
          })}
        </div>

        {/* Selected Exhibition Spotlight */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 lg:p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedExpo.year}</span>
                </span>
                <span className="text-slate-600">/</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isFa ? selectedExpo.location_fa : selectedExpo.location_en}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isFa ? selectedExpo.title_fa : selectedExpo.title_en}
              </h3>

              <div className="inline-block px-2.5 py-1 text-xs font-mono font-medium text-slate-300 bg-slate-950 border border-slate-800 rounded mb-4">
                {isFa ? selectedExpo.booth_fa : selectedExpo.booth_en}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {isFa ? selectedExpo.description_fa : selectedExpo.description_en}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-200 block mb-1">
                  {isFa ? 'دستاوردهای حضور در نمایشگاه:' : 'Exhibition Highlights:'}
                </span>
                {(isFa ? selectedExpo.highlights_fa : selectedExpo.highlights_en).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-800 shadow-xl">
                <ResilientImage
                  src={selectedExpo.image_url}
                  alt={isFa ? selectedExpo.title_fa : selectedExpo.title_en}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Factory Shop Floor & Installation Gallery */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-4 h-4 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {isFa ? 'گالری کارگاه ساخت و تجهیزات تولیدی' : 'Factory Floor & Machinery Snapshot'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-md overflow-hidden border border-slate-800 bg-slate-900 aspect-square"
              >
                <ResilientImage
                  src={photo.url}
                  alt={isFa ? photo.caption_fa : photo.caption_en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-[11px] text-white">
                  <span className="line-clamp-2 leading-tight">
                    {isFa ? photo.caption_fa : photo.caption_en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
