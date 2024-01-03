import styled from "styled-components";

const isSmallScreen = window.innerWidth <= 1000;

const fontSize = isSmallScreen ? 6 : 12;

export const StyledCodeLabelContainer = styled.div`
  font-size: ${fontSize}rem;
  font-weight: bold;
  letter-spacing: 3px;
  transform: translateY(-50dvh);
  animation: scaleToPlace 3.5s cubic-bezier(0.45, 0.4, 0.2, 1) infinite;

  @keyframes scaleToPlace {
    0% {
      font-size: ${fontSize}rem;
      transform: translateY(-50dvh);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      font-size: ${fontSize}rem;
      transform: translateY(-50dvh);
    }
    100% {
      font-size: 1.5rem;
      transform: translateY(0);
    }
  }
`;
