import { useContext, useState, ReactNode } from "react"
import { AuthContext, IAuthContext } from "./Auth";
import { IUser } from "../interfaces/user.interface";
import { mockUser } from "../utils/mocks";

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // const [user, setUser] = useState<IUser | null>(null);
    const [user, setUser] = useState<IUser | null>(mockUser);
    const value: IAuthContext = {
        ...(user && user),
        setUser,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
}