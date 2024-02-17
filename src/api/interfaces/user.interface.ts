export interface IUser {
  _id?: string;
  name: string;
  email: string;
  firebaseId: string;
  language: string;
  profileImageUrl: string;
}

export interface IUserLogin extends IUser {
  token: string;
}
