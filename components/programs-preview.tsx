"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const programs = [
  {
    id: "infants",
    title: "Infant Care",
    ageRange: "6 months - 18 months",
    description: "A nurturing environment for our youngest children with personalized care routines.",
    image: "/images/infants-program.jpg",
    fallbackImage: "/placeholder-5rnfe.png",
    price: "Call for Pricing",
    color: "#F7B731", // Sunshine Yellow
  },
  {
    id: "toddlers",
    title: "Toddler Care",
    ageRange: "18 months - 3 years",
    description: "Active exploration and discovery with emphasis on language development and motor skills.",
    image: "/images/toddlers-program.jpg",
    fallbackImage: "/placeholder-nhbfn.png",
    price: "Call for Pricing",
    color: "#F97316", // Soft Orange
  },
  {
    id: "preschool",
    title: "Preschooler Care",
    ageRange: "3 - 6 years",
    description: "Comprehensive preschool program preparing children for kindergarten through play-based learning.",
    image: "/images/preschool-program.jpg",
    fallbackImage: "/placeholder-8gfdx.png",
    price: "Call for Pricing",
    color: "#2DD4BF", // Sky Blue
  },
]

export function ProgramsPreview() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (programId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [programId]: true,
    }))
  }

  return (
    <section className="sunshine-section bg-cream relative">
      {/* Decorative elements with logo colors */}
      <div className="absolute top-20 right-10 w-24 h-24 decoration-orange rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 decoration-sunshine rounded-full"></div>
      <div className="absolute top-40 left-1/3 w-12 h-12 decoration-teal rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Our <span className="colorful-text-primary">Programs</span>
        </h2>
        <p className="section-subtitle">
          Age-appropriate programs designed to nurture each child's development at every stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => (
            <Card key={program.id} className="sunshine-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
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
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full mr-2" style={{ backgroundColor: program.color }}></div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-2">{program.description}</p>
                <p className="font-bold text-lg mb-4">
                  {program.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    <a href="tel:+12066889088" className="text-primary hover:underline">
                      +1 (206) 688-9088
                    </a>
                  </span>
                </p>
                <Button asChild variant="outline" className="w-full sunshine-button-secondary">
                  <Link href={`/programs#${program.id}`}>Learn More about {program.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="sunshine-button-primary">
            <Link href="/programs">View All Programs</Link>
          </Button>
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
