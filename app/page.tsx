import { HeroSection } from "@/components/hero-section"
import { ApproachSection } from "@/components/approach-section"
import { AboutPreview } from "@/components/about-preview"
import { EnrollmentCTA } from "@/components/enrollment-cta"
import { Testimonials } from "@/components/testimonials"
import { ServiceCardsShowcase } from "@/components/service-cards-showcase"
import { getCanonicalUrl } from "@/lib/seo-utils"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Licensed Childcare in Everett, WA | Sunshine Fitsum Daycare",
  description:
    "Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, bright facilities, experienced staff. Call (206) 688-9088 for enrollment.",
  keywords:
    "daycare Everett WA, childcare Everett Washington, preschool Everett, infant care, toddler daycare, licensed childcare, early education, nature-based curriculum, DCYF licensed, quality childcare",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Licensed Childcare in Everett, WA | Sunshine Fitsum Daycare",
    description:
      "Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, bright facilities, experienced staff.",
    url: getCanonicalUrl("/"),
    type: "website",
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
    title: "Licensed Childcare in Everett, WA | Sunshine Fitsum Daycare",
    description:
      "Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, bright facilities, experienced staff.",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Discover our age-appropriate programs designed to nurture your child's development at every stage.
          </p>

          <ServiceCardsShowcase />
        </div>
      </section>

      <ApproachSection />
      <AboutPreview />
      <Testimonials />
      <EnrollmentCTA />
    </div>
  )
}