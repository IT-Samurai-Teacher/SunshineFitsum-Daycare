import { ProgramsSection } from "@/components/programs-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ScheduleSection } from "@/components/schedule-section"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Programs | Sunshine Fitsum Daycare",
  description:
    "Explore our age-appropriate programs for infants, toddlers, and preschoolers. Nature-based curriculum with focus on development and learning through play.",
  keywords: "infant daycare, toddler program, preschool program, childcare curriculum, early childhood education",
  alternates: {
    canonical: "/programs",
  },
}

export default function ProgramsPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <ProgramsSection />
      <FacilitiesSection />
      <ScheduleSection />
    </div>
  )
}
