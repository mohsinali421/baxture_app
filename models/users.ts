import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      maxlength: 2
    },
    hobbies: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const User = mongoose.model("User", userSchema);
