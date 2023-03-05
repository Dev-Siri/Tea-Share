import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { MongoDBUser, Post } from "./";

// Parent Types
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
  users: Pick<MongoDBUser, "username" | "image">[];
}

interface WithChildren {
  children: ReactNode;
}

interface InfiniteItems<T = string> {
  [key: string]: T;
}

// Types for Next.js 13 Components that are not yet available
export interface PageProps {
  params: InfiniteItems;
  searchParams?: any;
}

export interface LayoutProps extends WithChildren {
  params: InfiniteItems;
}

export interface ErrorProps {
  error: Error;
  protected reset(): void;
}

export interface GenerateMetadataProps extends PageProps {}

// Component
export interface PostInfoProps extends WithPost {}
export interface PostsListProps extends WithPosts {}
export interface ContextProps extends WithChildren {}
export interface HomeProps extends WithPosts, WithUsers {}
export interface ProfileProps extends WithPosts, WithUser {}
export interface PostAuthorProps extends WithPosts, WithUser {}

export interface PostProps extends WithPost {
  lazyLoadImage?: boolean;
}

export interface ErrorMessageProps extends Partial<WithChildren> {
  type?: "not-found" | "exception";
}

export interface ThemeOptionProps {
  title: "Light" | "Dark";
}

export interface FormProps {
  isSignup: boolean;
  setIsSignup: Dispatch<SetStateAction<boolean>>;
}

export interface ColorInputProps {
  color: string;
  protected onClick(): void;
}

export interface UserPresenterProps {
  title: string;
  limit?: number;
  initialUsers: Pick<MongoDBUser, "username" | "image">[];
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
  loading?: boolean;
}

export interface UserListProps extends WithUsers {
  title: string;
}

export interface UserListSkeletonProps {
  numberOfItems: number;
  itemFullWidth?: boolean;
}

export interface PostsListSkeletonProps {
  numberOfItems: number;
}

export interface LoaderProps {
  visible: boolean;
}

export interface UserInfoProps extends WithUser {
  postsLength: number;
}

export interface PostsPresenterProps {
  initialPosts: Post[];
}

export interface SkeletonProps {
  className?: string;
}

export interface LikeButtonProps {
  people: string[];
  postId: string;
}

export interface RelativeTimeProps {
  className?: string;
  dateString: string;
}

export interface LogoProps {
  bigger?: boolean;
}
