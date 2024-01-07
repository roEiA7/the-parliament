import { ButtonProps } from "@mui/material";
import { Role } from "../enums/Role";
import { Team } from "../enums/Team";
import { TeamColor } from "../enums/TeamColor";
import { ITurnState } from "../interfaces/GameState.interface";
import { IUser } from "../interfaces/user.interface";
import { getRemainigTime } from "../utils/time";

export const toggleTeamTurn = (team: Team) =>
  team === Team.Red ? Team.Blue : Team.Red;

export const getUserTurnMetadata = ({
  turn,
  user,
}: {
  turn: ITurnState;
  user: IUser;
}) => {
  const remainingTime = getRemainigTime(turn);
  const isUserTUrn = turn.team === user.team && turn.role === user.role;
  const isGuestTurn = turn.role === Role.Detective && user.role === undefined;
  const isLeader = user.role === Role.Leader;
  const isCardsDisabled = isLeader || !(isUserTUrn || isGuestTurn);
  const teamColor = user.team && TeamColor[user.team];
  const muiColor: ButtonProps["color"] =
    teamColor === TeamColor.Red ? "error" : "primary";

  return {
    remainingTime,
    isUserTUrn,
    isLeader,
    isCardsDisabled,
    teamColor,
    muiColor,
  };
};
