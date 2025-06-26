import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ExternalLink } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our <span className="colorful-text-primary">Certifications</span> &
            <span className="colorful-text-blue"> Quality Standards</span>
          </h2>
          <p className="section-subtitle">
            We are proud to be licensed and recognized by trusted Washington State agencies:
          </p>
        </div>

        {/* License Information Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="sunshine-card overflow-hidden border-2 border-primary/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left">
                  <h3 className="text-2xl font-fredoka mb-3">Official Licensing Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <p className="font-medium text-sm text-muted-foreground">License Number</p>
                      <p className="text-2xl font-fredoka">PL-85034</p>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-xl">
                      <p className="font-medium text-sm text-muted-foreground">Provider ID</p>
                      <p className="text-2xl font-fredoka">2350195</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* DCYF Certification */}
          <Card className="sunshine-card overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-6 w-48 h-24 relative">
                <Image
                  src="/images/wa-dcyf-logo.png"
                  alt="Washington State Department of Children, Youth & Families"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Licensed by DCYF</h3>
              <p className="text-muted-foreground flex-grow">
                Licensed by Washington State Department of Children, Youth & Families
              </p>
            </CardContent>
          </Card>

          {/* Early Learning Standards */}
          <Card className="sunshine-card overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-6 w-48 h-24 relative">
                <Image
                  src="/images/wa-early-learning-logo.png"
                  alt="Washington State Department of Early Learning"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Early Learning Standards</h3>
              <p className="text-muted-foreground flex-grow">
                Certified under the Washington State Early Learning Standards
              </p>
            </CardContent>
          </Card>

          {/* Early Achievers Program */}
          <Card className="sunshine-card overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-6 w-48 h-24 relative">
                <Image
                  src="/images/wa-early-achievers-logo.png"
                  alt="Washington Early Achievers"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="text-xl font-fredoka mb-3">Early Achievers Program</h3>
              <p className="text-muted-foreground flex-grow">
                Participant in the Early Achievers Program – Raising the Bar in Early Education
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Verification Section */}
        <div className="bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/6 flex justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Image src="/images/shield-icon.png" alt="Verification Shield" width={48} height={48} />
              </div>
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-fredoka mb-4 text-center md:text-left">
                Verified by the Washington State Child Care Directory
              </h3>
              <p className="mb-4 text-center md:text-left">
                View our profile on{" "}
                <a
                  href="https://www.findchildcarewa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  findchildcarewa.org
                </a>{" "}
                — the official Washington State child care provider registry.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button asChild className="sunshine-button-primary">
                  <a
                    href="https://www.findchildcarewa.org/PSS_Provider?id=0018y00000A9sGgAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Our DCYF Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-2xl">
            <h4 className="font-fredoka text-xl mb-4">Why It Matters</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>This listing confirms that we are a licensed and state-recognized provider.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>
                  All providers on this directory are reviewed and regulated by the Washington State Department of
                  Children, Youth & Families (DCYF), ensuring we meet required safety, health, and educational
                  standards.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>
                  Parents can verify our license status and review our inspection history through the official DCYF
                  portal.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Our certifications reflect our commitment to providing high-quality care and education for your children.
          </p>
        </div>
      </div>
    </section>
  )
}
