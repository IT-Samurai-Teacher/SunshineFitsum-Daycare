import { PricingSection } from "@/components/pricing-section"
import { AnimatedEnrollmentProcess } from "@/components/animated-enrollment-process"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Pricing & Tuition | Sunshine Fitsum Daycare",
  description:
    "Contact us for current rates for our childcare programs in Everett, WA. Quality care for infants, toddlers, and preschoolers with various enrollment options.",
  keywords: "daycare pricing, childcare costs, tuition rates, infant care cost, preschool tuition",
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <PageHeader
        title="Pricing & Tuition"
        description="Contact us to learn about our competitive rates and program options."
      />
      <PricingSection />

      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-primary">Enrollment</span> Process
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Ready to join our Sunshine family? Follow these simple steps to enroll your child.
          </p>

          <AnimatedEnrollmentProcess />
        </div>
      </section>
    </div>
  )
}
