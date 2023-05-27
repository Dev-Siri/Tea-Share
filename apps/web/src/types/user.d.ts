export interface MongoDBUser {
  username: string;
  image: string;
  _id: string;
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
      email: string[];
    };
    sign_in_provider: string;
  };
}

export interface UserSubmitFormData {
  username: string;
  email: string;
  password: string;
  photoURL: File | string | undefined | null;
}
