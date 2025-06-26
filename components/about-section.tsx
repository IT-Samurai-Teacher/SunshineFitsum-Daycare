import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Our <span className="colorful-text-secondary">Story</span>
        </h2>
        <p className="section-subtitle">
          Learn about our journey and the passionate team behind Sunshine Fitsum Daycare.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-fredoka mb-6">
              Our <span className="colorful-text-blue">Beginning</span>
            </h3>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-4">
                Sunshine Fitsum Daycare was born from a dream and a deep-rooted passion for nurturing children. As a
                mother and caregiver at heart, Fitsum Wodajo envisioned creating a special place where children would
                feel truly at home while their parents are away—a place filled with laughter, learning, and love.
              </p>
              <p className="text-muted-foreground mb-4">
                While we may be new to the community, our commitment to exceptional childcare is unwavering. Every
                detail of our daycare—from the thoughtfully designed spaces to our carefully crafted daily
                activities—reflects our dedication to providing the kind of care we would want for our own children.
              </p>
              <blockquote className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary my-6">
                <p className="italic text-muted-foreground">
                  "I believe that the early years are precious and fleeting. My promise to you is that we'll treasure
                  every moment with your child, nurturing their unique spirit and potential."
                </p>
                <footer className="font-medium mt-2">— Fitsum Wodajo</footer>
              </blockquote>
              <p className="text-muted-foreground">
                As we open our doors and our hearts to your family, we invite you to join us in creating the foundation
                of what we hope will become a cherished institution in our community for generations to come.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-3xl"></div>
            <Card className="sunshine-card relative z-10">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-fredoka mb-6">
                    Our <span className="colorful-text-primary">Team</span>
                  </h3>

                  <div className="mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Owner%20Sunshine%20Fitsum%20Daycare-PQTyXV4T3EDMIidIhtqLx3Q1bEuGYS.png"
                        alt="Fitsum Wodajo - Founder & Director"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-fredoka">Fitsum Wodajo</h4>
                    <p className="text-primary font-medium mb-4">Founder & Director</p>
                  </div>

                  <div className="text-left">
                    <p className="text-muted-foreground mb-4">
                      Welcome! I'm thrilled to be opening my very own childcare center, a dream I've nurtured for many
                      years. Growing up in a large, lively family, I developed a deep appreciation for the boundless
                      energy, curiosity, and amazing potential of children.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      My extensive experience babysitting and actively supporting families has reinforced my passion and
                      commitment to creating a nurturing environment where children can thrive, explore, and most
                      importantly, have fun.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      I firmly believe that every child deserves a space filled with warmth, encouragement, and
                      opportunities to grow. With my dedication, skills, and heartfelt enthusiasm, I am committed to
                      making our childcare center an extraordinary place for your children.
                    </p>
                    <p className="text-muted-foreground">
                      Thank you for considering our center—I can't wait to welcome your family!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
