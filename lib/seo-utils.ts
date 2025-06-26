/**
 * SEO utility functions for Sunshine Fitsum Daycare
 */

export const PRODUCTION_URL = "https://www.sunshinefitsumdaycare.com"

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${PRODUCTION_URL}${normalizedPath}`
}

/**
 * Check if current environment is production
 */
export function isProduction(): boolean {
  return process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL === "www.sunshinefitsumdaycare.com"
}

/**
 * Generate structured data for local business
 */
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "Sunshine Fitsum Daycare",
    image: `${PRODUCTION_URL}/opengraph-image`,
    url: PRODUCTION_URL,
    telephone: "+1-206-688-9088",
    email: "Hello@sunshinefitsumdaycare.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1905 Walnut Street",
      addressLocality: "Everett",
      addressRegion: "WA",
      postalCode: "98201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.9789,
      longitude: -122.2021,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "17:30",
        description: "By registration only",
      },
    ],
    priceRange: "$$$",
    description:
      "A nurturing daycare center with a nature-based curriculum, bright facilities, and focus on joyful learning for children ages 6 months to 5 years.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Childcare Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Infant Care (6-18 months)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toddler Care (18 months-3 years)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preschool (3-6 years)",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "2",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ann Doran",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "I can't wait for my grand babies to attend school with Ms. Fitsum! Darling center with age appropriate games and activities. Great location!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Zachary Stille",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Fitsum is an awesome childcare professional with many years of experience working in the school districts, with kids, and with people with disabilities. Highly recommend!",
      },
    ],
  }
}

/**
 * Common SEO metadata for pages
 */
export const commonSEOData = {
  metadataBase: new URL(PRODUCTION_URL),
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Sunshine Fitsum Daycare",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sunshine Fitsum Daycare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["/opengraph-image"],
  },
  robots: {
    index: isProduction(),
    follow: isProduction(),
    googleBot: {
      index: isProduction(),
      follow: isProduction(),
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
}
