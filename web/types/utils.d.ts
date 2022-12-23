import type { Dispatch, SetStateAction, FormEvent } from "react";
import type { NextRouter } from "next/router";
import type { User as FirebaseUser } from "firebase/auth";
import type { PostFormData } from "./post";

export type AuthHandler = (event: FormEvent<HTMLFormElement> | null, type: "mail" | "google") => Promise<void>;
export type MailAuthHandler = (
  displayName: string,
  email: string,
  password: string,
  photoURL: File | string | undefined | null,
  router: NextRouter,
  isSignup: boolean
) => Promise<void>;

export type GoogleAuthHandler = (router: NextRouter) => Promise<void>;
export type LogoutHandler = (router: NextRouter) => Promise<void>;
export type UpdateProfileHandler = (email: string, username: string, image: File | string | undefined | null, id: string) => Promise<void>;

export type CreatePostSubmitHandler = (
  formData: PostFormData,
  router: NextRouter,
  setIsCreatingPost: Dispatch<SetStateAction<boolean>>
) => Promise<void>;

export type LikedPeople = (people: string[], user: FirebaseUser | null) => string;
export type LikePostHandler = (
  setLikes: Dispatch<SetStateAction<string>>,
  setLikeBTN: Dispatch<SetStateAction<JSX.Element>>,
  people: string[],
  themeColor: string,
  user: FirebaseUser | null,
  _id: string
) => Promise<void>;
export type PostTimeCalculator = (createdAt: string) => string;
