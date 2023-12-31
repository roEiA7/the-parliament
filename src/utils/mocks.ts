import { Role } from "../enums/Role";
import { Team } from "../enums/Team";
import { ICardData } from "../interfaces/CardData.interface";
import { IUser } from "../interfaces/user.interface";
import { CardColor } from "./../enums/CardColor";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const imgUrl = faker.image.url({ height: 300, width: 300 });

export const cardsData: ICardData[] = Array(16)
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
