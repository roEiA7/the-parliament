import { useContext, useEffect, useRef } from "react";
import { useGameContext } from "../context/GameStateProvider";
import { getRemainigTime } from "../utils/time";
import { ITurnState } from "../interfaces/GameState.interface";
import { Team } from "../enums/Team";
import { Role } from "../enums/Role";
import { v4 as uuidv4 } from 'uuid';
import { LEADER_TURN } from "../constants/turn";

export const useTurnTimeManager = () => {
    const { turn, setTurn } = useGameContext();
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        const remainingTIme = getRemainigTime(turn);
        timeoutRef.current = setTimeout(() => {
            const newTurn: ITurnState = {
                id: uuidv4(),
                team: turn.team === Team.Blue ? Team.Red : Team.Blue,
                role: Role.Leader,
                duration: LEADER_TURN,
                startTime: Date.now(),
            };
            setTurn(newTurn);
        }, remainingTIme);
    }, [turn.id])
}