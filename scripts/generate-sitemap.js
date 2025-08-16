const fs = require('fs');
const base = process.env.SITE_URL || 'https://ecoridedetailing.pl';
const routes = ['/', '/o-nas', '/oferta', '/cennik', '/realizacje', '/faq', '/blog', '/kontakt'];
const now = new Date().toISOString();
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(r => `<url><loc>${base}${r}</loc><lastmod>${now}</lastmod><priority>${r==='/'?'1.0':'0.8'}</priority></url>`),
  '</urlset>'
].join('');
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
console.log('✓ sitemap.xml updated');
