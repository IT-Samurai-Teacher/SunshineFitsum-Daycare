import { AnimatedServiceCard } from "./animated-service-card"
import { Baby, Users, GraduationCap, Calendar } from "lucide-react"

export function ServiceCardsShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatedServiceCard
        title="Infant Care"
        description="Nurturing care for babies 6-18 months with personalized routines and sensory-rich experiences."
        icon={<Baby className="w-6 h-6 text-white" />}
        image="/images/infants-program.jpg"
        color="#FFD166"
        link="/programs#infants"
        linkText="Learn About Infant Care"
      />

      <AnimatedServiceCard
        title="Toddler Care"
        description="Active exploration for children 18 months to 3 years focusing on language and motor skills."
        icon={<Users className="w-6 h-6 text-white" />}
        image="/images/toddlers-program.jpg"
        color="#FF9F1C"
        link="/programs#toddlers"
        linkText="Learn About Toddler Care"
      />

      <AnimatedServiceCard
        title="Preschool Program"
        description="Comprehensive curriculum for ages 3-6 preparing children for kindergarten through play-based learning."
        icon={<GraduationCap className="w-6 h-6 text-white" />}
        image="/images/preschool-program.jpg"
        color="#70D6FF"
        link="/programs#preschool"
        linkText="Learn About Preschool Program"
      />

      <AnimatedServiceCard
        title="Weekend Care"
        description="Saturday care available with advance registration, featuring outdoor exploration and nature-based play."
        icon={<Calendar className="w-6 h-6 text-white" />}
        image="/images/weekend-care.jpg"
        color="#F97316"
        link="/contact"
        linkText="Contact About Weekend Care"
      />
    </div>
  )
}
