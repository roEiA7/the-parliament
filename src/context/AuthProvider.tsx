import { useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext, IAuthContext } from "./Auth";
import { IUser } from "../interfaces/user.interface";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { email, uid: id } = authUser;
        const displayName = email?.replace("@walla.com", "");
        setUser({ displayName, id });
      } else {
        setUser(undefined);
      }
      setIsLoaded(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value: IAuthContext = {
    user,
    setUser,
    isLoaded,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
