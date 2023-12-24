import { TeamColor } from "./TeamColor";

enum WildColor {
    Black = '#645d5c',
    Netural = '#DCDCDC'
}

export const CardColor = { ...TeamColor, ...WildColor } as const;
export type CardColorType = TeamColor | WildColor;
