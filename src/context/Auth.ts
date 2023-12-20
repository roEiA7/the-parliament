import { createContext } from 'react';
import { IUser } from '../interfaces/user.interface';

export interface IAuthContext extends Partial<IUser> {
    setUser: (user: IUser) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
