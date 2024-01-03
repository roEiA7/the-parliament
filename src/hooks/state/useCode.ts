import { ICodeState } from "../../interfaces/GameState.interface";
import { useDoc } from "./useDoc";

export const useCode = () => {
  return useDoc<ICodeState | undefined>("codes", "code_0", undefined);
};
