import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { useRoomContext } from "../../context/RoomProvider";
import { ReactElement } from "react";

interface IProtectedRouteProps {
  children: ReactElement;
  path: string;
}

const ProtectedRoute = ({ children, path }: IProtectedRouteProps) => {
  const { user, isLoaded } = useAuthContext();
  const { room } = useRoomContext();
  const redirectTo = !user ? "/auth" : room?.gameStarted ? "/game" : "/lobby";
  const shouldRedirect = redirectTo !== path;

  if (!isLoaded) {
    return null; // todo: loading skelton
  }

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;
