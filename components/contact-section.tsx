"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { submitContactForm } from "@/app/api/contact/action"
import Image from "next/image"
import Link from "next/link"

export function ContactSection() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
    errors?: { field: string | number; message: string }[]
  }>({
    status: "idle",
    message: "",
  })

  const [phoneValue, setPhoneValue] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "")

    // Format the phone number as (XXX) XXX-XXXX
    let formattedNumber = ""
    if (digitsOnly.length <= 3) {
      formattedNumber = digitsOnly
    } else if (digitsOnly.length <= 6) {
      formattedNumber = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`
    } else {
      formattedNumber = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
    }

    return formattedNumber
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formattedValue = formatPhoneNumber(value)
    setPhoneValue(formattedValue)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setFormState({ status: "submitting", message: "Sending your message..." })

    try {
      const formData = new FormData(formRef.current)
      const result = await submitContactForm(formData)

      if (result.success) {
        setFormState({
          status: "success",
          message: result.message,
        })

        // Redirect to thank you page on successful submission
        router.push("/thank-you")
      } else {
        setFormState({
          status: "error",
          message: result.message,
          errors: result.errors,
        })
      }
    } catch (error) {
      setFormState({
        status: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    }
  }

  const resetForm = () => {
    setFormState({ status: "idle", message: "" })
    setPhoneValue("")
  }

  return (
    <section id="contact" className="sunshine-section bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Contact <span className="text-primary font-bold">Us</span>
        </h2>
        <p className="section-subtitle">
          Have questions? We're here to help! Reach out to us using the form below or contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="sunshine-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <h3 className="text-xl font-fredoka mb-4">Send Us a Message</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>

              <div className="p-6">
                {formState.status === "success" ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-fredoka mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      {formState.message || "Thank you for reaching out. We'll be in touch with you shortly."}
                    </p>
                    <Button variant="outline" className="sunshine-button-secondary" onClick={resetForm}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    {formState.status === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">{formState.message}</p>
                          {formState.errors && formState.errors.length > 0 && (
                            <ul className="mt-1 text-sm list-disc list-inside">
                              {formState.errors.map((error, index) => (
                                <li key={index}>{error.message}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        required
                        aria-describedby="phone-hint"
                      />
                      <p id="phone-hint" className="text-xs text-muted-foreground">
                        Please enter a 10-digit USA phone number
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sunshine-button-primary"
                      disabled={formState.status === "submitting"}
                    >
                      {formState.status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="sunshine-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-fredoka mb-4">
                  Contact <span className="text-[#0A7B83] font-bold">Information</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-fredoka">Phone</p>
                      <a
                        href="tel:+12066889088"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +1 (206) 688-9088
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-fredoka">Email</p>
                      <a
                        href="mailto:Hello@sunshinefitsumdaycare.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Hello@sunshinefitsumdaycare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#70D6FF]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#70D6FF]" />
                    </div>
                    <div>
                      <p className="font-fredoka">Location</p>
                      <a
                        href="https://maps.google.com/?q=1905+Walnut+Street,+Everett,+WA+98201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        1905 Walnut Street
                        <br />
                        Everett, WA 98201
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#90BE6D]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#90BE6D]" />
                    </div>
                    <div>
                      <p className="font-fredoka">Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 6:00 AM - 5:30 PM</p>
                      <p className="text-muted-foreground">Saturday: 6:00 AM - 5:30 PM (with registration)</p>
                      <p className="text-muted-foreground">Closed on Sundays & Major Holidays</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="sunshine-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="/images/weekend-care.jpg"
                    alt="Child playing outdoors during weekend care"
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-fredoka mb-4">
                    Weekend <span className="colorful-text-green">Care</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Weekend care is available on Saturdays with advance registration. Our weekend program includes
                    outdoor exploration, gardening activities, and nature-based play. Please contact us ahead of time to
                    reserve your spot and inquire about pricing.
                  </p>
                  <Button asChild className="w-full sunshine-button-primary">
                    <Link href="/contact#contact-form">Book a Tour</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
