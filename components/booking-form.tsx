"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Checkbox } from "../components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { cn } from "@/lib/utils"

type AdditionalField = {
  name: string
  label: string
  type: "text" | "textarea" | "select" | "checkbox" | "number"
  options?: { value: string; label: string }[]
}

type BookingFormProps = {
  serviceType: string
  serviceTitle: string
  additionalFields?: AdditionalField[]
}

export function BookingForm({ serviceType, serviceTitle, additionalFields = [] }: BookingFormProps) {
  const router = useRouter()

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (!date) {
      setError("Please select a date")
      return
    }

    if (!timeSlot) {
      setError("Please select a time slot")
      return
    }

    setError("")
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to create a booking
      // For demo purposes, we'll simulate a successful booking
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess(true)

      // Redirect to dashboard after a delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="animate-fade-in space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Booking Confirmed!</h3>
        <p className="text-gray-600">
          Your {serviceTitle} has been scheduled for {date && format(date, "MMMM d, yyyy")} at {timeSlot}.
        </p>
        <Button onClick={() => router.push("/dashboard")}>View My Bookings</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {step === 1 ? (
        <div className="animate-fade-in space-y-6">
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable past dates and Sundays
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today || date.getDay() === 0
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Select Time</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleNext} className="w-full">
            Continue
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
          {additionalFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>

              {field.type === "text" && (
                <Input id={field.name} type="text" onChange={(e) => handleInputChange(field.name, e.target.value)} />
              )}

              {field.type === "number" && (
                <Input
                  id={field.name}
                  type="number"
                  min="1"
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

              {field.type === "textarea" && (
                <Textarea id={field.name} onChange={(e) => handleInputChange(field.name, e.target.value)} />
              )}

              {field.type === "select" && field.options && (
                <Select onValueChange={(value) => handleInputChange(field.name, value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {field.type === "checkbox" && (
                <div className="flex items-center space-x-2">
                  <Checkbox id={field.name} onCheckedChange={(checked) => handleInputChange(field.name, checked)} />
                  <label
                    htmlFor={field.name}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {field.label}
                  </label>
                </div>
              )}
            </div>
          ))}

          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="font-medium text-blue-800">Booking Summary</h3>
            <div className="mt-2 space-y-1 text-sm text-blue-700">
              <p>Service: {serviceTitle}</p>
              <p>Date: {date ? format(date, "MMMM d, yyyy") : "Not selected"}</p>
              <p>Time: {timeSlot || "Not selected"}</p>
              {Object.entries(formData).map(
                ([key, value]) =>
                  value && (
                    <p key={key}>
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:{" "}
                      {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                    </p>
                  ),
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
              Back
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
