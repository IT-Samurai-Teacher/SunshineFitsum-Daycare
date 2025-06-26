"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AnimatedServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  color: string
  link: string
  linkText: string
}

export function AnimatedServiceCard({
  title,
  description,
  icon,
  image,
  color,
  link,
  linkText,
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const fallbackImage = `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(title)}`

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4"
      style={{ borderTopColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.5 }} className="h-full w-full">
          <Image
            src={imageError ? fallbackImage : image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        </motion.div>

        <motion.div
          className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
          animate={{
            y: isHovered ? [0, -10, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          }}
        >
          {icon}
        </motion.div>
      </div>

      <CardContent className="p-6">
        <motion.h3
          className="text-xl font-fredoka mb-3"
          animate={{ color: isHovered ? color : "#000000" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <p className="text-muted-foreground mb-4">{description}</p>

        <motion.div
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: 1,
            y: isHovered ? [0, -5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            repeatType: "reverse",
          }}
        >
          <Button asChild variant="outline" className="w-full">
            <Link href={link}>{linkText}</Link>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}
