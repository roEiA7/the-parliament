import styled from "styled-components";

interface IStyledCodeAvatarContainerProps {
  codeLength: number;
}

const isSmallScreen = window.innerWidth <= 1000;

const imgHeight = isSmallScreen ? 75 : 100;

export const StyledCodeAvatarContainer = styled.div<IStyledCodeAvatarContainerProps>`
  .emoji-wrapper {
    width: 100%;
    text-align: center;
    height: ${imgHeight}px;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
  }

  .emoji-wrapper > .emoji {
    transform: translateY(
      -${({ codeLength }) => (codeLength - 1) * imgHeight}px
    );
  }

  .emoji {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;

    img {
      height: ${imgHeight}px;
    }
  }
`;
