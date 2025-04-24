import { SignInForm } from "../../components/sign-in-form"
import Link from "next/link"
// somthing
// import { useAuth } from "../../components/auth-provider"
export default function SignInPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Sign In</h1>
          <p className="mt-2 text-gray-600">Welcome back! Sign in to access your account</p>
        </div>
        <SignInForm />
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
