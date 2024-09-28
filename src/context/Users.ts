import { createContext } from "react";
import React from "react";
import { UnloadedContext } from "../types/UnloadedContext.type";
import { IUser } from "../interfaces/user.interface";

export type LoadedUsersContext = {
  isLoaded: true;
} & {
  users?: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
};

export type IUsersContext = UnloadedContext | LoadedUsersContext;

export const defaultUsersValue: IUsersContext = {
  isLoaded: false,
};

export const UsersContext = createContext<IUsersContext>(defaultUsersValue);
