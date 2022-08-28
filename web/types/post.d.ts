import React from "react";
import type { NextRouter } from "next/router";

export type ChangeHandler = (event: any) => void;

export interface PostFormData {
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  image: string;
  createdAt: string;
  people: string[];
  peopleImage: string[];
}