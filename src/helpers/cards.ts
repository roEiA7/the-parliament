import { CardColor } from "../enums/CardColor";
import { ICardData } from "../interfaces/CardData.interface";

export const isGameOver = (cardsData: ICardData[]): boolean => {
  const isBlackRevealed = cardsData.find(
    (card) => card.color === CardColor.Black
  )?.revealed;
  if (isBlackRevealed) {
    return true;
  }

  const allBlueCardsRevealed = !cardsData.some(
    (card) => card.color === CardColor.Blue && !card.revealed
  );
  if (allBlueCardsRevealed) {
    return true;
  }

  const allRedCardsRevealed = !cardsData.some(
    (card) => card.color === CardColor.Red && !card.revealed
  );
  if (allRedCardsRevealed) {
    return true;
  }

  return false;
};
