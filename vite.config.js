import { readdirSync } from 'node:fs';
import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const imageRoot = resolve(projectRoot, 'src/assets/images');
const productionSiteUrl = 'https://benovtateknik.co.id';
const publicRoutes = [
  '/',
  '/about/profile',
  '/about/values',
  '/about/approach',
  '/about/partners',
  '/services',
  '/products',
  '/contact'
];

function readProductRoutes() {
  const files = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const fullPath = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        visit(fullPath);
      } else if (/\.(jpe?g|png)$/i.test(extname(entry.name))) {
        const relativePath = relative(imageRoot, fullPath).replaceAll('\\', '/');
        if (!relativePath.toLowerCase().startsWith('layanan rekayasa/')) {
          files.push(relativePath);
        }
      }
    }
  };

  visit(imageRoot);
  return files.map((imagePath) => {
    const productId = imagePath
      .replace(/\.(jpe?g|png)$/i, '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `/products/${productId}`;
  });
}

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;'
  })[character]);
}

function createSitemap() {
  const routes = [...publicRoutes, ...readProductRoutes()]
    .filter((route, index, allRoutes) => allRoutes.indexOf(route) === index);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${escapeXml(new URL(route, productionSiteUrl).href)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
}

function sitemapPlugin() {
  return {
    name: 'benovta-sitemap',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (new URL(request.url, 'http://localhost').pathname !== '/sitemap.xml') {
          next();
          return;
        }
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/xml; charset=utf-8');
        response.end(createSitemap());
      });
    },
    generateBundle(_options, bundle) {
      const existingSitemap = bundle['sitemap.xml'];
      if (existingSitemap?.type === 'asset') {
        existingSitemap.source = createSitemap();
      } else {
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: createSitemap() });
      }
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, 'VITE_');
  const configuredSiteUrl = env.VITE_SITE_URL?.trim();
  if (
    configuredSiteUrl &&
    (configuredSiteUrl !== productionSiteUrl || configuredSiteUrl.endsWith('/'))
  ) {
    throw new Error('VITE_SITE_URL must be exactly https://benovtateknik.co.id without a trailing slash.');
  }

  return {
    plugins: [react(), tailwindcss(), sitemapPlugin()]
  };
});
