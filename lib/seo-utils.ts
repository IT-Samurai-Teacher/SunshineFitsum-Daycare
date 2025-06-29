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
  return process.env.VERCEL_ENV === "production" && 
    (process.env.VERCEL_URL === "www.sunshinefitsumdaycare.com" ||
     process.env.NEXT_PUBLIC_VERCEL_URL === "www.sunshinefitsumdaycare.com")
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
      "Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, bright facilities, experienced staff.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Childcare Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Infant Care (6-18 months)",
            description: "Nurturing care for babies with personalized routines and sensory experiences.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toddler Care (18 months-3 years)",
            description: "Active exploration and discovery with language development focus.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preschool (3-6 years)",
            description: "Kindergarten readiness program with play-based learning.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "2",
      bestRating: "5",
      worstRating: "1",
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
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "I can't wait for my grand babies to attend school with Ms. Fitsum! Darling center with age appropriate games and activities. Great location!",
        datePublished: "2024-01-15",
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
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Fitsum is an awesome childcare professional with many years of experience working in the school districts, with kids, and with people with disabilities. Highly recommend!",
        datePublished: "2024-01-10",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Fitsum Wodajo",
      jobTitle: "Founder & Director",
    },
    areaServed: {
      "@type": "City",
      name: "Everett",
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.9789,
        longitude: -122.2021,
      },
      geoRadius: "25000",
    },
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
        alt: "Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["/opengraph-image"],
    creator: "@SunshineDaycare",
  },
  robots: {
    index: isProduction(),
    follow: isProduction(),
    noarchive: !isProduction(),
    nosnippet: !isProduction(),
    noimageindex: !isProduction(),
    googleBot: {
      index: isProduction(),
      follow: isProduction(),
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * SEO-optimized keywords for different pages
 */
export const pageKeywords = {
  home: "daycare Everett WA, childcare Everett Washington, preschool Everett, infant care, toddler daycare, licensed childcare, early education, nature-based curriculum, DCYF licensed, quality childcare",
  about: "daycare history, childcare team, Fitsum Wodajo, daycare certifications, licensed childcare, Everett daycare, experienced childcare provider",
  programs: "infant daycare, toddler program, preschool program, childcare curriculum, early childhood education, age-appropriate activities, developmental milestones",
  enrollment: "daycare enrollment, childcare registration, apply for daycare, childcare availability, daycare waitlist, enrollment process",
  pricing: "daycare pricing, childcare costs, tuition rates, infant care cost, preschool tuition, affordable childcare",
  contact: "daycare contact, childcare phone number, daycare location, daycare hours, schedule tour, virtual tour",
  gallery: "daycare photos, childcare facilities, classroom images, playground pictures, learning environment",
}