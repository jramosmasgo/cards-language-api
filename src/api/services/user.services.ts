import { createUser, getOneUserByField, updateUser } from "@data/index";
import { IUser, IUserLogin } from "@interfaces/user.interface";
import { createAuthToken } from "@utils/token";

export const updateUserDataService = async (
  userId: string,
  dataToUpdate: Partial<IUser>
): Promise<IUser | null> => {
  const userFound = await getOneUserByField({ _id: userId });
  if (!userFound) throw new Error("User not found");
  return await updateUser(dataToUpdate, userFound._id!);
};

export const getUserInfoByFirebaseIdService = async (
  firebaseId: string
): Promise<IUser> => {
  const userData = await getOneUserByField({ firebaseId });
  if (!userData) throw new Error("User not found");
  return userData;
};

export const getUserInfoByUserIdService = async (
  userId: string
): Promise<IUser> => {
  const userData = await getOneUserByField({ _id: userId });
  if (!userData) throw new Error("User not found");
  return userData;
};

export const createUserService = async (userData: IUser): Promise<IUser> =>
  await createUser(userData);

export const loginUserService = async (
  email: string,
  firebaseId: string
): Promise<IUserLogin> => {
  const userData = await getOneUserByField({ email, firebaseId });
  if (!userData) throw new Error("User not found");

  const token = await createAuthToken({ userId: userData._id })

  return {
    name: userData.name,
    firebaseId: userData.firebaseId,
    email: userData.email,
    language: userData.language,
    profileImageUrl: userData.profileImageUrl,
    token
  }
};