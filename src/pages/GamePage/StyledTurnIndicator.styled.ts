import styled from "styled-components";
import { TeamColor } from "../../enums/TeamColor";
import { Team } from "../../enums/Team";

interface IStyledTurnIndicatorProps {
  active_team_color: TeamColor;
  remaining_time: number;
  team: Team;
}

const height = "100dvh";
const width = "100dvw";
const borderSize = "6px";

export const StyledTurnIndicator = styled.div<IStyledTurnIndicatorProps>`
  .border-timer {
    position: fixed;
    top: 0;
    left: 0;
    height: ${height};
    width: ${width};
    z-index: 3;
    pointer-events: none;
    background: linear-gradient(
        to right,
        ${({ active_team_color }) => active_team_color} 99.99%,
        transparent
      ),
      linear-gradient(
        to bottom,
        ${({ active_team_color }) => active_team_color} 99.99%,
        transparent
      ),
      linear-gradient(
        to right,
        ${({ active_team_color }) => active_team_color} 99.99%,
        transparent
      ),
      linear-gradient(
        to bottom,
        ${({ active_team_color }) => active_team_color} 99.99%,
        transparent
      );
    background-size: 100% ${borderSize}, ${borderSize} 100%, 100% ${borderSize},
      ${borderSize} 100%;
    background-repeat: no-repeat;
    background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
      0px calc(${height} - ${borderSize}), 0px 0px;

    &.Red-Leader {
      animation: progressOne ${({ remaining_time }) => remaining_time}ms linear
        forwards;
    }

    &.Red-Detective {
      animation: progressTwo ${({ remaining_time }) => remaining_time}ms linear
        forwards;
    }

    &.Blue-Leader {
      animation: progressThree ${({ remaining_time }) => remaining_time}ms
        linear forwards;
    }

    &.Blue-Detective {
      animation: progressFour ${({ remaining_time }) => remaining_time}ms linear
        forwards;
    }

    @keyframes progressOne {
      0% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px 0px;
      }
      25% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px ${height};
      }
      50% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      75% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      100% {
        background-position: -${width} 0px,
          calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
    }

    @keyframes progressTwo {
      0% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px 0px;
      }
      25% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px ${height};
      }
      50% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      75% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      100% {
        background-position: -${width} 0px,
          calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
    }

    @keyframes progressThree {
      0% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px 0px;
      }
      25% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px ${height};
      }
      50% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      75% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      100% {
        background-position: -${width} 0px,
          calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
    }

    @keyframes progressFour {
      0% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px 0px;
      }
      25% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          0px calc(${height} - ${borderSize}), 0px ${height};
      }
      50% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) 0px,
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      75% {
        background-position: 0px 0px, calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
      100% {
        background-position: -${width} 0px,
          calc(${width} - ${borderSize}) -${height},
          ${width} calc(${height} - ${borderSize}), 0px ${height};
      }
    }
  }

  .turn-bg-blue,
  .turn-bg-red {
    height: 100dvh;
    width: 100dvw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  .turn-bg-blue {
    opacity: ${({ team }) => (team === Team.Blue ? 1 : 0)};
  }

  .turn-bg-red {
    opacity: ${({ team }) => (team === Team.Red ? 1 : 0)};
  }
`;
