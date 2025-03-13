import { Prediction } from "../enums/Prediction";

export interface IBet {
  userId: string;
  prediction: Prediction;
  amount: number;
  timestamp: number;
}