"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login:", {
      email,
      password,
    });

    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  const handleOTPLogin = () => {
    router.push("/login/otp");
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Career<span className="text-[#666666]">IQ</span>
        </Link>

        <Link
          href="/signup"
          className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-black/5"
        >
          Create Account
        </Link>
      </nav>

      {/* Login Section */}
      <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-sm font-medium text-white">
              IQ
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
              Welcome back
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Sign in to CareerIQ
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#666666]">
              Continue your interview preparation and career journey.
            </p>
          </div>

          {/* Login Card */}
          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-9">

            {/* Email / Password Login */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-[#777777] transition hover:text-black"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#292929]"
              >
                Sign in →
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-black/10" />

              <span className="text-xs text-[#999999]">
                OR
              </span>

              <div className="h-px flex-1 bg-black/10" />
            </div>

            {/* OTP Login */}
            <button
              type="button"
              onClick={handleOTPLogin}
              className="w-full rounded-full border border-black/10 bg-[#f8f8f6] px-5 py-3.5 text-sm font-medium transition hover:bg-black/5"
            >
              Login with 6-digit code
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-3 flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-medium transition hover:bg-black/5"
            >
              <span className="text-lg font-semibold">
                G
              </span>

              Continue with Google
            </button>
          </div>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-[#666666]">
            Don&apos;t have an account?{" "}

            <Link
              href="/signup"
              className="font-medium text-black underline underline-offset-4"
            >
              Create one
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}