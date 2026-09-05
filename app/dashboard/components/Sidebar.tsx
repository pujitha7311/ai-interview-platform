"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col border-r border-black/10 bg-white">
      <div className="border-b border-black/10 px-6 py-6">
        <Link href="/" className="text-2xl font-semibold">
          Career<span className="text-[#777777]">IQ</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Workspace
        </p>

        <div className="space-y-1">
          <Link
            href="/dashboard"
            className="block rounded-xl bg-black px-4 py-3 text-sm text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/interview"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            AI Interviews
          </Link>

          <Link
            href="/career-coach"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Career Coach
          </Link>

          <Link
            href="/progress"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Progress
          </Link>

          <Link
            href="/settings"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Settings
          </Link>
        </div>
      </nav>

      <div className="p-4">
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="text-xs font-medium">AI Interview Ready?</p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Practice your next interview and improve your score.
          </p>

          <Link
            href="/interview"
            className="mt-3 block rounded-full bg-black px-3 py-2 text-center text-xs text-white"
          >
            Start Interview →
          </Link>
        </div>
      </div>
    </aside>
  );
}