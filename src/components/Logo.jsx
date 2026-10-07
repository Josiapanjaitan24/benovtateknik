import React from 'react';

/**
 * Komponen Logo Resmi Benovta Teknik Perkasa Abadi
 * Menggunakan vektor SVG dengan elemen:
 * - Gear (Roda Gigi) Deep Industrial Navy `#0A2540`
 * - Monogram 'BT' dengan aksen Industrial Orange `#F97316`
 * - Bintang Keunggulan Star Gold `#D97706`
 */
export default function Logo({ inverted = false, className = '', showTagline = true, size = 'md' }) {
  // Sizes: sm, md, lg
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-[15px]',
    lg: 'text-lg',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]}`}>
        <img
          src="/icon_benovta.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight leading-none ${titleSizes[size]} ${inverted ? 'text-white' : 'text-[#0A2540]'}`}>
            BENOVTA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
        </div>
        {showTagline && (
          <span className={`tracking-[0.18em] font-semibold uppercase leading-tight mt-0.5 ${subSizes[size]} ${inverted ? 'text-slate-300' : 'text-slate-500'}`}>
            Teknik Perkasa Abadi
          </span>
        )}
      </div>
    </div>
  );
}
