import { useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext, IAuthContext } from "./Auth";
import { IUser } from "../interfaces/user.interface";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { decodeEmail } from "../utils/email";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { mockUser } from "../utils/mocks";

const provider = new FacebookAuthProvider();
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      // TODO: MOCK;
      setUser(mockUser);
      // if (authUser) {
      //   const { email, uid: id } = authUser;
      //   const displayName = decodeEmail(email);
      //   setUser({ displayName, id });
      // } else {
      //   setUser(undefined);
      // }
      setIsLoaded(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithFacebook = () => signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      setUser(user);

      // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential?.accessToken;

    })
    .catch((error) => {
      window.alert(JSON.stringify(error));
    });

  const value: IAuthContext = {
    user,
    setUser,
    isLoaded,
    signInWithFacebook,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
