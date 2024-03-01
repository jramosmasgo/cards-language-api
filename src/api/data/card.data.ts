import { ICard } from "@interfaces/index";
import { cardModel } from "@schemas/card.schema";

export const createCard = async (card: ICard): Promise<ICard> => {
  try {
    return await cardModel.create(card);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateCard = async (
  fields: Partial<ICard>,
  idCard: string
): Promise<ICard> => {
  try {
    const cardModified = await cardModel.findByIdAndUpdate(idCard, fields, {
      new: true,
    });
    if (!cardModified) throw new Error("card not found");
    return cardModified;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findCardsByField = async (
  fields: Partial<ICard>
): Promise<ICard[]> => {
  try {
    return await cardModel.find(fields);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findCardByField = async (
  fields: Partial<ICard>
): Promise<ICard> => {
  try {
    const cardFound = await cardModel.findOne(fields);
    if (!cardFound) throw new Error("card not found");
    return cardFound;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
