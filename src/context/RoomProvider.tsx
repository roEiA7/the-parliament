import { useContext, ReactNode } from "react";
import { IRoomContext, RoomContext } from "./Room";
import { useRoom } from "../hooks/state/useRoom";

export const useRoomContext = () => {
  return useContext(RoomContext);
};

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom, isLoaded] = useRoom();

  const value: IRoomContext = {
    room,
    setRoom,
    isLoaded,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
