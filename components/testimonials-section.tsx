import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "The technician was professional and fixed my AC in no time. Great service and reasonable pricing. I'll definitely use CoolFix again!",
    author: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I rented an AC unit for a summer event and the service was excellent. The unit was delivered on time and worked perfectly throughout the event.",
    author: "Michael Chen",
    role: "Event Planner",
    rating: 5,
  },
  {
    id: 3,
    content:
      "My refrigerator stopped working and I needed a quick fix. CoolFix responded promptly and had it running again the same day. Excellent service!",
    author: "David Rodriguez",
    role: "Restaurant Owner",
    rating: 4,
  },
]

export function TestimonialsSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700">{testimonial.content}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.author.charAt(0)}`}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
