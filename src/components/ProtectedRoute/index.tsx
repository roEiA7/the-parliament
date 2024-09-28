import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { ReactElement } from "react";

interface IProtectedRouteProps {
  children: ReactElement;
  path: string;
}

const ProtectedRoute = ({ children, path }: IProtectedRouteProps) => {
  const { user, isLoaded: isUserLoaded } = useAuthContext();

  const getRedirectTo = () => {
    if (!user) {
      return "/auth";
    }

    // if (room?.gameStarted) {
    //   // if (room.isGameOver) {
    //   //   return "/over";
    //   // }
    //   return "/game";
    // }

    return "/lobby";
  };

  const redirectTo = getRedirectTo();
  const shouldRedirect = redirectTo !== path;
  const isAppLoaded = isUserLoaded; // Todo: load posts

  if (!isAppLoaded) {
    return null; // todo: loading skelton
  }

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;
