// pages/api/sitemap.js
export default async function handler(req, res) {
  // Define the base URL of your website
  const baseUrl = 'https://your-domain.com';

  // Generate a list of URLs (you can fetch them from your database or define them statically)
  const pages = [
    '',
    'about',
    'shop',
    'contact',
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join('')}
</urlset>`;

  // Set response headers and send the sitemap
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).end(sitemap);
}
