import { useContext, ReactNode } from "react";
import { GameContext, IGameContext, LoadedGameContext } from "./Game";
import { ICodeState } from "../interfaces/GameState.interface";
import { Role } from "../enums/Role";
import { v4 as uuidv4 } from "uuid";
import { DETECTIVE_TURN_PER_WORD, LEADER_TURN } from "../constants/turn";
import { toggleTeamTurn } from "../helpers/turn";
import { useTurn } from "../hooks/state/useTurn";
import { useCode } from "../hooks/state/useCode";

export function useGameContext<TGameContext = LoadedGameContext>() {
  return useContext(GameContext) as TGameContext;
}

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode, isCodeLoaded] = useCode();
  const [turn, setTurn, isTurnLoaded] = useTurn();

  const handleCodeSubmit = (code: ICodeState) => {
    setCode(code);
    setTurn((prevTurn) => ({
      id: uuidv4(),
      startTime: Date.now(),
      team: prevTurn.team,
      duration: code.codeLength * DETECTIVE_TURN_PER_WORD,
      role: Role.Detective,
    }));
  };

  const increaseFoundCards = () => {
    setCode((prev) => prev && { ...prev, foundCards: prev?.foundCards + 1 });
  };

  const handleTurnOver = () => {
    setCode(undefined);
    setTurn((prevTurn) => ({
      id: uuidv4(),
      startTime: Date.now(),
      team: toggleTeamTurn(prevTurn.team),
      duration: LEADER_TURN,
      role: Role.Leader,
    }));
  };

  const isGameStateLoaded = isCodeLoaded && isTurnLoaded;

  const gameStateValue: IGameContext = {
    isLoaded: isGameStateLoaded,
    turn,
    code,
    setTurn,
    handleCodeSubmit,
    increaseFoundCards,
    handleTurnOver,
  };

  return (
    <GameContext.Provider value={gameStateValue}>
      {children}
    </GameContext.Provider>
  );
};
