import { createUser, getOneUserByField, updateUser } from "@data/index";
import { IUser } from "@interfaces/user.interface";

export const updateUserDataService = async (
  userId: string,
  dataToUpdate: Partial<IUser>
): Promise<IUser | null> => {
  const userFound = await getOneUserByField({ firebaseId: userId });
  if (!userFound) throw new Error("User not found");
  return await updateUser(dataToUpdate, userFound.firebaseId);
};

export const getUserInfoByFirebaseIdService = async (
  firebaseId: string
): Promise<IUser> => {
  const userData = await getOneUserByField({ firebaseId });
  if (!userData) throw new Error("User not found");
  return userData;
};

export const createUserService = async (userData: IUser): Promise<IUser> =>
  await createUser(userData);
