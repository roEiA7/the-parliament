import { v4 as uuidv4 } from "uuid";
import { Team } from "../enums/Team";
import { ITurnState } from "../interfaces/GameState.interface";
import { Role } from "../enums/Role";
import { ICardData } from "../interfaces/CardData.interface";
import { CardColor } from "../enums/CardColor";
import { STARTING_TEAM_CARDS } from "./cards";

export const LEADER_TURN = 300000;
export const DETECTIVE_TURN_PER_WORD = 60000;
export const INITIAL_LEADER_TURN = 300000;
export const TIME_NOTIFICATION = 11500;

// todo: randomize team. Currently red always start with 9 cards
export const getInitialTurn = (cardsData?: ICardData[]): ITurnState => {
  const team = cardsData?.filter((card) => card.color === CardColor.Red)
    .length === STARTING_TEAM_CARDS ? Team.Red : Team.Blue;

  return ({
    id: uuidv4(),
    role: Role.Leader,
    team,
    duration: INITIAL_LEADER_TURN,
    startTime: Date.now(),
  })
}
