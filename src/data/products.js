/**
 * Katalog Data Produk & Brand Partners
 * PT Benovta Teknik Perkasa Abadi
 * 
 * File data modular agar mudah menambah/mengedit produk secara manual via kode.
 */

import { productImageProducts } from './productImages';

const legacyProductCategories = [
  {
    id: 'pumps',
    name: 'Pumps',
    shortTitle: 'Industrial Pumps',
    tagline: 'Solusi Pompa Sentrifugal, Multistage, Submersible & Heavy-Duty',
    description: 'Rangkaian pompa industri dengan efisiensi tinggi, keandalan jangka panjang, dan sertifikasi manufaktur global untuk water supply, wastewater, fire protection, hingga chemical processing.',
    icon: 'Droplets',
    items: [
      {
        id: 'ebara-pumps',
        brand: 'Ebara',
        series: 'FS Series, D\'Series, CDX',
        title: 'Ebara End Suction & Centrifugal Pump',
        spec: 'Kapasitas hingga 1.200 m³/jam, Head hingga 150m, Impeller Bronze / Stainless Steel AISI 304/316.',
        applications: 'Sirkulasi HVAC, Booster Gedung, Pasokan Air Bersih Pabrik, Irigasi & Utilitas.',
        featured: true,
        popular: true
      },
      {
        id: 'torishima-pumps',
        brand: 'Torishima',
        series: 'ETA-N, MMO-MML Series',
        title: 'Torishima Process & Boiler Feed Pump',
        spec: 'High pressure multistage, standard DIN 24255 / EN 733, material Cast Iron / Ductile / Stainless.',
        applications: 'Power plant, pabrik kelapa sawit, boiler feed, transfer air bertekanan tinggi.',
        featured: true,
        popular: true
      },
      {
        id: 'grundfos-pumps',
        brand: 'Grundfos',
        series: 'CR-CRN, SP, DPK, Unilift',
        title: 'Grundfos Vertical Multistage & Submersible',
        spec: 'Vertical inline multistage, efisiensi energi terdepan, perlindungan kering motor internal.',
        applications: 'Reverse Osmosis (RO), Water Treatment Plant, deep well submersible, dewatering.',
        featured: true,
        popular: true
      },
      {
        id: 'kenji-pumps',
        brand: 'Kenji',
        series: 'Submersible Sewage & Centrifugal',
        title: 'Kenji Industrial Submersible Pump',
        spec: 'Non-clog impeller, vortex design, double mechanical seal in oil chamber.',
        applications: 'Pengolahan air limbah (WWTP), drainase pit tambang, septic tank komersial.',
        featured: false,
        popular: false
      },
      {
        id: 'wilden-pumps',
        brand: 'Wilden',
        series: 'Pro-Flo Series (AODD)',
        title: 'Wilden Air Operated Double Diaphragm (AODD)',
        spec: 'Operasi pneumatik bebas pelumas, tahan kering (run dry capable), handling viscous slurry.',
        applications: 'Transfer zat kimia keras, cat/tinta, minyak, lumpur industri berpasir.',
        featured: true,
        popular: true
      },
      {
        id: 'booster-system',
        brand: 'Benovta Custom Booster',
        series: '2 - 4 Pump Parallel System',
        title: 'Integrated Multi-Pump Booster Package',
        spec: 'Dilengkapi VFD inverter panel, diaphragm pressure tank, manifold SS 304, pressure sensor 4-20mA.',
        applications: 'Pasokan air konstan gedung bertingkat tinggi, hotel, rumah sakit, kawasan industri.',
        featured: true,
        popular: true
      },
      {
        id: 'diesel-hydrant',
        brand: 'Diesel Hydrant Set',
        series: 'NFPA 20 Compliant Package',
        title: 'Diesel Driven Fire Hydrant Pump',
        spec: 'Kopel langsung dengan mesin diesel Isuzu/Doosan, heat exchanger / radiator cooling, automatic starting controller.',
        applications: 'Sistem proteksi pemadam kebakaran pabrik, gudang logistik, mall, pelabuhan.',
        featured: true,
        popular: false
      }
    ]
  },
  {
    id: 'motors',
    name: 'Electric Motors & Drives',
    shortTitle: 'Motors & Gearboxes',
    tagline: 'Penggerak Elektrik & Mekanikal Andal Berstandar Internasional',
    description: 'Motor induksi 3-fasa efisiensi tinggi (IE2/IE3), inverter pengatur kecepatan (VFD), mesin diesel penggerak heavy-duty, dan sistem reduksi putaran (gearbox).',
    icon: 'RotateCcw',
    items: [
      {
        id: 'siemens-motors',
        brand: 'Siemens',
        series: 'SIMOTICS GP / SD Series',
        title: 'Siemens 3-Phase Low Voltage Motor',
        spec: 'Daya 0.75 kW - 375 kW, Rating Efisiensi IE2 / IE3, Proteksi IP55 / IP56, Cast Iron Frame.',
        applications: 'Penggerak pompa utama, kompresor, conveyor industri, fan & blower.',
        featured: true,
        popular: true
      },
      {
        id: 'teco-motors',
        brand: 'TECO',
        series: 'AEEF / AEHF Series',
        title: 'TECO High Efficiency Induction Motor',
        spec: 'Foot/Flange mount, isolasi Class F, kenaikan suhu Class B, tahan kondisi tropis lembab.',
        applications: 'Mesin manufaktur, agitator mixer, crusher batu, cooling tower fan.',
        featured: true,
        popular: true
      },
      {
        id: 'vfd-inverters',
        brand: 'Variable Speed Inverters',
        series: 'Inovance / Fuji / Schneider Compatible',
        title: 'Variable Frequency Drives (VFD)',
        spec: 'Tegangan 380-480V 3P, kontrol vektor sensorless, built-in Modbus/RS485, hemat energi hingga 40%.',
        applications: 'Kontrol tekanan konstan pompa, kecepatan conveyor bertingkat, exhaust fan.',
        featured: true,
        popular: true
      },
      {
        id: 'industrial-engines',
        brand: 'Isuzu / Doosan',
        series: '4JB1, 6BG1, P086TI, P126TI',
        title: 'Heavy-Duty Industrial Diesel Engines',
        spec: 'Power output 40 HP - 450 HP @ 1800-3000 RPM, 12V/24V electric start, continuous duty rating.',
        applications: 'Penggerak pompa pemadam kebakaran (Fire Pump), genset darurat, mesin drainase banjir.',
        featured: false,
        popular: false
      },
      {
        id: 'bonfiglioli-gearbox',
        brand: 'Bonfiglioli',
        series: 'C (Helical), A (Bevel), W (Worm)',
        title: 'Bonfiglioli Industrial Gearbox & Gearmotor',
        spec: 'Torsi keluaran hingga 14.000 Nm, rasio reduksi presisi 1:5 hingga 1:1200, housing monobloc kokoh.',
        applications: 'Sistem conveyor tambang, bucket elevator, mixer kimia, pabrik semen & pakan ternak.',
        featured: true,
        popular: true
      },
      {
        id: 'motovario-gearbox',
        brand: 'Motovario',
        series: 'NMRV Worm & Helical Series',
        title: 'Motovario Speed Reducer',
        spec: 'Aluminium die-cast housing ringan dan tahan korosi, pelumasan sintetis seumur hidup.',
        applications: 'Industri makanan & minuman (F&B), packaging line, mesin percetakan.',
        featured: false,
        popular: false
      },
      {
        id: 'chenta-gearbox',
        brand: 'Chenta',
        series: 'Worm Gear Reducer ASS / BSS Series',
        title: 'Chenta Taiwan Heavy Duty Reducer',
        spec: 'Worm shaft alloy steel hardened & ground, bronze wheel CuSn12, pendinginan optimal.',
        applications: 'Winch crane, screw conveyor, mixer limbah cair, agitator kolam.',
        featured: false,
        popular: false
      }
    ]
  },
  {
    id: 'blowers',
    name: 'Blowers',
    shortTitle: 'Industrial Roots Blowers',
    tagline: 'Penyedia Udara Bertekanan & Vakum Bersih Bebas Minyak (Oil-Free)',
    description: 'Unit Roots Blower tiga bilah (tri-lobe) dan ring blower presisi untuk sistem aerasi limbah cair pabrik, pengangkutan pneumatik bubuk/biji, serta desulfurisasi.',
    icon: 'Wind',
    items: [
      {
        id: 'anlet-blower',
        brand: 'Anlet',
        series: 'BE & BS Tri-Lobe Series',
        title: 'Anlet Japan High Precision Roots Blower',
        spec: 'Tekanan discharge hingga 80 kPa, aliran udara 0.3 - 120 m³/min, rotor tri-lobe anti-pulsasi.',
        applications: 'Aerasi WWTP hotel & industri, fluidisasi silo tepung/semen, vacuum handling.',
        featured: true,
        popular: true
      },
      {
        id: 'trundean-blower',
        brand: 'Trundean',
        series: 'TH / THV Series Roots & Ring Blower',
        title: 'Trundean Taiwan Tri-Lobe Blower',
        spec: 'Pemesinan CNC presisi tinggi, vibrasi ultra rendah, kebisingan rendah dengan silencer ganda.',
        applications: 'Tambak udang modern, aerasi kolam biologis, backwash sand filter industri.',
        featured: true,
        popular: true
      },
      {
        id: 'futsu-blower',
        brand: 'FU-TSU',
        series: 'TSB / TSC Series',
        title: 'FU-TSU Roots Type Air Blower',
        spec: 'Tekanan 10 - 80 kPa, bore 50mm - 350mm, efisiensi volumetrik prima, mudah dalam perawatan.',
        applications: 'Pneumatic conveying material curah, sirkulasi gas elektroplating, vacuum packaging.',
        featured: false,
        popular: false
      }
    ]
  },
  {
    id: 'valves',
    name: 'Valves & Spare Parts',
    shortTitle: 'Valves & Components',
    tagline: 'Kontrol Aliran Presisi, Katup Pengaman & Suku Cadang Original',
    description: 'Katup isolasi, katup kontrol otomatis, seal mekanikal, poros mesin, dan suku cadang presisi untuk menjamin integritas aliran cairan dan gas pada pabrik Anda.',
    icon: 'Disc',
    items: [
      {
        id: 'butterfly-valves',
        brand: 'KITZ / Tomoe / Cast Iron & SS',
        series: 'Wafer, Lug & Flanged Type',
        title: 'Industrial Butterfly Valves',
        spec: 'Ukuran 2" hingga 24", rating PN10/PN16/Class 150, disc SS304/SS316, seat EPDM/PTFE/NBR.',
        applications: 'Isolasi pipa air pendingin, sistem proteksi kebakaran, saluran limbah cair.',
        featured: true,
        popular: true
      },
      {
        id: 'foot-valves',
        brand: 'Heavy Duty Cast Iron & SS',
        series: 'Flanged Foot Valve with Strainer',
        title: 'High Flow Foot Valve with Screen Filter',
        spec: 'Ukuran 3" hingga 16", desain spring-loaded atau swing disc, mencegah backflow suction pompa.',
        applications: 'Ujung hisap pompa sentrifugal intake waduk, sumur resapan, tangki penampungan.',
        featured: false,
        popular: false
      },
      {
        id: 'control-valves',
        brand: 'Honeywell / Spirax Sarco Type',
        series: 'Pneumatic & Electric Actuator',
        title: 'Automated Control & Regulating Valves',
        spec: 'Modulating signal 4-20mA / 0-10V, linear/equal percentage flow characteristic, fail-safe mode.',
        applications: 'Kontrol suhu steam pipa, pengaturan debit cairan kimia, pengatur tekanan gas.',
        featured: true,
        popular: true
      },
      {
        id: 'control-panels',
        brand: 'Benovta Automation Panel',
        series: 'DOL, Star-Delta & Inverter Panel',
        title: 'Custom Electric Motor & Pump Control Panel',
        spec: 'Komponen Schneider/ABB, proteksi over/under voltage, phase failure, auto alternating pump.',
        applications: 'Panel pompa hydrant kebakaran, booster otomatis, otomatisasi pompa limbah.',
        featured: true,
        popular: true
      },
      {
        id: 'mechanical-seals',
        brand: 'Burgmann / John Crane Standard',
        series: 'Single, Double & Cartridge Mechanical Seal',
        title: 'Industrial Pump Mechanical Seals',
        spec: 'Face material Silicon Carbide (SiC), Carbon, TC, elastome Viton/EPDM, spring SS316.',
        applications: 'Pengganti kebocoran seal pompa sentrifugal, agitator, slurry mixer.',
        featured: false,
        popular: true
      },
      {
        id: 'shafts-bearings',
        brand: 'SKF / NSK / FAG Compatible',
        series: 'Precision Pump Shafts & Deep Groove Bearings',
        title: 'OEM Precision Shafts & Industrial Bearings',
        spec: 'Material shaft SS 316 / SS 420 / 4140 Steel, precision bearing C3 clearance, high temperature grease.',
        applications: 'Rekondisi motor listrik, overhaul pompa bertingkat, blower maintenance.',
        featured: false,
        popular: false
      }
    ]
  },
  {
    id: 'equipment',
    name: 'Industrial Equipment',
    shortTitle: 'Equipment & Accessories',
    tagline: 'Sistem Pendukung Utilitas Pabrik, Tangki Tekan & Transmisi Mekanikal',
    description: 'Komponen pelengkap sistem fluida dan transmisi tenaga mekanikal seperti tangki bertekanan, menara pendingin, sambungan fleksibel, kopling peredam getaran, dan transmisi sabuk/rantai.',
    icon: 'Factory',
    items: [
      {
        id: 'pressure-tanks',
        brand: 'Zilmet / Aquasystem / Local ASME',
        series: 'Vertical & Horizontal Diaphragm Tank',
        title: 'Industrial Membrane Pressure Tank',
        spec: 'Kapasitas 100 Liter - 3.000 Liter, Tekanan kerja 10 Bar / 16 Bar, membran EPDM tahan panas.',
        applications: 'Menyimpan tekanan pada booster system, meredam water hammer pada jalur pipa.',
        featured: true,
        popular: true
      },
      {
        id: 'cooling-towers',
        brand: 'Liang Chi / Spig Type',
        series: 'Counterflow & Crossflow FRP',
        title: 'FRP Industrial Cooling Tower System',
        spec: 'Kapasitas 15 RT - 1.000 RT, casing fiberglass diperkuat anti-UV, kipas motor direct drive.',
        applications: 'Pabrik plastik injeksi, chiller pendingin gedung, mesin peleburan logam.',
        featured: true,
        popular: false
      },
      {
        id: 'flexible-joints',
        brand: 'Tozen / Yoshitake Type',
        series: 'Single / Twin Sphere Rubber & SS Bellows',
        title: 'Rubber Expansion & Flexible Joints',
        spec: 'Ukuran 1.5" - 24", flange JIS 10K / PN16 / ANSI 150, elastis menyerap getaran dan ekspansi panas.',
        applications: 'Sambungan inlet/outlet pompa, pipa boiler, chiller connection.',
        featured: false,
        popular: true
      },
      {
        id: 'couplings',
        brand: 'Flender / Rotex / Lovejoy',
        series: 'Flexible Jaw, Tyre & Grid Couplings',
        title: 'Flexible & Rigid Shaft Couplings',
        spec: 'Elastomer insert Polyurethane 92/98 Sh-A, cast iron/steel hubs, dinamically balanced.',
        applications: 'Penyambung poros motor listrik ke pompa sentrifugal, blower, dan gearbox.',
        featured: false,
        popular: false
      },
      {
        id: 'power-transmission',
        brand: 'Bando / Gates / Donghua',
        series: 'V-Belts, Timing Belts, Roller Chains',
        title: 'Mechanical Power Transmission Elements',
        spec: 'V-Belt tipe SPA, SPB, SPC, Rantai Roller ANSI/BS standard, sprockets case-hardened.',
        applications: 'Transmisi daya mesin pabrik pengolahan makanan, pabrik semen, conveyor semen.',
        featured: false,
        popular: false
      }
    ]
  }
];

export const productCategories = legacyProductCategories.map((category) => ({
  ...category,
  items: productImageProducts
    .filter((product) => product.categoryId === category.id)
}));

export const brandPartners = [
  { name: 'Ebara', country: 'Jepang', category: 'Pumps' },
  { name: 'Grundfos', country: 'Denmark', category: 'Pumps' },
  { name: 'Torishima', country: 'Jepang', category: 'Pumps' },
  { name: 'Siemens', country: 'Jerman', category: 'Motors & Drives' },
  { name: 'TECO', country: 'Taiwan', category: 'Motors' },
  { name: 'Bonfiglioli', country: 'Italia', category: 'Gearboxes' },
  { name: 'Trundean', country: 'Taiwan', category: 'Blowers' },
  { name: 'Anlet', country: 'Jepang', category: 'Roots Blowers' },
  { name: 'FU-TSU', country: 'Taiwan', category: 'Blowers' },
  { name: 'KITZ', country: 'Jepang', category: 'Valves' },
  { name: 'ABB', country: 'Swiss', category: 'Motors & Drives' },
  { name: 'Honeywell', country: 'Amerika Serikat', category: 'Control Valves' },
  { name: 'Wilden', country: 'Amerika Serikat', category: 'AODD Pumps' },
  { name: 'Seko', country: 'Italia', category: 'Dosing Pumps' },
  { name: 'ProMinent', country: 'Jerman', category: 'Dosing Pumps' },
  { name: 'ARO', country: 'Amerika Serikat', category: 'Diaphragm Pumps' },
  { name: 'Ingersoll Rand', country: 'Amerika Serikat', category: 'Compressors & Pumps' },
  { name: 'Hitachi', country: 'Jepang', category: 'Motors & Inverters' },
  { name: 'Mitsubishi', country: 'Jepang', category: 'Motors & Automation' },
  { name: 'Motovario', country: 'Italia', category: 'Speed Reducers' },
  { name: 'Chenta', country: 'Taiwan', category: 'Gear Reducers' },
  { name: 'Isuzu', country: 'Jepang', category: 'Diesel Engines' },
  { name: 'Doosan', country: 'Korea Selatan', category: 'Industrial Engines' },
  { name: 'Kenji', country: 'Taiwan', category: 'Submersible Pumps' }
];

export const coreServices = [
  {
    id: 'equipment-supply',
    number: '01',
    title: 'Equipment Supply',
    tagline: 'Pasokan Alat Industri Lengkap & 100% Asli',
    icon: 'PackageCheck',
    description: 'Penyediaan unit mesin industri berkualitas tinggi langsung dari prinsipal dan distributor resmi brand terkemuka (Ebara, Grundfos, Siemens, Bonfiglioli, dll). Jaminan barang 100% original dengan sertifikat uji dan garansi resmi.',
    features: [
      'Produk original lengkap dengan Certificate of Origin (COO)',
      'Ketersediaan stok siap kirim untuk unit standar industri',
      'Pilihan brand berkelas global dengan efisiensi energi teruji',
      'Penetapan harga yang kompetitif dan transparan'
    ]
  },
  {
    id: 'installation-integration',
    number: '02',
    title: 'Installation & Integration',
    tagline: 'Dukungan Perakitan & Integrasi Sistem Mekanikal-Elektrikal',
    icon: 'Cpu',
    description: 'Jasa pemasangan, alignment poros presisi dengan dial indicator / laser, perakitan pipa manifold, serta integrasi motor dan pompa ke dalam sistem kelistrikan & PLC yang telah beroperasi di pabrik Anda.',
    features: [
      'Pemasangan baseplate kokoh anti getaran',
      'Alignment poros presisi (tolerance alignment report)',
      'Integrasi sistem kelistrikan, panel VFD, dan sensor tekanan',
      'Commissioning test bersama tim teknis klien di lapangan'
    ]
  },
  {
    id: 'repair-service',
    number: '03',
    title: 'Repair & Service',
    tagline: 'Perbaikan & Penanganan Masalah Mesin Industri',
    icon: 'Wrench',
    description: 'Layanan rekondisi dan perbaikan komprehensif untuk pompa aus, motor terbakar (rewinding), kebocoran mechanical seal, getaran blower tidak normal, hingga penggantian bearing dan balancing poros.',
    features: [
      'Inspeksi diagnostik menyeluruh sebelum tindakan perbaikan',
      'Penggantian spare part menggunakan material kompatibel presisi',
      'Rewinding motor listrik dengan kawat tembaga tahan panas Class H',
      'Pengujian performa (Hydrotest / Run Test) sebelum serah terima'
    ]
  },
  {
    id: 'spare-parts-sourcing',
    number: '04',
    title: 'Spare Parts Sourcing',
    tagline: 'Penyediaan Suku Cadang Asli & Kompatibel Cepat',
    icon: 'Boxes',
    description: 'Layanan pengadaan suku cadang kritis industri untuk meminimalkan downtime pabrik Anda. Kami mencakup mechanical seal, impeller, bearing SKF/NSK, poros stainless steel, valve seat, gasket, hingga electronic cards inverter.',
    features: [
      'Jaringan pengadaan spare parts internasional yang luas',
      'Penelusuran part number tepat berdasarkan spesifikasi nameplate',
      'Opsi spare parts genuine (asli) dan OEM kompatibel berkualitas',
      'Layanan pengiriman cepat untuk kebutuhan darurat (breakdown)'
    ]
  },
  {
    id: 'maintenance-support',
    number: '05',
    title: 'Maintenance Support',
    tagline: 'Pemeliharaan Preventif & Kontrak Servis Berkala',
    icon: 'ShieldCheck',
    description: 'Program pemeliharaan terjadwal untuk mencegah kerusakan mendadak pada peralatan berputar vital. Termasuk pengukuran vibrasi (vibration analysis), pengecekan suhu inframerah, pelumasan berkala, dan evaluasi efisiensi energi.',
    features: [
      'Paket kontrak maintenance berkala (bulanan / triwulanan)',
      'Laporan kondisi kesehatan mesin terperinci setelah setiap kunjungan',
      'Deteksi dini keausan komponen sebelum terjadi kerusakan fatal',
      'Prioritas penanganan darurat 24/7 bagi klien kontrak'
    ]
  },
  {
    id: 'technical-support',
    number: '06',
    title: 'Technical Support',
    tagline: 'Konsultasi Teknik & Rekomendasi Spesifikasi Tepat Guna',
    icon: 'Headphones',
    description: 'Konsultasi rekayasa teknik langsung dari para praktisi berpengalaman untuk membantu pemilihan tipe pompa, perhitungan head pipa, kapasitas aliran (flow rate), sizing motor, hingga efisiensi konversi sistem.',
    features: [
      'Perhitungan teknis sistem fluida (Total Dynamic Head / NPSHa)',
      'Rekomendasi spesifikasi yang tepat sasaran dan sesuai anggaran',
      'Dukungan troubleshooting operasional via telepon, video & on-site',
      'Pelatihan operasional dasar untuk tim maintenance pabrik klien'
    ]
  }
];

export const workflowSteps = [
  {
    step: '01',
    title: 'Understand',
    sub: 'Pahami Kebutuhan & Kondisi Operasi',
    desc: 'Kami mempelajari parameter teknis sistem Anda secara rinci: jenis fluida, debit aliran, total head pipa, daya motor, suhu, serta batas anggaran investasi pabrik.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Recommend',
    sub: 'Rekomendasi Solusi yang Presisi',
    desc: 'Memberikan penawaran teknis transparan berisi opsi brand terbaik dengan kurva performa yang cocok, perhitungan efisiensi energi, dan waktu pengiriman yang realistis.',
    icon: 'FileCheck2'
  },
  {
    step: '03',
    title: 'Supply',
    sub: 'Pasokan Produk Terverifikasi',
    desc: 'Peralatan dipasok dari manufaktur terpercaya dengan pengawasan kualitas ketat, kelengkapan sertifikat pabrik, dan inspeksi fisik sebelum dikirim ke lokasi proyek.',
    icon: 'Truck'
  },
  {
    step: '04',
    title: 'Support',
    sub: 'Pendampingan Instalasi & Uji Coba',
    desc: 'Dukungan langsung teknisi berpengalaman untuk panduan instalasi, pemipaan yang tepat, alignment mekanikal, serta commissioning test hingga beroperasi stabil.',
    icon: 'Wrench'
  },
  {
    step: '05',
    title: 'Maintain',
    sub: 'Dukungan Purna Jual Berkelanjutan',
    desc: 'Jaminan ketersediaan suku cadang berkelanjutan, jadwal servis berkala, serta respon cepat bilamana terjadi kendala darurat di kemudian hari.',
    icon: 'RefreshCw'
  }
];

export const companyValues = [
  {
    title: 'Customer Focus',
    sub: 'Berpusat pada Kebutuhan Nyata',
    desc: 'Kebutuhan dan kepuasan pelanggan adalah kompas utama kami dalam memberikan rekomendasi peralatan dan pelayanan teknik.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Reliability',
    sub: 'Keandalan Produk & Komitmen Waktu',
    desc: 'Menjamin kualitas fisik peralatan tahan lama dan memegang teguh ketepatan waktu pengiriman serta respon teknis.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Clarity',
    sub: 'Keterbukaan & Transparansi Spesifikasi',
    desc: 'Memberikan data teknis akurat, penawaran harga transparan tanpa biaya tersembunyi, dan komunikasi yang terbuka.',
    icon: 'Sparkles'
  },
  {
    title: 'Responsiveness',
    sub: 'Respon Cepat & Tanggap Darurat',
    desc: 'Sigap merespon setiap permintaan penawaran, konsultasi teknis, hingga penanganan kendala mesin darurat (breakdown).',
    icon: 'Zap'
  },
  {
    title: 'Practicality',
    sub: 'Solusi Tepat Guna & Bernilai Tambah',
    desc: 'Fokus pada penyelesaian praktis di lapangan yang realistis, efisien biaya operasional, dan mudah dirawat.',
    icon: 'Target'
  }
];
