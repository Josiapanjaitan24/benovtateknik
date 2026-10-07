import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  HeartHandshake,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Wrench,
  Zap
} from 'lucide-react';
import { brandPartners, companyValues, workflowSteps } from '../data/products';
import brandLogoSources from '../data/brandLogos';
import { useLanguage } from '../context/LanguageContext';

const pillars = [
  {
    title: 'Industrial Equipment',
    desc: 'Pasokan mesin dan komponen industri dari pabrikan terverifikasi dengan rekam jejak durabilitas prima.'
  },
  {
    title: 'Practical Solutions',
    desc: 'Solusi teknis yang dapat diaplikasikan langsung, dengan perhitungan efisiensi energi yang terukur.'
  },
  {
    title: 'Customer Focused',
    desc: 'Mendengarkan tantangan operasional pelanggan dan memberikan layanan purna jual yang responsif.'
  },
  {
    title: 'Reliable Sourcing',
    desc: 'Pengadaan unit mesin dan suku cadang secara tepat waktu untuk membantu menekan downtime pabrik.'
  }
];
const pillarTitles = [
  'Peralatan Industri',
  'Solusi Praktis',
  'Berorientasi pada Pelanggan',
  'Pengadaan Andal'
];

const advantages = [
  {
    title: 'Right-Fit Recommendations',
    desc: 'Kami mencocokkan kurva pompa dan karakteristik motor dengan titik kerja sistem agar spesifikasi tepat guna.'
  },
  {
    title: 'Trusted Global Brands',
    desc: 'Kemitraan dengan pabrikan dan distributor resmi mendukung originalitas produk serta garansi yang terpercaya.'
  },
  {
    title: 'Complete Range Solution',
    desc: 'Solusi satu pintu untuk pompa, motor, blower, valve, hingga suku cadang seal dan bearing.'
  },
  {
    title: 'Responsive & Agile Support',
    desc: 'Tim merespons permintaan dengan cepat dan siap memberikan supervisi teknis serta dukungan saat kendala.'
  }
];
const advantageTitles = [
  'Rekomendasi yang Tepat',
  'Brand Global Tepercaya',
  'Solusi Menyeluruh',
  'Dukungan Cepat & Adaptif'
];

const pages = {
  profile: {
    eyebrow: 'Profil Perusahaan',
    eyebrowEn: 'Company Profile',
    title: 'Profil Perusahaan',
    titleEn: 'Company Profile',
    intro: 'Mitra strategis penyedia peralatan industri, sistem pemompaan, motor listrik, dan rekayasa teknik terpercaya di Indonesia.',
    introEn: 'A trusted strategic partner for industrial equipment, pumping systems, electric motors, and engineering solutions in Indonesia.'
  },
  values: {
    eyebrow: 'Arah & Budaya Kerja',
    eyebrowEn: 'Direction & Work Culture',
    title: 'Visi, Misi & Budaya Kerja',
    titleEn: 'Vision, Mission & Work Culture',
    intro: 'Landasan yang menjaga setiap rekomendasi, keputusan, dan layanan kami tetap berorientasi pada keandalan operasional.',
    introEn: 'The principles that keep every recommendation, decision, and service focused on operational reliability.'
  },
  approach: {
    eyebrow: 'Pendekatan Kami',
    eyebrowEn: 'Our Approach',
    title: 'Cara Kerja Rekayasa & Pasokan',
    titleEn: 'Our Engineering & Supply Process',
    intro: 'Alur kerja terstruktur untuk memahami kebutuhan, menghadirkan solusi, dan mendukung operasional pelanggan secara berkelanjutan.',
    introEn: 'A structured workflow to understand your needs, deliver solutions, and support your operations over the long term.'
  },
  partners: {
    eyebrow: 'Jaringan Pabrikan Global',
    eyebrowEn: 'Global Manufacturer Network',
    title: 'Jaringan Pabrikan Global',
    titleEn: 'Global Manufacturer Network',
    intro: 'Didukung oleh 30+ brand terkemuka dunia untuk menghadirkan produk industri dengan reputasi dan standar mutu yang teruji.',
    introEn: 'Backed by 30+ leading global brands, we deliver industrial products with proven reputations and quality standards.'
  }
};

const valueIcons = {
  'Customer Focus': HeartHandshake,
  Reliability: ShieldCheck,
  Clarity: Sparkles,
  Responsiveness: Zap,
  Practicality: Target
};

const stepIcons = {
  '01': Search,
  '02': FileCheck2,
  '03': Truck,
  '04': Wrench,
  '05': RefreshCw
};

const pillarDescriptions = [
  'Supply of industrial machinery and components from verified manufacturers with a proven record of excellent durability.',
  'Practical technical solutions with measurable energy-efficiency calculations.',
  'Listening to customers’ operational challenges and providing responsive after-sales service.',
  'Timely sourcing of machinery and spare parts to help reduce plant downtime.'
];

const advantageDescriptions = [
  'We match pump curves and motor characteristics to the system duty point to ensure fit-for-purpose specifications.',
  'Partnerships with manufacturers and authorized distributors support product authenticity and reliable warranties.',
  'A one-stop solution for pumps, motors, blowers, valves, and seal and bearing spare parts.',
  'Our team responds quickly and is ready to provide technical supervision and support when issues arise.'
];

const valueTranslations = {
  'Customer Focus': {
    title: 'Customer Focus',
    titleId: 'Fokus pada Pelanggan',
    sub: 'Focused on Real Needs',
    desc: 'Customer needs and satisfaction guide our equipment recommendations and technical service.'
  },
  Reliability: {
    title: 'Reliability',
    titleId: 'Keandalan',
    sub: 'Product Reliability & Timely Delivery',
    desc: 'We ensure durable equipment quality and uphold delivery commitments and technical response times.'
  },
  Clarity: {
    title: 'Clarity',
    titleId: 'Kejelasan',
    sub: 'Clear & Transparent Specifications',
    desc: 'We provide accurate technical data, transparent quotations without hidden costs, and open communication.'
  },
  Responsiveness: {
    title: 'Responsiveness',
    titleId: 'Ketanggapan',
    sub: 'Fast Response & Emergency Readiness',
    desc: 'We respond promptly to quotation requests, technical consultations, and emergency equipment breakdowns.'
  },
  Practicality: {
    title: 'Practicality',
    titleId: 'Kepraktisan',
    sub: 'Practical, Value-Added Solutions',
    desc: 'We focus on realistic, practical field solutions that reduce operating costs and are easy to maintain.'
  }
};

const workflowTranslations = {
  '01': {
    title: 'Understand',
    titleId: 'Pahami',
    sub: 'Understand Requirements & Operating Conditions',
    desc: 'We study your system’s technical parameters in detail, including fluid type, flow rate, total pipe head, motor power, temperature, and plant investment limits.'
  },
  '02': {
    title: 'Recommend',
    titleId: 'Rekomendasikan',
    sub: 'Precise Solution Recommendations',
    desc: 'We provide a transparent technical proposal with suitable leading-brand options, matching performance curves, energy-efficiency calculations, and realistic delivery times.'
  },
  '03': {
    title: 'Supply',
    titleId: 'Pasok',
    sub: 'Verified Product Supply',
    desc: 'Equipment is sourced from trusted manufacturers under strict quality control, with complete factory certificates and physical inspection before delivery to the project site.'
  },
  '04': {
    title: 'Support',
    titleId: 'Dukung',
    sub: 'Installation & Commissioning Support',
    desc: 'Experienced technicians provide direct support with installation guidance, proper piping, mechanical alignment, and commissioning until stable operation is achieved.'
  },
  '05': {
    title: 'Maintain',
    titleId: 'Pelihara',
    sub: 'Ongoing After-Sales Support',
    desc: 'We ensure continued spare-parts availability, periodic service schedules, and a prompt response to future emergencies.'
  }
};

function PageHeading({ page }) {
  const { tx } = useLanguage();
  return (
    <header className="border-b border-slate-200 bg-[#F8FAFC] pt-28 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F97316]">
          {tx(page.eyebrow, page.eyebrowEn)}
        </span>
        <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-[#0A2540] sm:text-5xl">
          {tx(page.title, page.titleEn)}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {tx(page.intro, page.introEn)}
        </p>
      </div>
    </header>
  );
}

function ProfilePage() {
  const { tx } = useLanguage();
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Tentang Benovta', 'About Benovta')}</span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0A2540] sm:text-3xl">
            {tx('Dedikasi untuk Keandalan Operasional Industri Nasional', 'Dedicated to Reliable National Industrial Operations')}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              <strong className="text-[#0A2540]">PT Benovta Teknik Perkasa Abadi</strong>{' '}{tx('didirikan untuk menjawab kebutuhan sektor industri manufaktur, pertambangan, energi, gedung komersial, dan pengolahan air bersih maupun limbah di Indonesia akan pasokan peralatan berstandar tinggi yang didukung keahlian teknis terpercaya.', 'was established to meet the needs of Indonesia’s manufacturing, mining, energy, commercial building, and clean and wastewater sectors for high-standard equipment backed by trusted technical expertise.')}
            </p>
            <p>
              {tx('Dengan pemahaman mendalam tentang dinamika fluida, transmisi mekanikal, dan automasi elektrikal, kami bertindak lebih dari sekadar distributor. Kami mendampingi engineer dan procurement manager dalam menentukan spesifikasi yang efisien, tahan lama, dan berbiaya siklus hidup rendah.', 'With a deep understanding of fluid dynamics, mechanical transmission, and electrical automation, we do more than act as a distributor. We help engineers and procurement managers select efficient, durable specifications with a low lifecycle cost.')}
            </p>
            <p>
              {tx('Setiap unit mesin yang kami pasok diinspeksi sebelum pengiriman serta didukung ketersediaan suku cadang dan panduan instalasi di lapangan.', 'Every machine we supply is inspected before delivery and supported by spare-parts availability and on-site installation guidance.')}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#0A2540]">{tx('Empat Pilar Layanan', 'Four Service Pillars')}</h3>
            <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 sm:grid-cols-[3rem_1fr]">
                  <span className="font-sans text-xl text-[#F97316]">0{index + 1}</span>
                  <div>
                    <h4 className="font-bold text-[#0A2540]">{tx(pillarTitles[index], pillar.title)}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{tx(pillar.desc, pillarDescriptions[index])}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:pl-8">
          <div className="border-l-2 border-[#F97316] pl-6 sm:pl-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Legalitas Resmi', 'Official Legal Status')}</span>
            <h3 className="mt-2 text-xl font-bold text-[#0A2540]">{tx('Badan Hukum Terdaftar di Indonesia', 'Legally Registered Entity in Indonesia')}</h3>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{tx('Nama Badan Usaha', 'Legal Business Name')}</dt>
                <dd className="mt-1 font-semibold text-[#0A2540]">PT Benovta Teknik Perkasa Abadi</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{tx('Akta Notaris Pendirian', 'Deed of Establishment')}</dt>
                <dd className="mt-1 text-sm text-slate-700">{tx('Akta Pendirian No. 04', 'Deed of Establishment No. 04')}</dd>
              </div>
              <div className="py-4">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <CheckCircle2 size={14} className="text-emerald-600" /> {tx('Pengesahan Kemenkumham RI', 'Approval by the Ministry of Law of the Republic of Indonesia')}
                </dt>
                <dd className="mt-1 text-sm font-bold text-[#0A2540]">SK AHU-0078828.AH.01.01.TAHUN 2026</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{tx('Domisili Operasional', 'Operational Address')}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                  Ruko Goodland, Jl. Prof. Moh. Yamin No. 3, RT 005/007, Duren Jaya, Bekasi Timur, Kota Bekasi, Jawa Barat
                </dd>
              </div>
            </dl>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] transition-colors hover:text-[#F97316]">
              {tx('Hubungi Kantor Operasional', 'Contact Our Office')} <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ValuesPage() {
  const { tx } = useLanguage();
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <article>
            <Compass size={26} className="text-[#F97316]" />
            <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Visi Perusahaan', 'Our Vision')}</span>
            <h2 className="mt-2 font-display text-2xl leading-relaxed text-[#0A2540] sm:text-3xl">
              {tx('Menjadi mitra utama terpercaya dalam penyediaan peralatan dan solusi industri di Indonesia.', 'To become Indonesia’s trusted leading partner for industrial equipment and solutions.')}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {tx('Kami ingin dikenal atas kualitas produk unggul, kecepatan layanan teknik, dan komitmen berkelanjutan terhadap produktivitas operasional pelanggan.', 'We strive to be known for excellent product quality, responsive technical service, and an ongoing commitment to our customers’ operational productivity.')}
            </p>
          </article>
          <article className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Target size={26} className="text-[#F97316]" />
            <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Misi Perusahaan', 'Our Mission')}</span>
            <ol className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
              <li className="flex gap-4 py-4 text-sm leading-relaxed text-slate-700">
                <span className="font-sans text-lg text-[#F97316]">01</span>
                <span>{tx('Menyediakan peralatan industri berkualitas dari brand terbaik dunia dengan jaminan originalitas.', 'Supply quality industrial equipment from the world’s leading brands with authenticity guaranteed.')}</span>
              </li>
              <li className="flex gap-4 py-4 text-sm leading-relaxed text-slate-700">
                <span className="font-sans text-lg text-[#F97316]">02</span>
                <span>{tx('Memberikan rekomendasi rekayasa teknik yang presisi dan efisien sesuai anggaran pelanggan.', 'Provide precise, efficient engineering recommendations that fit customer budgets.')}</span>
              </li>
              <li className="flex gap-4 py-4 text-sm leading-relaxed text-slate-700">
                <span className="font-sans text-lg text-[#F97316]">03</span>
                <span>{tx('Membangun kemitraan jangka panjang melalui layanan purna jual yang transparan dan responsif.', 'Build long-term partnerships through transparent and responsive after-sales service.')}</span>
              </li>
            </ol>
          </article>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F97316]">
            <Sparkles size={15} /> {tx('5 Core Values Benovta', 'Benovta’s 5 Core Values')}
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-[#0A2540]">{tx('Budaya Kerja yang Kami Junjung', 'The Values That Guide Our Work')}</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 lg:grid lg:grid-cols-2 lg:divide-y-0 lg:gap-x-12">
            {companyValues.map((value, index) => {
              const ValueIcon = valueIcons[value.title] || ShieldCheck;
              return (
                <article key={value.title} className="flex gap-4 py-5 lg:border-b lg:border-slate-200">
                  <ValueIcon size={21} className="mt-1 shrink-0 text-[#F97316]" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-bold text-[#0A2540]">{tx(valueTranslations[value.title]?.titleId || value.title, valueTranslations[value.title]?.title || value.title)}</h3>
                      <span className="text-xs font-semibold text-slate-500">{tx(value.sub, valueTranslations[value.title]?.sub || value.sub)}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{tx(value.desc, valueTranslations[value.title]?.desc || value.desc)}</p>
                  </div>
                  <span className="ml-auto font-sans text-sm text-slate-400">0{index + 1}</span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachPage() {
  const { tx } = useLanguage();
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Dari Kebutuhan hingga Dukungan', 'From Requirements to Ongoing Support')}</span>
          <h2 className="mt-2 text-2xl font-extrabold text-[#0A2540] sm:text-3xl">{tx('Lima Langkah Rekayasa & Pasokan', 'Five Engineering & Supply Steps')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {tx('Setiap tahapan dirancang untuk memastikan solusi sesuai kebutuhan teknis dan terus didukung setelah produk beroperasi.', 'Each stage is designed to ensure the solution meets your technical requirements and continues to receive support after it is commissioned.')}
          </p>
        </div>
        <ol className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {workflowSteps.map((step) => {
            const StepIcon = stepIcons[step.step] || Search;
            return (
              <li key={step.step} className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr_2rem] sm:gap-6">
                <span className="font-sans text-2xl text-[#F97316]">{step.step}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-bold text-[#0A2540]">{tx(workflowTranslations[step.step]?.titleId || step.title, workflowTranslations[step.step]?.title || step.title)}</h3>
                    <span className="text-sm font-medium text-slate-500">{tx(step.sub, workflowTranslations[step.step]?.sub || step.sub)}</span>
                  </div>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{tx(step.desc, workflowTranslations[step.step]?.desc || step.desc)}</p>
                </div>
                <StepIcon size={22} className="hidden text-[#0A2540] sm:block" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function PartnersPage() {
  const { tx } = useLanguage();
  const availableBrands = brandPartners.filter((brand) => brandLogoSources[brand.name]);

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Mengapa Benovta', 'Why Benovta')}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0A2540] sm:text-3xl">{tx('Keunggulan yang Menjadi Pegangan', 'Our Guiding Strengths')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {tx('Kombinasi integritas pasokan resmi, pemahaman teknis presisi, dan dukungan yang tanggap.', 'A combination of authorized sourcing, precise technical expertise, and responsive support.')}
            </p>
            <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] transition-colors hover:text-[#F97316]">
              {tx('Jelajahi katalog produk', 'Explore the product catalog')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {advantages.map((advantage, index) => (
                <article key={advantage.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 sm:grid-cols-[3rem_1fr]">
                  <span className="font-sans text-xl text-[#F97316]">0{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#0A2540]">{tx(advantageTitles[index], advantage.title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{tx(advantage.desc, advantageDescriptions[index])}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{tx('Jaringan Produsen Global', 'Global Manufacturer Network')}</span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#0A2540]">{tx('Didukung Oleh 30+ Brand Terkemuka Dunia', 'Supported by 30+ Leading Global Brands')}</h2>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              {tx('Produk dan solusi dari pabrikan industri dengan reputasi mutu yang teruji.', 'Products and solutions from industrial manufacturers with proven quality reputations.')}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {availableBrands.map((brand) => (
              <div key={brand.name} className="flex h-16 items-center justify-center px-3">
                <img
                  src={brandLogoSources[brand.name]}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-11 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About({ section: routeSection }) {
  const { section: parameterSection } = useParams();
  const section = routeSection || parameterSection;
  const activeSection = pages[section] ? section : 'profile';
  const page = pages[activeSection];

  return (
    <div className="min-h-screen bg-white pt-16">
      <PageHeading page={page} />
      {activeSection === 'profile' && <ProfilePage />}
      {activeSection === 'values' && <ValuesPage />}
      {activeSection === 'approach' && <ApproachPage />}
      {activeSection === 'partners' && <PartnersPage />}
    </div>
  );
}
