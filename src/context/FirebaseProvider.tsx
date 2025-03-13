import { useContext, ReactNode } from "react";
import { FirebaseContext, IFirebaseContext, LoadedFirebaseContext, } from "./FirebasState";
import { useUsers } from "../hooks/state/useUsers";
import { usePosts } from "../hooks/state/usePosts";
import getUserStats from "../utils/getUserStats";
import SkeletonPage from "../pages/SkeletonPage";


export function useFirebaseContext<TFirebaseContext = LoadedFirebaseContext>() {
  return useContext(FirebaseContext) as TFirebaseContext;
}

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers, usersIsLoaded] = useUsers();
  const [posts, setPosts, postsIsLoaded] = usePosts();

  const isLoaded = usersIsLoaded && postsIsLoaded;


  const contextValue: IFirebaseContext = {
    isLoaded,
    users: (users || []).map(user => ({ ...user, ...getUserStats(user, posts) })),
    setUsers,
    posts: (posts || [])?.sort((a, b) => !a.isOpen || (a?.order || 0) > (b?.order || 0) ? 1 : -1),
    setPosts,
  };

  // contextValue.isLoaded && console.log({ users: contextValue.users, posts: contextValue.posts })


  return (
    isLoaded
      ? <FirebaseContext.Provider value={contextValue}>
        {children}
      </FirebaseContext.Provider>
      : <SkeletonPage />
  );
};
