"use client";

import { useState } from "react";
import Link from "next/link";

const roles = [
  {
    name: "Frontend Developer",
    description: "React · JavaScript · Web Development",
  },
  {
    name: "Backend Developer",
    description: "Node.js · APIs · Databases",
  },
  {
    name: "Full Stack Developer",
    description: "Frontend · Backend · APIs",
  },
  {
    name: "Python Developer",
    description: "Python · Django · APIs",
  },
  {
    name: "Data Analyst",
    description: "SQL · Python · Data Analysis",
  },
  {
    name: "UI/UX Designer",
    description: "Design · Research · Prototyping",
  },
];

const interviewTypes = [
  {
    name: "Technical Interview",
    description: "Technical knowledge + problem solving",
  },
  {
    name: "Behavioral Interview",
    description: "Communication + workplace situations",
  },
  {
    name: "HR Interview",
    description: "Career goals + personality",
  },
];

const difficulties = ["Beginner", "Intermediate", "Advanced"];

const questionCounts = [5, 10, 15];

const questionBank: Record<string, string[]> = {
  "Frontend Developer": [
    "Tell me about yourself and your experience with software development.",
    "What is the difference between state and props in React?",
    "How do you handle errors in a production application?",
    "Explain a challenging project you worked on and how you solved the problem.",
    "How would you improve the performance of a React application?",
    "What is the difference between useEffect and useMemo?",
    "How does the React virtual DOM work?",
    "What are controlled and uncontrolled components in React?",
    "How do you manage state in a large React application?",
    "How would you design a reusable component system?",
    "What is event delegation in JavaScript?",
    "Explain promises and async/await in JavaScript.",
    "What are closures in JavaScript?",
    "How do you optimize a web page for performance?",
    "What is responsive web design and how do you implement it?",
  ],

  "Backend Developer": [
    "Tell me about your backend development experience.",
    "What is a REST API?",
    "How do you handle authentication in a backend application?",
    "What is the difference between SQL and NoSQL databases?",
    "How do you handle errors in a production API?",
    "What is middleware?",
    "How would you design a scalable API?",
    "What is caching and why is it useful?",
    "How do you secure an API?",
    "Explain database indexing.",
    "What is rate limiting?",
    "How do you monitor backend applications?",
    "What is load balancing?",
    "How would you improve API performance?",
    "Explain transactions in databases.",
  ],

  "Full Stack Developer": [
    "Tell me about your full stack development experience.",
    "How does a frontend communicate with a backend?",
    "What is REST and how have you used it?",
    "How do you handle authentication across frontend and backend?",
    "Explain a full stack project you have built.",
    "How do you structure a full stack application?",
    "How do you handle API errors on the frontend?",
    "What is CORS and why does it matter?",
    "How would you improve application performance?",
    "How do you design a scalable full stack application?",
    "How do you manage environment variables?",
    "How do you secure sensitive data?",
    "How would you deploy a full stack application?",
    "How do you debug a full stack application?",
    "How would you design a database for a web application?",
  ],

  "Python Developer": [
    "Tell me about your Python development experience.",
    "What are Python lists, tuples, sets and dictionaries?",
    "What is object-oriented programming in Python?",
    "What are decorators in Python?",
    "How do you handle exceptions in Python?",
    "What is the difference between a list and a generator?",
    "What are Python virtual environments?",
    "How do you build an API using Python?",
    "What is Django?",
    "How do you optimize Python code?",
    "Explain Python modules and packages.",
    "What is inheritance in Python?",
    "How does Python manage memory?",
    "How do you test Python applications?",
    "How would you structure a production Python application?",
  ],

  "Data Analyst": [
    "Tell me about your experience with data analysis.",
    "What is the difference between INNER JOIN and LEFT JOIN?",
    "How do you handle missing data?",
    "What is the difference between mean, median and mode?",
    "Explain a data analysis project you have worked on.",
    "How do you identify outliers?",
    "What is data normalization?",
    "How do you use Python for data analysis?",
    "What is the difference between correlation and causation?",
    "How do you validate your analysis?",
    "How do you create an effective dashboard?",
    "What SQL functions do you commonly use?",
    "How do you communicate insights to non-technical stakeholders?",
    "How would you analyze a sudden drop in sales?",
    "How do you ensure data quality?",
  ],

  "UI/UX Designer": [
    "Tell me about your UI/UX design experience.",
    "What is the difference between UX and UI?",
    "How do you approach user research?",
    "Explain your design process.",
    "Tell me about a challenging design problem you solved.",
    "How do you create user personas?",
    "What is usability testing?",
    "How do you handle design feedback?",
    "How do you choose typography and colors?",
    "What makes a good user experience?",
    "How do you design for accessibility?",
    "How do you create wireframes?",
    "How do you work with developers?",
    "How do you measure the success of a design?",
    "How would you improve an existing application interface?",
  ],
};

const behavioralQuestions = [
  "Tell me about a time you faced a difficult problem and how you solved it.",
  "Tell me about a time you worked with a difficult team member.",
  "Describe a situation where you had to learn something quickly.",
  "Tell me about a time you made a mistake and what you learned from it.",
  "Describe a project where you had to work under pressure.",
  "Tell me about a time you received difficult feedback.",
  "Describe a situation where you demonstrated leadership.",
  "Tell me about a time you disagreed with a teammate.",
  "How do you prioritize when you have multiple deadlines?",
  "Tell me about an achievement you are proud of.",
  "Describe a situation where you had to adapt to change.",
  "How do you handle failure?",
  "Tell me about a time you went beyond expectations.",
  "How do you handle conflict at work?",
  "Where do you see yourself in the next few years?",
];

const hrQuestions = [
  "Tell me about yourself.",
  "Why do you want to join our company?",
  "What are your strengths?",
  "What is one weakness you are currently working on?",
  "Why should we hire you?",
  "Where do you see yourself in five years?",
  "Why did you choose your career path?",
  "What motivates you?",
  "What are your salary expectations?",
  "Why are you looking for a new opportunity?",
  "What type of work environment do you prefer?",
  "How do you handle pressure?",
  "What are your career goals?",
  "What makes you different from other candidates?",
  "Do you have any questions for the interviewer?",
];

export default function InterviewPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const [selectedRole, setSelectedRole] = useState("Frontend Developer");
  const [selectedType, setSelectedType] =
    useState("Technical Interview");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState("Intermediate");
  const [selectedQuestionCount, setSelectedQuestionCount] =
    useState(5);

  const getQuestions = () => {
    let bank: string[];

    if (selectedType === "Behavioral Interview") {
      bank = behavioralQuestions;
    } else if (selectedType === "HR Interview") {
      bank = hrQuestions;
    } else {
      bank = questionBank[selectedRole] || questionBank["Frontend Developer"];
    }

    return bank.slice(0, selectedQuestionCount);
  };

  const questions = getQuestions();

  const nextQuestion = async () => {
    const updatedAnswers = [...answers];

    updatedAnswers[current] = answer;

    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setAnswer("");
      return;
    }

    setSaving(true);
    setSaveMessage("");

    try {
      const interviewQuestions = questions.map((question, index) => ({
        question,
        answer: updatedAnswers[index] || "",
      }));

      const response = await fetch("/api/interviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: selectedRole,
          interviewType: selectedType,
          difficulty: selectedDifficulty,
          totalQuestions: questions.length,
          questions: interviewQuestions,

          // Temporary demo scores.
          // We will replace these with real AI evaluation next.
          score: 84,
          technicalScore: 88,
          communicationScore: 79,
          problemSolvingScore: 82,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to save interview"
        );
      }

      setFinished(true);
    } catch (error) {
      console.error("Failed to save interview:", error);

      setSaveMessage(
        "Interview completed, but we couldn't save your result. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // INTERVIEW RESULT
  // =========================

  if (finished) {
    return (
      <main className="min-h-screen bg-[#f7f7f5] px-6 py-10 text-[#111111]">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/dashboard"
            className="text-sm text-[#777777] hover:text-black"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-10 rounded-[2rem] bg-black p-8 text-white sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
              Interview Complete
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Great work. 🎉
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#aaaaaa]">
              Your AI interview session has been completed. Your interview
              responses have been saved successfully.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs text-[#999999]">
                  Overall Score
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  84%
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs text-[#999999]">
                  Technical
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  88%
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs text-[#999999]">
                  Communication
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  79%
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#999999]">
                Interview Details
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-[#999999]">Role</p>
                  <p className="mt-1 text-sm font-medium">
                    {selectedRole}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#999999]">Type</p>
                  <p className="mt-1 text-sm font-medium">
                    {selectedType}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#999999]">
                    Difficulty
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {selectedDifficulty}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/progress"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
              >
                View Progress →
              </Link>

              <Link
                href="/dashboard"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // =========================
  // INTERVIEW SETUP
  // =========================

  if (!started) {
    return (
      <main className="min-h-screen bg-[#f7f7f5] px-6 py-10 text-[#111111]">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/dashboard"
            className="text-sm text-[#777777] hover:text-black"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888888]">
              AI Interview
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Practice like it&apos;s the real interview.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#666666]">
              Customize your interview and practice questions based on
              your target role, interview type and experience level.
            </p>
          </div>

          {/* ROLE */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              01 · Target Role
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <button
                  key={role.name}
                  type="button"
                  onClick={() => setSelectedRole(role.name)}
                  className={`rounded-[1.5rem] border p-6 text-left transition ${
                    selectedRole === role.name
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black/30"
                  }`}
                >
                  <h2 className="text-base font-semibold">
                    {role.name}
                  </h2>

                  <p
                    className={`mt-2 text-sm ${
                      selectedRole === role.name
                        ? "text-[#bbbbbb]"
                        : "text-[#777777]"
                    }`}
                  >
                    {role.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* INTERVIEW TYPE */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              02 · Interview Type
            </p>

            <div className="grid gap-4 lg:grid-cols-3">
              {interviewTypes.map((type) => (
                <button
                  key={type.name}
                  type="button"
                  onClick={() => setSelectedType(type.name)}
                  className={`rounded-[1.5rem] border p-6 text-left transition ${
                    selectedType === type.name
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black/30"
                  }`}
                >
                  <h2 className="text-base font-semibold">
                    {type.name}
                  </h2>

                  <p
                    className={`mt-2 text-sm ${
                      selectedType === type.name
                        ? "text-[#bbbbbb]"
                        : "text-[#777777]"
                    }`}
                  >
                    {type.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* DIFFICULTY */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              03 · Difficulty
            </p>

            <div className="grid grid-cols-3 gap-3">
              {difficulties.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSelectedDifficulty(level)}
                  className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                    selectedDifficulty === level
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black/30"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION COUNT */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#999999]">
              04 · Number of Questions
            </p>

            <div className="grid grid-cols-3 gap-3">
              {questionCounts.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setSelectedQuestionCount(count)}
                  className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                    selectedQuestionCount === count
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black/30"
                  }`}
                >
                  {count} Questions
                </button>
              ))}
            </div>
          </div>

          {/* START CARD */}
          <div className="mt-10 rounded-[2rem] bg-black p-8 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  Ready?
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Start your AI interview.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#aaaaaa]">
                  {selectedRole} · {selectedType} ·{" "}
                  {selectedDifficulty} · {selectedQuestionCount} questions
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setCurrent(0);
                  setAnswer("");
                  setAnswers([]);
                  setFinished(false);
                  setStarted(true);
                }}
                className="w-fit rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#eeeeee]"
              >
                Start Interview →
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // =========================
  // INTERVIEW QUESTIONS
  // =========================

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-6 py-10 text-[#111111]">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="text-sm text-[#777777] hover:text-black"
          >
            ← Exit Interview
          </Link>

          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium">
            Question {current + 1} / {questions.length}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#e6e6e3]">
          <div
            className="h-full rounded-full bg-black transition-all"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Interview Info */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium">
            {selectedRole}
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium">
            {selectedType}
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium">
            {selectedDifficulty}
          </span>
        </div>

        {/* Question Card */}
        <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
            AI Interviewer
          </p>

          <h1 className="mt-5 text-2xl font-semibold leading-9 sm:text-3xl">
            {questions[current]}
          </h1>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="mt-8 min-h-48 w-full resize-none rounded-2xl border border-black/10 bg-[#fafaf8] p-5 text-sm outline-none transition placeholder:text-[#aaa] focus:border-black/30"
          />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#999999]">
              Take your time. Focus on clarity and structure.
            </p>

            <button
              onClick={nextQuestion}
              disabled={!answer.trim() || saving}
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#292929] disabled:cursor-not-allowed disabled:opacity-30"
            >
              {saving
                ? "Saving..."
                : current === questions.length - 1
                  ? "Finish Interview"
                  : "Next Question →"}
            </button>
          </div>

          {saveMessage && (
            <p className="mt-4 text-right text-xs text-red-600">
              {saveMessage}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}