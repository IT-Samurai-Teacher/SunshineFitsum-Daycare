import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === "production"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sunshinefitsumdaycare.com"
  
  if (!isProduction) {
    // Development environment - allow indexing for testing
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }
  
  // Production environment
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
