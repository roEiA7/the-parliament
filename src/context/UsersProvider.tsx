import { useContext, ReactNode } from "react";
import { IUsersContext, LoadedUsersContext, UsersContext } from "./Users";
import { useUsers } from "../hooks/state/useUsers";


export function useUsersContext<TUserContext = LoadedUsersContext>() {
  return useContext(UsersContext);
}

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers, isLoaded] = useUsers();

  const gameStateValue: IUsersContext = {
    isLoaded,
    users,
    setUsers
  };

  return (
    <UsersContext.Provider value={gameStateValue}>
      {children}
    </UsersContext.Provider>
  );
};
