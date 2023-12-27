import { IUser } from "./user.interface";

export interface IDeck {
  user: IUser;
  title: string;
  tag: string[];
  description: string;
  madeIn: string;
  madeFor: string;
  imageUrl: string;
  public: boolean;
}
