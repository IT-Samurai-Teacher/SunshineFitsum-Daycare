"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SunIcon } from "@/components/icons/sun-icon"
import { useState } from "react"

const programs = [
  {
    id: "infants",
    title: "Infant Care",
    ageRange: "6 months - 18 months",
    description:
      "A nurturing environment for our youngest children with personalized care routines and sensory-rich experiences.",
    image: "/images/gallery/infants-together.jpeg",
    fallbackImage: "/placeholder-5rnfe.png",
    price: "Call for Pricing",
    color: "#FFD166",
  },
  {
    id: "toddlers",
    title: "Toddler Care",
    ageRange: "18 months - 3 years",
    description:
      "Active exploration and discovery with emphasis on language development, motor skills, and social interactions.",
    image: "/images/gallery/toddlers-building.jpeg",
    fallbackImage: "/placeholder-nhbfn.png",
    price: "Call for Pricing",
    color: "#FF9F1C",
  },
  {
    id: "preschool",
    title: "Preschooler Care",
    ageRange: "3 - 6 years",
    description:
      "Comprehensive preschool program preparing children for kindergarten through play-based learning and structured activities.",
    image: "/images/gallery/preschool-crafts.jpeg",
    fallbackImage: "/placeholder-8gfdx.png",
    price: "Call for Pricing",
    color: "#70D6FF",
  },
]

export function ProgramsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (programId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [programId]: true,
    }))
  }

  return (
    <section id="programs" className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-secondary/20 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-primary/20 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Growing <span className="colorful-text-primary">Stages</span>
        </h2>
        <p className="section-subtitle">
          Our age-appropriate programs are designed to nurture each child's development at every stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => (
            <Card key={program.id} className="sunshine-card overflow-hidden flex flex-col h-full" id={program.id}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={imageErrors[program.id] ? program.fallbackImage : program.image}
                  alt={`${program.title} - ${program.ageRange}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                  onError={() => handleImageError(program.id)}
                />
                <div className="absolute top-4 right-4">
                  <div className="rounded-full px-4 py-1 bg-white shadow-md text-sm font-medium">
                    {program.ageRange}
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full mr-2" style={{ backgroundColor: program.color }}></div>
                  <h3 className="text-xl font-fredoka">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-3">{program.description}</p>
                <p className="font-bold text-xl mb-2">
                  {program.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    <a href="tel:+12066889088" className="text-primary hover:underline">
                      +1 (206) 688-9088
                    </a>
                  </span>
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full sunshine-button-secondary">
                  <Link href="/enrollment">Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-fredoka mb-4">
            Our <span className="colorful-text-blue">Curriculum</span> Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-muted flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <SunIcon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-fredoka mb-2">Play-Based Activities</h4>
              <p className="text-sm text-muted-foreground text-center">
                Learning through structured play and engaging activities
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-muted flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 3 3 7-7"></path>
                </svg>
              </div>
              <h4 className="font-fredoka mb-2">Creative Arts</h4>
              <p className="text-sm text-muted-foreground text-center">
                Expressing creativity through various art mediums
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-muted flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#70D6FF]/20 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#70D6FF]"
                >
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M16 18a4 4 0 0 0-8 0"></path>
                </svg>
              </div>
              <h4 className="font-fredoka mb-2">STEM Learning</h4>
              <p className="text-sm text-muted-foreground text-center">Age-appropriate science and math exploration</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-muted flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#90BE6D]/20 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#90BE6D]"
                >
                  <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  <path d="M18 8h4v8h-4"></path>
                  <path d="m15 13-3-3-3 3"></path>
                  <path d="M9 17v-6"></path>
                </svg>
              </div>
              <h4 className="font-fredoka mb-2">Language & Literacy</h4>
              <p className="text-sm text-muted-foreground text-center">
                Building strong communication and pre-reading skills
              </p>
            </div>
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
