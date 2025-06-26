import { GallerySection } from "@/components/gallery-section"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Gallery | Sunshine Fitsum Daycare",
  description:
    "View our bright classrooms, outdoor playground, learning spaces, and children's activities. Take a visual tour of our daycare facilities in Everett, WA.",
  keywords: "daycare photos, childcare facilities, classroom images, playground pictures, learning environment",
  alternates: {
    canonical: "/gallery",
  },
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <GallerySection />
    </div>
  )
}
