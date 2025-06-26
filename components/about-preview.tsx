import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="sunshine-section bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Sunshine Fitsum Daycare was born from a dream and a deep-rooted passion for nurturing children. As a
              mother and caregiver at heart, Fitsum Wodajo envisioned creating a special place where children would feel
              truly at home while their parents are away—a place filled with laughter, learning, and love.
            </p>
            <blockquote className="bg-cream p-6 rounded-2xl shadow-sm border-l-4 border-primary my-6">
              <p className="italic text-muted-foreground">
                "I believe that the early years are precious and fleeting. My promise to you is that we'll treasure
                every moment with your child, nurturing their unique spirit and potential."
              </p>
              <footer className="font-medium mt-2">— Fitsum Wodajo</footer>
            </blockquote>
            <div className="mt-8">
              <Button asChild className="sunshine-button-primary">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-full"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Owner%20Sunshine%20Fitsum%20Daycare-PQTyXV4T3EDMIidIhtqLx3Q1bEuGYS.png"
                  alt="Fitsum Wodajo - Founder & Director"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
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
