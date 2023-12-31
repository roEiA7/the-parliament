import styled from "styled-components";

interface IStyledLobbyPageContainerProps {
  backgroundImage: string;
}

export const StyledLobbyPageContainer = styled.div<IStyledLobbyPageContainerProps>`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  .bg {
    height: 100vh;
    width: 100vw;
    background: url(${({ backgroundImage }) => backgroundImage});
    background-size: 100% 100%;
    opacity: 0.55;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .vs-circle {
    position: absolute;
    width: 8vw;
    height: 8vw;
    background: #ffffff;
    border-radius: 50%;
    left: 0;
    right: 3vw;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.4vw;
    color: #123456;
    border-width: 10px;
    border-style: solid;
    border-color: #0b2541 #fe3613 #fe3613 #0b2541;
    transform: rotate(-135deg);
    span {
      transform: rotate(135deg);
    }
  }

  .team-list-container::-webkit-scrollbar {
    display: none;
  }
`;
