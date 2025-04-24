import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-blue">CoolFix</h3>
            <p className="mb-4 text-sm text-gray-600">
              Professional AC and refrigerator repair and rental services. We provide expert solutions for all your
              cooling needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-blue">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-600 hover:text-blue-600">
                  Book a Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-blue">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/booking?service=ac-repair" className="text-gray-600 hover:text-blue-600">
                  AC Repair
                </Link>
              </li>
              <li>
                <Link href="/booking?service=refrigerator-service" className="text-gray-600 hover:text-blue-600">
                  Refrigerator Service
                </Link>
              </li>
              <li>
                <Link href="/booking?service=ac-rental" className="text-gray-600 hover:text-blue-600">
                  AC Rental
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-blue">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-600">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-white" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} CoolFix. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
