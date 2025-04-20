import { SignUpForm } from "@/components/sign-up-form"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create an Account</h1>
          <p className="mt-2 text-gray-600">Sign up to book services and manage your appointments</p>
        </div>
        <SignUpForm />
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
