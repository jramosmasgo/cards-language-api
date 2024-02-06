import { IUser } from "@interfaces/index";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firebaseId: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
    },
    language: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<IUser>("users", userSchema);
