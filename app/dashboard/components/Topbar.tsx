import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "AI Interviews", href: "/interview" },
  { name: "Career Coach", href: "/career-coach" },
  { name: "Progress", href: "/progress" },
  { name: "Settings", href: "/settings" },
];

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex min-h-20 items-center justify-between border-b border-black/10 bg-white px-6 lg:px-8">
      
      {/* Logo */}
      <Link href="/" className="shrink-0 text-xl font-semibold">
        Career<span className="text-gray-500">IQ</span>
      </Link>

      {/* Navigation */}
      <nav className="hidden items-center gap-1 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-gray-600 transition hover:bg-gray-100"
        >
          ♢
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-full border border-black/10 py-1.5 pl-1.5 pr-4 transition hover:bg-gray-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
            A
          </span>

          <span className="hidden text-sm font-medium sm:block">
            Alex
          </span>
        </button>
      </div>
    </header>
  );
}