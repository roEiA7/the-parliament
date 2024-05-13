import { CardColor } from "../enums/CardColor";
import { Team } from "../enums/Team";
import { ICardData } from "../interfaces/CardData.interface";

export const getWinningTeam = (cardsData: ICardData[], turnTeam: Team): Team | null => {
  const isBlackRevealed = cardsData.find(
    (card) => card.color === CardColor.Black
  )?.revealed;
  if (isBlackRevealed) {
    return turnTeam === Team.Blue ? Team.Red : Team.Blue;
  }

  const allBlueCardsRevealed = !cardsData.some(
    (card) => card.color === CardColor.Blue && !card.revealed
  );
  if (allBlueCardsRevealed) {
    return Team.Blue;
  }

  const allRedCardsRevealed = !cardsData.some(
    (card) => card.color === CardColor.Red && !card.revealed
  );
  if (allRedCardsRevealed) {
    return Team.Red;
  }

  return null;
};


