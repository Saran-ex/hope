import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">Get in touch with our team for any inquiries or support</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
          <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
          <ContactForm />
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start">
              <MapPin className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-gray-600">123 Cooling Street, Frostville, CA 90210</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">info@coolfix.example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Business Hours</h3>
                <div className="mt-1 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-64 w-full rounded-lg bg-gray-200">
            {/* Map placeholder - would be replaced with an actual map component */}
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
