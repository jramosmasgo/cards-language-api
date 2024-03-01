import { createDeckData, findDecksByFieldData, findOneDeckByFieldData, updateDeckData } from "@data/deck.data";
import { IDeck } from "@interfaces/deck.interface";

export const createDeckService = async (deck: IDeck) => await createDeckData(deck)

export const updateDeckService = async (deckId: string, dataDeck: Partial<IDeck>) =>
    await updateDeckData(dataDeck, deckId);

export const findDecksByUserService = async (userId: string) =>
    await findDecksByFieldData({ userId })

export const findDeckByDeckIdService = async (id: string) =>
    await findOneDeckByFieldData({ _id: id })