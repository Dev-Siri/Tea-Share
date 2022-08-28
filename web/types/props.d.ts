import React from 'react';
import { Post, MongoDBUserType, GoogleAuthHandler } from './';

export interface HomeProps { posts: Post[]; }
export interface PostProps { post: Post; }
export interface PostInfoProps { post: Post; }
export interface SearchBarProps { handleSearch: () => void; }
export interface LogoutButtonProps { handleLogout: () => void; }
export interface SpinnerProps { title?: string; }
export interface AllUsersViewProps { users: MongoDBUserType[]; }
export interface GoogleLoginProps { onClick: GoogleAuthHandler; }
export interface LayoutProps { children: Array<ReactElement<ChildProps, JSXElementConstructor<ChildType>>>; }

export interface ProfileProps {
  user: MongoDBUserType[0];
  posts: Post[];
}

export interface PostAuthorProps {
  user: MongoDBUserType;
  posts: Post[];
}

export interface ThemeOptionProps {
  title: string;
  handleClick: () => void;
}

export interface FormProps {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface SidebarProps {
  isActive: string;
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
  icon: JSX.Element;
  isActive: boolean;
}