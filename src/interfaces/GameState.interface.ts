import { Role } from "../enums/Role";
import { Team } from "../enums/Team";

export interface ICodeState {
    word: string;
    number: number;
}

export interface ITurnState {
    id: string;
    team: Team;
    role: Role;
    startTime: number;
    duration: number;
}

export interface IGameState {
    turn: ITurnState;
    code?: ICodeState;
}