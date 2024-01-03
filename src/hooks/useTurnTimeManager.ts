import { useEffect, useRef } from "react";
import { useGameContext } from "../context/GameStateProvider";
import { getRemainigTime } from "../utils/time";

export const useTurnTimeManager = () => {
  const { turn, handleTurnOver } = useGameContext();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const remainingTIme = getRemainigTime(turn);
    timeoutRef.current = setTimeout(() => {
      handleTurnOver();
    }, remainingTIme);
  }, [turn.id]);
};
