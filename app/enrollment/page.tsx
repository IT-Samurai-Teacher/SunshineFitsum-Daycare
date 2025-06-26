import { EnrollmentSection } from "@/components/enrollment-section"
import { AnimatedEnrollmentProcess } from "@/components/animated-enrollment-process"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Enrollment | Sunshine Fitsum Daycare",
  description:
    "Join our Sunshine family! Complete our enrollment form to begin the process. We offer programs for infants, toddlers, and preschoolers in Everett, WA.",
  keywords: "daycare enrollment, childcare registration, apply for daycare, childcare availability, daycare waitlist",
  alternates: {
    canonical: "/enrollment",
  },
}

export default function EnrollmentPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <PageHeader
        title="Enrollment"
        description="Join our Sunshine family by following our simple enrollment process."
      />

      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-primary">Enrollment</span> Process
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            We've made enrolling your child at Sunshine Fitsum Daycare as simple as possible. Follow these steps to join
            our daycare family.
          </p>

          <AnimatedEnrollmentProcess />
        </div>
      </section>

      <EnrollmentSection />
    </div>
  )
}
