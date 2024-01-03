import { ITurnState } from "../../interfaces/GameState.interface";
import { mockTurn } from "../../utils/mocks";
import { useDoc } from "./useDoc";

export const useTurn = () => {
  return useDoc<ITurnState>("turns", "turn_0", mockTurn);
};
