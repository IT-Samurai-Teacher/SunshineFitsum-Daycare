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
})

const fredokaOne = Fredoka_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka-one",
})

// Check if we're on production domain
const isProduction =
  process.env.VERCEL_ENV === "production" &&
  (process.env.VERCEL_URL === "www.sunshinefitsumdaycare.com" ||
    process.env.NEXT_PUBLIC_VERCEL_URL === "www.sunshinefitsumdaycare.com")

// New viewport export format for Next.js 15
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFD166",
}

export const metadata: Metadata = {
  title: {
    template: "%s | Sunshine Fitsum Daycare",
    default: "Sunshine Fitsum Daycare - Where little ones bloom and grow",
  },
  description:
    "A nurturing daycare center with a nature-based curriculum, bright facilities, and focus on joyful learning for children ages 6 months to 5 years in Everett, WA.",
  keywords: "daycare, childcare, Everett, preschool, infant care, toddler care, early education, Washington",
  authors: [{ name: "Fitsum Wodajo" }],
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
      { url: "/icon.png", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
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
    title: "Sunshine Fitsum Daycare - Where little ones bloom and grow",
    description: "A nurturing daycare center with a nature-based curriculum in Everett, WA",
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
    card: "summary_large_image",
    title: "Sunshine Fitsum Daycare",
    description: "A nurturing daycare center with a nature-based curriculum in Everett, WA",
    images: ["/opengraph-image"],
  },
  robots: {
    index: isProduction,
    follow: isProduction,
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
  },
  generator: "Next.js",
  // Additional SEO metadata
  category: "education",
  classification: "childcare",
  referrer: "origin-when-cross-origin",
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
        {!isProduction && <meta name="robots" content="noindex, nofollow" />}

        {/* Enhanced favicon and icon links - using dynamic generation */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/safari-pinned-tab.png" color="#FFD166" />

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
                gtag('config', 'G-SY1RMCC1XT');
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
