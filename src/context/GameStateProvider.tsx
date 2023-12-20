import { useContext, useState, ReactNode } from "react"
import { GameContext, IGameContext } from "./Game"
import { ITurnState } from "../interfaces/GameState.interface";
import { Team } from "../enums/Team";
import { Role } from "../enums/Role";
import { v4 as uuidv4 } from 'uuid';

export const useGameContext = () => {
    return useContext(GameContext);
}

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [turn, setTurn] = useState<ITurnState>({
        id: uuidv4(),
        team: Team.Blue,
        role: Role.Leader,
        startTime: Date.now(),
        duration: 5000, // 3 minutes in ms
    });

    const gameStateValue: IGameContext = {
        turn,
        setTurn,
    }

    return <GameContext.Provider value={gameStateValue} >
        {children}
    </GameContext.Provider>;
}