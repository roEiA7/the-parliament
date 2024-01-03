import { Role } from "../enums/Role";
import { Team } from "../enums/Team";

export interface ITurnState {
  id: string;
  team: Team;
  role: Role;
  startTime: number;
  duration: number;
}

export interface ICodeState {
  codeName: string;
  codeLength: number;
  foundCards: number;
}

export interface IGameState {
  turn: ITurnState;
  code?: ICodeState;
}
