import type { ReactElement, SetStateAction, Dispatch, JSXElementConstructor } from "react";
import type { Post, MongoDBUser } from "./";

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
  children: ReactElement<any, JSXElementConstructor<any>>[] | ReactElement<any, JSXElementConstructor<any>>;
}

export interface PostProps extends WithPost {}
export interface HomeProps extends WithPosts {}
export interface PostInfoProps extends WithPost {}
export interface LayoutProps extends WithChildren {}
export interface ContextProps extends WithChildren {}
export interface AllUsersViewProps extends WithUsers {}
export interface ProfileProps extends WithPosts, WithUser {}
export interface PostAuthorProps extends WithPosts, WithUser {}

export interface SearchBarProps {
  onSearch(): void;
}

export interface LogoutButtonProps {
  handleLogout(): void;
}

export interface GoogleLoginProps {
  onClick(): void;
}

export interface ThemeOptionProps {
  title: string;
  onClick(): void;
}

export interface FormProps {
  isSignup: boolean;
  setIsSignup: Dispatch<SetStateAction<boolean>>;
}

export interface ColorInputProps {
  color: string;
  handleClick(): void;
}

export interface UserListProps extends WithUsers {
  itemClick: {
    changeShowingUserInfo(): void;
    setSelectedUser: Dispatch<SetStateAction<MongoDBUser | null>>;
  };
}

export interface UserSideViewProps extends WithUser<null> {
  closeMenu(): void;
}

export interface SidebarProps {
  route: string;
  postScrollingOptions?: {
    setPostLimit: Dispatch<SetStateAction<number>>;
    loading: boolean;
  };
  isOnPostInfo?: {
    visible: boolean;
    title: string;
    _id?: string;
    href: string;
    postedBy: string;
  };
}

export interface SidebarOptionProps {
  href: any;
  title: string;
  icon: ReactElement;
  isActive: boolean;
}
