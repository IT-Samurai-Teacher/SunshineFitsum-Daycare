import { ContactSection } from "@/components/contact-section"
import { VirtualTour } from "@/components/virtual-tour"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Contact Us | Sunshine Fitsum Daycare",
  description:
    "Get in touch with Sunshine Fitsum Daycare in Everett, WA. Call us at (206) 668-9088 or visit our location at 1905 Walnut Street, Everett, WA 98201.",
  keywords: "daycare contact, childcare phone number, daycare location, daycare hours, schedule tour, virtual tour",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <PageHeader
        title="Contact & Virtual Tour"
        description="Get in touch with us and explore our facilities through our interactive virtual tour."
      />

      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Take a <span className="text-primary">Virtual Tour</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Explore our daycare facilities from the comfort of your home. Click on the hotspots to navigate between
            rooms and get a feel for our warm, nurturing environment.
          </p>

          <VirtualTour />

          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              Want to see our facilities in person? Contact us to schedule a tour!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
