import { useEffect } from "react";
import { IRoom } from "../../interfaces/room.interface";
import { initializeRoom, mockRoom } from "../../utils/mocks";
import { useDoc } from "./useDoc";

export const useRoom = () => {
  const useRoomDoc = useDoc<IRoom>("rooms", "room_0", mockRoom);
  const [room, setRoom, isLoaded] = useRoomDoc;

  useEffect(() => {
    if (isLoaded && !room) {
      const newRoom = initializeRoom();
      setRoom(newRoom);
    }
  }, [isLoaded, room, setRoom]);

  return useRoomDoc;
};
