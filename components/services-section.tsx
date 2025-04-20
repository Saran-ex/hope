import { ServiceCard } from "@/components/service-card"
import { Wrench, Thermometer, Fan } from "lucide-react"

export function ServicesSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We offer a comprehensive range of cooling solutions to meet your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="AC Repair"
            description="Expert AC repair services for all brands and models. We diagnose and fix issues quickly to restore comfort to your home or office."
            icon={<Wrench className="h-10 w-10 text-blue-600" />}
            link="/booking?service=ac-repair"
          />
          <ServiceCard
            title="Refrigerator Service"
            description="Comprehensive refrigerator repair and maintenance services. Our technicians are trained to handle all types of refrigerator issues."
            icon={<Thermometer className="h-10 w-10 text-blue-600" />}
            link="/booking?service=refrigerator-service"
          />
          <ServiceCard
            title="AC Rental"
            description="Flexible AC rental options for events, temporary spaces, or emergency cooling needs. Choose from a variety of units to suit your requirements."
            icon={<Fan className="h-10 w-10 text-blue-600" />}
            link="/booking?service=ac-rental"
          />
        </div>
      </div>
    </div>
  )
}
