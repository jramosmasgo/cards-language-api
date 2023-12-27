import { IDeck } from "@interfaces/deck.interface";
import { Schema, Types, model } from "mongoose";

const deckSchema = new Schema<IDeck>(
  {
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: [String],
    },
    description: {
      type: String,
    },
    madeIn: {
      type: String,
    },
    madeFor: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    public: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const deckModel = model<IDeck>("decks", deckSchema);
