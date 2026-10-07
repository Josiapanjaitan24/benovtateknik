import React from 'react';
import { Link } from 'react-router-dom';
import {
  PackageCheck,
  Cpu,
  Wrench,
  Boxes,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Settings,
  Clock,
  FileCheck
} from 'lucide-react';
import { coreServices } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const serviceTranslations = {
  'equipment-supply': {
    indonesianTitle: 'Pasokan Peralatan',
    title: 'Equipment Supply',
    tagline: 'Complete supply of 100% genuine industrial equipment',
    description: 'We supply high-quality industrial machinery directly from principals and authorized distributors of leading brands (Ebara, Grundfos, Siemens, Bonfiglioli, and others). All goods are guaranteed 100% original and come with test certificates and an official warranty.',
    features: [
      'Original products supplied with a Certificate of Origin (COO)',
      'Standard industrial units available from ready-to-ship stock',
      'Global-class brands with proven energy efficiency',
      'Competitive and transparent pricing'
    ]
  },
  'installation-integration': {
    indonesianTitle: 'Instalasi & Integrasi',
    title: 'Installation & Integration',
    tagline: 'Mechanical and electrical assembly and system integration',
    description: 'Installation services include precision shaft alignment using dial indicators or lasers, manifold piping assembly, and integration of motors and pumps with your plant’s existing electrical and PLC systems.',
    features: [
      'Installation on a sturdy, vibration-resistant baseplate',
      'Precision shaft alignment with a tolerance alignment report',
      'Integration of electrical systems, VFD panels, and pressure sensors',
      'Commissioning tests alongside the client’s technical team on-site'
    ]
  },
  'repair-service': {
    indonesianTitle: 'Perbaikan & Servis',
    title: 'Repair & Service',
    tagline: 'Industrial machinery repair and troubleshooting',
    description: 'Comprehensive refurbishment and repair for worn pumps, burned-out motors (rewinding), mechanical seal leaks, abnormal blower vibration, and bearing replacement and shaft balancing.',
    features: [
      'Thorough diagnostic inspection before any repair work',
      'Replacement spare parts made from precision-compatible materials',
      'Electric motor rewinding with heat-resistant Class H copper wire',
      'Performance testing (hydrotest / run test) before handover'
    ]
  },
  'spare-parts-sourcing': {
    indonesianTitle: 'Pengadaan Suku Cadang',
    title: 'Spare Parts Sourcing',
    tagline: 'Fast supply of genuine and compatible spare parts',
    description: 'We source critical industrial spare parts to minimize plant downtime. Our range includes mechanical seals, impellers, SKF/NSK bearings, stainless-steel shafts, valve seats, gaskets, and inverter electronic cards.',
    features: [
      'Extensive international spare-parts sourcing network',
      'Accurate part-number identification from nameplate specifications',
      'Quality genuine and compatible OEM spare-parts options',
      'Fast delivery for emergency breakdown requirements'
    ]
  },
  'maintenance-support': {
    indonesianTitle: 'Dukungan Pemeliharaan',
    title: 'Maintenance Support',
    tagline: 'Preventive maintenance and scheduled service contracts',
    description: 'Scheduled maintenance programs help prevent unexpected failures in critical rotating equipment. Services include vibration analysis, infrared temperature checks, periodic lubrication, and energy-efficiency assessments.',
    features: [
      'Periodic maintenance contracts (monthly / quarterly)',
      'Detailed equipment condition reports after every visit',
      'Early detection of component wear before major failure',
      'Priority 24/7 emergency response for contract clients'
    ]
  },
  'technical-support': {
    indonesianTitle: 'Dukungan Teknis',
    title: 'Technical Support',
    tagline: 'Engineering consultation and fit-for-purpose specifications',
    description: 'Experienced engineering practitioners provide consultation to help select pump types, calculate pipe head and flow rate, size motors, and improve system conversion efficiency.',
    features: [
      'Fluid-system calculations (Total Dynamic Head / NPSHa)',
      'Fit-for-purpose specifications matched to your budget',
      'Operational troubleshooting by phone, video, or on-site',
      'Basic operations training for your plant maintenance team'
    ]
  }
};

export default function Services() {
  const { tx } = useLanguage();
  const serviceIcons = {
    'equipment-supply': PackageCheck,
    'installation-integration': Cpu,
    'repair-service': Wrench,
    'spare-parts-sourcing': Boxes,
    'maintenance-support': ShieldCheck,
    'technical-support': Headphones
  };

  const serviceBenefits = [
    {
      title: 'Sertifikasi Mutu Terjamin',
      desc: 'Setiap pengadaan unit dilengkapi sertifikat pabrik (COO/Test Report) dan garansi resmi.',
      englishTitle: 'Guaranteed Quality Certification',
      englishDesc: 'Every equipment order includes factory certificates (COO / test report) and an official warranty.',
      icon: FileCheck
    },
    {
      title: 'Dukungan Teknisi Bersertifikat',
      desc: 'Dikerjakan oleh teknisi ahli dengan pengalaman penanganan berbagai medan mesin pabrik.',
      englishTitle: 'Certified Technician Support',
      englishDesc: 'Work is carried out by expert technicians experienced in a wide range of industrial machinery environments.',
      icon: Settings
    },
    {
      title: 'Respon Cepat Tanggap',
      desc: 'Kesiapan respon 24/7 untuk penanganan kendala darurat mesin berputar vital.',
      englishTitle: 'Rapid Response',
      englishDesc: '24/7 response readiness to address emergencies involving critical rotating machinery.',
      icon: Clock
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* 
        ===========================================================
        PAGE HEADER
        ===========================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-100">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-wider mb-2">
            <Cpu size={15} />
            <span>{tx('Layanan Rekayasa Industri', 'Industrial Engineering Services')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight">
            {tx('6 Layanan Utama Rekayasa Teknik & Pasokan', '6 Core Engineering & Supply Services')}
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {tx(
              'Dukungan komprehensif mulai dari pasokan mesin berstandar internasional, instalasi presisi, sourcing suku cadang, hingga pemeliharaan jangka panjang.',
              'Comprehensive support spanning international-standard equipment supply, precision installation, spare-parts sourcing, and long-term maintenance.'
            )}
          </p>
        </div>
      </div>

      {/* 
        ===========================================================
        GRID 3X2 CLEAN CARDS LAYANAN UTAMA
        ===========================================================
      */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((srv) => {
              const ServiceIcon = serviceIcons[srv.id] || PackageCheck;
              return (
                <div
                  key={srv.id}
                  className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/90 hover:border-[#F97316] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Card: Icon & Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-[#F97316] flex items-center justify-center shadow-md group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                        <ServiceIcon size={26} />
                      </div>
                      <span className="text-sm font-black text-slate-400 group-hover:text-[#0A2540] transition-colors">
                        {tx(`Layanan ${srv.number}`, `Service ${srv.number}`)}
                      </span>
                    </div>

                    {/* Judul & Tagline */}
                    <h2 className="text-xl font-bold text-[#0A2540] group-hover:text-[#F97316] transition-colors mb-2">
                      {tx(serviceTranslations[srv.id]?.indonesianTitle || srv.title, serviceTranslations[srv.id]?.title || srv.title)}
                    </h2>
                    <div className="text-xs font-semibold text-slate-500 mb-4 pb-2 border-b border-slate-200">
                      {tx(srv.tagline, serviceTranslations[srv.id]?.tagline || srv.tagline)}
                    </div>

                    {/* Deskripsi */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {tx(srv.description, serviceTranslations[srv.id]?.description || srv.description)}
                    </p>

                    {/* Fitur / Benefit Bullets */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                        {tx('Cakupan Layanan:', 'Service coverage:')}
                      </div>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                          <CheckCircle2 size={15} className="text-[#F97316] shrink-0 mt-0.5" />
                          <span>{tx(feat, serviceTranslations[srv.id]?.features[idx] || feat)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white group-hover:bg-[#0A2540] text-[#0A2540] group-hover:text-white border border-slate-200 group-hover:border-[#0A2540] text-xs font-bold transition-all duration-200 shadow-xs"
                    >
                      <span>{tx('Konsultasikan Kebutuhan Ini', 'Discuss your requirements')}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ===========================================================
        STANDAR PELAYANAN & JAMINAN REKAYASA (Background #F8FAFC)
        ===========================================================
      */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
              {tx('Komitmen Kualitas', 'Quality Commitment')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight mt-1">
              {tx('Standar Integritas Layanan Benovta', 'Benovta Service Integrity Standards')}
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              {tx(
                'Menjaga keandalan mesin pabrik Anda beroperasi dengan performa optimal.',
                'Keeping your plant machinery reliable and operating at peak performance.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceBenefits.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center mb-4">
                    <ItemIcon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-[#0A2540] mb-2">{tx(item.title, item.englishTitle)}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tx(item.desc, item.englishDesc)}</p>
                </div>
              );
            })}
          </div>

          {/* Banner Konsultasi */}
          <div className="mt-12 bg-[#0A2540] rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {tx('Memerlukan Supervisi On-Site atau Servis Darurat?', 'Need on-site supervision or emergency service?')}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {tx(
                  'Tim teknisi kami siap melakukan survey lapangan, audit vibrasi, atau perbaikan pompa dan motor di lokasi pabrik Anda.',
                  'Our technicians can conduct site surveys and vibration audits, or repair pumps and motors at your plant.'
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <span>{tx('Minta Jadwal Kunjungan', 'Request a site visit')}</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/6208128864953"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all"
              >
                <PhoneCall size={15} className="text-[#F97316]" />
                <span>08128864953</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
