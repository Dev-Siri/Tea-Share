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

export interface FirebaseUser {
  name: string;
  picture: string;
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: {
    identities: {
      email: [Array];
    };
    sign_in_provider: string;
  };
}

export interface UserSubmitFormData extends Omit<UserFormData, "image"> {
  password: string;
  photoURL: File | string | undefined | null;
}
