import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-black/10 bg-white px-6 lg:px-8">
      <Link
        href="/"
        className="text-xl font-semibold lg:hidden"
      >
        Career<span className="text-gray-500">IQ</span>
      </Link>

      <div className="hidden lg:block">
        <p className="text-xs text-gray-400">
          Career Intelligence
        </p>

        <p className="mt-1 text-sm font-medium">
          Your personal career workspace
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
        >
          ♢
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-full border border-black/10 py-1.5 pl-1.5 pr-4"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
            A
          </span>

          <span className="text-sm font-medium">
            Alex
          </span>
        </button>
      </div>
    </header>
  );
}