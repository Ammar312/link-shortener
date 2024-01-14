import mongoose from "mongoose";
const { Schema } = mongoose;

const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visited: [
      {
        timeStamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export const URL = mongoose.model("url", urlSchema);
