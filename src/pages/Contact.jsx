import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const { tx } = useLanguage();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    category: 'pumps',
    productModel: prefilledProduct,
    quantity: '1',
    deliveryLocation: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productModel: prefilledProduct
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.setCustomValidity('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInvalid = (e) => {
    const { validity, type } = e.currentTarget;
    const message = validity.valueMissing
      ? tx('Mohon isi bidang ini.', 'Please fill out this field.')
      : type === 'email' && validity.typeMismatch
        ? tx('Masukkan alamat email yang valid.', 'Please enter a valid email address.')
        : tx('Periksa kembali isian ini.', 'Please check this field.');
    e.currentTarget.setCustomValidity(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending quotation request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  // WhatsApp formatted direct link
  const generateWhatsAppLink = () => {
    const categoryLabels = {
      pumps: tx('Pompa (Pompa Industri)', 'Pumps (Industrial Pumps)'),
      motors: tx('Motor Listrik & Penggerak (Motor & Gearbox)', 'Electric Motors & Drives (Motors & Gearboxes)'),
      blowers: tx('Blower (Roots Blower & Ring Blower)', 'Blowers (Roots Blowers & Ring Blowers)'),
      valves: tx('Katup & Suku Cadang', 'Valves & Spare Parts'),
      equipment: tx('Peralatan Industri (Tangki, Menara, Kopling)', 'Industrial Equipment (Tanks, Towers, Couplings)'),
      custom: tx('Solusi Khusus / Layanan Rekayasa Lainnya', 'Custom Solutions / Other Engineering Services')
    };
    const text = `${tx('Halo Tim Penjualan PT Benovta Teknik Perkasa Abadi,', 'Hello PT Benovta Teknik Perkasa Abadi Sales Team,')}
${tx('Saya ingin mengajukan permintaan penawaran harga:', 'I would like to request a quotation:')}

• ${tx('Nama', 'Name')}: ${formData.fullName || '-'}
• ${tx('Perusahaan', 'Company')}: ${formData.company || '-'}
• ${tx('Email/WA', 'Email/WhatsApp')}: ${formData.email || '-'} / ${formData.phone || '-'}
• ${tx('Kategori', 'Category')}: ${categoryLabels[formData.category] || formData.category}
• ${tx('Produk / Model', 'Product / Model')}: ${formData.productModel || '-'}
• ${tx('Jumlah (Qty)', 'Quantity')}: ${formData.quantity || '1'}
• ${tx('Lokasi Pengiriman', 'Delivery Location')}: ${formData.deliveryLocation || '-'}
• ${tx('Catatan', 'Notes')}: ${formData.notes || '-'}`;

    return `https://wa.me/6208128864953?text=${encodeURIComponent(text)}`;
  };

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
            <Building2 size={15} />
            <span>{tx('Hubungi Kami & Minta Penawaran', 'Contact Us & Request a Quote')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight">
            {tx('Kontak & Permintaan Penawaran Harga', 'Contact & Quote Request')}
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {tx('Hubungi tim rekayasa kami untuk konsultasi teknis, informasi stok, atau ajukan permohonan penawaran harga melalui formulir resmi di bawah ini.', 'Contact our engineering team for technical consultations, stock information, or a quotation using the official form below.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* 
            ===========================================================
            KOLOM KIRI: Detail Kontak, Legalitas & Peta (5 Cols)
            ===========================================================
          */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards Box */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                {tx('Informasi Kantor Operasional', 'Office Information')}
              </h2>

              <div className="space-y-4 text-sm">
                
                {/* Alamat */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tx('Alamat Kantor & Workshop:', 'Office & Workshop Address:')}</div>
                    <div className="text-slate-800 font-semibold mt-0.5 leading-snug">
                      Ruko Goodland, Jl. Prof. Moh. Yamin No. 3, RT 005/007, Duren Jaya, Bekasi Timur, Kota Bekasi, Jawa Barat
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A2540] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tx('Email Resmi Pengadaan:', 'Official Procurement Email:')}</div>
                    <a
                      href="mailto:sales@benovta.co.id"
                      className="text-[#0A2540] font-bold hover:text-[#F97316] transition-colors block mt-0.5"
                    >
                      sales@benovta.co.id
                    </a>
                  </div>
                </div>

                {/* Telp / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tx('Telepon & WhatsApp:', 'Phone & WhatsApp:')}</div>
                    <a
                      href="https://wa.me/6208128864953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-bold hover:text-emerald-600 transition-colors block mt-0.5"
                    >
                      08128864953
                    </a>
                    <span className="text-[11px] text-slate-400">{tx('Tersedia panggilan telepon & chat WhatsApp', 'Phone calls & WhatsApp chat available')}</span>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-800">{tx('Jam Layanan Kantor:', 'Office Hours:')}</div>
                    <div className="text-slate-600 mt-0.5">{tx('Senin – Jumat: 08.00 – 17.00 WIB', 'Monday – Friday: 08:00 – 17:00 WIB')}</div>
                    <div className="text-slate-600">{tx('Sabtu: 08.00 – 13.00 WIB', 'Saturday: 08:00 – 13:00 WIB')}</div>
                    <div className="text-slate-400">{tx('Minggu & Libur Nasional: Tutup (Darurat via WhatsApp)', 'Sunday & National Holidays: Closed (emergency via WhatsApp)')}</div>
                  </div>
                </div>

              </div>

              {/* Tombol Langsung Chat WhatsApp */}
              <a
                href="https://wa.me/6208128864953"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <PhoneCall size={18} />
                <span>{tx('Chat Sales via WhatsApp Sekarang', 'Chat with Sales on WhatsApp Now')}</span>
              </a>
            </div>

            {/* Google Maps Embed / Interactive Location Frame */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 overflow-hidden shadow-xs">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#F97316]" />
                  <span>{tx('Lokasi Kantor di Google Maps', 'Office Location on Google Maps')}</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Ruko+Goodland+Bekasi+Timur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#F97316] hover:underline"
                >
                  {tx('Buka di Maps →', 'Open in Maps →')}
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100 relative">
                <iframe
                  title={tx('Peta Lokasi PT Benovta Teknik Perkasa Abadi', 'Map of PT Benovta Teknik Perkasa Abadi')}
                  src="https://maps.google.com/maps?q=Bekasi+Timur+Ruko+Goodland&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* 
            ===========================================================
            KOLOM KANAN: Formulir "Request a Quotation" (7 Cols)
            ===========================================================
          */}
          <div className="lg:col-span-7">
            <div id="quote" className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm scroll-mt-28">
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-wider mb-1">
                <FileText size={15} />
                <span>{tx('Formulir Penawaran Harga', 'Quotation Request Form')}</span>
              </div>
              <h2 className="text-2xl font-black text-[#0A2540] tracking-tight">
                {tx('Permintaan Penawaran Harga', 'Request a Quotation')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
                {tx('Lengkapi rincian kebutuhan Anda di bawah ini. Tim kami akan mengirimkan surat penawaran harga resmi dalam waktu 1x24 jam kerja.', 'Please complete your requirements below. Our team will send an official quotation within one business day.')}
              </p>

              {submitted ? (
                /* Sukses Alert */
                <div className="bg-white rounded-xl p-8 border border-emerald-200 text-center space-y-4 animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540]">{tx('Permintaan Penawaran Berhasil Dikirim!', 'Quote Request Sent Successfully!')}</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {tx('Terima kasih', 'Thank you')} <strong>{formData.fullName}</strong>. {tx('Data permintaan penawaran Anda untuk', 'We have received your quote request for')} <strong>{formData.productModel || tx('Peralatan Industri', 'Industrial Equipment')}</strong>{tx(' telah kami terima.', '.')}
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
                    >
                      <MessageSquare size={15} />
                      <span>{tx('Teruskan Rincian via WhatsApp', 'Continue with Details on WhatsApp')}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                    >
                      {tx('Kirim Permintaan Lain', 'Send Another Request')}
                    </button>
                  </div>
                </div>
              ) : (
                /* Formulir Input */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Baris 1: Nama Lengkap & Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('Nama Lengkap', 'Full Name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        required
                        onInvalid={handleInvalid}
                        placeholder={tx('Contoh: Budi Santoso', 'e.g. Budi Santoso')}
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('Nama Perusahaan / Instansi', 'Company / Organization Name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        required
                        onInvalid={handleInvalid}
                        placeholder={tx('Contoh: PT Manufaktur Jaya Abadi', 'e.g. PT Manufaktur Jaya Abadi')}
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Baris 2: Email & No HP/WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('Alamat Email', 'Email Address')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        onInvalid={handleInvalid}
                        placeholder={tx('email@perusahaan.com', 'email@company.com')}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('No. HP / WhatsApp', 'Mobile / WhatsApp Number')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        onInvalid={handleInvalid}
                        placeholder="0812xxxxxxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Baris 3: Kategori Produk & Kuantitas */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('Kategori Produk', 'Product Category')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors cursor-pointer"
                      >
                        <option value="pumps">{tx('Pompa (Pompa Industri)', 'Pumps (Industrial Pumps)')}</option>
                        <option value="motors">{tx('Motor Listrik & Penggerak (Motor & Gearbox)', 'Electric Motors & Drives (Motor & Gearbox)')}</option>
                        <option value="blowers">{tx('Blower (Roots Blower & Ring Blower)', 'Blowers (Roots Blowers & Ring Blowers)')}</option>
                        <option value="valves">{tx('Katup & Suku Cadang', 'Valves & Spare Parts')}</option>
                        <option value="equipment">{tx('Peralatan Industri (Tangki, Tower, Kopling)', 'Industrial Equipment (Tanks, Towers, Couplings)')}</option>
                        <option value="custom">{tx('Solusi Khusus / Servis Rekayasa Lainnya', 'Custom Solutions / Other Engineering Services')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-quantity" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {tx('Kuantitas (Qty)', 'Quantity')}
                      </label>
                      <input
                        id="contact-quantity"
                        type="text"
                        name="quantity"
                        placeholder={tx('Contoh: 2 unit / 1 paket', 'e.g. 2 units / 1 lot')}
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Baris 4: Tipe / Part Number / Model */}
                  <div>
                    <label htmlFor="contact-product-model" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {tx('Model / Nomor Suku Cadang / Merek yang Diinginkan', 'Desired Model / Part Number / Brand')}
                    </label>
                    <input
                      id="contact-product-model"
                      type="text"
                      name="productModel"
                      placeholder={tx('Contoh: Pompa Ebara FS 65x50-160 / Motor Siemens 15 kW / Blower Anlet', 'e.g. Ebara FS 65x50-160 Pump / Siemens 15 kW Motor / Anlet Blower')}
                      value={formData.productModel}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                    />
                  </div>

                  {/* Baris 5: Lokasi Pengiriman */}
                  <div>
                    <label htmlFor="contact-delivery-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {tx('Lokasi Pengiriman Proyek / Kota', 'Project / City Delivery Location')}
                    </label>
                    <input
                      id="contact-delivery-location"
                      type="text"
                      name="deliveryLocation"
                      placeholder={tx('Contoh: Kawasan Industri Cikarang / Marunda / Surabaya', 'e.g. Cikarang Industrial Estate / Marunda / Surabaya')}
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                    />
                  </div>

                  {/* Baris 6: Catatan Tambahan / Parameter Teknis */}
                  <div>
                    <label htmlFor="contact-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {tx('Catatan Aplikasi / Spesifikasi Teknis Khusus', 'Application Notes / Special Technical Specifications')}
                    </label>
                    <textarea
                      id="contact-notes"
                      name="notes"
                      rows={3}
                      placeholder={tx('Sebutkan detail seperti kapasitas aliran (m3/h), head pipa (meter), suhu cairan, tegangan listrik, atau lampirkan deskripsi sistem...', 'Include details such as flow rate (m3/h), pipe head (meters), fluid temperature, voltage, or a system description...')}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold shadow-md shadow-orange-500/25 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <span>{tx('Sedang Memproses...', 'Processing...')}</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>{tx('Kirim Permintaan Penawaran Resmi', 'Submit Official Quote Request')}</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      {tx('Data Anda aman dan hanya digunakan untuk keperluan kalkulasi teknis & penawaran harga resmi PT Benovta Teknik Perkasa Abadi.', 'Your data is secure and will only be used for technical calculations and an official quotation from PT Benovta Teknik Perkasa Abadi.')}
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
