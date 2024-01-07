import { useState } from "react";
import { Button, ButtonProps } from "@mui/material";

interface IToggleProps {
  onToggle: () => void;
  text: { off: string; on: string };
  className?: string;
  width: string;
  color: ButtonProps["color"];
}

const ToggleV2 = ({ onToggle, text, width, color }: IToggleProps) => {
  const [isOn, setIsOn] = useState(false);
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
      size="small"
    >
      {isOn ? text.on : text.off}
    </Button>
  );
};

export default ToggleV2;
