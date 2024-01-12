import { CardColorType } from "./../enums/CardColor";
export interface ICardData {
  key: string;
  img: string;
  color: CardColorType;
  revealed: boolean;
}
