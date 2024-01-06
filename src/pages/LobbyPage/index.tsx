import { StyledLobbyPageContainer } from "./StyledLobbyPageContainer.styled";
import backgroundImage from "../../assets/lobby-background.png";
import TeamList from "./TeamList";
import { Team } from "../../enums/Team";

const LobbyPage = () => {
  return (
    <StyledLobbyPageContainer backgroundImage={backgroundImage}>
      <div className="bg"></div>
      <div className="vs-circle">
        <span>.vs</span>
      </div>
      <TeamList team={Team.Blue} />
      <TeamList team={Team.Red} />
    </StyledLobbyPageContainer>
  );
};

export default LobbyPage;
