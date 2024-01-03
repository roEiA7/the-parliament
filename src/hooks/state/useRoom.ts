import { useEffect } from "react";
import { IRoom } from "../../interfaces/room.interface";
import { mockRoom } from "../../utils/mocks";
import { useDoc } from "./useDoc";

export const useRoom = () => {
  const useRoomDoc = useDoc<IRoom>("rooms", "room_0", mockRoom);
  const [room, setRoom, isLoaded] = useRoomDoc;

  useEffect(() => {
    if (isLoaded && !room) {
      setRoom(mockRoom);
    }
  }, [isLoaded, room, setRoom]);

  return useRoomDoc;
};
