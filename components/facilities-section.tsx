import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const facilities = [
  {
    id: "classrooms",
    title: "Bright Classrooms",
    description:
      "Our spacious, sunlit classrooms are designed with learning centers that encourage exploration, creativity, and independence.",
    image: "/images/gallery/daycare-main-room.jpg",
  },
  {
    id: "playground",
    title: "Outdoor Playground",
    description:
      "Our playground features age-appropriate equipment, play areas, and shaded spaces for outdoor activities and fun.",
    image: "/images/gallery/outdoor-playground.webp",
  },
  {
    id: "activity",
    title: "Activity Centers",
    description:
      "Dedicated spaces for different activities allow children to engage in various types of play and learning experiences.",
    image: "/images/gallery/garden-activity.jpeg",
  },
  {
    id: "learning",
    title: "Learning Areas",
    description:
      "Specialized areas with educational materials, books, and manipulatives to support cognitive development.",
    image: "/images/gallery/learning-area-tree.jpg",
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="sunshine-section bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-[#70D6FF]/10 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#90BE6D]/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Learning Spaces</h2>
        <p className="section-subtitle">
          Explore our thoughtfully designed spaces where children can learn, play, and grow.
        </p>

        <Tabs defaultValue="classrooms" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-muted rounded-full p-1 mb-8">
            {facilities.map((facility) => (
              <TabsTrigger
                key={facility.id}
                value={facility.id}
                className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {facility.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {facilities.map((facility) => (
            <TabsContent key={facility.id} value={facility.id} className="mt-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-3xl"></div>
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      width={600}
                      height={400}
                      className="rounded-3xl relative z-10 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground mb-6">{facility.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-2xl">
                      <h4 className="font-bold mb-2">Safety Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Child-safe materials</li>
                        <li>• Secure entry system</li>
                        <li>• Regular safety checks</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-2xl">
                      <h4 className="font-bold mb-2">Learning Benefits</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Promotes exploration</li>
                        <li>• Encourages creativity</li>
                        <li>• Builds independence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment to Quality</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
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
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m7 10 3 3 7-7"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Safe Environment</h4>
                <p className="text-sm text-muted-foreground">
                  Our facilities exceed safety standards with secure entry systems and child-safe materials.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center text-center">
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
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Educational Design</h4>
                <p className="text-sm text-muted-foreground">
                  Every space is intentionally designed to support learning and development.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center text-center">
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
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Quality Materials</h4>
                <p className="text-sm text-muted-foreground">
                  We use high-quality, durable materials and equipment throughout our center.
                </p>
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
