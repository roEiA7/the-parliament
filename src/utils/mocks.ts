import { Role } from "../enums/Role";
import { Team } from "../enums/Team";
import { ITurnState } from "../interfaces/GameState.interface";
import { IRoom } from "../interfaces/room.interface";
import { IUser } from "../interfaces/user.interface";
import { v4 as uuidv4 } from "uuid";
import { generateCards } from "./cardsGenerator";

export const mockUser: IUser = {
  id: uuidv4(),
  role: Role.Leader,
  team: Team.Blue,
};

export const mockTurn: ITurnState = {
  id: uuidv4(),
  role: Role.Leader,
  team: Team.Blue,
  duration: 3000,
  startTime: Date.now(),
};

export const mockRoom: IRoom = {
  users: [],
  teamsReady: {
    [Team.Blue]: false,
    [Team.Red]: false,
  },
  gameStarted: false,
  cardsData: [],
  activeCard: null,
  winningTeam: null,
};

export const initializeRoom = () => {
  return {
    ...mockRoom,
    cardsData: generateCards(),
  };
};
