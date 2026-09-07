"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Signup failed.");
        return;
      }

      setMessage("Account created successfully. Redirecting...");

      setTimeout(() => {
        window.location.href = "/login";
      }, 800);
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      <nav className="flex items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Career<span className="text-[#666666]">IQ</span>
        </Link>

        <Link
          href="/login"
          className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-black/5"
        >
          Sign In
        </Link>
      </nav>

      <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-sm font-medium text-white">
              IQ
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
              Get started
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Create your CareerIQ account
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#666666]">
              Start your interview preparation and career journey.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-9">
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
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

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  What role are you preparing for?
                </label>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition focus:border-black/30"
                >
                  <option value="">Select a role</option>
                  <option value="Frontend Developer">
                    Frontend Developer
                  </option>
                  <option value="Backend Developer">
                    Backend Developer
                  </option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="Python Developer">
                    Python Developer
                  </option>
                  <option value="Data Analyst">
                    Data Analyst
                  </option>
                  <option value="UI/UX Designer">
                    UI/UX Designer
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#292929] disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account →"}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-black/10" />
              <span className="text-xs text-[#999999]">OR</span>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-medium transition hover:bg-black/5"
            >
              <span className="text-lg font-semibold">G</span>
              Continue with Google
            </button>

            {message && (
              <p className="mt-5 text-center text-sm text-[#666666]">
                {message}
              </p>
            )}
          </div>

          <p className="mt-7 text-center text-sm text-[#666666]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-black underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}