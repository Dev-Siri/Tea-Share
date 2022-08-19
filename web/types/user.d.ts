interface FirebaseUserType {
  displayName: string;
  photoURL: string;
}

interface MongoDBUserType {
  username: string;
  image: string;
  _id: string;
}

interface UserFormDataType {
  username: string;
  image: string;
  email: string;
}

type AuthHandlerType = (displayName: string, email: string, password: string, photoURL: string, event: any) => Promise<void>;

export type { FirebaseUserType, MongoDBUserType, UserFormDataType, AuthHandlerType };
