import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Interview from "@/models/Interview";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const interview = await Interview.create({
      role: body.role,
      interviewType: body.interviewType,
      difficulty: body.difficulty,
      totalQuestions: body.totalQuestions,
      questions: body.questions,
      score: body.score,
      technicalScore: body.technicalScore,
      communicationScore: body.communicationScore,
      problemSolvingScore: body.problemSolvingScore,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Interview saved successfully",
        interview,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Interview API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save interview",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const interviews = await Interview.find()
      .sort({ createdAt: -1 })
      .limit(20);

    return NextResponse.json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error("Interview fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch interviews",
      },
      { status: 500 }
    );
  }
}