import { Types } from "mongoose";
import { IUser } from "./user.interface";

export interface IDeck {
  _id?: string;
  userId: Types.ObjectId | string;
  user?: IUser;
  title: string;
  tag: string[];
  description: string;
  toLearn: string;
  madeFor: string;
  imageUrl: string;
  public: boolean;
}
