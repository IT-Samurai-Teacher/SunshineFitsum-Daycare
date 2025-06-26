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
  title: "Sunshine Fitsum Daycare - Where Little Ones Bloom and Grow",
  description:
    "A nurturing daycare center in Everett, WA with a nature-based curriculum, bright facilities, and focus on joyful learning for children ages 6 months to 5 years.",
  keywords:
    "daycare, childcare, Everett, WA, preschool, infant care, toddler care, early education, nature-based curriculum",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Sunshine Fitsum Daycare - Where Little Ones Bloom and Grow",
    description:
      "A nurturing daycare center in Everett, WA with a nature-based curriculum, bright facilities, and focus on joyful learning for children ages 6 months to 5 years.",
    url: getCanonicalUrl("/"),
    type: "website",
  },
  twitter: {
    title: "Sunshine Fitsum Daycare - Where Little Ones Bloom and Grow",
    description:
      "A nurturing daycare center in Everett, WA with a nature-based curriculum, bright facilities, and focus on joyful learning for children ages 6 months to 5 years.",
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
