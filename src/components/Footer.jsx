import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ArrowUp,
  FileText,
  Clock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { tx } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2540] text-slate-300 border-t border-[#12375C]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Kolom 1: Profil Perusahaan & Legalitas (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block">
              <Logo inverted={true} size="md" />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              <strong className="text-white">PT Benovta Teknik Perkasa Abadi</strong> {tx('adalah mitra pengadaan peralatan industri terpercaya. Kami menyediakan solusi rekayasa terintegrasi untuk pompa industri, motor listrik, blower, katup, dan suku cadang dengan standar keandalan tertinggi.', 'is a trusted industrial equipment procurement partner. We provide integrated engineering solutions for industrial pumps, electric motors, blowers, valves, and spare parts to the highest reliability standards.')}
            </p>

            {/* Kotak Legalitas Resmi */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 max-w-md backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>{tx('Legalitas Resmi Terdaftar', 'Officially Registered')}</span>
              </div>
              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <FileText size={14} className="text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>{tx('Akta Notaris Pendirian:', 'Deed of Establishment:')}</strong> No. 04</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>{tx('SK Kemenkumham RI:', 'Ministry of Law and Human Rights Decree:')}</strong> AHU-0078828.AH.01.01.TAHUN 2026</span>
                </div>
              </div>
            </div>

            {/* Tagline Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="text-white">{tx('Pompa', 'Pumps')}</span>
              <span className="text-[#F97316]">•</span>
              <span className="text-white">{tx('Motor', 'Motors')}</span>
              <span className="text-[#F97316]">•</span>
              <span className="text-white">{tx('Solusi Industri', 'Industrial Solutions')}</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
              {tx('Navigasi', 'Navigation')}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Beranda', 'Home')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about/profile" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Tentang Kami', 'About Us')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about/values" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Visi & Misi', 'Vision & Mission')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about/approach" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Cara Kerja', 'How We Work')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about/partners" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Jaringan Pabrikan Global', 'Global Manufacturer Network')}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('6 Layanan Utama', '6 Core Services')}</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Katalog Produk', 'Product Catalog')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#F97316] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#F97316]" />
                  <span>{tx('Kontak & Permintaan', 'Contact & Requests')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kategori Produk (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
              {tx('Kategori Produk', 'Product Categories')}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products?category=pumps" className="text-slate-300 hover:text-[#F97316] transition-colors block">
                  {tx('Pompa Industri', 'Industrial Pumps')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=motors" className="text-slate-300 hover:text-[#F97316] transition-colors block">
                  {tx('Motor & Penggerak', 'Motors & Drives')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=blowers" className="text-slate-300 hover:text-[#F97316] transition-colors block">
                  {tx('Roots Blower', 'Roots Blowers')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=valves" className="text-slate-300 hover:text-[#F97316] transition-colors block">
                  {tx('Katup & Suku Cadang', 'Valves & Parts')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=equipment" className="text-slate-300 hover:text-[#F97316] transition-colors block">
                  {tx('Peralatan Utilitas', 'Utility Equipment')}
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:underline">
                  <span>{tx('Minta Penawaran Harga', 'Request a Quote')}</span>
                  <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Informasi Kontak & Jam Kerja (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
              {tx('Kantor Operasional', 'Office')}
            </h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F97316] shrink-0 mt-1" />
                <span className="text-slate-300 leading-snug">
                  Ruko Goodland, Jl. Prof. Moh. Yamin No. 3, RT 005/007, Duren Jaya, Bekasi Timur, Kota Bekasi, Jawa Barat
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#F97316] shrink-0" />
                <a
                  href="mailto:sales@benovta.co.id"
                  className="text-slate-300 hover:text-[#F97316] transition-colors"
                >
                  sales@benovta.co.id
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#F97316] shrink-0" />
                <a
                  href="https://wa.me/6208128864953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#F97316] transition-colors font-semibold"
                >
                  08128864953 ({tx('WhatsApp / Telepon', 'WhatsApp / Call')})
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 text-xs text-slate-400">
                <Clock size={15} className="text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">{tx('Jam Layanan Operasional:', 'Office Hours:')}</p>
                  <p>{tx('Senin – Jumat: 08.00 – 17.00 WIB', 'Monday – Friday: 08:00 – 17:00 WIB')}</p>
                  <p>{tx('Sabtu: 08.00 – 13.00 WIB', 'Saturday: 08:00 – 13:00 WIB')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-[#07192C]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 <strong className="text-white">PT Benovta Teknik Perkasa Abadi</strong>. {tx('Hak Cipta Dilindungi.', 'All Rights Reserved.')}
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">{tx('Pemasok Industri & Solusi Rekayasa', 'Industrial Supplier & Engineering Solutions')}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#F97316] transition-colors font-medium cursor-pointer"
            >
              <span>{tx('Kembali ke Atas', 'Back to Top')}</span>
              <ArrowUp size={14} className="text-[#F97316]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
