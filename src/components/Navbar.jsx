import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Droplets,
  RotateCcw,
  Wind,
  Disc,
  Factory,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { pathname } = useLocation();
  const { language, setLanguage, tx } = useLanguage();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const aboutTimeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  // Monitor scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  // Handle dropdown hover delays to prevent accidental closing
  const handleAboutEnter = () => {
    clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const handleProductsEnter = () => {
    clearTimeout(productsTimeoutRef.current);
    setProductsDropdownOpen(true);
  };
  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  // Nav styles based on route & scroll
  const navContainerBg = isHome
    ? scrolled
      ? 'bg-[#0A2540]/95 backdrop-blur-md shadow-md'
      : 'bg-transparent'
    : scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm'
      : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]';

  // Inner border style - Container-scoped border bottom
  const innerBorderClass = isHome
    ? scrolled
      ? 'border-white/15'
      : 'border-white/20'
    : 'border-slate-200';

  const linkTextColor = isHome
    ? 'text-slate-200 hover:text-white'
    : 'text-[#0A2540] hover:text-[#F97316]';

  const activeLinkClass = (path) => {
    if (pathname === path) {
      return isHome
        ? 'text-[#F97316] font-semibold'
        : 'text-[#F97316] font-semibold';
    }
    return '';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navContainerBg}`}>
      {/* 
        Container membatasi garis pemisah agar HANYA membentang dari posisi 
        huruf awal logo di sebelah kiri hingga tombol CTA di sebelah kanan.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-2 py-2.5 sm:pt-5 sm:pb-4 border-b ${innerBorderClass} transition-colors duration-300`}>
          
          {/* Logo Perusahaan */}
          <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Benovta - Beranda">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:p-1.5">
              <img
                src="/icon_benovta.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className={`flex items-center gap-1.5 text-sm font-black tracking-tight leading-none sm:text-[15px] ${isHome ? 'text-white' : 'text-[#0A2540]'}`}>
                BENOVTA
                <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
              </span>
              <span className={`mt-0.5 text-[8px] font-semibold uppercase leading-tight tracking-[0.16em] sm:text-[10px] sm:tracking-[0.18em] ${isHome ? 'text-slate-300' : 'text-slate-500'}`}>
                Teknik Perkasa Abadi
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home Link */}
            <Link
              to="/"
              className={`px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${linkTextColor} ${activeLinkClass('/')}`}
            >
              {tx('Beranda', 'Home')}
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${linkTextColor} ${pathname.startsWith('/about') ? 'text-[#F97316] font-semibold' : ''}`}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                aria-expanded={aboutDropdownOpen}
              >
                <span>{tx('Tentang Kami', 'About Us')}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-[#F97316]' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in-up z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-slate-800">
                    <Link
                      to="/about/profile"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Profil Perusahaan', 'Company Profile')}</div>
                        <div className="text-[11px] text-slate-400">{tx('Profil & Legalitas Resmi', 'Profile & Legal Information')}</div>
                      </div>
                    </Link>

                    <Link
                      to="/about/values"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Visi, Misi & Budaya Kerja', 'Vision, Mission & Values')}</div>
                        <div className="text-[11px] text-slate-400">{tx('Arah Tujuan & Nilai Utama', 'Our Direction & Core Values')}</div>
                      </div>
                    </Link>

                    <Link
                      to="/about/approach"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Cara Kerja', 'Our Approach')}</div>
                        <div className="text-[11px] text-slate-400">{tx('5 Tahapan Rekayasa Solusi', '5-Step Engineering Process')}</div>
                      </div>
                    </Link>

                    <Link
                      to="/about/partners"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Jaringan Pabrikan Global', 'Global Manufacturer Network')}</div>
                        <div className="text-[11px] text-slate-400">{tx('Keunggulan & Brand Mitra', 'Trusted Partners & Brands')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Link */}
            <Link
              to="/services"
              className={`px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${linkTextColor} ${activeLinkClass('/services')}`}
            >
              {tx('Layanan', 'Services')}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${linkTextColor} ${pathname.startsWith('/products') ? 'text-[#F97316] font-semibold' : ''}`}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                aria-expanded={productsDropdownOpen}
              >
                <span>{tx('Produk', 'Products')}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#F97316]' : ''}`} />
              </button>

              {/* Products Dropdown Panel */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-up z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-slate-800">
                    <Link
                      to="/products?category=pumps"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <Droplets size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Pompa', 'Pumps')}</div>
                        <div className="text-[11px] text-slate-400">Ebara, Torishima, Grundfos, Wilden</div>
                      </div>
                    </Link>

                    <Link
                      to="/products?category=motors"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <RotateCcw size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Motor & Penggerak', 'Electric Motors & Drives')}</div>
                        <div className="text-[11px] text-slate-400">Siemens, TECO, Inverter, Gearbox</div>
                      </div>
                    </Link>

                    <Link
                      to="/products?category=blowers"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <Wind size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Blower', 'Blowers')}</div>
                        <div className="text-[11px] text-slate-400">Anlet, Trundean, FU-TSU Roots</div>
                      </div>
                    </Link>

                    <Link
                      to="/products?category=valves"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <Disc size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Katup & Suku Cadang', 'Valves & Spare Parts')}</div>
                        <div className="text-[11px] text-slate-400">{tx('Butterfly, Kontrol, Seal, Bearing', 'Butterfly, Control, Seals, Bearings')}</div>
                      </div>
                    </Link>

                    <Link
                      to="/products?category=equipment"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                        <Factory size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0A2540] group-hover:text-[#F97316]">{tx('Peralatan Industri', 'Industrial Equipment')}</div>
                        <div className="text-[11px] text-slate-400">Pressure Tank, Cooling Tower, Joint</div>
                      </div>
                    </Link>

                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        to="/products"
                        className="flex items-center justify-between px-3 py-2 text-[12px] font-semibold text-[#F97316] hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <span>{tx('Lihat Semua Katalog Produk', 'View Full Product Catalog')}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${linkTextColor} ${activeLinkClass('/contact')}`}
            >
              {tx('Kontak', 'Contact')}
            </Link>
          </nav>

          {/* Language switch and mobile menu */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <div className={`inline-flex items-center rounded-lg border p-0.5 text-xs font-semibold ${isHome ? 'border-white/30 bg-white/10' : 'border-slate-200 bg-slate-50'}`} aria-label={tx('Pilih bahasa', 'Select language')}>
              {['ID', 'EN'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  aria-pressed={language === option}
                  aria-label={option === 'ID' ? tx('Bahasa Indonesia', 'Indonesian') : tx('Bahasa Inggris', 'English')}
                  className={`rounded-md px-2 py-1.5 transition-colors ${
                    language === option
                      ? 'bg-[#F97316] text-white shadow-sm'
                      : isHome
                        ? 'text-white/80 hover:text-white'
                        : 'text-slate-600 hover:text-[#0A2540]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors ${
                isHome ? 'text-white hover:bg-white/10' : 'text-[#0A2540] hover:bg-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={tx('Buka menu navigasi', 'Toggle Navigation Menu')}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-3.75rem)] overflow-y-auto bg-white border-b border-slate-200 shadow-2xl animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-3 py-2 sm:px-4 sm:py-4 space-y-0.5 sm:space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2.5 text-[15px] font-semibold rounded-lg ${pathname === '/' ? 'text-[#F97316] bg-orange-50' : 'text-[#0A2540] hover:bg-slate-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {tx('Beranda', 'Home')}
            </Link>

            {/* Mobile About Us Accordion */}
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold text-[#0A2540] hover:bg-slate-50 rounded-lg text-left"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                <span>{tx('Tentang Kami', 'About Us')}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-[#F97316]' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-6 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg mt-1 mb-2">
                  <Link
                    to="/about/profile"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Profil Perusahaan', 'Company Profile')}
                  </Link>
                  <Link
                    to="/about/values"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Visi, Misi & Budaya Kerja', 'Vision, Mission & Values')}
                  </Link>
                  <Link
                    to="/about/approach"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Cara Kerja (5 Langkah Rekayasa)', 'Our Approach (5 Engineering Steps)')}
                  </Link>
                  <Link
                    to="/about/partners"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Jaringan Pabrikan Global', 'Global Manufacturer Network')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`block px-4 py-2.5 text-[15px] font-semibold rounded-lg ${pathname === '/services' ? 'text-[#F97316] bg-orange-50' : 'text-[#0A2540] hover:bg-slate-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {tx('Layanan (6 Layanan Utama)', 'Services (6 Core Services)')}
            </Link>

            {/* Mobile Products Accordion */}
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold text-[#0A2540] hover:bg-slate-50 rounded-lg text-left"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span>{tx('Produk', 'Products')}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-[#F97316]' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-6 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg mt-1 mb-2">
                  <Link
                    to="/products?category=pumps"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Pompa', 'Pumps')} (Ebara, Grundfos, Torishima, Wilden)
                  </Link>
                  <Link
                    to="/products?category=motors"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Motor & Penggerak', 'Electric Motors & Drives')} (Siemens, TECO, Gearbox)
                  </Link>
                  <Link
                    to="/products?category=blowers"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Blower', 'Blowers')} (Anlet, Trundean, FU-TSU)
                  </Link>
                  <Link
                    to="/products?category=valves"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Katup & Suku Cadang', 'Valves & Spare Parts')} ({tx('Katup, Seal, Panel', 'Valves, Seals, Panels')})
                  </Link>
                  <Link
                    to="/products?category=equipment"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#F97316] rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Peralatan Industri', 'Industrial Equipment')} (Tank, Cooling Tower, Joint)
                  </Link>
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-sm font-bold text-[#F97316] rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {tx('Lihat Semua Katalog Produk', 'View Full Product Catalog')} &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`block px-4 py-2.5 text-[15px] font-semibold rounded-lg ${pathname === '/contact' ? 'text-[#F97316] bg-orange-50' : 'text-[#0A2540] hover:bg-slate-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {tx('Hubungi Kami', 'Contact Us')}
            </Link>

            <div className="pt-2 border-t border-slate-100 mt-2">
              <a
                href="https://wa.me/6208128864953"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#0A2540] text-white text-sm font-bold rounded-lg hover:bg-[#07192C] transition-colors"
              >
                <PhoneCall size={16} className="text-[#F97316]" />
                <span>{tx('Konsultasi WhatsApp: 08128864953', 'WhatsApp Consultation: 08128864953')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
