import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import { ICardData } from "../../../interfaces/CardData.interface";
import { StyledGameCard } from "./StyledGameCard.styled";

interface IGameCardProps {
  handleCardClick: () => void;
  handleCardSelection: MouseEventHandler<HTMLDivElement>;
  active: boolean;
  revealed: boolean;
  cardData: ICardData;
}

const GameCard = React.forwardRef<HTMLDivElement | null, IGameCardProps>(
  (
    { handleCardClick, handleCardSelection, active, revealed, cardData },
    ref
  ) => {
    const { imgUrl, color } = cardData;

    return (
      <StyledGameCard
        card_color={color}
        ref={ref}
        className={classNames("card", { active, revealed, attention: active })}
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

    // return <div
    //     ref={ref}
    //     className={classNames('card', { active, selected })}
    //     onClick={handleCardClick} >

    //     <div className="card__image-holder">
    //         <div className="card__image" style={{ backgroundImage: `url(${imgUrl})` }}>

    //             <div className='card-actions' style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleCardSelection}>
    //                 תלחיץ
    //             </div>
    //         </div>
    //     </div>
    // </div >
  }
);

export default GameCard;
