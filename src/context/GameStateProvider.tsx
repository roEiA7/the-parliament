import { useContext, useState, ReactNode } from "react";
import { GameContext, IGameContext } from "./Game";
import { ICodeState, ITurnState } from "../interfaces/GameState.interface";
import { cardsData as mockCardsData } from "../utils/mocks";
import { Team } from "../enums/Team";
import { Role } from "../enums/Role";
import { v4 as uuidv4 } from "uuid";
import { DETECTIVE_TURN_PER_WORD, LEADER_TURN } from "../constants/turn";
import { ICardData } from "../interfaces/CardData.interface";
import { toggleTeamTurn } from "../helpers/turn";

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const [turn, setTurn] = useState<ITurnState>({
    id: uuidv4(),
    team: Team.Blue,
    role: Role.Leader,
    startTime: Date.now(),
    duration: 5000, // 3 minutes in ms
  });
  const [code, setCode] = useState<ICodeState>();
  const [cardsData, setCardsData] = useState<ICardData[]>(mockCardsData);

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

  const gameStateValue: IGameContext = {
    turn,
    code,
    setTurn,
    handleCodeSubmit,
    cardsData,
    setCardsData,
    increaseFoundCards,
    handleTurnOver,
  };

  return (
    <GameContext.Provider value={gameStateValue}>
      {children}
    </GameContext.Provider>
  );
};
