import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { useRoomContext } from "../../context/RoomProvider";

const useInitUsersRoom = () => {
  const { user, isLoaded: isUserLoaded, setUser } = useAuthContext();
  const { room, isLoaded: isRoomLoaded } = useRoomContext();

  useEffect(() => {
    if (isRoomLoaded && isUserLoaded) {
      const roomUser = room?.users.find((roomUser) => roomUser.id === user?.id);
      const { team, role } = roomUser || {};
      setUser((prev) => ({
        ...prev,
        team,
        role,
      }));
    }
  }, [isRoomLoaded, isUserLoaded]);
};

export default useInitUsersRoom;
