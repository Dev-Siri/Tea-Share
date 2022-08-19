import React from 'react';
import { PostType, MongoDBUserType } from './';

export interface HomeProps { posts: PostType[]; }
export interface PostProps { post: PostType; }
export interface PostInfoProps { post: PostType; }
export interface SearchBarProps { handleSearch: () => void; }
export interface LogoutButtonProps { handleLogout: () => void; }
export interface SpinnerProps { title?: string; }
export interface AllUsersViewProps { users: MongoDBUserType[]; }
export interface GoogleLoginProps { handleClick: () => Promise<void> }
export interface LayoutProps {
  children: Array<ReactElement<ChildProps, JSXElementConstructor<ChildType>>>;
  [key: string]: any;
}

export interface ProfileProps {
  user: MongoDBUserType[0];
  posts: PostType[];
}

export interface PostAuthorProps {
  user: MongoDBUserType;
  posts: PostType[];
}

export interface ThemeOptionProps {
  title: string;
  handleClick: () => void;
}

export interface FormProps {
  handleAuth: (displayName: string, email: string, password: string, photoURL: string, event: any) => void;
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
  handleGoogleLogin: () => Promise<void>;
}

export interface ColorInputProps {
  color: string;
  handleClick: () => void;
}

export interface UserListProps {
  users: MongoDBUserType[];
  itemClick: {
    changeShowingUserInfo: () => void;
    setSelectedUser: React.Dispatch<React.SetStateAction<MongoDBUserType | null>>;
  };
}

export interface UserSideViewProps {
  closeMenu: () => void;
  user: MongoDBUserType | null;
}