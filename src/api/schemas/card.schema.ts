import { ICard } from "@interfaces/index";
import { model, Schema, Types } from "mongoose";

const cardSchema = new Schema<ICard>(
  {
    deck: {
      type: Types.ObjectId,
      ref: "decks",
    },
    front: {
      type: String,
      required: true,
    },
    back: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    link: {
      type: String,
    },
    examples: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const cardModel = model<ICard>("Cards", cardSchema);
