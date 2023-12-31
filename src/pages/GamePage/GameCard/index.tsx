import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import { ICardData } from "../../../interfaces/CardData.interface";
import { StyledGameCard } from "./StyledGameCard.styled";
import "../../../styles/attention.scss";

interface IGameCardProps {
  handleCardClick: () => void;
  handleCardSelection: MouseEventHandler<HTMLDivElement>;
  active: boolean;
  revealed: boolean;
  cardData: ICardData;
  attention: boolean;
}

const GameCard = React.forwardRef<HTMLDivElement | null, IGameCardProps>(
  (
    {
      handleCardClick,
      handleCardSelection,
      active,
      revealed,
      cardData,
      attention,
    },
    ref
  ) => {
    const { imgUrl, color } = cardData;

    return (
      <StyledGameCard
        card_color={color}
        ref={ref}
        className={classNames("card", {
          active,
          revealed,
          attention,
        })}
        onClick={handleCardClick}
      >
        <div className="card-image-holder">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <div
              className="card-actions"
              style={{ backgroundImage: `url(${imgUrl})` }}
              onClick={handleCardSelection}
            >
              תלחיץ
            </div>
          </div>
        </div>
      </StyledGameCard>
    );
  }
);

export default GameCard;
