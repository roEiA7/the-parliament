import { useContext, useState, ReactNode, useEffect } from "react";
import { IRoomContext, RoomContext } from "./Room";
import { IRoom } from "../interfaces/room.interface";
import { Team } from "../enums/Team";
import { useAuthContext } from "./AuthProvider";

export const useRoomContext = () => {
  return useContext(RoomContext);
};

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom] = useState<IRoom>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { setUser } = useAuthContext();

  useEffect(() => {
    // fetch room from remote

    // default room
    const newRoom: IRoom = {
      users: [],
      teamsReady: {
        [Team.Blue]: false,
        [Team.Red]: false,
      },
      gameStarted: false,
    };
    setRoom(newRoom);
    setIsLoaded(true);

    setUser((prevUser) => {
      const roomUser = newRoom?.users?.find((user) => user.id === prevUser?.id);
      const { team, role } = roomUser || {};

      return {
        ...prevUser,
        team,
        role,
      };
    });
  }, [setUser]);

  const value: IRoomContext = {
    room,
    setRoom,
    isLoaded,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
