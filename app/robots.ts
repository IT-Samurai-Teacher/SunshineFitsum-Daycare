import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Get the current domain from headers or environment
  const currentDomain = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost'
  
  // Only allow indexing on the exact production domain
  const isProductionDomain = currentDomain === 'www.sunshinefitsumdaycare.com' || 
                            currentDomain === 'sunshinefitsumdaycare.com' ||
                            process.env.VERCEL_ENV === 'production'

  // For non-production domains (Vercel previews, development, etc.)
  if (!isProductionDomain) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      // No sitemap for non-production
    }
  }

  // For production domain only - FULL SEO ACCESS
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*", 
          "/_next/*", 
          "/thank-you", 
          "/_vercel/*", 
          "/admin/*",
          "/*.json$",
          "/.*"
        ],
      },
      // Block AI crawlers and scrapers (optional - you can remove if you want AI indexing)
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        disallow: "/",
      },
    ],
    sitemap: "https://www.sunshinefitsumdaycare.com/sitemap.xml",
  }
}