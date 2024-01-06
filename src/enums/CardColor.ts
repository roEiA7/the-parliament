import { TeamColor } from "./TeamColor";

enum WildColor {
  Black = "#0f0d0d",
  Netural = "#DCDCDC",
}

export const CardColor = { ...TeamColor, ...WildColor } as const;
export type CardColorType = TeamColor | WildColor;
