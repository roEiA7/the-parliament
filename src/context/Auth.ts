import { createContext } from "react";
import { IUser } from "../interfaces/user.interface";

export interface IAuthContext {
  user?: IUser;
  isLoaded: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  signInWithFacebook: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoaded: false,
  setUser: () => { },
  signInWithFacebook: () => { }
});
