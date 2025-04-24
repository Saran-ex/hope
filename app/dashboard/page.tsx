"use client"
// just testing push

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../components/auth-provider"
import { BookingHistory } from "../../components/booking-history"
import { UserProfile } from "../../components/user-profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in?redirect=/dashboard")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Authentication Required</h1>
              <p className="mt-2 text-gray-600">Please sign in to access your dashboard</p>
              <Button className="mt-4" onClick={() => router.push("/sign-in?redirect=/dashboard")}>
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
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">My Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">Manage your bookings and account information</p>
      </div>

      <Tabs defaultValue="bookings" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings">
          <Card>
            <CardContent className="pt-6">
              <BookingHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardContent className="pt-6">
              <UserProfile />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
