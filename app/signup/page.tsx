"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Python Developer",
  "Data Analyst",
  "UI/UX Designer",
];

const experienceLevels = ["Beginner", "Intermediate", "Experienced"];

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select the role you are preparing for.");
      return;
    }

    if (!experience) {
      alert("Please select your experience level.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: selectedRole,
          experience,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to create account.");
        setLoading(false);
        return;
      }

      // Save basic user information
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("userRole", data.user.role);
      localStorage.setItem("userEmail", data.user.email);

      alert("Account created successfully!");

      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

        <div className="text-sm text-[#666666]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-black underline underline-offset-4"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* Signup */}
      <section className="flex justify-center px-6 py-10 pb-20">
        <div className="w-full max-w-xl">

          {/* Heading */}
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

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#666666]">
              Tell us a little about your career goal so we can personalize
              your interview experience.
            </p>
          </div>

          {/* Form Card */}
          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-9">
            <form onSubmit={handleSignup} className="space-y-6">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />
              </div>

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
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999999] focus:border-black/30"
                />

                <p className="mt-2 text-xs text-[#999999]">
                  Use at least 6 characters.
                </p>
              </div>

              {/* Target Role */}
              <div>
                <label className="mb-3 block text-sm font-medium">
                  What role are you preparing for?
                </label>

                <div className="grid gap-2 sm:grid-cols-2">
                  {roles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                        selectedRole === role
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-[#f8f8f6] hover:border-black/30"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="mb-3 block text-sm font-medium">
                  Experience level
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {experienceLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setExperience(level)}
                      className={`rounded-xl border px-3 py-3 text-sm transition ${
                        experience === level
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-[#f8f8f6] hover:border-black/30"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Create Account */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#292929] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account →"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs leading-5 text-[#999999]">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>

          {/* Bottom */}
          <p className="mt-7 text-center text-sm text-[#666666]">
            Already registered?{" "}
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