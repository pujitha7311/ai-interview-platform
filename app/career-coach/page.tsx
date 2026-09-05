"use client";

import Link from "next/link";

export default function CareerCoachPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] p-6 text-[#111111] lg:p-10">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="text-sm font-medium text-[#666666] hover:text-black"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
            AI Career Coach
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Career Recommendations
          </h1>
          <p className="mt-2 text-sm text-[#666666]">
            Personalized insights to accelerate your interview preparation.
          </p>
        </div>

        {/* Content Card */}
        <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Focus Areas for This Week</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">•</span>
              Deep dive into System Design patterns and distributed caching.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">•</span>
              Structure your behavioral answers using the STAR method.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">•</span>
              Practice React concurrency and performance optimization questions.
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/interview"
              className="inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#292929]"
            >
              Start AI Mock Interview →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}