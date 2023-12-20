import { Role } from "../enums/Role";
import { Team } from "../enums/Team";

export interface IUser {
    id: string;
    team: Team;
    role: Role;
}