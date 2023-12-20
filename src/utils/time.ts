import { ITurnState } from "../interfaces/GameState.interface";

export const getRemainigTime = (turn: ITurnState) => {
    const currentTime = Date.now();
    const endTime = turn.startTime + turn.duration;
    const timeLeft = endTime - currentTime;

    return Math.max(0, timeLeft);
}