import { v4 as uuidv4 } from "uuid";
import { Team } from "../enums/Team";
import { ITurnState } from "../interfaces/GameState.interface";
import { Role } from "../enums/Role";

export const LEADER_TURN = 300000;
export const DETECTIVE_TURN_PER_WORD = 60000;
export const INITIAL_LEADER_TURN = 300000;

// todo: randomize team. Currently red always start with 9 cards
export const getInitialTurn = (): ITurnState => ({
  id: uuidv4(),
  role: Role.Leader,
  team: Team.Red,
  duration: INITIAL_LEADER_TURN,
  startTime: Date.now(),
});
