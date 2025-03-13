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

    return path;
  };

  const redirectTo = getRedirectTo();
  const shouldRedirect = redirectTo !== path;
  const isAppLoaded = isUserLoaded;

  if (!isAppLoaded) {
    return null;
  }

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;
