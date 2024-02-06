import { IUser } from "@interfaces/index";
import { userModel } from "@schemas/index";

export const getOneUser = async (userId: string): Promise<IUser> => {
  try {
    const userfound = await userModel.findById(userId);
    if (!userfound) throw new Error("user not found");
    return userfound;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOneUserByField = async (
  params: Partial<IUser>
): Promise<IUser | null> => {
  try {
    return await userModel.findOne(params);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUser = async (user: IUser): Promise<IUser> => {
  try {
    return await userModel.create(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (
  newUserData: Partial<IUser>,
  userId: string
): Promise<IUser | null> => {
  try {
    return await userModel.findByIdAndUpdate(userId, newUserData, {
      new: true,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
