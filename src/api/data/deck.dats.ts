import { IDeck } from "@interfaces/index";
import { deckModel } from "@schemas/deck.schema";

export const createDeck = async (deck: IDeck): Promise<IDeck> => {
  try {
    return await deckModel.create(deck);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateDeck = async (
  newDeckData: Partial<IDeck>,
  deckId: string
): Promise<IDeck> => {
  try {
    const modifiedDeck = await deckModel.findByIdAndUpdate(
      deckId,
      newDeckData,
      { new: true }
    );
    if (!modifiedDeck) throw new Error("deck not found");
    return modifiedDeck;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findDecksByField = async (
  fields: Partial<IDeck>
): Promise<IDeck[]> => {
  try {
    return await deckModel.find({ fields });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findOneDeckByField = async (
  field: Partial<IDeck>
): Promise<IDeck> => {
  try {
    const deckfound = await deckModel.findOne({ field });
    if (!deckfound) throw new Error("Deck not found");
    return deckfound;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
