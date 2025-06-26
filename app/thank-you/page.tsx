import type { Metadata } from "next"
import ThankYouPageClient from "./ThankYouPageClient"

export const metadata: Metadata = {
  title: "Thank You | Sunshine Fitsum Daycare",
  description: "Thank you for your enrollment request. We'll be in touch with you soon.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
}

export default function ThankYouPage() {
  return <ThankYouPageClient />
}
