import type React from "react"
import type { Metadata, Viewport } from "next/dist/lib/metadata/types/metadata-interface"
import { Poppins, Fredoka as Fredoka_One } from "next/font/google"
import "./globals.css"
import "./mobile-fixes.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
})

const fredokaOne = Fredoka_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka-one",
  preload: true,
})

// Check if we're on production domain
const isProduction =
  process.env.VERCEL_ENV === "production" &&
  (process.env.VERCEL_URL === "www.sunshinefitsumdaycare.com" ||
    process.env.NEXT_PUBLIC_VERCEL_URL === "www.sunshinefitsumdaycare.com")

// New viewport export format for Next.js 14
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFD166",
  colorScheme: "light",
}

export const metadata: Metadata = {
  title: {
    template: "%s | Sunshine Fitsum Daycare",
    default: "Sunshine Fitsum Daycare - Where Little Ones Bloom and Grow | Licensed Childcare in Everett, WA",
  },
  description:
    "Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, bright facilities, experienced staff. Call (206) 688-9088.",
  keywords: [
    "daycare Everett WA",
    "childcare Everett Washington", 
    "preschool Everett",
    "infant care Everett",
    "toddler daycare",
    "licensed childcare",
    "early education",
    "nature-based curriculum",
    "Sunshine Fitsum Daycare",
    "DCYF licensed",
    "quality childcare",
    "Snohomish County daycare"
  ].join(", "),
  authors: [{ name: "Fitsum Wodajo", url: "https://www.sunshinefitsumdaycare.com" }],
  creator: "Fitsum Wodajo",
  publisher: "Sunshine Fitsum Daycare",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL("https://www.sunshinefitsumdaycare.com"),
  alternates: {
    canonical: "/",
  },
  // Enhanced icon configuration using dynamic generation
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#FFD166",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sunshinefitsumdaycare.com",
    siteName: "Sunshine Fitsum Daycare",
    title: "Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA",
    description: "Licensed daycare center offering nurturing care for infants, toddlers & preschoolers in Everett, WA. Nature-based curriculum, experienced staff.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA",
    description: "Licensed daycare center offering nurturing care for infants, toddlers & preschoolers in Everett, WA.",
    images: ["/opengraph-image"],
    creator: "@SunshineDaycare",
  },
  robots: {
    index: isProduction,
    follow: isProduction,
    noarchive: !isProduction,
    nosnippet: !isProduction,
    noimageindex: !isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    bing: process.env.BING_VERIFICATION,
  },
  generator: "Next.js",
  applicationName: "Sunshine Fitsum Daycare",
  referrer: "origin-when-cross-origin",
  category: "education",
  classification: "childcare",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sunshine Daycare",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#FFD166",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent indexing on non-production domains */}
        {!isProduction && <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />}

        {/* Enhanced favicon and icon links - using dynamic generation */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/safari-pinned-tab.png" color="#FFD166" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect for critical external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* PWA and mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sunshine Daycare" />
        <meta name="application-name" content="Sunshine Daycare" />
        <meta name="msapplication-TileColor" content="#FFD166" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Google Tag Manager - Only on production */}
        {isProduction && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5MPJGQD8');
            `}
          </Script>
        )}

        {/* Google tag (gtag.js) for GA4 - Only on production */}
        {isProduction && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-SY1RMCC1XT" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SY1RMCC1XT', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: true
                });
                gtag('config', 'AW-17065545233');
              `}
            </Script>
          </>
        )}

        {/* Structured Data - Only on production */}
        {isProduction && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ChildCare",
                name: "Sunshine Fitsum Daycare",
                image: "https://www.sunshinefitsumdaycare.com/opengraph-image",
                url: "https://www.sunshinefitsumdaycare.com",
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
              }),
            }}
          />
        )}

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sunshinefitsumdaycare.com" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Everett" />
        <meta name="geo.position" content="47.9789;-122.2021" />
        <meta name="ICBM" content="47.9789, -122.2021" />
        <meta name="DC.title" content="Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA" />
        <meta name="DC.creator" content="Fitsum Wodajo" />
        <meta name="DC.subject" content="Childcare, Daycare, Early Education, Everett WA" />
        <meta name="DC.description" content="Licensed daycare center offering nurturing care for infants, toddlers & preschoolers in Everett, WA." />
      </head>
      <body className={`${poppins.variable} ${fredokaOne.variable} font-poppins bg-cream`}>
        {/* Google Tag Manager (noscript) - Only on production */}
        {isProduction && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5MPJGQD8"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Suspense>
          {isProduction && <Analytics />}
        </ThemeProvider>

        {/* Service Worker - Only on production */}
        {isProduction && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(
              function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
              },
              function(err) {
                console.log('ServiceWorker registration failed: ', err);
              }
            );
          });
        }
      `,
            }}
          />
        )}
      </body>
    </html>
  )
}