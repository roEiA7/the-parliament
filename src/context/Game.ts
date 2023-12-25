import { cardsData as mockCardsData } from "./../utils/mocks";
import { createContext } from "react";
import {
  ICodeState,
  IGameState,
  ITurnState,
} from "../interfaces/GameState.interface";
import { Team } from "../enums/Team";
import { Role } from "../enums/Role";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ICardData } from "../interfaces/CardData.interface";

export interface IGameContext extends IGameState {
  setTurn: React.Dispatch<React.SetStateAction<ITurnState>>;
  setCardsData: React.Dispatch<React.SetStateAction<ICardData[]>>;
  handleCodeSubmit: (code: ICodeState) => void;
  increaseFoundCards: () => void;
  handleTurnOver: () => void;
}

export const defaultGameValue: IGameContext = {
  turn: {
    id: uuidv4(),
    team: Team.Blue,
    role: Role.Leader,
    startTime: Date.now(),
    duration: 5000, // 3 minutes in ms
  },
  cardsData: mockCardsData,
  setTurn: () => {},
  handleCodeSubmit: () => {},
  setCardsData: () => {},
  increaseFoundCards: () => {},
  handleTurnOver: () => {},
};

export const GameContext = createContext<IGameContext>(defaultGameValue);
