"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, AlertTriangle } from "lucide-react"

// Mock data for bookings
const mockBookings = [
  {
    id: "booking-1",
    service: "AC Repair",
    date: "2025-04-20",
    time: "10:00 AM",
    status: "upcoming",
    address: "123 Main St, Anytown, CA",
    technician: "John Smith",
  },
  {
    id: "booking-2",
    service: "Refrigerator Service",
    date: "2025-04-25",
    time: "2:00 PM",
    status: "upcoming",
    address: "456 Oak Ave, Somewhere, CA",
    technician: "Pending Assignment",
  },
  {
    id: "booking-3",
    service: "AC Rental",
    date: "2025-03-15",
    time: "9:00 AM",
    status: "completed",
    address: "789 Pine Rd, Nowhere, CA",
    technician: "Sarah Johnson",
  },
  {
    id: "booking-4",
    service: "AC Repair",
    date: "2025-02-10",
    time: "11:00 AM",
    status: "completed",
    address: "321 Elm St, Anywhere, CA",
    technician: "Mike Davis",
  },
]

export function BookingHistory() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null)

  const upcomingBookings = mockBookings.filter((booking) => booking.status === "upcoming")
  const completedBookings = mockBookings.filter((booking) => booking.status === "completed")

  const handleCancelBooking = (bookingId: string) => {
    setSelectedBooking(bookingId)
    setCancelDialogOpen(true)
  }

  // Add proper error handling for the cancel booking function
  const confirmCancelBooking = () => {
    try {
      // In a real app, this would call an API to cancel the booking
      console.log("Cancelling booking:", selectedBooking)

      // Simulate updating the booking list
      // In a real app, you would update the state with the updated booking list

      setCancelDialogOpen(false)
      // Show success message
    } catch (error) {
      console.error("Error cancelling booking:", error)
      // Show error message
    }
  }

  // Fix the date formatting to handle invalid dates
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      return new Date(dateString).toLocaleDateString(undefined, options)
    } catch (error) {
      return dateString
    }
  }

  const renderBookingCard = (booking: (typeof mockBookings)[0]) => {
    return (
      <Card key={booking.id} className="mb-4">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{booking.service}</CardTitle>
            <Badge variant={booking.status === "upcoming" ? "default" : "secondary"}>
              {booking.status === "upcoming" ? "Upcoming" : "Completed"}
            </Badge>
          </div>
          <CardDescription>Booking ID: {booking.id}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>{formatDate(booking.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{booking.address}</span>
            </div>
            <div>
              <span className="font-medium">Technician:</span> {booking.technician}
            </div>
          </div>
        </CardContent>
        {booking.status === "upcoming" && (
          <CardFooter className="pt-2">
            <Button variant="outline" className="mr-2" onClick={() => console.log("Reschedule", booking.id)}>
              Reschedule
            </Button>
            <Button variant="destructive" onClick={() => handleCancelBooking(booking.id)}>
              Cancel
            </Button>
          </CardFooter>
        )}
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map(renderBookingCard)
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Calendar className="mb-4 h-12 w-12 text-gray-400" />
              <h3 className="text-lg font-medium">No Upcoming Bookings</h3>
              <p className="mt-2 text-gray-600">You don't have any upcoming service appointments.</p>
              <Button className="mt-4" onClick={() => (window.location.href = "/booking")}>
                Book a Service
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          {completedBookings.length > 0 ? (
            completedBookings.map(renderBookingCard)
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Clock className="mb-4 h-12 w-12 text-gray-400" />
              <h3 className="text-lg font-medium">No Completed Bookings</h3>
              <p className="mt-2 text-gray-600">You don't have any completed service appointments yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Cancel Booking
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={confirmCancelBooking}>
              Yes, Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
