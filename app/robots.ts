import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Check if we're on the production domain
  const isProductionDomain =
    process.env.VERCEL_ENV === "production" &&
    (process.env.VERCEL_URL === "www.sunshinefitsumdaycare.com" ||
      process.env.NEXT_PUBLIC_VERCEL_URL === "www.sunshinefitsumdaycare.com")

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

  // For production domain only
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
      // Block AI crawlers and scrapers
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