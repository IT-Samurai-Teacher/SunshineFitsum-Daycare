"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Gallery categories
const categories = [
  { id: "all", name: "All Photos" },
  { id: "classrooms", name: "Classrooms" },
  { id: "infant-room", name: "Infant Room" },
  { id: "play-areas", name: "Play Areas" },
  { id: "learning", name: "Learning Spaces" },
  { id: "outdoor", name: "Outdoor Play" },
  { id: "activities", name: "Daily Activities" },
  { id: "reading", name: "Reading & Learning" },
]

// Gallery items with real images
const galleryItems = [
  // Original images
  {
    id: 1,
    category: ["classrooms", "infant-room"],
    title: "Infant Room",
    description: "Our cozy and bright infant room with comfortable cribs and play space",
    image: "/images/gallery/infant-room-view.jpg",
  },
  {
    id: 2,
    category: ["classrooms", "infant-room"],
    title: "Infant Room - Wide View",
    description: "Another view of our infant room showing the alphabet wall decorations",
    image: "/images/gallery/infant-room-wide.jpg",
  },
  {
    id: 3,
    category: ["classrooms", "infant-room"],
    title: "Crib Area",
    description: "Comfortable and safe sleeping area for our youngest children",
    image: "/images/gallery/crib-closeup.jpg",
  },
  {
    id: 4,
    category: ["play-areas"],
    title: "Indoor Play Area",
    description: "Colorful play space with rainbow rug and educational toys",
    image: "/images/gallery/indoor-play-area.jpg",
  },
  {
    id: 5,
    category: ["play-areas"],
    title: "Main Play Room",
    description: "Our main daycare space with plenty of room for activities",
    image: "/images/gallery/daycare-main-room.jpg",
  },
  {
    id: 6,
    category: ["learning"],
    title: "Learning Area with Tree Mural",
    description: "Creative learning space with our special heart tree mural",
    image: "/images/gallery/learning-area-tree.jpg",
  },
  {
    id: 7,
    category: ["play-areas"],
    title: "Play Area with Handprint Rug",
    description: "Fun play space with our colorful handprint rug",
    image: "/images/gallery/play-area-handprints.jpg",
  },
  {
    id: 8,
    category: ["classrooms"],
    title: "Daycare Entrance",
    description: "Welcoming entrance to our daycare facility",
    image: "/images/gallery/daycare-entrance.jpg",
  },
  {
    id: 9,
    category: ["learning"],
    title: "Bookshelf and Licenses",
    description: "Our reading corner and official licenses display",
    image: "/images/gallery/bookshelf-licenses.jpg",
  },
  {
    id: 10,
    category: ["infant-room", "play-areas"],
    title: "Teepee Play Area",
    description: "Cozy teepee play tent with plush toys in our infant room",
    image: "/images/gallery/kids-play-teepee-2.jpeg",
  },
  {
    id: 11,
    category: ["outdoor"],
    title: "Garden Activities",
    description: "Children learn about nature through hands-on gardening activities",
    image: "/images/gallery/garden-activity.jpeg",
  },
  {
    id: 12,
    category: ["infant-room"],
    title: "Infants Together",
    description: "Our youngest children enjoying social time together",
    image: "/images/gallery/infants-together.jpeg",
  },
  {
    id: 13,
    category: ["infant-room", "play-areas"],
    title: "Teepee Play Space",
    description: "A closer look at our cozy teepee with plush fruit toys",
    image: "/images/gallery/teepee-closeup.jpeg",
  },
  {
    id: 14,
    category: ["infant-room", "play-areas"],
    title: "Infant Play Area",
    description: "Bright and colorful play space with comfortable seating",
    image: "/images/gallery/play-area-teepee.jpeg",
  },
  {
    id: 15,
    category: ["learning", "classrooms"],
    title: "Toddlers Building Together",
    description: "Children developing fine motor skills and social interaction through block play",
    image: "/images/gallery/toddlers-building.jpeg",
  },
  {
    id: 16,
    category: ["learning", "classrooms"],
    title: "Preschool Arts & Crafts",
    description: "Creative expression through arts and crafts activities",
    image: "/images/gallery/preschool-crafts.jpeg",
  },
  {
    id: 17,
    category: ["learning", "classrooms"],
    title: "Preschool Learning Area",
    description: "Our preschool area with activity table and heart tree mural",
    image: "/images/gallery/preschool-learning-area.jpeg",
  },
  {
    id: 18,
    category: ["outdoor"],
    title: "Outdoor Playground",
    description: "Our spacious outdoor play area with ride-on toys and activity stations",
    image: "/images/gallery/outdoor-playground.webp",
  },

  // New images
  {
    id: 19,
    category: ["reading", "learning"],
    title: "Story Time by the Window",
    description: "A quiet moment of reading and discovery in our bright, sunlit space",
    image: "/images/gallery/girl-reading-window.png",
  },
  {
    id: 20,
    category: ["activities", "outdoor"],
    title: "Outdoor Learning Activities",
    description: "Developing independence and practical skills through engaging outdoor activities",
    image: "/images/gallery/girl-green-apron.png",
  },
  {
    id: 21,
    category: ["play-areas", "learning"],
    title: "Imaginative Play Corner",
    description: "Children exploring creativity and social skills with our dollhouse and play furniture",
    image: "/images/gallery/children-playing-dollhouse.png",
  },
  {
    id: 22,
    category: ["activities", "learning"],
    title: "Nature & Science Exploration",
    description: "Learning about plant growth and natural science through hands-on experiences",
    image: "/images/gallery/boy-with-flowers.png",
  },
  {
    id: 23,
    category: ["reading", "learning"],
    title: "Cozy Reading Nook",
    description: "Children enjoying stories together in our comfortable reading area",
    image: "/images/gallery/children-reading-together.png",
  },
  {
    id: 24,
    category: ["activities", "learning"],
    title: "Arts & Crafts Station",
    description: "Developing fine motor skills and creativity at our dedicated craft table",
    image: "/images/gallery/children-craft-table.png",
  },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category.includes(activeCategory))

  return (
    <section className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/20 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-secondary/20 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Our <span className="colorful-text-primary">Gallery</span>
        </h2>
        <p className="section-subtitle">
          Take a visual tour of our daycare facilities, activities, and learning spaces.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${activeCategory === category.id ? "bg-primary text-foreground" : "bg-white"}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={85}
                  onError={(e) => {
                    // If image fails to load, replace with placeholder
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(item.title)}`
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-fredoka text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty state if no images match the filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found in this category.</p>
          </div>
        )}

        {/* Image lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-[70vh]">
                  <Image
                    src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                    alt={galleryItems.find((item) => item.id === selectedImage)?.title || ""}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                    quality={90}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-fredoka text-xl">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {galleryItems.find((item) => item.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 mb-16 text-center relative z-10">
          <p className="text-muted-foreground italic bg-cream px-4 py-2 inline-block rounded-lg">
            These photos showcase our actual facilities and spaces where your children will learn and play.
          </p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
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
