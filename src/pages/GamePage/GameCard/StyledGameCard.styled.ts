import styled from "styled-components";
import { CardColorType } from "../../../enums/CardColor";

const isLargeScreen = window.innerWidth >= 1000;

const cardHeight = isLargeScreen ? "120px" : "11dvw";
const cardWidth = isLargeScreen ? "120px" : "11dvw";
const cardBorderRadius = "6px";
const cardBorderSize = isLargeScreen ? "4px" : "2px";
const halfCardBorderSie = isLargeScreen ? "2px" : "1px";

const activeBackgroundImage =
  "linear-gradient(var(--rotate), #0074d9, #645d5c 43%, #FF4136)";

interface IStyledGameCardProps {
  card_color: CardColorType;
  disabled: boolean;
}

export const StyledGameCard = styled.div<IStyledGameCardProps>`
  ${({ disabled }) => (disabled ? "pointer-events: none;" : "")}
  background: white;
  display: inline-block;
  margin: 2dvw;
  height: ${cardHeight};
  width: ${cardWidth};
  perspective: 1000px;
  padding: ${cardBorderSize};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  border-radius: ${cardBorderRadius};
  transition: all 0.3s 0s ease-in;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1) contrast(1.1)
      drop-shadow(4px 8px 4px rgba(192, 192, 192, 0.579));
  }

  &::before {
    content: "";
    width: calc(100% + ${cardBorderSize});
    height: calc(100% + ${cardBorderSize});
    border-radius: 8px;
    background: ${activeBackgroundImage};
    position: absolute;
    z-index: -1;
    top: -${halfCardBorderSie};
    left: -${halfCardBorderSie};
    transition: all 0.5s ease-in;
    animation: spin 2.5s linear infinite;
    opacity: 0;
  }

  &::after {
    position: absolute;
    content: "";
    top: calc(${cardHeight} / 5);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(${cardHeight} / 5));
    background: ${activeBackgroundImage};
    transition: all 1.5s ease-out;
    animation: none;
    opacity: 0;
  }

  .card-image-holder {
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    overflow: hidden;

    .card-image {
      height: 100%;
      width: 100%;
      transition: all 0.2s ease-in-out;
      border-radius: ${cardBorderRadius};
      transition: all 0.3s ease-in;
      display: grid;
      place-content: center;
      background-size: 100% 100%;

      &::before {
        width: ${cardWidth};
        height: ${cardHeight};
        position: absolute;
        background: rgba(0, 0, 0, 0);
        content: "";
        display: flex;
        transition: 0.3s ease-in;
      }

      &:hover {
        transform: scale(1.05);
      }

      .card-actions {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2rem;
        opacity: 0;
        transition: all 0.2s ease-out;
        pointer-events: none;

        @media only screen and (max-width: 1000px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  &&.active {
    opacity: 1;
    transform: scale(1);
    z-index: 2;
    cursor: unset;

    &::after,
    &::before {
      opacity: 1;
      animation: spin 2.5s linear infinite;
      transition: all 1s ease-in;
    }

    .card-image {
      &::before {
        background: rgba(0, 0, 0, 0.8);
      }

      .card-actions {
        opacity: 1;
        cursor: pointer;
        filter: contrast(0.4) brightness(1.5);
        pointer-events: unset;

        &:hover {
          opacity: 0.5;
        }
      }

      &:hover {
        transform: unset;
      }
    }
  }

  &&.revealed {
    pointer-events: none;

    &::after,
    &::before {
      background: ${({ card_color }) =>
    `linear-gradient(var(--rotate), ${card_color}, ${card_color} 43%, ${card_color})`};
    }

    &::before {
      opacity: 1;
    }

    .card-image {
      &::before {
        background: ${({ card_color }) => `${card_color}a1`};
      }

      .card-actions {
        opacity: 0 !important;
      }
    }
  }

  &&.revealed-bold {
    .card-image {
      &::before {
        background: ${({ card_color }) => `${card_color}fa`};
      }
    }
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }

    100% {
      --rotate: 360deg;
    }
  }

  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
`;
