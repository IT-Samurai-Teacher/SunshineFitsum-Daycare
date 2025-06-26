import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SunIcon } from "@/components/icons/sun-icon"
import Link from "next/link"
import type { Metadata } from "next"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Blog | Sunshine Fitsum Daycare",
  description:
    "Coming soon! Our blog will feature parenting tips, child development insights, and updates from our daycare center.",
  keywords: "daycare blog, parenting tips, child development, early childhood education, daycare updates",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <PageHeader
        title="Our Blog"
        description="Insights, updates, and parenting resources from Sunshine Fitsum Daycare"
      />

      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 text-sunshine-yellow">
              <SunIcon className="w-full h-full animate-sunray" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Coming <span className="text-primary">Soon</span>!
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              We're working on creating valuable content for parents and caregivers. Our blog will feature parenting
              tips, child development insights, and updates from our daycare center.
            </p>

            <Card className="sunshine-card border-t-4 border-t-primary mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-fredoka mb-4">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-sunshine-yellow flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Child development milestones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Nutritious recipes for children</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-sky-blue flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Educational activities to try at home</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-teal-blue flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Parenting tips and resources</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-baby-pink flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Updates from our daycare center</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-coral-red flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>Expert interviews and insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground mb-8">
              Want to be notified when our blog launches? Contact us to join our mailing list!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="sunshine-button-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="sunshine-button-secondary">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
