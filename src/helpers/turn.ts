import { Team } from "../enums/Team";

export const toggleTeamTurn = (team: Team) => team === Team.Red ? Team.Blue : Team.Red;