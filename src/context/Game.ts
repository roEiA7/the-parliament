import { createContext } from "react";
import {
  ICodeState,
  IGameState,
  ITurnState,
} from "../interfaces/GameState.interface";
import React from "react";

export type UnloadedGameContext = {
  isLoaded: false;
};

export type LoadedGameContext = {
  isLoaded: true;
} & IGameState & {
    setTurn: React.Dispatch<React.SetStateAction<ITurnState>>;
    handleCodeSubmit: (code: ICodeState) => void;
    increaseFoundCards: () => void;
    handleTurnOver: () => void;
  };

export type IGameContext = UnloadedGameContext | LoadedGameContext;

export const defaultGameValue: IGameContext = {
  isLoaded: false,
};

export const GameContext = createContext<IGameContext>(defaultGameValue);
