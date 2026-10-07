import { ArrowLeft, ArrowRight, Check, Droplets, Image as ImageIcon, PhoneCall } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
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

export default function ProductDetail() {
  const { tx } = useLanguage();
  const { productId } = useParams();
  const category = productCategories.find((item) =>
    item.items.some((product) => product.id === productId)
  );
  const product = category?.items.find((item) => item.id === productId);

  if (!category || !product) {
    return (
      <section className="min-h-[70vh] px-4 pt-36 pb-20 flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <Droplets size={26} />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
            {tx('Produk tidak ditemukan', 'Product not found')}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A2540]">
            {tx('Detail produk tidak tersedia', 'Product details are unavailable')}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {tx(
              'Produk yang Anda cari mungkin sudah tidak tersedia atau tautannya tidak benar.',
              'The product you are looking for may no longer be available, or the link may be incorrect.'
            )}
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0A2540] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F97316]"
          >
            <ArrowLeft size={16} />
            {tx('Kembali ke katalog', 'Back to catalog')}
          </Link>
        </div>
      </section>
    );
  }

  const image = getProductImage(product.id);
  const quoteUrl = `/contact?product=${encodeURIComponent(`${product.title} (${product.brand})`)}`;
  const whatsappUrl = `https://wa.me/6208128864953?text=${encodeURIComponent(tx(`Halo PT Benovta, saya tertarik dengan produk ${product.title} - ${product.brand}`, `Hello PT Benovta, I am interested in the product ${product.title} - ${product.brand}`))}`;

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to={`/products?category=${category.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#F97316]"
        >
          <ArrowLeft size={16} />
          {tx('Kembali ke', 'Back to')} {tx(categoryTranslations[category.id]?.indonesianName || category.name, categoryTranslations[category.id]?.name || category.name)}
        </Link>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <div className="flex aspect-[4/3] items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={product.title}
                  className="h-full w-full object-contain p-8 sm:p-12"
                />
              ) : (
                <ImageIcon size={64} strokeWidth={1.1} className="text-slate-300" aria-hidden="true" />
              )}
            </div>
          </div>

          <div className="lg:py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#D65B0A]">
                {tx(categoryTranslations[category.id]?.indonesianName || category.name, categoryTranslations[category.id]?.name || category.name)}
              </span>
              {product.featured && (
                <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-semibold text-slate-500">
                  {tx('Produk unggulan', 'Featured product')}
                </span>
              )}
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{product.brand}</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[#0A2540] sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {tx(category.tagline, categoryTranslations[category.id]?.tagline || category.tagline)}
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{tx('Seri / Tipe', 'Series / Type')}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-[#0A2540]">
                {product.series === 'Tipe tersedia sesuai kebutuhan' ? tx(product.series, 'Types available to suit your needs') : product.series}
              </p>
              <div className="my-5 border-t border-slate-100" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{tx('Spesifikasi utama', 'Key specifications')}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {translateGeneratedContent(category.id, 'spec', product.spec, tx)}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to={quoteUrl}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
              >
                {tx('Minta Penawaran', 'Request a quote')}
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <PhoneCall size={16} className="text-[#F97316]" />
                {tx('Tanya via WhatsApp', 'Ask via WhatsApp')}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-2">
          <section className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#F97316] shadow-sm">
              <Check size={19} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-[#0A2540]">{tx('Aplikasi yang sesuai', 'Suitable applications')}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {translateGeneratedContent(category.id, 'applications', product.applications, tx)}
            </p>
          </section>
          <section className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#F97316] shadow-sm">
              <Droplets size={19} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-[#0A2540]">{tx('Solusi Benovta', 'Benovta solutions')}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {tx(category.description, categoryTranslations[category.id]?.description || category.description)}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
