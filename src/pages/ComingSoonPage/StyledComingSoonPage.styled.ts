import styled from "styled-components";

interface IStyledComingSoonPageContainerProps {
  backgroundImage: string;
}

export const StyledComingSoonPageContainer = styled.div<IStyledComingSoonPageContainerProps>`
  .bg {
    height: 100dvh;
    width: 100dvw;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${({ backgroundImage }) => backgroundImage});
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
