import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to experience professional cooling services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Book a service today and enjoy prompt, reliable solutions from our expert technicians.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-base">
              <Link href="/booking">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
