"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Interview = {
  _id: string;
  role: string;
  interviewType: string;
  difficulty: string;
  totalQuestions: number;
  score: number;
  technicalScore: number;
  communicationScore: number;
  problemSolvingScore: number;
  createdAt: string;
};

export default function ProgressPage() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch("/api/interviews");
        const data = await response.json();

        if (data.success) {
          setInterviews(data.interviews);
        }
      } catch (error) {
        console.error("Failed to fetch interviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  const totalInterviews = interviews.length;

  const averageScore =
    totalInterviews > 0
      ? Math.round(
          interviews.reduce((sum, interview) => sum + interview.score, 0) /
            totalInterviews
        )
      : 0;

  const bestScore =
    totalInterviews > 0
      ? Math.max(...interviews.map((interview) => interview.score))
      : 0;

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-6 py-10 text-[#111111]">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/dashboard"
          className="text-sm text-[#777777] hover:text-black"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
            Progress
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your interview progress.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#666666]">
            Track your interview performance and understand how your skills are
            improving over time.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              Total Interviews
            </p>

            <p className="mt-4 text-4xl font-semibold">
              {loading ? "—" : totalInterviews}
            </p>

            <p className="mt-2 text-sm text-[#777777]">
              Completed practice sessions
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              Average Score
            </p>

            <p className="mt-4 text-4xl font-semibold">
              {loading ? "—" : `${averageScore}%`}
            </p>

            <p className="mt-2 text-sm text-[#777777]">
              Across completed interviews
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              Best Score
            </p>

            <p className="mt-4 text-4xl font-semibold">
              {loading ? "—" : `${bestScore}%`}
            </p>

            <p className="mt-2 text-sm text-[#777777]">
              Your highest interview score
            </p>
          </div>
        </div>

        {/* Interview History */}
        <section className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7 sm:p-9">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
                Interview History
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Recent interviews
              </h2>
            </div>

            <Link
              href="/interview"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
            >
              New Interview →
            </Link>
          </div>

          {loading ? (
            <div className="mt-8 rounded-2xl bg-[#fafaf8] p-8 text-center">
              <p className="text-sm text-[#777777]">
                Loading your interview history...
              </p>
            </div>
          ) : interviews.length === 0 ? (
            <div className="mt-8 rounded-2xl bg-[#fafaf8] p-8 text-center">
              <p className="text-lg font-medium">No interviews yet.</p>

              <p className="mt-2 text-sm text-[#777777]">
                Complete your first AI interview to start tracking progress.
              </p>

              <Link
                href="/interview"
                className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
              >
                Start Interview →
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {interviews.map((interview) => (
                <div
                  key={interview._id}
                  className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-[#fafaf8] p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{interview.role}</h3>

                    <p className="mt-1 text-sm text-[#777777]">
                      {interview.interviewType} · {interview.difficulty}
                    </p>

                    <p className="mt-2 text-xs text-[#999999]">
                      {new Date(interview.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs text-[#999999]">Technical</p>
                      <p className="mt-1 font-semibold">
                        {interview.technicalScore}%
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[#999999]">
                        Communication
                      </p>
                      <p className="mt-1 font-semibold">
                        {interview.communicationScore}%
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[#999999]">Overall</p>
                      <p className="mt-1 text-xl font-semibold">
                        {interview.score}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* AI Insight */}
        <section className="mt-8 rounded-[2rem] bg-black p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
            AI Insight
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Keep building interview confidence.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#aaaaaa]">
            Consistent practice helps you identify weak areas, improve
            communication, and become more confident in technical interviews.
          </p>

          <Link
            href="/interview"
            className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Practice Again →
          </Link>
        </section>
      </div>
    </main>
  );
}