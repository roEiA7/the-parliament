import { IMAGES } from "../constants/images";
import { Role } from "../enums/Role";
import { Team } from "../enums/Team";
import { ICardData } from "../interfaces/CardData.interface";
import { ITurnState } from "../interfaces/GameState.interface";
import { IRoom } from "../interfaces/room.interface";
import { IUser } from "../interfaces/user.interface";
import { CardColor } from "./../enums/CardColor";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { shuffleArray } from "./array";

const imgUrl = faker.image.url({ height: 300, width: 300 });

export const mockCardsData: ICardData[] = Array(25)
  .fill(null)
  .map((_, i) => ({
    key: faker.number.int(),
    imgUrl,
    color:
      i % 3 === 0
        ? CardColor.Red
        : i % 3 === 1
        ? CardColor.Blue
        : CardColor.Netural,
    revealed: false,
  }));

export const mockUser: IUser = {
  id: uuidv4(),
  role: Role.Leader,
  team: Team.Blue,
};

export const mockTurn: ITurnState = {
  id: uuidv4(),
  role: Role.Leader,
  team: Team.Blue,
  duration: 3000,
  startTime: Date.now(),
};

export const mockRoom: IRoom = {
  users: [],
  teamsReady: {
    [Team.Blue]: false,
    [Team.Red]: false,
  },
  gameStarted: false,
  cardsData: mockCardsData,
  activeCard: null,
  isGameOver: false,
};

export const initializeRoom = () => {
  const images = shuffleArray<string>(Object.values(IMAGES));
  const cardsData = Array(25)
    .fill(null)
    .map((_, i) => ({
      key: faker.number.int(),
      imgUrl: images[i],
      color:
        i % 3 === 0
          ? CardColor.Red
          : i % 3 === 1
          ? CardColor.Blue
          : CardColor.Netural,
      revealed: false,
    }));

  const neturalCard = cardsData.find(
    (card) => card.color === CardColor.Netural
  );
  if (neturalCard) {
    neturalCard.color = CardColor.Black;
  }

  return {
    ...mockRoom,
    cardsData: shuffleArray<ICardData>(cardsData),
  };
};
