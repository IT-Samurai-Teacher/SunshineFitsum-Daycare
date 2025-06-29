import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Get the current domain
  const currentDomain = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost'
  
  // Only generate sitemap for production domain
  const isProductionDomain = currentDomain === 'www.sunshinefitsumdaycare.com' || 
                            currentDomain === 'sunshinefitsumdaycare.com' ||
                            process.env.VERCEL_ENV === 'production'

  if (!isProductionDomain) {
    return []
  }

  const baseUrl = "https://www.sunshinefitsumdaycare.com"
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enrollment`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ]
}