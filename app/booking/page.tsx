"use client"
// just testing push

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useAuth } from "../../components/auth-provider"
import { BookingForm } from "../../components/booking-form"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Wrench, Thermometer, Fan } from "lucide-react"

export default function BookingPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  const [selectedService, setSelectedService] = useState(serviceParam || "ac-repair")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in?redirect=/booking")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Authentication Required</h1>
              <p className="mt-2 text-gray-600">Please sign in to book a service</p>
              <Button className="mt-4" onClick={() => router.push("/sign-in?redirect=/booking")}>
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Book a Service</h1>
        <p className="mt-4 text-lg text-gray-600">Schedule an appointment with our expert technicians</p>
      </div>

      <Tabs defaultValue={selectedService} onValueChange={setSelectedService} className="mx-auto max-w-3xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ac-repair" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span className="hidden sm:inline">AC Repair</span>
          </TabsTrigger>
          <TabsTrigger value="refrigerator-service" className="flex items-center gap-2">
            <Thermometer className="h-4 w-4" />
            <span className="hidden sm:inline">Refrigerator Service</span>
          </TabsTrigger>
          <TabsTrigger value="ac-rental" className="flex items-center gap-2">
            <Fan className="h-4 w-4" />
            <span className="hidden sm:inline">AC Rental</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ac-repair">
          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold">AC Repair Service</h2>
              <BookingForm
                serviceType="ac-repair"
                serviceTitle="AC Repair"
                additionalFields={[
                  { name: "acModel", label: "AC Model (if known)", type: "text" },
                  { name: "issueDescription", label: "Describe the issue", type: "textarea" },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="refrigerator-service">
          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold">Refrigerator Service</h2>
              <BookingForm
                serviceType="refrigerator-service"
                serviceTitle="Refrigerator Service"
                additionalFields={[
                  { name: "refrigeratorModel", label: "Refrigerator Model (if known)", type: "text" },
                  { name: "issueDescription", label: "Describe the issue", type: "textarea" },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ac-rental">
          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold">AC Rental Service</h2>
              <BookingForm
                serviceType="ac-rental"
                serviceTitle="AC Rental"
                additionalFields={[
                  {
                    name: "acType",
                    label: "AC Type",
                    type: "select",
                    options: [
                      { value: "portable", label: "Portable AC" },
                      { value: "window", label: "Window AC" },
                      { value: "split", label: "Split AC" },
                      { value: "commercial", label: "Commercial AC" },
                    ],
                  },
                  { name: "rentalDuration", label: "Rental Duration (days)", type: "number" },
                  { name: "installationRequired", label: "Installation Required", type: "checkbox" },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
