import { useEffect, useRef } from "react";
import { useGameContext } from "../context/GameStateProvider";
import { getRemainigTime } from "../utils/time";
import { useAuthContext } from "../context/AuthProvider";
import TimeTickSound from "../assets/sounds/timer.mp3"
import useSoundManager from "./useSoundManager";
import { TIME_NOTIFICATION } from "../constants/turn";

export const useTurnTimeManager = () => {
  const { turn, handleTurnOver } = useGameContext();
  const { user, isLoaded: isUserLoaded } = useAuthContext();
  const [playTimeSound] = useSoundManager(TimeTickSound);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tickSoundRef = useRef<NodeJS.Timeout>();
  const isGuest = !user?.role;

  useEffect(() => {
    if (isGuest && isUserLoaded) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (tickSoundRef.current) {
        clearTimeout(tickSoundRef.current)
      }
      const remainingTIme = getRemainigTime(turn);

      timeoutRef.current = setTimeout(() => {
        handleTurnOver();
      }, remainingTIme);
      tickSoundRef.current = setTimeout(() => {
        playTimeSound();
      }, remainingTIme - TIME_NOTIFICATION);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (tickSoundRef.current) {
          clearTimeout(tickSoundRef.current)
        }
      }
    }
  }, [turn.id, isGuest, isUserLoaded]);
};
