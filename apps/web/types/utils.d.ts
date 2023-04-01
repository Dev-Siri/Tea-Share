import type { Dispatch, SetStateAction } from "react";
import type { PostFormData } from "./post";

export type SignupHandler = (username: string, image: File | null, email: string, password: string) => Promise<void>;
export type LoginHandler = (email: string, password: string) => Promise<void>;
export type GoogleAuthHandler = () => Promise<void>;
export type UpdateProfileHandler = (email: string, username: string, image: File | string | null, id: string) => Promise<void>;
export type LogoutHandler = () => Promise<void>;

export type CreatePostSubmitHandler = (formData: Pick<PostFormData, "title" | "description" | "image">) => Promise<void>;

export type LikedPeopleCalculator = (people: string[]) => Promise<string>;
export type LikePostHandler = (
  setLikes: Dispatch<SetStateAction<string>>,
  setLikeBTN: Dispatch<SetStateAction<JSX.Element>>,
  setisLikeButtonDisabled: Dispatch<SetStateAction<boolean>>,
  people: string[],
  id: string
) => Promise<void>;

export type RelativeTimeGetter = (date: string) => string;
export type HandleGetter = (username?: string) => string;
export type RandomStringGetter = () => string;

export type CookieSetter = (key: string, value: string) => void;
export type CookieGetter = (key: string) => string;
export type CookieRemover = (key: string) => void;
