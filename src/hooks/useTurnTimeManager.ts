import { useEffect, useRef } from "react";
import { useGameContext } from "../context/GameStateProvider";
import { getRemainigTime } from "../utils/time";
import { useAuthContext } from "../context/AuthProvider";

export const useTurnTimeManager = () => {
  const { turn, handleTurnOver } = useGameContext();
  const { user, isLoaded: isUserLoaded } = useAuthContext();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isGuest = !user?.role;

  useEffect(() => {
    if (isGuest && isUserLoaded) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      const remainingTIme = getRemainigTime(turn);
      timeoutRef.current = setTimeout(() => {
        handleTurnOver();
      }, remainingTIme);
    }
  }, [turn.id, isGuest, isUserLoaded]);
};
