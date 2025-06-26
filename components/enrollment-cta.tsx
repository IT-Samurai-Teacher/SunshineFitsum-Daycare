import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SunIcon } from "@/components/icons/sun-icon"

export function EnrollmentCTA() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements with logo colors */}
      <div className="absolute top-0 left-0 w-full h-full bg-sunshine-yellow/5"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-sunshine-yellow/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-soft-orange/10 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-sky-blue/10 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-baby-pink/10 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <SunIcon className="w-full h-full text-sunshine-yellow animate-sunray" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our <span className="text-sunshine-yellow">Sunshine</span> Family?
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            We're excited to welcome your child to our nurturing environment where they'll learn, play, and grow.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Call us at{" "}
            <a href="tel:+12066889088" className="text-primary hover:underline font-medium">
              +1 (206) 688-9088
            </a>{" "}
            for current pricing and availability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="sunshine-button-primary">
              <Link href="/enrollment">Enroll Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="sunshine-button-blue">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
