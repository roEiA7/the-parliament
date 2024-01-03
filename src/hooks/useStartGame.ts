import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../context/RoomProvider";
import { useEffect } from "react";

const useStartGame = () => {
  const navigate = useNavigate();
  const { room } = useRoomContext();
  const gameStarted = room?.gameStarted;

  // useEffect(() => {
  //   if (gameStarted) {
  //     navigate("/game");
  //   }
  // }, [gameStarted, navigate]);
};

export default useStartGame;
