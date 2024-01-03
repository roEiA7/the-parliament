import React from "react";
import { StyledCodeAvatarContainer } from "./StyledCodeAvatarContainer.styled";
import code_1 from "../../../../assets/codes/code_1.png";
import code_2 from "../../../../assets/codes/code_2.png";
import code_3 from "../../../../assets/codes/code_3.png";
import code_4 from "../../../../assets/codes/code_4.png";
import code_5 from "../../../../assets/codes/code_5.png";
import code_6 from "../../../../assets/codes/code_6.png";
import code_7 from "../../../../assets/codes/code_7.png";
import code_8 from "../../../../assets/codes/code_8.png";
import code_9 from "../../../../assets/codes/code_9.png";

interface ICodeAvatarProps {
  codeLength: number;
}

const CodeAvatar = ({ codeLength }: ICodeAvatarProps) => {
  return (
    <StyledCodeAvatarContainer codeLength={codeLength}>
      <div className="emoji-wrapper">
        <div className="emoji">
          <img src={code_1} />
          <img src={code_2} />
          <img src={code_3} />
          <img src={code_4} />
          <img src={code_5} />
          <img src={code_6} />
          <img src={code_7} />
          <img src={code_8} />
          <img src={code_9} />
        </div>
      </div>
    </StyledCodeAvatarContainer>
  );
};

export default CodeAvatar;
