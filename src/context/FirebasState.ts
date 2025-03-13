import { createContext } from "react";
import React from "react";
import { UnloadedContext } from "../types/UnloadedContext.type";
import { IUser } from "../interfaces/user.interface";
import { IPost } from "../interfaces/Post.interface";

export type LoadedFirebaseContext = {
  isLoaded: true;
} & {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[] | undefined>>;
};

export type IFirebaseContext = UnloadedContext | LoadedFirebaseContext;

export const defaultValue: IFirebaseContext = {
  isLoaded: false,
};

export const FirebaseContext = createContext<IFirebaseContext>(defaultValue);
