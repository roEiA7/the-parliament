import { IUser } from "../../interfaces/user.interface";
import { useDoc } from "./useDoc";

export const useUsers = () => {
  return useDoc<IUser[] | undefined>("users", "users_0", undefined);
};
