import React, { ReactNode, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useAuthContext } from "../../../context/AuthProvider";
import { Team } from "../../../enums/Team";

interface IActionsMenuProps {
  children: ReactNode;
}

const ActionsMenu = ({ children }: IActionsMenuProps) => {
  const [value, setValue] = useState(0);
  const { user } = useAuthContext();
  const background = `linear-gradient(to ${
    user?.team === Team.Red ? "right" : "left"
  }, #f9857f, white 70%, white 70%, #73a8d6)`;
  const xsBackground = `linear-gradient(to ${
    user?.team === Team.Red ? "bottom" : "top"
  }, #73a8d6, white 55%, white 55%, #f9857f)`;

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: { xs: "space-around", sm: "center" },
        flexDirection: { xs: "column-reverse", sm: "row" },
        paddingX: 4,
        paddingY: { xs: 1, sm: 0.5 },
        background: {
          xs: xsBackground,
          sm: background,
        },
        height: { xs: 144, sm: 44, md: 56 },
      }}
    >
      {children}
    </BottomNavigation>
  );
};

export default ActionsMenu;
