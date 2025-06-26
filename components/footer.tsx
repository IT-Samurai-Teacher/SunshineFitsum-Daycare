import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sunshine-yellow/10 pt-16 pb-8 relative overflow-hidden">
      {/* Sun decoration */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-sunshine-yellow/30 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-soft-orange/20 rounded-t-full"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              {/* Circular logo container */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunshine%20Fitsum%20Daycare%20Logo%20Final.jpg-NB36oU9t9HlifVJkRHFcO7FzvTusvV.jpeg"
                    alt="Sunshine Fitsum Daycare Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    className="scale-[1.3]"
                  />
                </div>
              </div>
            </Link>
            <p className="text-center md:text-left text-muted-foreground">
              Where little ones bloom and grow in a nurturing, joyful environment.
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <div className="bg-white p-1 rounded-md">
                <Image
                  src="/images/wa-dcyf-logo.png"
                  alt="DCYF Licensed"
                  width={60}
                  height={30}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-white p-1 rounded-md">
                <Image
                  src="/images/wa-early-achievers-logo.png"
                  alt="Early Achievers"
                  width={60}
                  height={30}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/" className="hover:text-sunshine-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sunshine-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-sky-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-soft-orange transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="hover:text-soft-orange transition-colors">
                  Enrollment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2 text-coral-red" />
                <a href="tel:+12066889088" className="hover:text-coral-red transition-colors">
                  +1 (206) 688-9088
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2 text-teal-blue" />
                <a href="mailto:Hello@sunshinefitsumdaycare.com" className="hover:text-teal-blue transition-colors">
                  Hello@sunshinefitsumdaycare.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin size={18} className="mr-2 text-sky-blue" />
                <a
                  href="https://maps.google.com/?q=1905+Walnut+Street,+Everett,+WA+98201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-blue transition-colors"
                >
                  1905 Walnut Street, Everett, WA 98201
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Hours</h3>
            <ul className="space-y-2 text-center md:text-left text-sm">
              <li>Monday - Friday: 6:00 AM - 5:30 PM</li>
              <li>Saturday: 6:00 AM - 5:30 PM (registration required)</li>
              <li>Closed on Sundays & Major Holidays</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.facebook.com/SunshineFitsumDaycare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-sunshine-yellow/30 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} className="text-warm-brown" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sunshine-yellow/30 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sunshine Fitsum Daycare. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Licensed by Washington State DCYF | License #PL-85034 | Provider ID: 2350195
          </p>
          <p className="text-xs text-muted-foreground mt-3 opacity-75">
            Website built with ❤️ by{" "}
            <a
              href="https://www.setupmydream.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Setup My Dream
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
