import { NextRouter } from "next/router";
import { FirebaseUser } from "./";

export type AuthHandler = (
  displayName: string,
  email: string,
  password: string,
  photoURL: string,
  event: any,
  router: NextRouter,
  isSignup: boolean
  ) => Promise<void>;
  
export type GoogleAuthHandler = (router: NextRouter) => Promise<void>;
export type LogoutHandler = (router: NextRouter) => Promise<void>;
export type UpdateProfileHandler = (
  email: string,
  username: string,
  image: string,
  id: string,
  event: React.FormEvent<HTMLFormElement>
) => Promise<void>;

export type CreatePostSubmitHandler = (
  event: any,
  formData: PostFormData,
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>,
  router: NextRouter,
  loading: boolean
) => Promise<void>;

export type LikedPeople = (people: string[], user: FirebaseUser) => string;
export type LikePostHandler = (
  setLikes: React.Dispatch<React.SetStateAction<string>>,
  setLikeBTN: React.Dispatch<React.SetStateAction<JSX.Element>>,
  people: string[],
  themeColor: string,
  user: FirebaseUser,
  _id: string
) => Promise<void>;