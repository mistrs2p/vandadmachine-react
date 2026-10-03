import React, { useState } from 'react';
import { Language, MachineryProduct } from '../types';
import { MACHINERY_PRODUCTS } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { ArrowUpRight, Check, X, Shield, Sparkles } from 'lucide-react';

interface MachineryCatalogProps {
  lang: Language;
  onSelectProductForRFQ: (productName: string) => void;
}

export const MachineryCatalog: React.FC<MachineryCatalogProps> = ({
  lang,
  onSelectProductForRFQ,
}) => {
  const isFa = lang === 'fa';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<MachineryProduct | null>(null);

  const categories = [
    { id: 'all', label_fa: 'همه تجهیزات', label_en: 'All Machinery' },
    { id: 'spray_dryer', label_fa: 'اسپری درایر', label_en: 'Spray Dryers' },
    { id: 'atomizer', label_fa: 'روتاری اتمایزر', label_en: 'Atomizers' },
    { id: 'fluid_bed', label_fa: 'بستر سیال و گرانول‌ساز', label_en: 'Fluid Bed Systems' },
    { id: 'drum_flaker', label_fa: 'درام فلیکر', label_en: 'Drum Flakers' },
    { id: 'reactor', label_fa: 'راکتور و مخازن', label_en: 'Reactors & Vessels' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? MACHINERY_PRODUCTS
    : MACHINERY_PRODUCTS.filter(p => p.category === selectedCategory || (selectedCategory === 'fluid_bed' && p.category === 'fluid_bed'));

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <span>{isFa ? 'کاتالوگ ماشین‌آلات شیمی صنعت ونداد' : 'Equipment Catalog'}</span>
              <span className="text-slate-600">·</span>
              <span>{isFa ? 'مهندسی ساخت و استاندارد ASME' : 'Heavy Process Manufacturing'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              {isFa ? 'تجهیزات صنعتی و خطوط تولید فرآیندی' : 'Industrial Machinery & Process Plants'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {isFa
                ? 'مجموعه ماشین‌آلات پیشرفته خشک‌کن پاششی، گرانول‌سازی، خنک‌کاری و راکتورهای استیل تحت فشار ساخته‌شده در کارخانه ونداد.'
                : 'Engineered spray dryers, high-speed atomizers, fluidized bed granulators, cooling drum flakers, and ASME chemical reactors.'}
            </p>
          </div>

          {/* Category Filter Buttons (Functional segmented control, not pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {isFa ? cat.label_fa : cat.label_en}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900/70 border border-slate-800/90 rounded-lg overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-200"
            >
              {/* Product Image Frame */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <ResilientImage
                  src={product.image_url}
                  alt={isFa ? product.name_fa : product.name_en}
                  category={product.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Quiet inline category indicator */}
                <div className="absolute top-3 start-3 px-2 py-1 text-[11px] font-mono font-medium text-slate-200 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded">
                  {product.category.toUpperCase().replace('_', ' ')}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {isFa ? product.name_fa : product.name_en}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {isFa ? product.tagline_fa : product.tagline_en}
                  </p>

                  {/* Highlights Grid (Unboxed metadata with tabular numbers) */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                    {product.highlightSpecs.slice(0, 4).map((spec, i) => (
                      <div key={i} className="bg-slate-950/70 p-2 rounded border border-slate-850">
                        <span className="text-[11px] text-slate-500 block truncate">
                          {isFa ? spec.label_fa : spec.label_en}
                        </span>
                        <span className="font-semibold text-slate-200 font-mono tabular-nums truncate block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {isFa ? 'مشخصات فنی و دیاگرام ←' : 'Technical Specs →'}
                  </button>

                  <button
                    onClick={() => onSelectProductForRFQ(isFa ? product.name_fa : product.name_en)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>{isFa ? 'استعلام قیمت' : 'Request Quote'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Specifications Modal Drawer */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-lg p-6 sm:p-8 shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 end-4 p-2 text-slate-400 hover:text-white rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pe-10">
              <div className="w-12 h-12 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold font-mono text-lg">
                V
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {isFa ? activeModalProduct.name_fa : activeModalProduct.name_en}
                </h3>
                <p className="text-xs sm:text-sm text-amber-400 mt-1 font-medium">
                  {isFa ? activeModalProduct.tagline_fa : activeModalProduct.tagline_en}
                </p>
              </div>
            </div>

            {/* Modal Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {isFa ? activeModalProduct.description_fa : activeModalProduct.description_en}
            </p>

            {/* Technical Specifications Table */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {isFa ? 'جدول مشخصات فنی مهندسی' : 'Engineering Specifications'}
              </h4>
              <div className="border border-slate-800 rounded-md overflow-hidden">
                <table className="w-full text-xs text-start">
                  <tbody className="divide-y divide-slate-800">
                    {activeModalProduct.specifications.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-950/40' : 'bg-slate-900'}>
                        <td className="p-3 font-medium text-slate-400 w-1/3 border-e border-slate-800">
                          {isFa ? spec.parameter_fa : spec.parameter_en}
                        </td>
                        <td className="p-3 text-slate-200 font-mono tabular-nums">
                          {isFa ? spec.value_fa : spec.value_en}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Advantages and Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
              <div className="p-4 bg-slate-950 rounded-md border border-slate-800">
                <h5 className="font-semibold text-amber-400 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isFa ? 'مزایا و ویژگی‌های انحصاری' : 'Key Advantages'}</span>
                </h5>
                <ul className="space-y-1.5 text-slate-300">
                  {(isFa ? activeModalProduct.advantages_fa : activeModalProduct.advantages_en).map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950 rounded-md border border-slate-800">
                <h5 className="font-semibold text-slate-200 mb-2.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isFa ? 'صنایع هدف و کاربردها' : 'Industrial Applications'}</span>
                </h5>
                <ul className="space-y-1.5 text-slate-300">
                  {(isFa ? activeModalProduct.applications_fa : activeModalProduct.applications_en).map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">·</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                {isFa ? 'گارانتی ۱۲ ماهه و ۱۰ سال خدمات پس از فروش' : '12-Month OEM Warranty & 10-Year Parts Support'}
              </div>
              <button
                onClick={() => {
                  const prod = activeModalProduct;
                  setActiveModalProduct(null);
                  onSelectProductForRFQ(isFa ? prod.name_fa : prod.name_en);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <span>{isFa ? 'درخواست استعلام قیمت این دستگاه' : 'Request RFQ for this Machine'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
