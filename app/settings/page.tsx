"use client";

import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] p-6 text-[#111111] lg:p-10">
      <div className="mx-auto max-w-3xl">
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
            Preferences
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Account Settings
          </h1>
          <p className="mt-2 text-sm text-[#666666]">
            Manage your profile, interview preferences, and notification settings.
          </p>
        </div>

        {/* Settings Card */}
        <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-9">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Display Name</label>
              <input
                type="text"
                defaultValue="Alex"
                className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3 text-sm outline-none transition focus:border-black/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email Address</label>
              <input
                type="email"
                defaultValue="alex@example.com"
                className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3 text-sm outline-none transition focus:border-black/30"
              />
            </div>

            <div className="border-t border-black/10 pt-6">
              <button
                type="button"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#292929]"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}