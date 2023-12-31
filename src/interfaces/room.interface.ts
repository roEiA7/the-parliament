import { Team } from "../enums/Team";
import { IUser } from "./user.interface";

// type teamsReady

export interface IRoom {
  gameStarted?: boolean;
  users?: IUser[];
  teamsReady?: {
    [Team.Blue]?: boolean;
    [Team.Red]?: boolean;
  };
}
