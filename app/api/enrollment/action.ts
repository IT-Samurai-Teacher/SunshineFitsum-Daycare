"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Form validation schema with USA phone validation
const enrollmentFormSchema = z.object({
  parentName: z.string().min(2, { message: "Parent name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  // USA phone number validation
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine(
      (val) => {
        // Remove all non-digit characters for validation
        const digitsOnly = val.replace(/\D/g, "")

        // Check if it's a valid USA phone number (10 digits, optionally with country code 1)
        return digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith("1"))
      },
      {
        message: "Please enter a valid USA phone number (10 digits)",
      },
    ),
  childName: z.string().min(2, { message: "Child's name is required" }),
  childDob: z.string().min(2, { message: "Child's date of birth is required" }),
  program: z.string().min(2, { message: "Please select a program" }),
  schedule: z.string().min(2, { message: "Please select a schedule" }),
  startDate: z.string().min(2, { message: "Start date is required" }),
  message: z.string().optional(),
})

// Type for our form data
type EnrollmentFormData = z.infer<typeof enrollmentFormSchema>

export async function submitEnrollmentForm(formData: FormData) {
  try {
    // Extract and validate form data
    const rawFormData = {
      parentName: formData.get("parentName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      childName: formData.get("childName") as string,
      childDob: formData.get("childDob") as string,
      program: formData.get("program") as string,
      schedule: formData.get("schedule") as string,
      startDate: formData.get("startDate") as string,
      message: (formData.get("message") as string) || "",
    }

    // Validate the form data
    const validatedData = enrollmentFormSchema.parse(rawFormData)

    // Format the program name for better readability
    let programName = "Unknown Program"
    switch (validatedData.program) {
      case "infants":
        programName = "Infant Care (6 months - 18 months)"
        break
      case "toddlers":
        programName = "Toddler Care (18 months - 3 years)"
        break
      case "preschool":
        programName = "Preschooler Care (3 - 6 years)"
        break
      case "mixed":
        programName = "Multiple Age Groups (for siblings)"
        break
    }

    // Check if we're in a preview/development environment
    const isPreviewOrDev =
      process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview" || !process.env.EMAIL_APP_PASSWORD

    if (isPreviewOrDev) {
      // Log the form data instead of sending an email in preview/development
      console.log("ENROLLMENT FORM SUBMISSION (PREVIEW MODE):", {
        parentName: validatedData.parentName,
        email: validatedData.email,
        phone: validatedData.phone,
        childName: validatedData.childName,
        childDob: validatedData.childDob,
        program: programName,
        schedule: validatedData.schedule,
        startDate: validatedData.startDate,
        message: validatedData.message,
      })

      // Return success for preview/development
      return {
        success: true,
        message: "Your enrollment request has been submitted successfully! (Preview Mode - Email not sent)",
      }
    }

    // For production with proper email configuration:
    // Email configuration
    const emailConfig = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    }

    // Create email transporter
    const transporter = nodemailer.createTransport(emailConfig)

    // Format the schedule for better readability
    let scheduleName = "Unknown Schedule"
    switch (validatedData.schedule) {
      case "fulltime":
        scheduleName = "Full-time (Monday-Friday)"
        break
      case "parttime":
        scheduleName = "Part-time (Select days)"
        break
      case "saturday":
        scheduleName = "Saturday care"
        break
    }

    // Format date for better readability
    const formattedDob = new Date(validatedData.childDob).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const formattedStartDate = new Date(validatedData.startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Email content for the daycare
    const mailOptions = {
      from: {
        name: "Sunshine Fitsum Daycare",
        address: process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com",
      },
      to: process.env.EMAIL_USER, // Send to yourself (fitsum@sunshinefitsumdaycare.com)
      replyTo: validatedData.email, // Set reply-to as the visitor's email
      subject: `New Enrollment Request: ${validatedData.childName}`,
      html: `
        <h2>New Enrollment Request</h2>
        <h3>Parent/Guardian Information</h3>
        <p><strong>Name:</strong> ${validatedData.parentName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        
        <h3>Child Information</h3>
        <p><strong>Name:</strong> ${validatedData.childName}</p>
        <p><strong>Date of Birth:</strong> ${formattedDob}</p>
        
        <h3>Program Details</h3>
        <p><strong>Program:</strong> ${programName}</p>
        <p><strong>Schedule:</strong> ${scheduleName}</p>
        <p><strong>Desired Start Date:</strong> ${formattedStartDate}</p>
        
        ${
          validatedData.message
            ? `
        <h3>Additional Information</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        `
            : ""
        }
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optional: Send confirmation email to the user
    if (process.env.SEND_CONFIRMATION === "true") {
      const confirmationMail = {
        from: {
          name: "Sunshine Fitsum Daycare",
          address: process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com",
        },
        to: validatedData.email,
        replyTo: process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com",
        subject: "Thank you for your enrollment request",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sunshine Fitsum Daycare - Enrollment Request</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #FFD166;
                border-radius: 10px;
              }
              .header {
                text-align: center;
                margin-bottom: 20px;
              }
              .header h1 {
                color: #FF9F1C;
                margin-bottom: 5px;
              }
              .content {
                padding: 15px 0;
              }
              .summary {
                background-color: #FFF7E8;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #666;
              }
              .footer a {
                color: #FF9F1C;
                text-decoration: none;
              }
              @media only screen and (max-width: 480px) {
                .email-container {
                  width: 100%;
                  padding: 10px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1>Welcome to Sunshine Fitsum Daycare!</h1>
                <p>We're excited about your enrollment request</p>
              </div>
              
              <div class="content">
                <p>Dear ${validatedData.parentName},</p>
                
                <p>Thank you for your interest in Sunshine Fitsum Daycare! We have received your enrollment request for ${validatedData.childName} in our ${programName} program.</p>
                
                <p>Here's what happens next:</p>
                <ol>
                  <li>We will review your request within 1-2 business days</li>
                  <li>Our director will contact you to schedule a tour of our facility</li>
                  <li>We'll discuss availability and answer any questions you may have</li>
                  <li>If you decide to proceed, we'll provide enrollment paperwork</li>
                </ol>
                
                <div class="summary">
                  <p><strong>Request Summary:</strong></p>
                  <p><strong>Child:</strong> ${validatedData.childName}</p>
                  <p><strong>Program:</strong> ${programName}</p>
                  <p><strong>Desired Start Date:</strong> ${formattedStartDate}</p>
                </div>
                
                <p>If you have any immediate questions, please don't hesitate to call us at +1 (206) 688-9088.</p>
                
                <p>Warm regards,</p>
                <p>Fitsum Wodajo<br>
                Founder & Director<br>
                Sunshine Fitsum Daycare<br>
                +1 (206) 688-9088</p>
              </div>
              
              <div class="footer">
                <p>1905 Walnut Street, Everett, WA 98201<br>
                <a href="https://sunshinefitsumdaycare.com" target="_blank">sunshinefitsumdaycare.com</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Welcome to Sunshine Fitsum Daycare!

Dear ${validatedData.parentName},

Thank you for your interest in Sunshine Fitsum Daycare! We have received your enrollment request for ${validatedData.childName} in our ${programName} program.

Here's what happens next:
1. We will review your request within 1-2 business days
2. Our director will contact you to schedule a tour of our facility
3. We'll discuss availability and answer any questions you may have
4. If you decide to proceed, we'll provide enrollment paperwork

REQUEST SUMMARY:
Child: ${validatedData.childName}
Program: ${programName}
Desired Start Date: ${formattedStartDate}

If you have any immediate questions, please don't hesitate to call us at +1 (206) 688-9088.

Warm regards,
Fitsum Wodajo
Founder & Director
Sunshine Fitsum Daycare
+1 (206) 688-9088

1905 Walnut Street, Everett, WA 98201
sunshinefitsumdaycare.com
        `,
        headers: {
          "List-Unsubscribe": `<mailto:${process.env.EMAIL_USER}?subject=Unsubscribe>`,
          "X-Entity-Ref-ID": `enrollment-${Date.now()}`,
        },
      }

      await transporter.sendMail(confirmationMail)
    }

    return { success: true, message: "Your enrollment request has been submitted successfully!" }
  } catch (error) {
    console.error("Enrollment form error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }
    return { success: false, message: "Failed to submit your enrollment request. Please try again later." }
  }
}
