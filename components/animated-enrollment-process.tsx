"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckCircle, Calendar, FileText, Users, Home } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Submit Enrollment Request",
    description: "Fill out our online enrollment form with your information and preferences.",
    icon: FileText,
    color: "bg-primary/20",
    textColor: "text-primary",
  },
  {
    id: 2,
    title: "Schedule a Tour",
    description: "Visit our facility, meet our staff, and see our learning environment firsthand.",
    icon: Calendar,
    color: "bg-secondary/20",
    textColor: "text-secondary",
  },
  {
    id: 3,
    title: "Complete Registration",
    description: "Submit required documents and complete the registration process.",
    icon: CheckCircle,
    color: "bg-sky-blue/20",
    textColor: "text-sky-blue",
  },
  {
    id: 4,
    title: "Meet & Greet",
    description: "Bring your child for a short visit to meet teachers and explore the classroom.",
    icon: Users,
    color: "bg-soft-orange/20",
    textColor: "text-soft-orange",
  },
  {
    id: 5,
    title: "Welcome to Our Family!",
    description: "Your child's first day at Sunshine Fitsum Daycare begins!",
    icon: Home,
    color: "bg-baby-pink/20",
    textColor: "text-baby-pink",
  },
]

export function AnimatedEnrollmentProcess() {
  const [activeStep, setActiveStep] = useState(1)
  const pathname = usePathname()
  const isEnrollmentPage = pathname === "/enrollment"

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Handle scroll to form when on enrollment page
  const handleScrollToForm = () => {
    if (isEnrollmentPage) {
      const formElement = document.getElementById("enrollment-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        {/* Progress bar - hidden on all devices */}
        <div className="hidden absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep - 1) * 25}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 relative cursor-pointer`}
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: activeStep === step.id ? [1, 1.1, 1] : 1,
                  boxShadow: activeStep === step.id ? "0 0 0 4px rgba(255, 209, 102, 0.5)" : "none",
                }}
                transition={{
                  duration: 0.5,
                  repeat: activeStep === step.id ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
                onClick={() => setActiveStep(step.id)}
              >
                <step.icon className={`w-8 h-8 ${step.textColor}`} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-primary text-xs font-bold">
                  {step.id}
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                animate={{
                  opacity: activeStep === step.id ? 1 : 0.7,
                }}
              >
                <h3 className="font-fredoka text-base mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile description (only visible on small screens) */}
      <motion.div
        className="mt-6 md:hidden bg-gray-50 p-4 rounded-lg"
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-center">{steps.find((step) => step.id === activeStep)?.description}</p>
      </motion.div>

      <div className="mt-8 text-center">
        {isEnrollmentPage ? (
          <Button onClick={handleScrollToForm} className="sunshine-button-primary">
            Start Enrollment Process
          </Button>
        ) : (
          <Button asChild className="sunshine-button-primary">
            <Link href="/enrollment#enrollment-form">Start Enrollment Process</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
