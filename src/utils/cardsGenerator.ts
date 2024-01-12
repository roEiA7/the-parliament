import { IMAGE_COMBINATIONS, ImageKey } from "../constants/images";
import { CardColor } from "../enums/CardColor";
import { Team } from "../enums/Team";
import { ICardData } from "../interfaces/CardData.interface";
import { shuffleArray } from "./array";

const TOTAL_CARDS = 25;
const STARTING_TEAM_CARDS = Math.ceil(TOTAL_CARDS / 3);
const SECOND_TEAM_CARDS = STARTING_TEAM_CARDS - 1;

export const generateCards = (): ICardData[] => {
  const imageCombinations = shuffleArray<ImageKey[]>(IMAGE_COMBINATIONS);
  const cardsSize = 25;
  const blackCard =
    imageCombinations[imageCombinations.length - 1].reverse()[0];
  const cards: ICardData[] = [
    {
      color: CardColor.Black,
      img: blackCard,
      key: blackCard,
      revealed: false,
    },
  ];

  const startingTeam =
    Math.floor(Math.random() * 2) === 1 ? Team.Red : Team.Blue;
  const redSize =
    startingTeam === Team.Red ? STARTING_TEAM_CARDS : SECOND_TEAM_CARDS;
  const blueSize =
    startingTeam === Team.Blue ? STARTING_TEAM_CARDS : SECOND_TEAM_CARDS;
  const neturalSize = cardsSize - redSize - blueSize - 1;
  for (const combination of imageCombinations) {
    const redCards = cards.filter((card) => card.color === CardColor.Red);
    const blueCards = cards.filter((card) => card.color === CardColor.Blue);
    const neturalCards = cards.filter(
      (card) => card.color === CardColor.Netural
    );

    if (cards.length === cardsSize) {
      break;
    }

    const blueCardsToAdd = blueSize - blueCards.length;
    const redCardsToAdd = redSize - redCards.length;
    const neturalCardsToAdd = neturalSize - neturalCards.length;

    const cardsToAdd = Math.max(
      blueCardsToAdd,
      redCardsToAdd,
      neturalCardsToAdd
    );
    const cardColor =
      cardsToAdd === blueCardsToAdd
        ? CardColor.Blue
        : cardsToAdd === redCardsToAdd
        ? CardColor.Red
        : CardColor.Netural;

    const images = combination
      .splice(0, cardsToAdd)
      .filter((img: ImageKey) => !cards.find((card) => card.img === img));
    const newCards: ICardData[] = images.map((img: ImageKey) => ({
      img,
      key: img,
      color: cardColor,
      revealed: false,
    }));
    cards.push(...newCards);
  }

  return shuffleArray(cards);
};
