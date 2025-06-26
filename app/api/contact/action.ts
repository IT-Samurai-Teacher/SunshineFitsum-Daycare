"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  // Add phone number field with USA validation
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
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Type for our form data
type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract and validate form data
    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate the form data
    const validatedData = contactFormSchema.parse(rawFormData)

    // Check if we're in a preview/development environment
    const isPreviewOrDev =
      process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview" || !process.env.EMAIL_APP_PASSWORD

    if (isPreviewOrDev) {
      // Log the form data instead of sending an email in preview/development
      console.log("CONTACT FORM SUBMISSION (PREVIEW MODE):", {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      })

      // Return success for preview/development
      return {
        success: true,
        message: "Your message has been submitted successfully! (Preview Mode - Email not sent)",
      }
    }

    // Email configuration
    const emailConfig = {
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 465, // Secure port for Gmail
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // fitsum@sunshinefitsumdaycare.com
        pass: process.env.EMAIL_APP_PASSWORD, // App Password from Google
      },
    }

    // Create email transporter
    const transporter = nodemailer.createTransport(emailConfig)

    // Email content for the daycare
    const mailOptions = {
      from: {
        name: "Sunshine Fitsum Daycare",
        address: process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com",
      },
      to: process.env.EMAIL_USER, // Send to yourself (fitsum@sunshinefitsumdaycare.com)
      replyTo: validatedData.email,
      subject: `Website Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
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
        subject: "Thank you for contacting us",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sunshine Fitsum Daycare - Contact Confirmation</title>
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
              .message-box {
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
                <h1>We've Received Your Message</h1>
                <p>Thank you for reaching out to Sunshine Fitsum Daycare</p>
              </div>
              
              <div class="content">
                <p>Dear ${validatedData.name},</p>
                
                <p>Thank you for contacting Sunshine Fitsum Daycare. We have received your message and will get back to you as soon as possible.</p>
                
                <div class="message-box">
                  <p><strong>Your message details:</strong></p>
                  <p><strong>Subject:</strong> ${validatedData.subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
                </div>
                
                <p>If you have any immediate questions, please don't hesitate to call us at +1 (206) 688-9088.</p>
                
                <p>Warm regards,</p>
                <p>Sunshine Fitsum Daycare Team<br>
                +1 (206) 688-9088<br>
                <a href="mailto:${process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com"}">${process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com"}</a></p>
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
We've Received Your Message

Dear ${validatedData.name},

Thank you for contacting Sunshine Fitsum Daycare. We have received your message and will get back to you as soon as possible.

YOUR MESSAGE DETAILS:
Subject: ${validatedData.subject}
Message: ${validatedData.message}

If you have any immediate questions, please don't hesitate to call us at +1 (206) 688-9088.

Warm regards,
Sunshine Fitsum Daycare Team
+1 (206) 688-9088
${process.env.EMAIL_USER || "fitsum@sunshinefitsumdaycare.com"}

1905 Walnut Street, Everett, WA 98201
sunshinefitsumdaycare.com
        `,
        headers: {
          "List-Unsubscribe": `<mailto:${process.env.EMAIL_USER}?subject=Unsubscribe>`,
          "X-Entity-Ref-ID": `contact-${Date.now()}`,
        },
      }

      await transporter.sendMail(confirmationMail)
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Contact form error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
