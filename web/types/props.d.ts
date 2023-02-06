import type { Dispatch, JSXElementConstructor, ReactElement, SetStateAction } from "react";
import type { MongoDBUser, Post } from "./";

interface WithPost {
  post: Post;
}

interface WithPosts {
  posts: Post[];
}

interface WithUser<T = MongoDBUser> {
  user: MongoDBUser | T;
}

interface WithUsers {
  users: MongoDBUser[];
}

interface WithChildren {
  children: reactElement<any, JSXElementConstructor<any>>[] | reactElement<any, JSXElementConstructor<any>>;
}

export interface PostProps extends WithPost {}
export interface PostInfoProps extends WithPost {}
export interface LayoutProps extends WithChildren {}
export interface ContextProps extends WithChildren {}
export interface AllUsersViewProps extends WithUsers {}
export interface HomeProps extends WithPosts, WithUsers {}
export interface ProfileProps extends WithPosts, WithUser {}
export interface PostAuthorProps extends WithPosts, WithUser {}

export interface SearchBarProps {
  protected onSearch(searchTerm: string): void;
  noBorder?: boolean;
}

export interface GoogleLoginProps {
  protected onClick(): void;
}

export interface ThemeOptionProps {
  title: string;
  protected onClick(): void;
}

export interface FormProps {
  isSignup: boolean;
  setIsSignup: Dispatch<SetStateAction<boolean>>;
}

export interface ColorInputProps {
  color: string;
  protected onClick(): void;
}

export interface UserListProps {
  users: Omit<Omit<MongoDBUser, "email">, "_id">[] | MongoDBUser[];
  protected onScroll?(event: any): void;
  fullHeight?: boolean;
  title: string;
}

export interface UserSideViewProps extends WithUser<null> {
  protected closeMenu(): void;
}

export interface SidebarOptionProps {
  href: string;
  title: string;
  icon: ReactElement;
  isActive: boolean;
}

export interface UserListItemProps {
  username: string;
  image: string;
}

export interface LoaderProps {
  visible: boolean;
}
