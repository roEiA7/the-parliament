import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Team } from "../../enums/Team";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Role } from "../../enums/Role";
import ListSubheader from "@mui/material/ListSubheader";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Divider } from "@mui/material";
import { useRoomContext } from "../../context/RoomProvider";
import { useAuthContext } from "../../context/AuthProvider";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface ITeamListProps {
  team: Team;
}

const Titles = {
  [Team.Red]: "קבוצת האדומים",
  [Team.Blue]: "קבוצת הכחולים",
};

const TeamList = ({ team }: ITeamListProps) => {
  const { user: currentUser, setUser } = useAuthContext();
  const { room, setRoom } = useRoomContext();
  const users = room?.users || [];
  const isTeamReady = room?.teamsReady?.[team];
  const teamUsers = users.filter((user) => user.team === team);
  const leader = teamUsers.find((user) => user.role === Role.Leader);
  const detectives = teamUsers.filter((user) => user.role === Role.Detective);
  const isReadyDisabled = !(
    currentUser?.team === team && currentUser.role === Role.Leader
  );

  const handleReadyClick = () => {
    setRoom((prev) => {
      const newTeamsReady = {
        ...prev?.teamsReady,
        [team]: !prev?.teamsReady?.[team],
      };
      const isGameReady = Object.values(newTeamsReady).every(Boolean);

      const newRoom = {
        ...prev,
        teamsReady: newTeamsReady,
        gameStarted: isGameReady,
      };
      return newRoom;
    });
  };
  const handleJoinLeader = () => {
    const role = Role.Leader;
    const newUsers = users
      .filter(
        (user) => user.id !== currentUser?.id && user.role !== Role.Detective
      )
      .concat([{ ...currentUser, role, team }]);
    setRoom((prev) => ({ ...prev, users: newUsers }));
    setUser((prevUser) => ({ ...prevUser, team, role }));
  };
  const handleJoinDetective = () => {
    const role = Role.Detective;
    const newUsers = users
      .filter((user) => user.id !== currentUser?.id)
      .concat([{ ...currentUser, role, team }]);
    setRoom((prev) => ({ ...prev, users: newUsers }));
    setUser((prevUser) => ({ ...prevUser, team, role }));
  };

  return (
    <Box
      className="team-list-container"
      sx={{
        width: "100%",
        height: "60vh",
        overflowY: "auto",
        maxWidth: 360,
        bgcolor: "rgba(16 18 27 / 40%)",
        color: "white",
        direction: "ltr",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List
        className="team-list-container"
        sx={{ overflowY: "auto" }}
        subheader={<h1 style={{ textAlign: "center" }}>{Titles[team]}</h1>}
      >
        {leader && (
          <>
            <ListSubheader>
              <SupportAgentIcon
                sx={{ verticalAlign: "middle", marginRight: 0.5 }}
              />
              מנהיג
            </ListSubheader>
            <ListItem>{leader.displayName}</ListItem>
          </>
        )}
        {detectives.length > 0 && (
          <>
            <ListSubheader>
              <PersonSearchIcon
                sx={{ verticalAlign: "middle", marginRight: 0.5 }}
              />
              בלשים
            </ListSubheader>
            {detectives.map((detective) => (
              <ListItem key={detective.id}>{detective.displayName}</ListItem>
            ))}
          </>
        )}
      </List>
      <Divider />
      <List disablePadding sx={{ marginTop: "auto" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={handleJoinLeader} selected sx={{ gap: 1 }}>
            <SupportAgentIcon />
            <ListItemText primary="הצטרף כמנהיג" />
          </ListItemButton>
          <ListItemButton
            onClick={handleJoinDetective}
            selected
            sx={{ gap: 1 }}
          >
            <PersonSearchIcon />
            <ListItemText primary="הצטרף כבלש" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleReadyClick}
            disabled={isReadyDisabled}
            selected
            sx={{ justifyContent: "center", gap: 1 }}
          >
            מוכנים
            {isTeamReady ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default TeamList;
