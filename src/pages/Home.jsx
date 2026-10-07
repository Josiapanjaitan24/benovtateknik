import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  RotateCcw,
  Wind,
  Disc,
  Factory,
  PackageCheck,
  Cpu,
  Wrench,
  Boxes,
  Headphones,
  PhoneCall,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { productCategories, coreServices, brandPartners } from '../data/products';
import brandLogoSources from '../data/brandLogos';
import { useLanguage } from '../context/LanguageContext';
import equipmentSupplyImage from '../assets/images/Layanan Rekayasa/Equipment Supply.jpeg';
import installationIntegrationImage from '../assets/images/Layanan Rekayasa/Installation & Integration.jpeg';
import maintenanceSupportImage from '../assets/images/Layanan Rekayasa/Maintenance Support.jpeg';
import repairServiceImage from '../assets/images/Layanan Rekayasa/Repair & Service.jpeg';
import sparePartsSourcingImage from '../assets/images/Layanan Rekayasa/Spare Parts Sourcing.jpeg';
import technicalSupportImage from '../assets/images/Layanan Rekayasa/Technical Support.jpeg';

const categoryTranslations = {
  pumps: {
    nameId: 'Pompa Industri',
    name: 'Industrial Pumps',
    description: 'High-efficiency industrial pumps with long-term reliability and global manufacturer certifications for water supply, wastewater, fire protection, and chemical processing.'
  },
  motors: {
    nameId: 'Motor Listrik & Penggerak',
    name: 'Electric Motors & Drives',
    description: 'High-efficiency three-phase induction motors (IE2/IE3), variable frequency drives (VFDs), heavy-duty diesel engines, and gear reduction systems.'
  },
  blowers: {
    nameId: 'Blower Industri',
    name: 'Blowers',
    description: 'Tri-lobe Roots blowers and precision ring blowers for wastewater aeration, pneumatic powder and grain conveying, and desulfurization.'
  },
  valves: {
    nameId: 'Katup & Suku Cadang',
    name: 'Valves & Spare Parts',
    description: 'Isolation and control valves, mechanical seals, machine shafts, and precision spare parts to ensure fluid and gas flow integrity in your plant.'
  },
  equipment: {
    nameId: 'Peralatan Industri',
    name: 'Industrial Equipment',
    description: 'Complementary fluid-system and mechanical power transmission components, including pressure tanks, cooling towers, flexible joints, vibration-damping couplings, and belt/chain drives.'
  }
};

const serviceTranslations = {
  'equipment-supply': {
    titleId: 'Pasokan Peralatan',
    title: 'Equipment Supply',
    tagline: 'Complete Supply of 100% Genuine Industrial Equipment',
    description: 'We supply high-quality industrial machinery directly from principals and authorized distributors of leading brands (Ebara, Grundfos, Siemens, Bonfiglioli, and more). All products are guaranteed 100% genuine and come with test certificates and official warranties.',
    features: [
      'Genuine products supplied with a Certificate of Origin (COO)',
      'Ready-to-ship inventory for standard industrial equipment'
    ]
  },
  'installation-integration': {
    titleId: 'Instalasi & Integrasi',
    title: 'Installation & Integration',
    tagline: 'Mechanical-Electrical System Assembly & Integration',
    description: 'Installation services, precision shaft alignment using dial indicators or lasers, manifold piping assembly, and integration of motors and pumps with your plant’s operating electrical and PLC systems.',
    features: [
      'Installation of a sturdy, vibration-resistant baseplate',
      'Precision shaft alignment with a tolerance alignment report'
    ]
  },
  'repair-service': {
    titleId: 'Perbaikan & Servis',
    title: 'Repair & Service',
    tagline: 'Industrial Machinery Repair & Troubleshooting',
    description: 'Comprehensive reconditioning and repair of worn pumps, burnt-out motors (rewinding), leaking mechanical seals, abnormal blower vibration, and bearing replacement and shaft balancing.',
    features: [
      'Thorough diagnostic inspection before repairs begin',
      'Replacement of spare parts with precisely compatible materials'
    ]
  },
  'spare-parts-sourcing': {
    titleId: 'Pengadaan Suku Cadang',
    title: 'Spare Parts Sourcing',
    tagline: 'Fast Supply of Genuine & Compatible Spare Parts',
    description: 'Sourcing of critical industrial spare parts to minimize plant downtime. We supply mechanical seals, impellers, SKF/NSK bearings, stainless steel shafts, valve seats, gaskets, and inverter electronic cards.',
    features: [
      'Extensive international spare-parts sourcing network',
      'Accurate part-number identification from equipment nameplates'
    ]
  },
  'maintenance-support': {
    titleId: 'Dukungan Pemeliharaan',
    title: 'Maintenance Support',
    tagline: 'Preventive Maintenance & Periodic Service Contracts',
    description: 'Scheduled maintenance programs to prevent sudden failures of vital rotating equipment. Services include vibration analysis, infrared temperature checks, periodic lubrication, and energy-efficiency assessments.',
    features: [
      'Periodic maintenance contract packages (monthly/quarterly)',
      'Detailed equipment condition reports after every visit'
    ]
  },
  'technical-support': {
    titleId: 'Dukungan Teknis',
    title: 'Technical Support',
    tagline: 'Technical Consultation & Fit-for-Purpose Recommendations',
    description: 'Engineering consultation from experienced practitioners to help select pump types, calculate pipe head and flow rate, size motors, and improve system conversion efficiency.',
    features: [
      'Fluid-system calculations (Total Dynamic Head / NPSHa)',
      'Targeted specifications that fit your budget'
    ]
  }
};

export default function Home() {
  const { tx } = useLanguage();
  const categoryIcons = {
    pumps: Droplets,
    motors: RotateCcw,
    blowers: Wind,
    valves: Disc,
    equipment: Factory
  };

  const serviceIcons = {
    'equipment-supply': PackageCheck,
    'installation-integration': Cpu,
    'repair-service': Wrench,
    'spare-parts-sourcing': Boxes,
    'maintenance-support': ShieldCheck,
    'technical-support': Headphones
  };

  const serviceImages = {
    'equipment-supply': equipmentSupplyImage,
    'installation-integration': installationIntegrationImage,
    'repair-service': repairServiceImage,
    'spare-parts-sourcing': sparePartsSourcingImage,
    'maintenance-support': maintenanceSupportImage,
    'technical-support': technicalSupportImage
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 
        ===========================================================
        1. HERO SECTION (HOME)
        Background: Foto industri resolusi tinggi + Dark Navy Overlay (#0A2540)
        ===========================================================
      */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Background image with a soft, localized gradient behind the hero content. */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt={tx('Pabrik & Peralatan Industri PT Benovta Teknik Perkasa Abadi', 'PT Benovta Teknik Perkasa Abadi Industrial Plant & Equipment')}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192C]/75 via-[#07192C]/35 to-transparent sm:bg-gradient-to-r sm:from-[#07192C]/75 sm:via-[#07192C]/40 sm:to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-12">
          <div className="max-w-3xl">

            {/* Headline Perusahaan */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              {tx('Solusi Peralatan Industri Terpercaya', 'Trusted Industrial Equipment Solutions')}
            </h1>

            {/* Subtitle Deskripsi */}
            <p className="text-white/95 text-sm sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
              {tx('Supplier peralatan industri terpercaya untuk kebutuhan pompa, motor listrik, blower, valve, dan solusi rekayasa teknik industri dengan komitmen mutu tinggi serta dukungan teknis profesional.', 'Your trusted supplier of pumps, electric motors, blowers, valves, and industrial engineering solutions, backed by a strong commitment to quality and professional technical support.')}
            </p>

            {/* CTA Buttons */}
            <div className="mx-auto flex w-full max-w-[17rem] flex-col items-center justify-center gap-3 sm:mx-0 sm:max-w-none sm:flex-row sm:justify-start sm:gap-3.5">
              {/* Primary Button Orange */}
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:gap-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-sm sm:text-base font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>{tx('Lihat Produk', 'View Products')}</span>
                <ArrowRight size={18} />
              </Link>

              {/* Secondary Outline White Button */}
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-sm sm:text-base font-semibold hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <PhoneCall size={17} className="text-[#F97316]" />
                <span>{tx('Hubungi Kami', 'Contact Us')}</span>
              </Link>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="mt-10 pt-8 border-t border-white/25 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#F97316]" />
                <span>{tx('100% Produk Original Teruji', '100% Genuine, Tested Products')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#F97316]" />
                <span>{tx('30+ Mitra Brand Terkemuka', '30+ Leading Brand Partners')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#F97316]" />
                <span>{tx('Dukungan Teknik & Suku Cadang', 'Technical & Spare Parts Support')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ===========================================================
        2. OVERVIEW KATEGORI PRODUK (Background Putih #FFFFFF)
        ===========================================================
      */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-wider mb-2">
                <Sparkles size={14} />
                <span>{tx('Katalog Pilihan Industri', 'Curated Industrial Catalog')}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                {tx('5 Kategori Produk Utama', '5 Main Product Categories')}
              </h2>
              <p className="mt-2 text-slate-500 text-sm sm:text-base max-w-xl">
                {tx('Solusi lengkap komponen mekanikal & elektrikal untuk kelancaran operasional pabrik dan proyek infrastruktur Anda.', 'A complete range of mechanical and electrical components to keep your plant operations and infrastructure projects running smoothly.')}
              </p>
            </div>

            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:text-[#EA580C] group"
            >
              <span>{tx('Jelajahi Seluruh Katalog', 'Explore the Full Catalog')}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Grid Kategori Produk */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-6">
            {productCategories.map((cat, index) => {
              const IconComponent = categoryIcons[cat.id] || Droplets;
              return (
                <div
                  key={cat.id}
                  className={`group relative flex flex-col rounded-lg bg-[#F0EDE7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAE6DE] hover:shadow-lg ${
                    index < 2
                      ? 'md:col-span-3 md:min-h-[10rem]'
                      : 'md:col-span-2 md:min-h-[11.5rem]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base leading-snug text-[#0A2540]">
                      {tx(categoryTranslations[cat.id]?.nameId || cat.name, categoryTranslations[cat.id]?.name || cat.name)}
                    </h3>
                    <div className="shrink-0 pt-0.5 text-[#426AA8] transition-colors duration-300 group-hover:text-[#F97316]">
                      <IconComponent size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <p className="text-[11px] leading-relaxed text-slate-600 line-clamp-2">
                      {tx(cat.description, categoryTranslations[cat.id]?.description || cat.description)}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-2">
                      <div className="min-w-0 truncate text-[10px] font-medium text-slate-500">
                        {cat.items.slice(0, 3).map((item) => item.brand).join(' · ')}
                        {cat.items.length > 3 && ` · +${cat.items.length - 3}`}
                      </div>
                      <Link
                        to={`/products?category=${cat.id}`}
                        aria-label={tx(`Lihat detail ${categoryTranslations[cat.id]?.nameId || cat.name}`, `View ${categoryTranslations[cat.id]?.name || cat.name} details`)}
                        className="shrink-0 text-[#426AA8] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F97316]"
                      >
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout Card: Custom Engineering Solution */}
          <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#07192C] p-6 text-white shadow-xl sm:p-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F97316]">
                <Wrench size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{tx('Butuh Spesifikasi Khusus?', 'Need a Custom Specification?')}</h3>
                <p className="max-w-3xl text-slate-300 text-sm leading-relaxed">
                  {tx('Tim engineering kami siap membantu kalkulasi teknis (head pompa, sizing motor, CFM blower) dan perakitan skid unit custom sesuai standar proyek Anda.', 'Our engineering team can help with technical calculations (pump head, motor sizing, blower CFM) and custom skid assembly to meet your project standards.')}
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 text-white text-xs font-bold shadow-md transition-all duration-200 hover:bg-[#EA580C]"
            >
              <span>{tx('Konsultasi Teknik Gratis', 'Free Technical Consultation')}</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ===========================================================
        3. OVERVIEW 6 LAYANAN UTAMA
        ===========================================================
      */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-wider mb-2">
              {tx('Dukungan Rekayasa Menyeluruh', 'End-to-End Engineering Support')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              {tx('6 Layanan Rekayasa & Pasokan', '6 Engineering & Supply Services')}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              {tx('Kami tidak hanya sekadar menyuplai produk, namun mendampingi dari tahap kalkulasi spesifikasi hingga pemeliharaan rutin.', 'We do more than supply products—we support you from specification calculations through routine maintenance.')}
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {coreServices.map((srv, index) => {
              const ServiceIcon = serviceIcons[srv.id] || PackageCheck;
              return (
                <article
                  key={srv.id}
                  className="grid grid-cols-1 items-center gap-7 sm:gap-10 md:grid-cols-2 md:gap-12"
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2540]">
                      <span>{srv.number}</span>
                      <span className="h-px w-7 bg-[#F97316]" />
                      <span className="text-slate-500">{tx('Layanan Rekayasa', 'Engineering Service')}</span>
                    </div>

                    <h3 className="font-display text-xl text-[#0A2540] sm:text-2xl">
                      {tx(serviceTranslations[srv.id]?.titleId || srv.title, serviceTranslations[srv.id]?.title || srv.title)}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                      {tx(srv.tagline, serviceTranslations[srv.id]?.tagline || srv.tagline)}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700">
                      {tx(srv.description, serviceTranslations[srv.id]?.description || srv.description)}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {srv.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#F97316]" />
                          <span>{tx(feat, serviceTranslations[srv.id]?.features[i] || feat)}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#426AA8] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0A2540]"
                    >
                      <span>{tx('Pelajari', 'Learn More')}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className={`group relative overflow-hidden rounded-lg bg-slate-100 aspect-[1.48] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <img
                      src={serviceImages[srv.id]}
                      alt={tx(
                        `Foto untuk layanan ${serviceTranslations[srv.id]?.titleId || srv.title}`,
                        `Image for ${serviceTranslations[srv.id]?.title || srv.title} service`
                      )}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: '1.48' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/45 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-70" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 text-[#0A2540] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <ServiceIcon size={21} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>{tx('Pelajari Semua 6 Layanan Lengkap', 'Explore All 6 Services')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ===========================================================
        5. MITRA BRAND CAROUSEL / LOGO CLOUD (Background Putih #FFFFFF)
        ===========================================================
      */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
            {tx('Jaringan Produsen Global', 'Global Manufacturer Network')}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0A2540] tracking-tight mt-1">
            {tx('Didukung Oleh 30+ Brand Terkemuka Dunia', 'Supported by 30+ Leading Global Brands')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
            {tx('Hanya produk berstandar industri dengan reputasi ketahanan teruji yang kami hadirkan untuk Anda.', 'We bring you only industrial-standard products with proven reputations for durability.')}
          </p>
        </div>

        {/* Marquee Infinite Loop */}
        <div className="relative w-full overflow-hidden py-4 border-y border-slate-100 bg-[#F8FAFC]">
          {/* Gradient fade edge */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...brandPartners, ...brandPartners]
              .filter((bp) => brandLogoSources[bp.name])
              .map((bp, idx) => (
                <div
                  key={`${bp.name}-${idx}`}
                  className="flex h-16 w-36 shrink-0 items-center justify-center rounded-lg bg-white px-4 py-3 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={brandLogoSources[bp.name]}
                    alt={bp.name}
                    loading="lazy"
                    className="h-full w-full max-h-10 max-w-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 
        ===========================================================
        6. QUICK CTA BANNER SECTION (Background Navy #0A2540)
        ===========================================================
      */}
      <section className="py-16 bg-[#0A2540] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-wider mb-2">
                {tx('Respon Cepat & Akurat', 'Fast & Accurate Response')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
                {tx('Siap Meningkatkan Efisiensi Sistem Industri Anda?', 'Ready to Improve Your Industrial System Efficiency?')}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {tx('Hubungi tim sales engineering kami sekarang untuk konsultasi pemilihan unit, pengecekan ketersediaan stok, atau permintaan penawaran harga resmi (Quotation).', 'Contact our sales engineering team for equipment selection advice, stock availability, or an official quotation.')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition-all"
              >
                <span>{tx('Minta Penawaran', 'Request a Quotation')}</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6208128864953"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all"
              >
                <PhoneCall size={16} className="text-[#F97316]" />
                <span>WA: 08128864953</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
