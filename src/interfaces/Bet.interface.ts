import { Prediction } from "../enums/Prediction";
import { IUser } from "./user.interface";

export interface IBet {
  user: Pick<IUser, 'id' | 'displayName' | 'photoURL'>;
  prediction: Prediction;
  amount: number;
  timestamp: number;
}