import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Sarah Johnson",
    role: "Center Director",
    bio: "With over 15 years in early childhood education, Sarah brings warmth and expertise to our Sunshine family.",
    image: "/placeholder.svg?key=a060z",
  },
  {
    name: "Michael Chen",
    role: "Lead Teacher - Preschool",
    bio: "Michael's creative approach to learning makes every day an adventure for our Growing Gardeners.",
    image: "/placeholder.svg?key=adswh",
  },
  {
    name: "Aisha Williams",
    role: "Lead Teacher - Toddlers",
    bio: "Aisha's patience and energy are perfectly matched for guiding our curious Sunshine Explorers.",
    image: "/placeholder.svg?key=3yzgh",
  },
  {
    name: "David Rodriguez",
    role: "Lead Teacher - Infants",
    bio: "David's gentle nature creates a nurturing environment for our youngest Tiny Sunbeams.",
    image: "/placeholder.svg?key=3o9y9",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Sunshine Team</h2>
        <p className="section-subtitle">
          Meet our dedicated educators who bring warmth, expertise, and joy to every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member) => (
            <Card key={member.name} className="sunshine-card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 text-sm">1</span>
                Education & Training
              </h4>
              <ul className="space-y-2 pl-10">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">
                    All lead teachers have degrees in Early Childhood Education
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">Ongoing professional development for all staff</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">Specialized training in nature-based curriculum</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-2 text-sm">
                  2
                </span>
                Safety & Certifications
              </h4>
              <ul className="space-y-2 pl-10">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">CPR and First Aid certified</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">Background checks for all staff members</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm">Health and safety training</span>
                </li>
              </ul>
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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
