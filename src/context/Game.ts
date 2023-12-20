import { createContext } from 'react';
import { IGameState, ITurnState } from '../interfaces/GameState.interface';
import { Team } from '../enums/Team';
import { Role } from '../enums/Role';
import { v4 as uuidv4 } from 'uuid';

export interface IGameContext extends IGameState {
    setTurn: (turn: ITurnState) => void;
}

export const defaultGameValue: IGameContext = {
    turn: {
        id: uuidv4(),
        team: Team.Blue,
        role: Role.Leader,
        startTime: Date.now(),
        duration: 5000, // 3 minutes in ms
    },
    setTurn: (turn: ITurnState) => { },
}

export const GameContext = createContext<IGameContext>(defaultGameValue);
