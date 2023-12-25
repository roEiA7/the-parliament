import styled from "styled-components";

export const StyledCodeLabelContainer = styled.div`
  font-size: 12rem;
  font-weight: bold;
  letter-spacing: 3px;
  transform: translateY(-50vh);
  animation: scaleToPlace 3.5s cubic-bezier(0.45, 0.4, 0.2, 1) forwards;

  @keyframes scaleToPlace {
    0% {
      font-size: 12rem;
      transform: translateY(-50vh);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      font-size: 12rem;
      transform: translateY(-50vh);
    }
    100% {
      font-size: 1.5rem;
      transform: translateY(0);
    }
  }
`;
