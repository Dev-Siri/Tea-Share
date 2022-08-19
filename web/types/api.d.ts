import type { PostFormDataType } from './post';
import type { UserFormDataType } from './user';

interface FirebaseConfigType {
  apiKey: string | undefined;
  authDomain: string | undefined;
  databaseURL: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

type FetchPostsType = () => Promise<AxiosResponse<any, any>>;
type FetchItemByQuery = (query: string, id?: boolean) => Promise<AxiosResponse<any, any>>;
type CreatePostType = (formdata: PostFormDataType) => Promise<AxiosResponse<any, any>>;
type LikePostType = (id: string, name: string, image: string) => Promise<AxiosResponse<any, any>>;
type CreateUserType = (formdata: UserFormDataType) => Promise<AxiosResponse<any, any>>;
type FetchUsersType = () => Promise<AxiosResponse<any, any>>;

export type { FetchPostsType, FetchItemByQuery, CreatePostType, LikePostType, CreateUserType, FirebaseConfigType, FetchUsersType };
