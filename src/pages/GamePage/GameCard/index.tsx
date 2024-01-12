import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import { ICardData } from "../../../interfaces/CardData.interface";
import { StyledGameCard } from "./StyledGameCard.styled";
import "../../../styles/attention.scss";

interface IGameCardProps {
  handleCardClick: MouseEventHandler<HTMLDivElement>;
  handleCardSelection: MouseEventHandler<HTMLDivElement>;
  active: boolean;
  revealed: boolean;
  isLeaderViewToggled: boolean;
  cardData: ICardData;
  attention: boolean;
  disabled: boolean;
}

const GameCard = React.forwardRef<HTMLDivElement | null, IGameCardProps>(
  (
    {
      handleCardClick,
      handleCardSelection,
      active,
      revealed,
      isLeaderViewToggled,
      cardData,
      attention,
      disabled = true,
    },
    ref
  ) => {
    const { img, color } = cardData;
    const imgUrl = `url('/card_images/${img}.jpeg')`;

    return (
      <StyledGameCard
        id={img}
        card_color={color}
        ref={ref}
        className={classNames("card", {
          active,
          revealed: revealed || isLeaderViewToggled,
          "revealed-bold": revealed && isLeaderViewToggled,
          attention,
        })}
        onClick={handleCardClick}
        disabled={disabled}
      >
        <div className="card-image-holder">
          <div className="card-image" style={{ backgroundImage: imgUrl }}>
            <div
              className="card-actions"
              style={{ backgroundImage: imgUrl }}
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
