"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SunIcon } from "@/components/icons/sun-icon"
import { submitEnrollmentForm } from "@/app/api/enrollment/action"
import { AlertCircle } from "lucide-react"

export function EnrollmentSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [phoneValue, setPhoneValue] = useState("")
  const router = useRouter()

  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
    errors?: { field: string | number; message: string }[]
  }>({
    status: "idle",
    message: "",
  })

  const formRef = useRef<HTMLFormElement>(null)

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

    setFormState({ status: "submitting", message: "Submitting your enrollment request..." })

    try {
      const formData = new FormData(formRef.current)
      const result = await submitEnrollmentForm(formData)

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

  return (
    <section id="enrollment" className="sunshine-section bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="colorful-text-primary">Enrollment</span>
        </h2>
        <p className="section-subtitle">
          Join our Sunshine family! Complete the form below to begin the enrollment process.
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <Card id="enrollment-form" className="sunshine-card overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary h-3"></div>
            <CardHeader className="relative">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <SunIcon className="w-full h-full text-primary" />
              </div>
              <CardTitle className="text-2xl font-fredoka">Enrollment Request</CardTitle>
              <CardDescription>
                Fill out this form to start the enrollment process. We'll contact you within 2 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-fredoka mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your enrollment request has been submitted. We'll contact you soon to discuss the next steps.
                  </p>
                  <Button
                    variant="outline"
                    className="sunshine-button-secondary"
                    onClick={() => {
                      setFormSubmitted(false)
                      setPhoneValue("")
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {formState.status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name</Label>
                      <Input id="parentName" name="parentName" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
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
                      <Label htmlFor="childName">Child's Name</Label>
                      <Input id="childName" name="childName" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childDob">Child's Date of Birth</Label>
                      <Input id="childDob" name="childDob" type="date" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Program Interest</Label>
                      <div className="bg-primary/5 p-4 rounded-xl mb-2">
                        <p className="text-sm text-muted-foreground mb-3">
                          Please select the program that best matches your child's age:
                        </p>
                        <Select name="program">
                          <SelectTrigger id="program" className="bg-white">
                            <SelectValue placeholder="-- Select a program --" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="infants">Infant Care (6 months - 18 months)</SelectItem>
                            <SelectItem value="toddlers">Toddler Care (18 months - 3 years)</SelectItem>
                            <SelectItem value="preschool">Preschooler Care (3 - 6 years)</SelectItem>
                            <SelectItem value="mixed">Multiple Age Groups (for siblings)</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="mt-3 text-xs text-muted-foreground">
                          <p>Not sure which program? Select based on your child's age on their desired start date.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rest of the form remains the same */}
                  <div className="space-y-2">
                    <Label>Schedule Needed</Label>
                    <RadioGroup defaultValue="fulltime" name="schedule" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fulltime" id="fulltime" />
                        <Label htmlFor="fulltime" className="font-normal">
                          Full-time (Monday-Friday)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parttime" id="parttime" />
                        <Label htmlFor="parttime" className="font-normal">
                          Part-time (Select days)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="saturday" id="saturday" />
                        <Label htmlFor="saturday" className="font-normal">
                          Saturday care (Advance registration required)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Desired Start Date</Label>
                    <Input id="startDate" name="startDate" type="date" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share any additional information about your child that would help us understand their needs."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sunshine-button-primary"
                    disabled={formState.status === "submitting"}
                  >
                    {formState.status === "submitting" ? "Submitting..." : "Submit Enrollment Request"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Cards section remains the same */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="sunshine-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="font-fredoka mb-2">Enrollment Process</h3>
              <p className="text-sm text-muted-foreground">
                After submitting your request, we'll schedule a tour and provide enrollment paperwork.
              </p>
            </CardContent>
          </Card>

          <Card className="sunshine-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="font-fredoka mb-2">Required Documents</h3>
              <p className="text-sm text-muted-foreground">
                You'll need to provide immunization records, emergency contacts, and medical information.
              </p>
            </CardContent>
          </Card>

          <Card className="sunshine-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#70D6FF]/20 flex items-center justify-center mb-4">
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
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="font-fredoka mb-2">Transition Period</h3>
              <p className="text-sm text-muted-foreground">
                We offer a gradual transition schedule to help your child adjust comfortably to our center.
              </p>
            </CardContent>
          </Card>
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
