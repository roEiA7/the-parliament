import styled from "styled-components";

export const StyledCodeLabelContainer = styled.div`
  --code-font-size: 12rem;

  @media (max-width: 1000px) {
    --code-font-size: 6rem;
  }

  @media (max-width: 600px) {
    --code-font-size: 4rem;
  }

  font-size: var(--code-font-size);
  font-weight: bold;
  letter-spacing: 3px;
  max-width: 90dvw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-shadow: 3px 1px 2px black;
  transform: translateY(-50dvh);
  animation: scaleToPlace 3.5s cubic-bezier(0.45, 0.4, 0.2, 1) infinite;

  @keyframes scaleToPlace {
    0% {
      font-size: var(--code-font-size);
      transform: translateY(-50dvh);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      text-shadow: 3px 1px 2px black;
      font-size: var(--code-font-size);
      transform: translateY(-50dvh);
    }
    100% {
      font-size: 1.5rem;
      transform: translateY(0);
      text-shadow: 1px 0px 1px black;
    }
  }
`;
