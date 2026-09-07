import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OTP =
  mongoose.models.OTP || mongoose.model("OTP", otpSchema);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, otp, action } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // VERIFY OTP
    if (action === "verify") {
      if (!otp) {
        return NextResponse.json(
          { message: "Verification code is required." },
          { status: 400 }
        );
      }

      await connectDB();

      const record = await OTP.findOne({
        email: normalizedEmail,
        otp,
        expiresAt: { $gt: new Date() },
      });

      if (!record) {
        return NextResponse.json(
          { message: "Invalid or expired verification code." },
          { status: 400 }
        );
      }

      // OTP can be used only once
      await OTP.deleteOne({ _id: record._id });

      return NextResponse.json({
        success: true,
        message: "OTP verified successfully.",
      });
    }

    // SEND OTP
    await connectDB();

    const generatedOtp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Remove previous OTP for this email
    await OTP.deleteMany({
      email: normalizedEmail,
    });

    // Save new OTP
    await OTP.create({
      email: normalizedEmail,
      otp: generatedOtp,
      expiresAt,
    });

    // Send email
    const { error } = await resend.emails.send({
      from: "CareerIQ <onboarding@resend.dev>",
      to: normalizedEmail,
      subject: "Your CareerIQ verification code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px;">
          <h2 style="margin-bottom: 10px;">CareerIQ</h2>

          <p>Your verification code is:</p>

          <div style="
            font-size: 34px;
            font-weight: bold;
            letter-spacing: 10px;
            margin: 25px 0;
          ">
            ${generatedOtp}
          </div>

          <p>This code will expire in 10 minutes.</p>

          <p style="color: #666; font-size: 13px;">
            Please do not share this verification code with anyone.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      await OTP.deleteMany({
        email: normalizedEmail,
      });

      return NextResponse.json(
        { message: "Failed to send verification email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Verification code sent successfully.",
    });
  } catch (error) {
    console.error("OTP API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}