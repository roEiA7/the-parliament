import { CardColorType } from './../enums/CardColor'
    ;
export interface ICardData {
    key: number;
    imgUrl: string;
    color: CardColorType;
    revealed: boolean;
}