import styled from "styled-components";
import { TeamColor } from "../../enums/TeamColor";

interface IStyledTurnIndicatorProps {
  activeTeamColor: TeamColor;
  remainingTime: number;
}

const height = '100vh';
const width = '100vw';
const borderSize = '9px';

export const StyledTurnIndicator = styled.div<IStyledTurnIndicatorProps>`
position: fixed;
top: 0;
left: 0;
height: ${height};
width: ${width};
z-index: 3;
pointer-events: none;
background: linear-gradient(to right, ${({ activeTeamColor }) => activeTeamColor} 99.99%, transparent), linear-gradient(to bottom, ${({ activeTeamColor }) => activeTeamColor} 99.99%, transparent), linear-gradient(to right, ${({ activeTeamColor }) => activeTeamColor} 99.99%, transparent), linear-gradient(to bottom, ${({ activeTeamColor }) => activeTeamColor} 99.99%, transparent);
background-size: 100% ${borderSize}, ${borderSize} 100%, 100% ${borderSize}, ${borderSize} 100%;
background-repeat: no-repeat;
background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, 0px calc(${height} - ${borderSize}) , 0px 0px;

/* &.Red-Leader{
  animation: progressOne ${({ remainingTime }) => remainingTime}ms linear;
}

&.Red-Detective{
  animation: progressTwo ${({ remainingTime }) => remainingTime}ms linear;
}

&.Blue-Leader{
  animation: progressThree ${({ remainingTime }) => remainingTime}ms linear;
}

&.Blue-Detective{
  animation: progressFour ${({ remainingTime }) => remainingTime}ms linear;
} */


@keyframes progressOne {
  0% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, 0px calc(${height} - ${borderSize}) , 0px 0px;
  }
  25% {
    background-position: 0px 0px, calc(${width} - ${borderSize})  0px, 0px calc(${height} - ${borderSize}), 0px ${height};
  }
  50% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  75% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  100% {
    background-position: -${width} 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${width};
  }
}

@keyframes progressTwo {
  0% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, 0px calc(${height} - ${borderSize}) , 0px 0px;
  }
  25% {
    background-position: 0px 0px, calc(${width} - ${borderSize})  0px, 0px calc(${height} - ${borderSize}), 0px ${height};
  }
  50% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  75% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  100% {
    background-position: -${width} 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${width};
  }
}

@keyframes progressThree {
  0% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, 0px calc(${height} - ${borderSize}) , 0px 0px;
  }
  25% {
    background-position: 0px 0px, calc(${width} - ${borderSize})  0px, 0px calc(${height} - ${borderSize}), 0px ${height};
  }
  50% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  75% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  100% {
    background-position: -${width} 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${width};
  }
}

@keyframes progressFour {
  0% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, 0px calc(${height} - ${borderSize}) , 0px 0px;
  }
  25% {
    background-position: 0px 0px, calc(${width} - ${borderSize})  0px, 0px calc(${height} - ${borderSize}), 0px ${height};
  }
  50% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  75% {
    background-position: 0px 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${height};
  }
  100% {
    background-position: -${width} 0px, calc(${width} - ${borderSize}) -${height}, ${width} calc(${height} - ${borderSize}), 0px ${width};
  }
}
`
