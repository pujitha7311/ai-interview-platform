import Link from "next/link";

const features = [
  {
    number: "01",
    title: "AI Mock Interviews",
    description:
      "Practice realistic technical, HR, behavioral and coding interviews with an adaptive AI interviewer.",
  },
  {
    number: "02",
    title: "Smart Evaluation",
    description:
      "Get detailed feedback on technical knowledge, communication, confidence and problem-solving.",
  },
  {
    number: "03",
    title: "Career Intelligence",
    description:
      "Understand your strengths, identify skill gaps and receive a personalized career improvement plan.",
  },
];

const stats = [
  { value: "92%", label: "Interview Accuracy" },
  { value: "24/7", label: "AI Practice" },
  { value: "4+", label: "Interview Modes" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          Career<span className="text-[#666666]">IQ</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#555555] md:flex">
          <Link href="#features" className="transition hover:text-black">
            Features
          </Link>
          <Link href="#how-it-works" className="transition hover:text-black">
            How it works
          </Link>
          <Link href="#about" className="transition hover:text-black">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-black/5 sm:block"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#292929]"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-black" />
              AI-powered career intelligence
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn every interview into a
              <span className="text-[#777777]"> better opportunity.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#666666]">
              Practice smarter with an AI interviewer that adapts to your
              skills, evaluates your performance and tells you exactly what to
              improve.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {/* FIXED: Start AI Interview now goes to Login */}
              <Link
                href="/login"
                className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#292929]"
              >
                Start AI Interview →
              </Link>

              <Link
                href="#how-it-works"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium transition hover:bg-black/5"
              >
                Explore Platform
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-black/10 pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-xs text-[#777777]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Interview Preview */}
          <div className="relative">
            <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between border-b border-black/10 pb-5">
                <div>
                  <p className="text-xs text-[#888888]">CURRENT SESSION</p>
                  <h3 className="mt-1 font-semibold">Frontend Developer</h3>
                </div>

                <div className="rounded-full bg-[#f2f2f0] px-3 py-1.5 text-xs">
                  Question 04 / 10
                </div>
              </div>

              <div className="py-8">
                <p className="text-xs uppercase tracking-widest text-[#999999]">
                  AI Interviewer
                </p>

                <h2 className="mt-4 text-2xl font-semibold leading-snug">
                  Explain how you would optimize the performance of a React
                  application.
                </h2>

                <div className="mt-7 rounded-2xl bg-[#f5f5f3] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      AI
                    </div>

                    <div>
                      <p className="text-sm font-medium">AI Interviewer</p>
                      <p className="text-xs text-[#888888]">
                        Listening to your answer...
                      </p>
                    </div>

                    <div className="ml-auto flex items-end gap-1">
                      <span className="h-3 w-1 rounded-full bg-black" />
                      <span className="h-6 w-1 rounded-full bg-black" />
                      <span className="h-4 w-1 rounded-full bg-black" />
                      <span className="h-8 w-1 rounded-full bg-black" />
                      <span className="h-5 w-1 rounded-full bg-black" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-black/10 pt-5">
                <span className="text-xs text-[#888888]">
                  Adaptive difficulty
                </span>

                <span className="rounded-full bg-black px-4 py-2 text-xs text-white">
                  AI Active
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block">
              <p className="text-[10px] uppercase tracking-wider text-[#999999]">
                Performance
              </p>
              <p className="mt-1 text-2xl font-semibold">78%</p>
              <p className="text-xs text-[#777777]">+12% this month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
              Platform
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything you need to become interview-ready.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.number} className="bg-white p-8 lg:p-10">
                <span className="text-sm text-[#999999]">
                  {feature.number}
                </span>

                <h3 className="mt-14 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#666666]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Practice. Analyze. Improve.
            </h2>
          </div>

          <div className="space-y-7">
            {[
              [
                "01",
                "Choose your role",
                "Select the role you are preparing for.",
              ],
              [
                "02",
                "Take the interview",
                "Answer dynamic questions generated by AI.",
              ],
              [
                "03",
                "Understand your performance",
                "Receive a detailed AI-powered report.",
              ],
              [
                "04",
                "Build your roadmap",
                "Follow personalized recommendations to improve.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 border-b border-black/10 pb-7"
              >
                <span className="text-sm text-[#999999]">{number}</span>

                <div>
                  <h3 className="font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-black px-8 py-16 text-white sm:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Your next opportunity starts here
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Stop guessing. Start preparing with intelligence.
            </h2>

            <Link
              href="/signup"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Create your account →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#777777] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 CareerIQ. AI Career Intelligence Platform.</p>
        <p>Built with Next.js</p>
      </footer>
    </main>
  );
}