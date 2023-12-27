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

export const getOneUserByField = async (params: object): Promise<IUser> => {
  try {
    const userfound = await userModel.findOne(params);
    if (!userfound) throw new Error("user not found");
    return userfound;
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
): Promise<IUser> => {
  try {
    const modifiedUser = await userModel.findByIdAndUpdate(
      userId,
      newUserData,
      { new: true }
    );
    if (!modifiedUser) throw new Error("User not found");
    return modifiedUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
