import type { NextRouter } from "next/router";

export interface FirebaseUser {
  displayName: string;
  photoURL: string;
  email: string;
}

export interface MongoDBUser {
  username: string;
  image: string;
  _id: string;
}

export interface UserFormData {
  username: string;
  image: string;
  email: string;
}