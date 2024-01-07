import { Team } from "../../../enums/Team";
import { TeamColor } from "../../../enums/TeamColor";
import { StyledTeamPanelContainer } from "./StyledTeamPanelContainer";
import { useRoomContext } from "../../../context/RoomProvider";

interface ITeamPanelProps {
  team: Team;
}

const TeamPanel = ({ team }: ITeamPanelProps) => {
  const { room } = useRoomContext();
  const cardsData = room?.cardsData || [];
  const teamColor = TeamColor[team];
  const teamCards = cardsData.filter((card) => card.color === teamColor);
  const teamCardsCount = teamCards.length;
  const revealedTeamCardsCount = teamCards.filter(
    (card) => card.revealed
  ).length;
  const remainingCardsCount = teamCardsCount - revealedTeamCardsCount;

  return (
    <StyledTeamPanelContainer>
      <h1 style={{ color: "white", margin: 0 }}>{remainingCardsCount}</h1>
    </StyledTeamPanelContainer>
  );
};

export default TeamPanel;
