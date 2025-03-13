import { useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext, IAuthContext } from "./Auth";
import { IUser } from "../interfaces/user.interface";
import { GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useFirebaseContext } from "./FirebaseProvider";
import { LoadedFirebaseContext } from "./FirebasState";
import { DEFAULT_BALANACE } from "../constants/balance";
import { UserAvatar } from "../enums/UserAvatar";
import SkeletonPage from "../pages/SkeletonPage";

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [isLoaded, setIsLoaded] = useState(false);
  const { users, setUsers } = useFirebaseContext<LoadedFirebaseContext>();

  const addUser = (authUser: User): IUser => {
    const user: IUser = {
      id: authUser.uid,
      displayName: authUser.displayName,
      balance: DEFAULT_BALANACE,
      avatar: UserAvatar.Default,
      photoURL: authUser.photoURL,
    }
    setUsers((prevUsers) => [...(prevUsers || []), user]);
    return user;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        let userValue = users?.find(user => user.id === authUser.uid);
        if (!userValue) {
          userValue = addUser(authUser);
        }

        setUser(userValue);
      } else {
        setUser(undefined);
      }
      setIsLoaded(true);
    });

    return () => {
      unsubscribe();
    };
  }, [users]);

  const signIn = (authProvider: 'Facebook' | 'Gmail') => {
    const provider = authProvider === 'Facebook' ? new FacebookAuthProvider() : new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const authUser = result.user;
        let userValue = users?.find(user => user.id === authUser.uid);
        if (!userValue) {
          userValue = addUser(authUser);
        }
        setUser(userValue);

        // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential?.accessToken;

      })
      .catch((error) => {
        console.error({ authError: error })
      });
  }

  const value: IAuthContext = {
    user,
    setUser,
    isLoaded,
    signIn,
  };

  return (
    isLoaded
      ? <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      : <SkeletonPage />
  );
};
