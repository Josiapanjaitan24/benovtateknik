import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { productCategories, coreServices } from '../data/products';
import { getProductImage } from '../data/productImages';
import { useLanguage } from '../context/LanguageContext';

const siteUrlValue = import.meta.env.VITE_SITE_URL?.trim();
const siteUrl = siteUrlValue ? new URL(siteUrlValue) : null;
const productionSiteUrl = 'https://benovtateknik.co.id';

if (siteUrl && siteUrl.href !== `${productionSiteUrl}/`) {
  throw new Error('VITE_SITE_URL must be exactly https://benovtateknik.co.id without a trailing slash.');
}

const pageMetadata = {
  '/': {
    title: ['Solusi Peralatan Industri | Benovta', 'Industrial Equipment Solutions | Benovta'],
    description: [
      'PT Benovta Teknik Perkasa Abadi menyediakan pompa, motor listrik, blower, katup, suku cadang, serta dukungan rekayasa industri.',
      'PT Benovta Teknik Perkasa Abadi supplies pumps, electric motors, blowers, valves, spare parts, and industrial engineering support.'
    ],
    image: '/hero-bg.jpg'
  },
  '/about/profile': {
    title: ['Profil Perusahaan Benovta | Tentang Kami', 'Benovta Company Profile | About Us'],
    description: [
      'Kenali PT Benovta Teknik Perkasa Abadi, mitra penyedia peralatan industri, sistem pemompaan, motor listrik, dan solusi rekayasa di Indonesia.',
      'Learn about PT Benovta Teknik Perkasa Abadi, an Indonesian supplier of industrial equipment, pumping systems, electric motors, and engineering solutions.'
    ]
  },
  '/about/values': {
    title: ['Visi, Misi & Budaya Kerja | Benovta', 'Vision, Mission & Values | Benovta'],
    description: [
      'Pelajari visi, misi, dan nilai kerja Benovta yang mendasari rekomendasi peralatan dan dukungan teknis bagi pelanggan industri.',
      'Explore the vision, mission, and values guiding Benovta’s equipment recommendations and technical support for industrial customers.'
    ]
  },
  '/about/approach': {
    title: ['Cara Kerja Rekayasa & Pasokan | Benovta', 'Engineering & Supply Process | Benovta'],
    description: [
      'Lihat lima tahapan Benovta dalam memahami kebutuhan, merekomendasikan solusi, memasok peralatan, dan mendukung operasional pelanggan.',
      'See how Benovta understands requirements, recommends solutions, supplies equipment, and supports customer operations in five steps.'
    ]
  },
  '/about/partners': {
    title: ['Mitra Brand Peralatan Industri | Benovta', 'Industrial Equipment Brand Partners | Benovta'],
    description: [
      'Jelajahi jaringan brand dan pabrikan yang mendukung pasokan pompa, motor, blower, serta peralatan industri Benovta.',
      'Explore the brand and manufacturer network supporting Benovta’s supply of pumps, motors, blowers, and industrial equipment.'
    ]
  },
  '/services': {
    title: ['Layanan Rekayasa & Pasokan Industri | Benovta', 'Industrial Engineering & Supply Services | Benovta'],
    description: [
      'Temukan layanan Benovta untuk pasokan peralatan industri, instalasi, perbaikan, pengadaan suku cadang, pemeliharaan, dan dukungan teknis.',
      'Explore Benovta services for industrial equipment supply, installation, repair, spare parts, maintenance, and technical support.'
    ]
  },
  '/products': {
    title: ['Katalog Produk Peralatan Industri | Benovta', 'Industrial Equipment Product Catalog | Benovta'],
    description: [
      'Telusuri katalog 50 produk Benovta yang mencakup pompa, motor dan penggerak, blower, katup, suku cadang, serta peralatan industri.',
      'Browse Benovta’s catalog of 50 products across pumps, motors and drives, blowers, valves, spare parts, and industrial equipment.'
    ]
  },
  '/contact': {
    title: ['Kontak & Permintaan Penawaran | Benovta', 'Contact & Quote Requests | Benovta'],
    description: [
      'Hubungi tim PT Benovta Teknik Perkasa Abadi untuk konsultasi teknis, informasi produk, atau permintaan penawaran peralatan industri.',
      'Contact PT Benovta Teknik Perkasa Abadi for technical consultations, product information, or industrial equipment quotations.'
    ]
  }
};

const aboutSectionNames = {
  profile: ['Profil Perusahaan Benovta', 'Benovta Company Profile'],
  values: ['Visi, Misi & Budaya Kerja Benovta', 'Benovta Vision, Mission & Values'],
  approach: ['Cara Kerja Rekayasa & Pasokan Benovta', 'Benovta Engineering & Supply Process'],
  partners: ['Mitra Brand Peralatan Industri Benovta', 'Benovta Industrial Equipment Brand Partners']
};

function categoryForProduct(productId) {
  return productCategories.find((category) => category.items.some((item) => item.id === productId));
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!content) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!url) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setStructuredData(data) {
  let element = document.head.querySelector('script#benovta-structured-data');
  if (!data) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('script');
    element.id = 'benovta-structured-data';
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function SeoMetadata() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const isEnglish = language === 'EN';
  const productId = pathname.startsWith('/products/') ? pathname.slice('/products/'.length) : null;
  const category = productId ? categoryForProduct(productId) : null;
  const product = category?.items.find((item) => item.id === productId);
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const aboutSection = normalizedPath.match(/^\/about(?:\/([^/]+))?$/)?.[1] || 'profile';
  const knownAboutSection = aboutSectionNames[aboutSection] ? aboutSection : null;
  const isAboutPath = /^\/about(?:\/|$)/.test(normalizedPath);
  const isProductDetailPath = pathname.startsWith('/products/');
  const page = isAboutPath && knownAboutSection
    ? pageMetadata[`/about/${knownAboutSection}`]
    : pageMetadata[normalizedPath];
  const isNotFound = isAboutPath
    ? !knownAboutSection
    : isProductDetailPath
      ? !product || !category
      : !page;
  let title;
  let description;
  let socialImagePath = page?.image || '/hero-bg.jpg';

  if (product && category) {
    title = isEnglish
      ? `${product.title} | Benovta Industrial Products`
      : `${product.title} | Produk Industri Benovta`;
    description = isEnglish
      ? `${product.title} by ${product.brand}. Explore its specifications and suitable applications in Benovta’s industrial equipment catalog.`
      : `${product.title} dari ${product.brand}. Lihat spesifikasi dan aplikasi produk dalam katalog peralatan industri Benovta.`;
    socialImagePath = getProductImage(product.id) || socialImagePath;
  } else if (isNotFound) {
    title = isEnglish ? 'Page Not Found | Benovta' : 'Halaman Tidak Ditemukan | Benovta';
    description = isEnglish
      ? 'The requested Benovta page could not be found. Browse the home page or product catalog.'
      : 'Halaman Benovta yang diminta tidak ditemukan. Kunjungi beranda atau katalog produk.';
  } else {
    [title, description] = page
      ? [page.title[isEnglish ? 1 : 0], page.description[isEnglish ? 1 : 0]]
      : pageMetadata['/'];
  }

  useEffect(() => {
    const canonicalPath = isAboutPath && knownAboutSection
      ? `/about/${knownAboutSection}`
      : normalizedPath;
    const canonicalUrl = siteUrl && !isNotFound ? new URL(canonicalPath, siteUrl).href : null;
    const absoluteImage = siteUrl && !isNotFound ? new URL(socialImagePath, siteUrl).href : null;
    const locale = isEnglish ? 'en_US' : 'id_ID';

    document.title = title;
    document.documentElement.lang = isEnglish ? 'en' : 'id';
    setMeta('name', 'description', description);
    setMeta('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow');
    setCanonical(canonicalUrl);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', product && !isNotFound ? 'product' : 'website');
    setMeta('property', 'og:site_name', 'Benovta');
    setMeta('property', 'og:locale', locale);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', absoluteImage);
    setMeta('property', 'og:image:alt', absoluteImage ? title : null);

    setMeta('name', 'twitter:card', absoluteImage ? 'summary_large_image' : 'summary');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteImage);
    setMeta('name', 'twitter:image:alt', absoluteImage ? title : null);

    const organization = {
      '@type': 'Organization',
      '@id': siteUrl ? `${siteUrl.origin}/#organization` : '#organization',
      name: 'PT Benovta Teknik Perkasa Abadi',
      email: 'sales@benovta.co.id',
      telephone: '+62-812-8864-953',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ruko Goodland, Jl. Prof. Moh. Yamin No. 3, RT 005/007, Duren Jaya, Bekasi Timur',
        addressLocality: 'Kota Bekasi',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@benovta.co.id',
        telephone: '+62-812-8864-953'
      },
      ...(siteUrl ? {
        url: siteUrl.href,
        logo: new URL('/icon_benovta.png', siteUrl).href,
        image: new URL('/icon_benovta.png', siteUrl).href
      } : {})
    };
    const structuredData = [
      { ...organization },
      {
        '@type': 'WebSite',
        '@id': siteUrl ? `${siteUrl.origin}/#website` : '#website',
        name: 'Benovta',
        inLanguage: isEnglish ? 'en' : 'id',
        publisher: { '@id': organization['@id'] },
        ...(siteUrl ? { url: siteUrl.href } : {})
      },
      {
        '@type': 'WebPage',
        name: title,
        description,
        inLanguage: isEnglish ? 'en' : 'id',
        isPartOf: { '@id': siteUrl ? `${siteUrl.origin}/#website` : '#website' },
        ...(canonicalUrl ? { url: canonicalUrl } : {})
      }
    ];

    if (normalizedPath === '/services') {
      structuredData.push(...coreServices.map((service) => ({
        '@type': 'Service',
        name: isEnglish ? service.title : serviceTranslationsId(service.id, service.title),
        description: isEnglish ? serviceTranslationsDescription(service.id, service.description, true) : service.description,
        provider: { '@id': organization['@id'] || '#organization' }
      })));
    }

    if (siteUrl && !isNotFound && normalizedPath !== '/') {
      const breadcrumbs = [{ label: isEnglish ? 'Home' : 'Beranda', path: '/' }];
      if (product && category) {
        breadcrumbs.push(
          { label: isEnglish ? 'Products' : 'Produk', path: '/products' },
          { label: product.title, path: `/products/${product.id}` }
        );
      } else if (isAboutPath && knownAboutSection) {
        if (knownAboutSection === 'profile') {
          breadcrumbs.push({
            label: aboutSectionNames.profile[isEnglish ? 1 : 0],
            path: '/about/profile'
          });
        } else {
          breadcrumbs.push(
            { label: isEnglish ? 'About Us' : 'Tentang Kami', path: '/about/profile' },
            { label: aboutSectionNames[knownAboutSection][isEnglish ? 1 : 0], path: `/about/${knownAboutSection}` }
          );
        }
      } else if (normalizedPath !== '/') {
        breadcrumbs.push({ label: title, path: normalizedPath });
      }

      structuredData.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: breadcrumb.label,
          item: new URL(breadcrumb.path, siteUrl).href
        }))
      });
    }

    if (isNotFound) {
      setStructuredData(null);
    } else {
      setStructuredData({ '@context': 'https://schema.org', '@graph': structuredData });
    }
  }, [category, description, isAboutPath, isEnglish, isNotFound, knownAboutSection, normalizedPath, product, socialImagePath, title]);

  return null;
}

function serviceTranslationsId(serviceId, fallback) {
  const translations = {
    'equipment-supply': 'Pasokan Peralatan',
    'installation-integration': 'Instalasi & Integrasi',
    'repair-service': 'Perbaikan & Servis',
    'spare-parts-sourcing': 'Pengadaan Suku Cadang',
    'maintenance-support': 'Dukungan Pemeliharaan',
    'technical-support': 'Dukungan Teknis'
  };
  return translations[serviceId] || fallback;
}

function serviceTranslationsDescription(serviceId, fallback, isEnglish) {
  if (!isEnglish) return fallback;
  const translations = {
    'equipment-supply': 'Supply of genuine industrial equipment from leading brands, with certificates and official warranty.',
    'installation-integration': 'Precision installation and integration of industrial mechanical and electrical systems.',
    'repair-service': 'Industrial machinery repair, refurbishment, motor rewinding, and troubleshooting.',
    'spare-parts-sourcing': 'Sourcing of genuine and compatible spare parts to help minimize industrial downtime.',
    'maintenance-support': 'Preventive maintenance programs and scheduled service for rotating equipment.',
    'technical-support': 'Engineering consultation for equipment selection, system calculations, and operational troubleshooting.'
  };
  return translations[serviceId] || fallback;
}
