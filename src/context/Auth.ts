import { createContext } from 'react';
import { IUser } from '../interfaces/user.interface';

export interface IAuthContext extends Partial<IUser> {
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const AuthContext = createContext<IAuthContext>({
    setUser: () => { }
});
