"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SunIcon } from "@/components/icons/sun-icon"

export default function ThankYouPageClient() {
  useEffect(() => {
    // Track conversion when the thank you page loads
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17065545233/enrollment_completion",
        value: 1.0,
        currency: "USD",
        transaction_id: "",
      })

      // You can also track it as a standard Google Analytics event
      window.gtag("event", "enrollment_submitted", {
        event_category: "form",
        event_label: "enrollment_form",
        value: 1,
      })
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl w-full mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 text-sunshine-yellow/10 pointer-events-none">
          <SunIcon className="w-full h-full animate-sunray" />
        </div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 text-soft-orange/10 pointer-events-none">
          <SunIcon className="w-full h-full animate-sunray" />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-sunshine-yellow/20 relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 text-sunshine-yellow">
            <SunIcon className="w-full h-full animate-sunray" />
          </div>

          <h1 className="text-4xl md:text-5xl font-fredoka mb-6">🎉 Thank You!</h1>

          <h2 className="text-2xl md:text-3xl font-fredoka mb-4 text-primary">
            We've received your enrollment request.
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            A member of our team will reach out within 2 business days.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button asChild className="sunshine-button-primary">
              <Link href="/about">Learn About Our Program</Link>
            </Button>

            <Button asChild variant="outline" className="sunshine-button-secondary">
              <Link href="/#testimonials">Read What Parents Say</Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-primary hover:underline inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
