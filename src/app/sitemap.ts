// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.correiointeligente.com.br'

  const segmentos = ['bancos', 'governos', 'varejo', 'educacao', 'seguradoras']
  const cases = ['grupo-aval', 'toledo-piza']

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/quem-somos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/planos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fale-conosco`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  const segmentoRoutes: MetadataRoute.Sitemap = segmentos.map((segmento) => ({
    url: `${baseUrl}/segmentos/${segmento}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const casesRoutes: MetadataRoute.Sitemap = cases.map((caseSlug) => ({
    url: `${baseUrl}/cases/${caseSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...segmentoRoutes, ...casesRoutes]
}