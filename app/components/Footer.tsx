import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-semibold">
              Career<span className="text-gray-500">IQ</span>
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              AI-powered career intelligence to help you prepare,
              improve, and move forward with confidence.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/"
              className="text-gray-500 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/interview"
              className="text-gray-500 transition hover:text-black"
            >
              AI Interviews
            </Link>

            <Link
              href="/career-coach"
              className="text-gray-500 transition hover:text-black"
            >
              Career Coach
            </Link>

            <Link
              href="/progress"
              className="text-gray-500 transition hover:text-black"
            >
              Progress
            </Link>

            <Link
              href="/settings"
              className="text-gray-500 transition hover:text-black"
            >
              Settings
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CareerIQ. All rights reserved.</p>

          <p>Built for smarter career decisions.</p>
        </div>
      </div>
    </footer>
  );
}