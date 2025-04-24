import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { CTASection } from "../components/cta-section"
//somthying
export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
