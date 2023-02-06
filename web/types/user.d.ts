export interface MongoDBUser {
  username: string;
  image: string;
  _id: string;
  email: string;
}

export interface UserFormData {
  username: string;
  image: string;
  email: string;
}

export interface UserSubmitFormData extends Omit<UserFormData, "image"> {
  password: string;
  photoURL: File | string | undefined | null;
}
