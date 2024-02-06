import { IUser } from "@interfaces/user.interface";
import {
  createUserService,
  getUserInfoByFirebaseIdService,
  updateUserDataService,
} from "@services/index";
import { Response, Request, NextFunction } from "express";

export const createUserController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await createUserService(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request<{ idUser: string }, {}, Partial<IUser>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await updateUserDataService(req.params.idUser, req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request<{ idUser: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getUserInfoByFirebaseIdService(req.params.idUser);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
