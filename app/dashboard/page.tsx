"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const interviews = [
  {
    role: "Frontend Developer",
    type: "Technical Interview",
    date: "Today",
    score: 84,
  },
  {
    role: "React Developer",
    type: "Technical Interview",
    date: "Yesterday",
    score: 78,
  },
  {
    role: "Software Engineer",
    type: "Behavioral Interview",
    date: "Aug 30",
    score: 72,
  },
];

const skills = [
  { name: "React", score: 88 },
  { name: "JavaScript", score: 82 },
  { name: "Communication", score: 76 },
  { name: "System Design", score: 61 },
];

export default function DashboardPage() {
  const [userName, setUserName] = useState("Alex");

  useEffect(() => {
    // Signup లేదా Login ద్వారా స్టోర్ అయిన పేరును తెచ్చుకుంటుంది
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <section className="flex-1 px-6 py-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              {/* Header */}
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
                    Overview
                  </p>

                  {/* ఇక్కడ డైనమిక్ పేరు కనిపిస్తుంది */}
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Good afternoon, {userName}.
                  </h1>

                  <p className="mt-3 text-sm text-[#666666]">
                    Here's your career intelligence overview.
                  </p>
                </div>

                <Link
                  href="/interview"
                  className="w-fit rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#292929]"
                >
                  Start AI Interview →
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  label="Interview Score"
                  value="78%"
                  change="+12%"
                  description="vs. last month"
                />

                <StatCard
                  label="Interviews"
                  value="12"
                  change="+4"
                  description="this month"
                />

                <StatCard
                  label="AI Rating"
                  value="4.2"
                  change="+0.6"
                  description="average rating"
                />

                <StatCard
                  label="Skill Readiness"
                  value="81%"
                  change="+8%"
                  description="overall readiness"
                />
              </div>

              {/* Main Analytics */}
              <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                {/* Performance */}
                <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#999999]">
                        Performance
                      </p>

                      <h2 className="mt-2 text-xl font-semibold">
                        Interview performance
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#f5f5f3] px-3 py-1.5 text-xs text-[#666666]">
                      Last 6 sessions
                    </span>
                  </div>

                  <div className="mt-8 flex h-64 items-end gap-4 border-b border-black/10 px-2 pb-0">
                    {[48, 61, 54, 72, 68, 84].map((height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 flex-col items-center justify-end gap-3"
                      >
                        <span className="text-xs text-[#777777]">
                          {height}%
                        </span>

                        <div
                          className="w-full max-w-12 rounded-t-lg bg-black"
                          style={{ height: `${height * 2}px` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between px-2 text-[11px] text-[#999999]">
                    <span>Session 01</span>
                    <span>Session 02</span>
                    <span>Session 03</span>
                    <span>Session 04</span>
                    <span>Session 05</span>
                    <span>Session 06</span>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="rounded-[2rem] bg-black p-6 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#999999]">
                    AI Insights
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    You're improving.
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-[#aaaaaa]">
                    Your interview performance has improved by 12% this month.
                    Your strongest area is technical knowledge.
                  </p>

                  <div className="mt-8 space-y-5">
                    <Insight
                      title="Strong technical skills"
                      text="React and JavaScript answers are consistently strong."
                    />

                    <Insight
                      title="Improve communication"
                      text="Try structuring answers before responding."
                    />

                    <Insight
                      title="Practice system design"
                      text="This is currently your biggest skill gap."
                    />
                  </div>

                  <Link
                    href="/career-coach"
                    className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                  >
                    View AI recommendations →
                  </Link>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Skill Analysis */}
                <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#999999]">
                      Skill Intelligence
                    </p>

                    <h2 className="mt-2 text-xl font-semibold">
                      Your current strengths
                    </h2>
                  </div>

                  <div className="mt-7 space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-[#777777]">
                            {skill.score}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#eeeeec]">
                          <div
                            className="h-full rounded-full bg-black"
                            style={{ width: `${skill.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Interviews */}
                <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#999999]">
                        Activity
                      </p>

                      <h2 className="mt-2 text-xl font-semibold">
                        Recent interviews
                      </h2>
                    </div>

                    <Link
                      href="/progress"
                      className="text-xs font-medium underline underline-offset-4"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="mt-6 divide-y divide-black/10">
                    {interviews.map((interview) => (
                      <div
                        key={`${interview.role}-${interview.date}`}
                        className="flex items-center justify-between gap-4 py-4"
                      >
                        <div>
                          <p className="text-sm font-medium">
                            {interview.role}
                          </p>

                          <p className="mt-1 text-xs text-[#888888]">
                            {interview.type} · {interview.date}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            {interview.score}%
                          </p>

                          <p className="text-[10px] uppercase tracking-wider text-[#999999]">
                            Score
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 rounded-[2rem] bg-black px-6 py-10 text-white sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  Keep improving
                </p>

                <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                      Your next interview could be your best one yet.
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#aaaaaa]">
                      Practice with AI, understand your weaknesses and build
                      the confidence you need to succeed.
                    </p>
                  </div>

                  <Link
                    href="/interview"
                    className="w-fit shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black"
                  >
                    Practice now →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  change,
  description,
}: {
  label: string;
  value: string;
  change: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
      <p className="text-xs text-[#888888]">{label}</p>

      <div className="mt-5 flex items-end justify-between">
        <p className="text-3xl font-semibold tracking-tight">{value}</p>

        <span className="rounded-full bg-[#f2f2f0] px-2.5 py-1 text-[10px] font-medium">
          {change}
        </span>
      </div>

      <p className="mt-2 text-[11px] text-[#999999]">{description}</p>
    </div>
  );
}

function Insight({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="text-sm font-medium">{title}</p>

      <p className="mt-1 text-xs leading-5 text-[#999999]">{text}</p>
    </div>
  );
}