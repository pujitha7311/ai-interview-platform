import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IInterview extends Document {
  role: string;
  interviewType: string;
  difficulty: string;
  totalQuestions: number;
  questions: {
    question: string;
    answer: string;
  }[];
  score: number;
  technicalScore: number;
  communicationScore: number;
  problemSolvingScore: number;
  completedAt: Date;
}

const InterviewSchema = new Schema<IInterview>(
  {
    role: {
      type: String,
      required: true,
      trim: true,
    },

    interviewType: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      required: true,
      trim: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    questions: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          default: "",
        },
      },
    ],

    score: {
      type: Number,
      default: 0,
    },

    technicalScore: {
      type: Number,
      default: 0,
    },

    communicationScore: {
      type: Number,
      default: 0,
    },

    problemSolvingScore: {
      type: Number,
      default: 0,
    },

    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Interview =
  models.Interview || model<IInterview>("Interview", InterviewSchema);

export default Interview;