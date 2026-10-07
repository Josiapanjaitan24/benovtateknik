import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Droplets,
  RotateCcw,
  Wind,
  Disc,
  Factory,
  Search,
  ArrowRight,
  PhoneCall,
  SlidersHorizontal,
  Star,
  Image as ImageIcon
} from 'lucide-react';
import { productCategories } from '../data/products';
import { getProductImage } from '../data/productImages';
import { useLanguage } from '../context/LanguageContext';

const categoryTranslations = {
  pumps: {
    indonesianName: 'Pompa',
    name: 'Pumps',
    tagline: 'Centrifugal, multistage, submersible, and heavy-duty pump solutions',
    description: 'A range of industrial pumps offering high efficiency, long-term reliability, and global manufacturing certifications for water supply, wastewater, fire protection, and chemical processing.'
  },
  motors: {
    indonesianName: 'Motor & Penggerak Elektrik',
    name: 'Electric Motors & Drives',
    tagline: 'Reliable electric and mechanical drives built to international standards',
    description: 'High-efficiency three-phase induction motors (IE2/IE3), variable frequency drives (VFDs), heavy-duty diesel engines, and gear reduction systems.'
  },
  blowers: {
    indonesianName: 'Blower',
    name: 'Blowers',
    tagline: 'Clean, oil-free compressed air and vacuum solutions',
    description: 'Tri-lobe Roots blowers and precision ring blowers for industrial wastewater aeration, pneumatic powder and grain conveying, and desulfurization.'
  },
  valves: {
    indonesianName: 'Katup & Suku Cadang',
    name: 'Valves & Spare Parts',
    tagline: 'Precision flow control, safety valves, and original spare parts',
    description: 'Isolation and automatic control valves, mechanical seals, machine shafts, and precision spare parts to ensure the integrity of liquid and gas flow in your plant.'
  },
  equipment: {
    indonesianName: 'Peralatan Industri',
    name: 'Industrial Equipment',
    tagline: 'Plant utility systems, pressure tanks, and mechanical transmission',
    description: 'Fluid-system and mechanical power transmission components, including pressure tanks, cooling towers, flexible joints, vibration-damping couplings, and belt or chain drives.'
  }
};

const generatedProductContent = {
  pumps: {
    spec: [
      'Pilihan tipe dan material disesuaikan dengan kapasitas aliran, head, karakteristik fluida, dan kondisi instalasi.',
      'Type and material options are selected to suit flow capacity, head, fluid characteristics, and installation conditions.'
    ],
    applications: [
      'Pasokan air, sirkulasi, drainase, pengolahan air, dan transfer fluida industri.',
      'Water supply, circulation, drainage, water treatment, and industrial fluid transfer.'
    ]
  },
  motors: {
    spec: [
      'Pilihan unit disesuaikan dengan kebutuhan daya, kecepatan, rasio reduksi, dan kondisi operasional.',
      'Units are selected to suit power, speed, reduction ratio, and operating conditions.'
    ],
    applications: [
      'Penggerak pompa, mesin produksi, conveyor, blower, dan utilitas industri.',
      'Drives for pumps, production machinery, conveyors, blowers, and industrial utilities.'
    ]
  },
  blowers: {
    spec: [
      'Pilihan tipe blower disesuaikan dengan kebutuhan tekanan, kapasitas udara, dan kondisi operasi.',
      'Blower types are selected to suit pressure, air capacity, and operating conditions.'
    ],
    applications: [
      'Aerasi, sirkulasi udara, vacuum handling, dan pneumatic conveying.',
      'Aeration, air circulation, vacuum handling, and pneumatic conveying.'
    ]
  },
  valves: {
    spec: [
      'Tipe, material, dan ukuran komponen dapat disesuaikan dengan spesifikasi sistem.',
      'Component types, materials, and sizes can be tailored to system specifications.'
    ],
    applications: [
      'Kontrol aliran, koneksi mekanikal, serta perawatan dan perbaikan peralatan industri.',
      'Flow control, mechanical connections, and industrial equipment maintenance and repair.'
    ]
  },
  equipment: {
    spec: [
      'Pilihan kapasitas, material, dan konfigurasi disesuaikan dengan kebutuhan instalasi.',
      'Capacity, material, and configuration options are selected to suit installation requirements.'
    ],
    applications: [
      'Sistem utilitas, pendinginan, penyangga tekanan, dan koneksi perpipaan.',
      'Utility systems, cooling, pressure support, and piping connections.'
    ]
  }
};

function translateGeneratedContent(categoryId, field, value, tx) {
  const translation = generatedProductContent[categoryId]?.[field];
  return translation?.[0] === value ? tx(...translation) : value;
}

export default function Products() {
  const { tx } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Sinkronkan state bila URL query params berubah (misalnya klik dari navbar dropdown)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const categoryIcons = {
    pumps: Droplets,
    motors: RotateCcw,
    blowers: Wind,
    valves: Disc,
    equipment: Factory
  };

  // Filter items
  const filteredCategories = productCategories
    .filter((cat) => (activeCategory === 'all' ? true : cat.id === activeCategory))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const lower = searchQuery.toLowerCase();
      const filteredItems = cat.items.filter(
        (it) =>
          it.title.toLowerCase().includes(lower) ||
          it.brand.toLowerCase().includes(lower) ||
          it.series.toLowerCase().includes(lower) ||
          it.applications.toLowerCase().includes(lower) ||
          it.spec.toLowerCase().includes(lower)
      );
      return {
        ...cat,
        items: filteredItems
      };
    })
    .filter((cat) => cat.items.length > 0);

  const totalProducts = productCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* 
        ===========================================================
        PAGE HEADER
        ===========================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-wider mb-2">
              <Droplets size={15} />
              <span>{tx('Katalog Peralatan Resmi', 'Official Equipment Catalog')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight">
              {tx('Katalog Produk Industri', 'Industrial Product Catalog')}
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {tx(
                '50 produk industri dalam 5 kategori, didukung 30+ mitra brand ternama dunia untuk berbagai kebutuhan operasional.',
                '50 industrial products across 5 categories, supported by 30+ renowned global brand partners for a wide range of operational needs.'
              )}
            </p>
          </div>

          {/* Real-time Search Input Bar */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder={tx('Cari merek, tipe, atau aplikasi...', 'Search by brand, type, or application...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
              />
              <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 
        ===========================================================
        FILTER TABS SECTION
        ===========================================================
      */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
              <SlidersHorizontal size={13} />
              <span>{tx('Kategori:', 'Categories:')}</span>
            </span>

            {/* All Button */}
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0A2540] text-white shadow-sm'
                  : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              {tx('Semua', 'All')} ({totalProducts})
            </button>

            {/* Dynamic Category Buttons */}
            {productCategories.map((cat) => {
              const IconComp = categoryIcons[cat.id] || Droplets;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F97316] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <IconComp size={15} />
                  <span>{tx(categoryTranslations[cat.id]?.indonesianName || cat.name, categoryTranslations[cat.id]?.name || cat.name)}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 
        ===========================================================
        KATALOG PRODUK CARDS GRID
        ===========================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8">
            <Search size={36} className="text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0A2540]">{tx('Produk tidak ditemukan', 'No products found')}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {tx(
                `Tidak ada produk yang cocok dengan kata kunci "${searchQuery}". Silakan coba kata kunci lain atau hubungi kami langsung.`,
                `No products match the keyword "${searchQuery}". Try another keyword or contact us directly.`
              )}
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-5 py-2 rounded-lg bg-[#0A2540] text-white text-xs font-bold"
            >
              {tx('Reset Filter', 'Reset filters')}
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((cat) => {
              const CatIcon = categoryIcons[cat.id] || Droplets;
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-36">
                  
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#0A2540]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-[#F97316] flex items-center justify-center">
                        <CatIcon size={20} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-[#0A2540] tracking-tight">
                          {tx(categoryTranslations[cat.id]?.indonesianName || cat.name, categoryTranslations[cat.id]?.name || cat.name)}
                        </h2>
                        <p className="text-xs text-slate-500">
                          {tx(cat.tagline, categoryTranslations[cat.id]?.tagline || cat.tagline)}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-[#F8FAFC] px-3 py-1 rounded-full border border-slate-200 self-start sm:self-auto">
                      {tx(
                        `${cat.items.length} Model / Seri Terdaftar`,
                        `${cat.items.length} models / series listed`
                      )}
                    </span>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="relative isolate overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col group"
                      >
                        <Link
                          to={`/products/${item.id}`}
                          className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
                          aria-label={tx(`Lihat detail ${item.title}`, `View details for ${item.title}`)}
                        />
                        <div className="relative z-10 flex flex-1 flex-col pointer-events-none">
                          <div className="relative h-52 sm:h-56 bg-slate-50 overflow-hidden">
                            {getProductImage(item.id) ? (
                              <img
                                src={getProductImage(item.id)}
                                alt={item.title}
                                loading="lazy"
                                className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="h-full flex items-center justify-center text-slate-300">
                                <ImageIcon size={44} strokeWidth={1.2} aria-hidden="true" />
                              </div>
                            )}
                            <span className="absolute left-4 top-4 text-[11px] font-semibold text-slate-600 uppercase tracking-wider bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/80">
                              {tx(categoryTranslations[cat.id]?.indonesianName || cat.name, categoryTranslations[cat.id]?.name || cat.name)}
                            </span>
                            {item.popular && (
                              <span className="absolute right-4 top-4 inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50/95 px-2.5 py-1.5 rounded-full border border-amber-100">
                                <Star size={11} className="fill-amber-500 text-amber-500" />
                                {tx('Pilihan populer', 'Popular choice')}
                              </span>
                            )}
                          </div>

                          <div className="p-5 sm:p-6 flex flex-1 flex-col">
                          {/* Brand badge & popularity */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                              {item.brand}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-[#0A2540] group-hover:text-[#F97316] transition-colors mb-1 leading-snug">
                            {item.title}
                          </h3>

                          <div className="text-xs font-medium text-slate-500 mb-4">
                            {tx('Seri:', 'Series:')} {item.series === 'Tipe tersedia sesuai kebutuhan' ? tx(item.series, 'Types available to suit your needs') : item.series}
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                            {translateGeneratedContent(cat.id, 'spec', item.spec, tx)}
                          </p>

                          <div className="mt-auto pt-5 flex items-center justify-between text-sm font-semibold text-[#0A2540] group-hover:text-[#F97316] transition-colors">
                            <span>{tx('Lihat detail produk', 'View product details')}</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                        </div>

                        <div className="relative z-20 px-5 sm:px-6 pb-5 sm:pb-6 flex items-center gap-2 pointer-events-none">
                          <Link
                            to={`/contact?product=${encodeURIComponent(item.title + ' (' + item.brand + ')')}`}
                            className="pointer-events-auto flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0A2540] hover:bg-[#F97316] text-white text-xs font-semibold transition-colors"
                          >
                            <span>{tx('Minta Penawaran', 'Request a quote')}</span>
                            <ArrowRight size={13} />
                          </Link>

                          <a
                            href={`https://wa.me/6208128864953?text=${encodeURIComponent(tx(`Halo PT Benovta, saya tertarik dengan produk ${item.title} - ${item.brand}`, `Hello PT Benovta, I am interested in the product ${item.title} - ${item.brand}`))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                            title={tx('Tanya via WhatsApp', 'Ask via WhatsApp')}
                          >
                            <PhoneCall size={14} className="text-[#F97316]" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 
        ===========================================================
        BOTTOM HELP BANNER
        ===========================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-[#0A2540]">
              {tx('Mencari Model atau Part Number Tertentu?', 'Looking for a specific model or part number?')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {tx(
                'Jika model yang Anda butuhkan belum tercantum di atas, hubungi tim sourcing kami dengan menyertakan foto nameplate mesin Anda.',
                'If the model you need is not listed above, contact our sourcing team and include a photo of your machine nameplate.'
              )}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold shrink-0 transition-colors shadow-md"
          >
            <span>{tx('Kirim Spesifikasi Custom', 'Send custom specifications')}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
}
