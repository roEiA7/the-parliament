import { StyledGameOverPageContaienr } from "./StyledGameOverPageContainer.styled";
import backgroundImage from "../../assets/lobby-background.png";
import { Button } from "@mui/material";
import { useGameContext } from "../../context/GameStateProvider";
import { useRoomContext } from "../../context/RoomProvider";
import { IRoom } from "../../interfaces/room.interface";
import { ITurnState } from "../../interfaces/GameState.interface";

const GameOverPage = () => {
  const { setTurn } = useGameContext();
  const { setRoom } = useRoomContext();

  const startOver = () => {
    setRoom({} as IRoom);
    setTurn({} as ITurnState);
  };

  return (
    <StyledGameOverPageContaienr backgroundImage={backgroundImage}>
      <div className="bg" />
      אומרים בשעה טובה
      <Button onClick={startOver}>תתחיל חדש</Button>
    </StyledGameOverPageContaienr>
  );
};

export default GameOverPage;
