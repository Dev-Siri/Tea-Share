import React from 'react';
import { PostType, MongoDBUserType } from './';

interface HomeProps {
  posts: PostType[];
}

interface PostProps {
  post: PostType;
}

interface PostInfoProps {
  post: PostType;
}

interface SearchBarProps {
  handleSearch: () => void;
}

interface LogoutButtonProps {
  handleLogout: () => void;
}

interface LayoutProps {
  children: Array<ReactElement<ChildProps, JSXElementConstructor<ChildType>>>;
  [key: string]: any;
}

interface SpinnerProps {
  title?: string;
}

interface ProfileProps {
  user: MongoDBUserType[0];
  posts: PostType[];
}

interface PostAuthorProps {
  user: MongoDBUserType;
  posts: PostType[];
}

interface ThemeOptionProps {
  title: string;
  handleClick: () => void;
}

interface FormProps {
  handleAuth: (displayName: string, email: string, password: string, photoURL: string, event: any) => void;
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ColorInputProps {
  color: string;
  handleClick: () => void;
}

interface UserListProps {
  users: MongoDBUserType[];
  itemClick: {
    changeShowingUserInfo: () => void;
    setSelectedUser: React.Dispatch<React.SetStateAction<MongoDBUserType | null>>;
  };
}

interface AllUsersViewProps {
  users: MongoDBUserType[];
}

interface UserSideViewProps {
  closeMenu: () => void;
  user: MongoDBUserType | null;
}

export type {
  HomeProps,
  PostProps,
  PostInfoProps,
  SearchBarProps,
  LogoutButtonProps,
  LayoutProps,
  SpinnerProps,
  ProfileProps,
  PostAuthorProps,
  ThemeOptionProps,
  FormProps,
  ColorInputProps,
  SpinnerProps,
  UserListProps,
  AllUsersViewProps,
  UserSideViewProps,
};
