import { UserAvatar } from "../enums/UserAvatar";

export interface IUser {
  id?: string;
  displayName?: string | null;
  photoURL?: string | null;
  avatar?: UserAvatar;
  balance?: number;
  hitRate?: number;
  totalBets?: number;
  totalHits?: number;
  extraBalance?: number;
}
