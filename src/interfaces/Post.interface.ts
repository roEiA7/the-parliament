import { Prediction } from "../enums/Prediction";
import { IBet } from "./Bet.interface";

export type OddsType = { [key in Prediction]: number };


export interface IPost {
  key: string;
  img: string;
  title: string;
  description?: string;
  odds: OddsType;
  bets: IBet[];
  isOpen: boolean;
}

