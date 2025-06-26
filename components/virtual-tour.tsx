"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Info, Maximize2, Volume2, VolumeX } from "lucide-react"

// Tour locations with their images and descriptions
const tourLocations = [
  {
    id: "entrance",
    name: "Welcoming Entrance",
    image: "/images/gallery/daycare-entrance.jpg",
    description: "Our bright and secure entrance welcomes families with colorful decorations and our check-in system.",
    hotspots: [
      { x: 70, y: 30, target: "main-room", label: "Main Room" },
      { x: 30, y: 60, target: "info-desk", label: "Information Desk" },
    ],
  },
  {
    id: "main-room",
    name: "Main Activity Room",
    image: "/images/gallery/daycare-main-room.jpg",
    description: "Our spacious main room features multiple learning centers and plenty of space for group activities.",
    hotspots: [
      { x: 20, y: 40, target: "entrance", label: "Entrance" },
      { x: 80, y: 50, target: "infant-room", label: "Infant Room" },
      { x: 50, y: 70, target: "play-area", label: "Play Area" },
    ],
  },
  {
    id: "infant-room",
    name: "Infant Room",
    image: "/images/gallery/infant-room-wide.jpg",
    description:
      "Our infant room provides a safe, nurturing environment with age-appropriate toys and comfortable cribs.",
    hotspots: [
      { x: 15, y: 50, target: "main-room", label: "Main Room" },
      { x: 75, y: 40, target: "crib-area", label: "Crib Area" },
    ],
  },
  {
    id: "crib-area",
    name: "Crib Area",
    image: "/images/gallery/crib-closeup.jpg",
    description:
      "Our peaceful sleeping area ensures babies get the rest they need in a comfortable, monitored environment.",
    hotspots: [{ x: 20, y: 50, target: "infant-room", label: "Infant Room" }],
  },
  {
    id: "play-area",
    name: "Indoor Play Area",
    image: "/images/gallery/indoor-play-area.jpg",
    description:
      "Our colorful play area features soft flooring and a variety of toys to encourage exploration and fun.",
    hotspots: [
      { x: 30, y: 30, target: "main-room", label: "Main Room" },
      { x: 70, y: 60, target: "learning-area", label: "Learning Area" },
    ],
  },
  {
    id: "learning-area",
    name: "Learning Area",
    image: "/images/gallery/learning-area-tree.jpg",
    description:
      "Our learning area features our signature heart tree mural and comfortable spaces for reading and activities.",
    hotspots: [{ x: 20, y: 40, target: "play-area", label: "Play Area" }],
  },
  {
    id: "info-desk",
    name: "Information Desk",
    image: "/images/gallery/bookshelf-licenses.jpg",
    description: "Our information area displays our licenses and provides resources for parents.",
    hotspots: [{ x: 60, y: 50, target: "entrance", label: "Back to Entrance" }],
  },
]

export function VirtualTour() {
  const [currentLocation, setCurrentLocation] = useState(tourLocations[0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Handle location change
  const navigateTo = (locationId: string) => {
    const location = tourLocations.find((loc) => loc.id === locationId)
    if (location) {
      setIsLoading(true)
      setCurrentLocation(location)

      // Play a subtle transition sound if not muted
      if (audioRef.current && !isMuted && audioRef.current.readyState >= 2) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch((e) => console.log("Audio play prevented:", e))
      }
    }
  }

  // Navigate to next/previous location
  const navigateNext = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const nextIndex = (currentIndex + 1) % tourLocations.length
    navigateTo(tourLocations[nextIndex].id)
  }

  const navigatePrevious = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const prevIndex = (currentIndex - 1 + tourLocations.length) % tourLocations.length
    navigateTo(tourLocations[prevIndex].id)
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Toggle audio
  const toggleAudio = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="w-full max-w-6xl mx-auto" ref={containerRef}>
      <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
        <CardContent className="p-0">
          <div className="relative aspect-[16/9] w-full">
            {/* Main tour image */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <Image
              src={currentLocation.image || "/placeholder.svg"}
              alt={currentLocation.name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              onLoad={() => setIsLoading(false)}
            />

            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Hotspots */}
            {!isLoading &&
              currentLocation.hotspots.map((hotspot, index) => (
                <button
                  key={index}
                  className="absolute z-20 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onClick={() => navigateTo(hotspot.target)}
                  aria-label={`Navigate to ${hotspot.label}`}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-4 h-4 bg-white rounded-full animate-ping opacity-75 duration-1000"></span>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                  </span>
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {hotspot.label}
                  </span>
                </button>
              ))}

            {/* Navigation controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-20">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 text-white border-0 hover:bg-black/70 rounded-full"
                onClick={navigatePrevious}
                aria-label="Previous location"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 text-white border-0 hover:bg-black/70 rounded-full"
                onClick={navigateNext}
                aria-label="Next location"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Control buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 text-white border-0 hover:bg-black/70 rounded-full"
                onClick={() => setShowInfo(!showInfo)}
                aria-label={showInfo ? "Hide information" : "Show information"}
              >
                <Info className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 text-white border-0 hover:bg-black/70 rounded-full"
                onClick={toggleAudio}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 text-white border-0 hover:bg-black/70 rounded-full"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Location info */}
            {showInfo && !isLoading && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white z-10">
                <h3 className="text-xl font-fredoka mb-1">{currentLocation.name}</h3>
                <p className="text-sm opacity-90">{currentLocation.description}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tour thumbnails */}
      <div className="mt-4 grid grid-cols-4 md:grid-cols-7 gap-2">
        {tourLocations.map((location) => (
          <button
            key={location.id}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              currentLocation.id === location.id
                ? "border-primary scale-105 shadow-md"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            onClick={() => navigateTo(location.id)}
            aria-label={`View ${location.name}`}
          >
            <Image
              src={location.image || "/placeholder.svg"}
              alt={location.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 100px"
            />
          </button>
        ))}
      </div>

      {/* Hidden audio element for sound effects */}
      <audio ref={audioRef} className="hidden" preload="none">
        <source src="/sounds/transition.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
