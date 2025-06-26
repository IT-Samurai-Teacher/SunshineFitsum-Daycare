import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SunIcon } from "@/components/icons/sun-icon"
import { FlowerIcon } from "@/components/icons/flower-icon"
import { HeartIcon } from "@/components/icons/heart-icon"

export function ApproachSection() {
  return (
    <section id="approach" className="sunshine-section bg-white relative">
      {/* Decorative elements with logo colors */}
      <div className="absolute top-10 left-10 w-20 h-20 decoration-sunshine rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 decoration-orange rounded-full"></div>
      <div className="absolute top-40 right-20 w-16 h-16 decoration-sky rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Our Sunshine <span className="colorful-text-primary">Approach</span>
        </h2>
        <p className="section-subtitle">
          We believe in nurturing the whole child through play, exploration, and joyful learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="sunshine-card border-t-4 border-t-sunshine-yellow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sunshine-yellow/20 flex items-center justify-center mb-4">
                <SunIcon className="w-8 h-8 text-sunshine-yellow" />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Play-Based Learning</h3>
              <p className="text-muted-foreground">
                Our curriculum incorporates hands-on activities, creative play, and age-appropriate learning experiences
                to foster development.
              </p>
            </CardContent>
          </Card>

          <Card className="sunshine-card border-t-4 border-t-sky-blue">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sky-blue/20 flex items-center justify-center mb-4">
                <FlowerIcon className="w-8 h-8 text-sky-blue" />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Bright, Inspiring Spaces</h3>
              <p className="text-muted-foreground">
                Our sunlit facilities are designed to encourage curiosity, creativity, and independent exploration in a
                safe environment.
              </p>
            </CardContent>
          </Card>

          <Card className="sunshine-card border-t-4 border-t-baby-pink">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-baby-pink/20 flex items-center justify-center mb-4">
                <HeartIcon className="w-8 h-8 text-coral-red" />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Emotional Development</h3>
              <p className="text-muted-foreground">
                We prioritize positive emotional growth, helping children develop confidence, resilience, and healthy
                social relationships.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-fredoka mb-4">
              Our <span className="colorful-text-blue">Philosophy</span>
            </h3>
            <p className="mb-4 text-muted-foreground">
              At Sunshine Fitsum Daycare, we believe that every child is unique and deserves an environment where they
              can thrive. Our approach combines:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-sunshine-yellow flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>Child-led exploration and discovery</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>Structured learning through play</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-sky-blue flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>Nurturing emotional intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-teal-blue flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>Building strong foundations for lifelong learning</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-sunshine-yellow/20 rounded-3xl"></div>
              <Image
                src="/images/daycare-classroom.jpg"
                alt="Bright daycare classroom with tree mural and learning centers"
                width={600}
                height={400}
                className="rounded-3xl relative z-10 border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped divider */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <div
          className="w-full h-16"
          style={{
            backgroundImage: "radial-gradient(circle at 10px 0, transparent 12px, #FFF7E8 12px)",
            backgroundSize: "20px 16px",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </div>
    </section>
  )
}
