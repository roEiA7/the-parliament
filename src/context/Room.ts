import { createContext } from "react";
import { IRoom } from "../interfaces/room.interface";

export interface IRoomContext {
  room?: IRoom;
  setRoom: React.Dispatch<React.SetStateAction<IRoom>>;
  isLoaded: boolean;
}

export const RoomContext = createContext<IRoomContext>({
  setRoom: () => {},
  isLoaded: false,
});
