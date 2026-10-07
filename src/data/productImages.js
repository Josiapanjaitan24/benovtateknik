const imageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const categoryByFolder = {
  BLOWER: 'blowers',
  'DIAPHRAGM PUMP': 'pumps',
  EBARA: 'pumps',
  ENGINE: 'motors',
  GEARBOX: 'motors',
  GRUNDFOS: 'pumps',
  KENJI: 'pumps',
  KOSHIN: 'pumps',
  'MAGNETIC PUMP': 'pumps',
  MILANO: 'pumps',
  'SEKO, ELEPON, PROMINENT': 'pumps',
  TORISHIMA: 'pumps',
  'VALVE & SPARE PART': 'valves'
};

const rootImageCategories = {
  'Cooling Tower.jpg': 'equipment',
  'FLEXIBLE JOINT.jpg': 'equipment',
  'Inverter Fuji Electric.jpg': 'motors',
  'PRESSURE TANK.jpg': 'equipment',
  'PULSAFEEDER-Chem-Tech Series.jpg': 'pumps',
  'Teco-Siemens Electric Motor.jpg': 'motors'
};

const folderBrands = {
  BLOWER: 'Anlet / Trundean',
  'DIAPHRAGM PUMP': 'Ran / Wilden',
  EBARA: 'Ebara',
  GEARBOX: 'Industrial Gearbox',
  GRUNDFOS: 'Grundfos',
  KENJI: 'Kenji',
  KOSHIN: 'Koshin',
  'MAGNETIC PUMP': 'Sanso / Trundean',
  MILANO: 'Milano',
  'SEKO, ELEPON, PROMINENT': 'Dosing Pump',
  TORISHIMA: 'Torishima',
  'VALVE & SPARE PART': 'Industrial Components'
};

const categoryContent = {
  pumps: {
    spec: 'Pilihan tipe dan material disesuaikan dengan kapasitas aliran, head, karakteristik fluida, dan kondisi instalasi.',
    applications: 'Pasokan air, sirkulasi, drainase, pengolahan air, dan transfer fluida industri.'
  },
  motors: {
    spec: 'Pilihan unit disesuaikan dengan kebutuhan daya, kecepatan, rasio reduksi, dan kondisi operasional.',
    applications: 'Penggerak pompa, mesin produksi, conveyor, blower, dan utilitas industri.'
  },
  blowers: {
    spec: 'Pilihan tipe blower disesuaikan dengan kebutuhan tekanan, kapasitas udara, dan kondisi operasi.',
    applications: 'Aerasi, sirkulasi udara, vacuum handling, dan pneumatic conveying.'
  },
  valves: {
    spec: 'Tipe, material, dan ukuran komponen dapat disesuaikan dengan spesifikasi sistem.',
    applications: 'Kontrol aliran, koneksi mekanikal, serta perawatan dan perbaikan peralatan industri.'
  },
  equipment: {
    spec: 'Pilihan kapasitas, material, dan konfigurasi disesuaikan dengan kebutuhan instalasi.',
    applications: 'Sistem utilitas, pendinginan, penyangga tekanan, dan koneksi perpipaan.'
  }
};

function titleCase(value) {
  return value
    .toLowerCase()
    .replace(/(^|[\s/-])([a-z])/g, (_, separator, letter) => `${separator}${letter.toUpperCase()}`)
    .replace(/\b(ebara|grundfos|kenji|koshin|milano|torishima|seko|elepon|prominent|fuji|siemens|teco|isuzu|dosan|dpk|nbg|sp|fs|cdx|cdxm|crn|cr|mmo|mml|gpe|gpf|sz|gb|gc|gl|eta|cen|best|aodd)\b/gi, (word) => word.toUpperCase());
}

function cleanProductTitle(filename, folder) {
  const normalizedFilename = filename.replace(/(.+\.jpeg)\1$/i, '$1');
  let title = normalizedFilename.replace(/\.(jpg|jpeg|png)$/i, '');
  title = title
    .replace(/^PUMP-EBARA-/i, '')
    .replace(/^PUMP-TORISHIMA-/i, '')
    .replace(/^GRUNDFOS-/i, '')
    .replace(/^KENJI-/i, '')
    .replace(/^KOSHIN-/i, '')
    .replace(/^MILANO-/i, '')
    .replace(/^Blower \(Anlet, Trundean\) – /i, '')
    .replace(/^Diaphragm Pump \(Ran & Wilden\) – /i, '')
    .replace(/^Dosing Pump – /i, '')
    .replace(/^Engine – /i, '')
    .replace(/^Gearbox – /i, '')
    .replace(/^Magnetic Pump \(Sanso atau Trundean\)/i, 'Magnetic Pump')
    .replace(/^PULSAFEEDER-/i, '')
    .replace(/^Teco-Siemens /i, 'TECO/Siemens ')
    .replace(/___/g, ' / ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (folder === 'DIAPHRAGM PUMP') title = `${title} Diaphragm Pump`;
  if (folder === 'SEKO, ELEPON, PROMINENT') title = `${title} Dosing Pump`;
  if (folder === 'MAGNETIC PUMP') title = title.replace(/2$/, ' Model 2');
  if (filename === 'PUMP-EBARA-TYPE-FS.png') title = 'Type FS Pump';
  if (folder === 'VALVE & SPARE PART') {
    title = title.replace(/(\d) Mm\b/g, '$1 mm');
  }
  if (filename === 'Inverter Fuji Electric.jpg') title = 'Fuji Electric Inverter';
  if (filename === 'Teco-Siemens Electric Motor.jpg') title = 'TECO/Siemens Electric Motor';
  if (filename === 'PULSAFEEDER-Chem-Tech Series.jpg') title = 'Chem-Tech Series Dosing Pump';
  if (/BEST 2 3 4 5/i.test(title)) title = title.replace(/BEST 2 3 4 5/i, 'BEST 2/3/4/5');
  if (folder === 'GEARBOX' && title === 'Small Gear Motors') title = 'Small Gear Motor';

  return titleCase(title);
}

function getProductBrand(filename, folder) {
  if (folder === 'SEKO, ELEPON, PROMINENT') {
    if (/seko/i.test(filename)) return 'Seko';
    if (/prominent/i.test(filename)) return 'ProMinent';
    return 'Elepon';
  }
  if (folder === 'ENGINE') return filename.includes('Isuzu') ? 'Isuzu' : 'Doosan';
  if (folder && folderBrands[folder]) return folderBrands[folder];
  if (filename === 'Inverter Fuji Electric.jpg') return 'Fuji Electric';
  if (filename === 'PULSAFEEDER-Chem-Tech Series.jpg') return 'Pulsafeeder';
  if (filename === 'Teco-Siemens Electric Motor.jpg') return 'TECO / Siemens';
  return 'Industrial Equipment';
}

function createProductId(path) {
  return path
    .replace('../assets/images/', '')
    .replace(/\.(jpg|jpeg|png)$/i, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const productImageProducts = Object.entries(imageModules)
  .filter(([path]) => !path.includes('/Layanan Rekayasa/'))
  .map(([path, image]) => {
    const filename = path.split('/').pop();
    const folder = path.split('/').slice(-2, -1)[0];
    const categoryId = folder === 'images'
      ? rootImageCategories[filename]
      : categoryByFolder[folder];
    const content = categoryContent[categoryId];

    if (!categoryId || !content) {
      throw new Error(`Kategori produk belum ditentukan untuk gambar: ${path}`);
    }

    return {
      id: createProductId(path),
      categoryId,
      image,
      brand: getProductBrand(filename, folder === 'images' ? null : folder),
      series: 'Tipe tersedia sesuai kebutuhan',
      title: cleanProductTitle(filename, folder === 'images' ? null : folder),
      spec: content.spec,
      applications: content.applications,
      featured: false,
      popular: false
    };
  });

const productImagesById = new Map(
  productImageProducts.map((product) => [product.id, product.image])
);

export function getProductImage(productId) {
  return productImagesById.get(productId);
}
