"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to send verification code.");
        return;
      }

      setStep("otp");
      setOtp("");
      setMessage("A 6-digit verification code has been sent to your email.");
    } catch (error) {
      console.error("Send OTP error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setMessage("Please enter the 6-digit verification code.");
      return;
    }

    if (otp.length !== 6) {
      setMessage("Please enter a valid 6-digit code.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          otp,
          action: "verify",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Invalid verification code.");
        return;
      }

      setMessage("Verification successful. Redirecting...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      console.error("Verify OTP error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    setOtp("");
    await sendOTP();
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            CareerIQ
          </h1>

          <p className="text-gray-500 mt-2">
            Secure login with verification code
          </p>
        </div>

        {/* Email Step */}
        {step === "email" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendOTP();
                }
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />

            <button
              onClick={sendOTP}
              disabled={loading}
              className="w-full mt-5 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Sending Code..." : "Send 6-Digit Code"}
            </button>
          </div>
        )}

        {/* OTP Step */}
        {step === "otp" && (
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Enter the 6-digit verification code sent to:
            </p>

            <p className="font-semibold text-gray-900 mb-5 break-all">
              {email}
            </p>

            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              placeholder="000000"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setOtp(value);
                setMessage("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && otp.length === 6) {
                  verifyOTP();
                }
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-center text-2xl tracking-[0.5em] text-gray-900 outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />

            <button
              onClick={verifyOTP}
              disabled={loading || otp.length !== 6}
              className="w-full mt-5 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>

            <button
              onClick={resendOTP}
              disabled={loading}
              className="w-full mt-4 text-sm font-medium text-gray-700 hover:text-black"
            >
              {loading ? "Sending..." : "Resend Code"}
            </button>

            <button
              onClick={() => {
                setStep("email");
                setOtp("");
                setMessage("");
              }}
              className="w-full mt-2 text-sm text-gray-500 hover:text-gray-800"
            >
              Change Email
            </button>
          </div>
        )}

        {/* Message */}
        {message && (
          <p className="text-sm text-center text-gray-600 mt-5">
            {message}
          </p>
        )}

        {/* Security Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Never share your verification code with anyone.
        </p>
      </div>
    </main>
  );
}