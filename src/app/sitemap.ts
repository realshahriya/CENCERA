import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cencera.xyz';

    const routes = [
        '',
        '/docs',
        '/docs/quick-start',
        '/docs/architecture',
        '/docs/risk-detection',
        '/docs/trust-score',
        '/docs/api',
        '/docs/monitoring',
        '/docs/entity-analysis',
        '/docs/transaction-simulator',
        '/docs/connection-guard',
        '/docs/sandbox',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
