import { createContext } from "react";
import { IUser } from "../interfaces/user.interface";

export interface IAuthContext {
  user?: IUser;
  isLoaded: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  signIn: (authProvider: 'Facebook' | 'Gmail') => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoaded: false,
  setUser: () => { },
  signIn: (authProvider: 'Facebook' | 'Gmail') => { }
});
