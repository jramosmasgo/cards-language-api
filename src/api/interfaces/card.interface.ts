import { IDeck } from "./deck.interface";

export interface ICard {
  _id?: string;
  deck: IDeck;
  front: string;
  back: string;
  imageUrl: string;
  link: string;
  examples: string[];
}
