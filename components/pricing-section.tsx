import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "Infant Care",
    ageRange: "6 months - 18 months",
    price: "Call for Pricing",
    period: "",
    features: [
      "Personalized care routines",
      "Daily reports and updates",
      "Sensory-rich experiences",
      "Developmentally appropriate activities",
      "Secure, clean environment",
    ],
    color: "#FFD166",
  },
  {
    title: "Toddler Care",
    ageRange: "18 months - 3 years",
    price: "Call for Pricing",
    period: "",
    features: [
      "Language development activities",
      "Motor skills development",
      "Social interaction opportunities",
      "Outdoor exploration time",
      "Introduction to routines",
    ],
    color: "#FF9F1C",
    popular: true,
  },
  {
    title: "Preschooler Care",
    ageRange: "3 - 6 years",
    price: "Call for Pricing",
    period: "",
    features: [
      "Kindergarten readiness curriculum",
      "STEM learning activities",
      "Garden and nature exploration",
      "Art and creative expression",
      "Social-emotional development",
    ],
    color: "#70D6FF",
  },
]

export function PricingSection() {
  return (
    <section className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-secondary/20 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-primary/20 rounded-full"></div>

      <div className="container mx-auto px-4">
        {/* Section heading is provided by PageHeader */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`sunshine-card overflow-hidden relative ${plan.popular ? "border-2 border-secondary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-0" style={{ borderBottom: `4px solid ${plan.color}` }}>
                <CardTitle className="text-2xl font-fredoka">{plan.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.ageRange}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-fredoka">{plan.price}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+12066889088" className="text-primary hover:underline">
                      +1 (206) 688-9088
                    </a>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full sunshine-button-primary">
                  <Link href="/enrollment">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-fredoka mb-6 text-center">
            Additional <span className="colorful-text-blue">Information</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-fredoka text-lg mb-3">Fees & Enrollment</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Registration Fee:</span>
                    <span className="text-muted-foreground"> $100 one-time fee (non-refundable)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Deposit:</span>
                    <span className="text-muted-foreground"> Required upon enrollment (applied to last month)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Saturday Care:</span>
                    <span className="text-muted-foreground"> Available with advance registration</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-fredoka text-lg mb-3">What's Included</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Nutritious Meals:</span>
                    <span className="text-muted-foreground"> Breakfast, lunch, and afternoon snack</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Educational Materials:</span>
                    <span className="text-muted-foreground"> All learning supplies and materials</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Parent Communication App:</span>
                    <span className="text-muted-foreground"> Daily updates and photos</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Outdoor Activities:</span>
                    <span className="text-muted-foreground"> Garden and playground time</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/10 rounded-xl">
            <p className="text-center text-sm">
              <span className="font-medium">Note:</span> Please call us at{" "}
              <a href="tel:+12066889088" className="text-primary hover:underline">
                +1 (206) 688-9088
              </a>{" "}
              for current rates and availability. We accept various forms of payment including childcare subsidies and
              employer benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
