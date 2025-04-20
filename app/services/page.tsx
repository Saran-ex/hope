import { ServiceCard } from "@/components/service-card"
import { Wrench, Thermometer, Fan } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">Professional AC and refrigerator services tailored to your needs</p>
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

      <div className="mt-16 space-y-8">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">AC Repair Services</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Comprehensive diagnostics and troubleshooting</li>
            <li>• Repair of all AC components</li>
            <li>• Refrigerant leak detection and repair</li>
            <li>• Compressor replacement</li>
            <li>• Thermostat repair and replacement</li>
            <li>• Ductwork inspection and repair</li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Refrigerator Services</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Cooling system repair</li>
            <li>• Compressor troubleshooting and replacement</li>
            <li>• Thermostat calibration</li>
            <li>• Door seal replacement</li>
            <li>• Ice maker repair</li>
            <li>• Water dispenser repair</li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">AC Rental Options</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Short-term and long-term rental plans</li>
            <li>• Portable AC units</li>
            <li>• Window AC units</li>
            <li>• Split AC systems</li>
            <li>• Commercial-grade cooling solutions</li>
            <li>• Delivery, installation, and pickup services</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
