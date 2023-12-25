import { Button } from "@mui/material";
import { useState } from "react";
import { TeamColor } from "../../enums/TeamColor";

interface IToggleProps {
  onToggle: () => void;
  text: { off: string; on: string };
  className?: string;
  width: string;
  teamColor?: TeamColor;
}

const ToggleV2 = ({ onToggle, text, width, teamColor }: IToggleProps) => {
  const [isOn, setIsOn] = useState(false);
  const color = teamColor === TeamColor.Blue ? "primary" : "error";
  const handleToggleClick = () => {
    setIsOn((prev) => !prev);
    onToggle();
  };

  return (
    <Button
      variant={isOn ? "contained" : "outlined"}
      onClick={handleToggleClick}
      sx={{ width }}
      color={color}
    >
      {isOn ? text.on : text.off}
    </Button>
  );
};

export default ToggleV2;
