import styled from "styled-components";

interface IStyledComingSoonPageContainerProps {
  backgroundImage: string;
}

export const StyledComingSoonPageContainer = styled.div<IStyledComingSoonPageContainerProps>`
  .bg {
    height: 100dvh;
    width: 100dvw;
    background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.9) 85%
      ),
      url(https://img.mako.co.il/2013/10/03/parlament_1920X1080_i.jpg);
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media only screen and (max-width: 600px) {
      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.9) 70%
        ),
        url(https://img.mako.co.il/2023/07/11/Parliament_6_E_NoLogo.jpg);
      background-size: 100% 100%;
    }
  }
`;
