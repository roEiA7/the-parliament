import { useState, useRef, MouseEvent } from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
import GameCard from "./GameCard";
import CodeLabel from "./CodeLabel";
import useClickOutside from "../../hooks/useClickOutside";
import { CARD_REVEAL_TRANSITION } from "../../constants/transitions";
import { StyledTurnIndicator } from "./StyledTurnIndicator.styled";
import { TeamColor } from "../../enums/TeamColor";
import { useTurnTimeManager } from "../../hooks/useTurnTimeManager";
import { useGameContext } from "../../context/GameStateProvider";
import { useAuthContext } from "../../context/AuthProvider";
import CodeForm from "./CodeForm";
import ActionsMenu from "./ActionsMenu";
import ToggleV2 from "../../components/ToggleV2";
import "./GamePage.scss";
import DevTools from "../../components/DevTools";
import TeamPanel from "./TeamPanel";
import { Team } from "../../enums/Team";
import { getUserTurnMetadata, toggleTeamTurn } from "../../helpers/turn";
import { IUser } from "../../interfaces/user.interface";
import bgTurnRed from "../../assets/bg-turn-red.png";
import bgTurnBlue from "../../assets/bg-turn-blue.png";
import { useRoomContext } from "../../context/RoomProvider";
import { Role } from "../../enums/Role";

const GamePage = () => {
  // useTurnTimeManager();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isLeaderViewToggled, setIsLeaderViewToggled] = useState(false);
  const activeCardRef = useRef(null);
  const hasActiveCard = activeCard !== null;
  const { user } = useAuthContext();
  const {
    turn,
    code,
    cardsData,
    setCardsData,
    increaseFoundCards,
    handleTurnOver,
  } = useGameContext();
  const { room } = useRoomContext();

  const {
    remainingTime,
    isUserTUrn,
    isLeader,
    isCardsDisabled,
    teamColor,
    muiColor,
  } = getUserTurnMetadata({ user: user as IUser, turn });

  const toggleLeaderView = () => {
    setIsLeaderViewToggled((prevState) => !prevState);
  };
  const handleCardClick = (cardKey: number) => {
    setActiveCard(cardKey);
  };
  const handleCardSelection = (cardKey: number) => {
    setCardsData((prevData) => {
      return prevData.map((card) => {
        const isRevealedCard = card.key === cardKey;
        return {
          ...card,
          ...(isRevealedCard && { revealed: true }),
        };
      });
    });

    const isUserTeamCard =
      cardsData.find((card) => card.key === cardKey)?.color === teamColor;
    if (isUserTeamCard) {
      increaseFoundCards();
      if (code && code.codeLength === code.foundCards + 1) {
        handleTurnOver();
      }
    } else {
      handleTurnOver();
    }

    setTimeout(() => {
      setActiveCard(null);
    }, CARD_REVEAL_TRANSITION);
  };
  const handleOutsideClick = () => setActiveCard(null);
  useClickOutside(activeCardRef, handleOutsideClick);

  const attentionCardKey =
    !isCardsDisabled && cardsData.find((card) => !card.revealed)?.key;
  const cards = cardsData.map((cardData) => {
    const { key, revealed } = cardData;
    const isActive = key === activeCard;
    const isRevealed = isLeaderViewToggled || revealed;
    const attention = key === attentionCardKey;

    return (
      <GameCard
        key={key}
        handleCardClick={() => handleCardClick(key)}
        handleCardSelection={(event: MouseEvent) => {
          handleCardSelection(key);
          event.stopPropagation();
        }}
        revealed={isRevealed}
        active={isActive}
        cardData={cardData}
        ref={isActive ? activeCardRef : null}
        attention={attention}
        disabled={isCardsDisabled}
      />
    );
  });

  return (
    <>
      {/* <DevTools /> */}
      <StyledTurnIndicator
        className={`${turn.team}-${turn.role}`}
        active_team_color={TeamColor[turn.team]}
        remaining_time={remainingTime}
        team={turn.team}
      >
        <div className="border-timer" />
        <img className="turn-bg-blue" src={bgTurnBlue} />
        <img className="turn-bg-red" src={bgTurnRed} />
      </StyledTurnIndicator>
      <div
        className={classNames("cards-container", {
          hasActiveCard,
        })}
      >
        {cards}
      </div>

      <ActionsMenu>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            position: "absolute",
            left: 24,
            alignItems: "center",
          }}
        >
          <TeamPanel team={user?.team || Team.Red} />
          {isLeader && [
            <ToggleV2
              key="toogle"
              onToggle={toggleLeaderView}
              text={{ off: "תראה תצבעים", on: "תסתיר תצבעים" }}
              width="120px"
              color={muiColor}
            ></ToggleV2>,
            <CodeForm
              key="card-form"
              disabled={!isUserTUrn}
              color={muiColor}
            />,
          ]}
        </Box>
        <Box>
          {code ? (
            <CodeLabel />
          ) : (
            `${
              room?.users?.find(
                (user) => user.role === Role.Leader && user.team === turn.team
              )?.displayName || "מישהו"
            } חושב על קוד..`
          )}
        </Box>
        <Box sx={{ display: "flex", gap: 1, position: "absolute", right: 24 }}>
          <TeamPanel team={toggleTeamTurn(user?.team || Team.Red)} />
        </Box>
      </ActionsMenu>
    </>
  );
};

export default GamePage;
