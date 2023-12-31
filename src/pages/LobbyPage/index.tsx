import { StyledLobbyPageContainer } from "./StyledLobbyPageContainer.styled";
import backgroundImage from "../../assets/lobby-background.png";
import TeamList from "./TeamList";
import { Team } from "../../enums/Team";
import useStartGame from "../../hooks/useStartGame";

const LobbyPage = () => {
  useStartGame();

  return (
    <StyledLobbyPageContainer backgroundImage={backgroundImage}>
      <div className="bg"></div>
      <div className="vs-circle">
        <span>.vs</span>
      </div>
      <TeamList team={Team.Red} />
      <TeamList team={Team.Blue} />
    </StyledLobbyPageContainer>
  );
};

export default LobbyPage;
