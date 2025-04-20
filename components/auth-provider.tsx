"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (name: string, email: string, password: string) => Promise<boolean>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setIsLoading(false)
    }

    checkAuth()

    // No cleanup needed, but adding return function to satisfy React hooks rules
    return () => {}
  }, [])

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call to authenticate
      // For demo purposes, we'll simulate a successful login
      const mockUser = {
        id: "user-123",
        name: email.split("@")[0],
        email,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Sign in error:", error)
      return false
    }
  }

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call to register
      // For demo purposes, we'll simulate a successful registration
      const mockUser = {
        id: "user-" + Math.random().toString(36).substring(2, 9),
        name,
        email,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Sign up error:", error)
      return false
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
