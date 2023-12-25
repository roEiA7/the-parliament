import { Fab } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useGameContext } from "../../../context/GameStateProvider";
import { Team } from "../../../enums/Team";
import { TeamColor } from "../../../enums/TeamColor";
import { StyledTeamPanelContainer } from "./StyledTeamPanelContainer";

interface ITeamPanelProps {
  team: Team;
}

const TeamPanel = ({ team }: ITeamPanelProps) => {
  const { cardsData } = useGameContext();
  const teamColor = TeamColor[team];
  const teamCards = cardsData.filter((card) => card.color === teamColor);
  const teamCardsCount = teamCards.length;
  const revealedTeamCardsCount = teamCards.filter(
    (card) => card.revealed
  ).length;
  const remainingCardsCount = teamCardsCount - revealedTeamCardsCount;

  return (
    <StyledTeamPanelContainer>
      <h1 style={{ color: "white" }}>{remainingCardsCount}</h1>
    </StyledTeamPanelContainer>
  );
};

export default TeamPanel;
