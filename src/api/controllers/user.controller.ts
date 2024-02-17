import { IUser } from "@interfaces/user.interface";
import {
  createUserService,
  getUserInfoByFirebaseIdService,
  getUserInfoByUserIdService,
  loginUserService,
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
  req: Request<{ userId: string }, {}, Partial<IUser>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await updateUserDataService(req.params.userId, req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request<{ userId: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getUserInfoByUserIdService(req.params.userId);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const loginUserController = async (
  req: Request<{}, {}, { email: string, firebaseId: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await loginUserService(req.body.email, req.body.firebaseId);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
