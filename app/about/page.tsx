import { AboutSection } from "../../components/about-section"
import { CertificationsSection } from "../../components/certifications-section"
import { getCanonicalUrl } from "@/lib/seo-utils"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "About Us | Sunshine Fitsum Daycare",
  description:
    "Learn about our story, our passionate team, and our commitment to providing exceptional childcare in Everett, WA. Licensed by Washington State DCYF.",
  keywords:
    "daycare history, childcare team, Fitsum Wodajo, daycare certifications, licensed childcare, Everett daycare",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Us | Sunshine Fitsum Daycare",
    description:
      "Learn about our story, our passionate team, and our commitment to providing exceptional childcare in Everett, WA.",
    url: getCanonicalUrl("/about"),
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="w-full bg-primary/10 py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our story, our passionate team, and our commitment to providing exceptional childcare.
          </p>
        </div>
      </div>
      <AboutSection />
      <CertificationsSection />
    </div>
  )
}
