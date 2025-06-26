import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I can't wait for my grand babies to attend school with Ms. Fitsum! Darling center with age appropriate games and activities. Great location!",
    name: "Ann Doran",
    role: "Grandparent",
    timeAgo: "6 weeks ago",
    rating: 5,
    color: "#F7B731", // Sunshine Yellow
  },
  {
    quote:
      "Fitsum is an awesome childcare professional with many years of experience working in the school districts, with kids, and with people with disabilities. Highly recommend!",
    name: "Zachary Stille",
    role: "Local Resident",
    timeAgo: "7 weeks ago",
    rating: 5,
    color: "#2DD4BF", // Sky Blue
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="sunshine-section bg-cream relative">
      {/* Decorative elements with logo colors */}
      <div className="absolute top-10 left-10 w-20 h-20 decoration-sunshine rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 decoration-sky rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 decoration-pink rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="section-title mb-2">
            What <span className="colorful-text-blue">Families</span> Say
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-sunshine-yellow text-sunshine-yellow" />
              ))}
            </div>
            <span className="text-xl font-bold">5.0</span>
            <span className="text-muted-foreground">(2 reviews)</span>
          </div>
          <p className="section-subtitle">Read our genuine Google reviews from families and community members.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="sunshine-card border-t-4" style={{ borderTopColor: testimonial.color }}>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonial.timeAgo}</span>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3 flex items-center justify-center">
                      <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=sunshine+fitsum+daycare+everett&oq=sunshine+fitsum+daycare+everett"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <span>See all reviews on Google</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
