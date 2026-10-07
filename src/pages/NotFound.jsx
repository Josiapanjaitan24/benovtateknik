import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { tx } = useLanguage();

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-28 pb-20">
      <div className="max-w-lg text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A2540]">
          {tx('Halaman tidak ditemukan', 'Page not found')}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {tx(
            'Halaman yang Anda cari tidak tersedia atau alamatnya mungkin sudah berubah.',
            'The page you are looking for is unavailable or its address may have changed.'
          )}
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center rounded-xl bg-[#0A2540] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F97316]"
        >
          {tx('Kembali ke beranda', 'Back to home')}
        </Link>
      </div>
    </section>
  );
}
