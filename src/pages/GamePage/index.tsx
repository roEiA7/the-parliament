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
import TeamPanel from "./TeamPanel";
import { Team } from "../../enums/Team";
import { getUserTurnMetadata, toggleTeamTurn } from "../../helpers/turn";
import { IUser } from "../../interfaces/user.interface";
import bgTurnRed from "../../assets/bg-turn-red.png";
import bgTurnBlue from "../../assets/bg-turn-blue.png";
import { useRoomContext } from "../../context/RoomProvider";
import { Role } from "../../enums/Role";
import useInitUsersRoom from "../../hooks/state/useInitUsersRoom";
import { getWinningTeam } from "../../helpers/cards";
import "./GamePage.scss";
import GameOverPage from "../GameOverPage";
import CannonSound from "../../assets/sounds/cannon.mp3";
import LooserSound from "../../assets/sounds/looser.mp3";
import useSoundManager from "../../hooks/useSoundManager";

const GamePage = () => {
  useTurnTimeManager();
  useInitUsersRoom();
  const [isLeaderViewToggled, setIsLeaderViewToggled] = useState(false);
  const activeCardRef = useRef(null);
  const { user } = useAuthContext();
  const { turn, code, increaseFoundCards, handleTurnOver } = useGameContext();
  const { room, setRoom } = useRoomContext();
  const [playLooser] = useSoundManager(LooserSound);
  const [playCannon] = useSoundManager(CannonSound);
  const cardsData = room?.cardsData || [];
  const activeCard = room?.activeCard;
  const isGameOver = !!room?.winningTeam;
  const hasActiveCard = activeCard !== null;

  const {
    remainingTime,
    isUserTUrn,
    isLeader,
    isCardsDisabled,
    teamColor,
    muiColor,
  } = getUserTurnMetadata({ user: user as IUser, turn });
  const turnLeader = room?.users?.find(
    (user) => user.role === Role.Leader && user.team === turn.team
  )?.displayName;
  const winningLeader = room?.users?.find(
    (user) => user.role === Role.Leader && user.team === room.winningTeam
  )?.displayName

  const setActiveCard = (activeCard: string | null) => {
    setRoom((prev) => {
      return { ...prev, activeCard };
    });
  };
  const toggleLeaderView = () => {
    setIsLeaderViewToggled((prevState) => !prevState);
  };
  const onCardClick = (cardKey: string) => {
    setActiveCard(cardKey);
  };
  const handleCardSelection = (cardKey: string) => {
    setRoom((prevRoom) => {
      const prevCardsDatta = prevRoom.cardsData;
      const newCardsData = prevCardsDatta.map((card) => {
        const isRevealedCard = card.key === cardKey;
        if (isRevealedCard) {
          if (card.color === teamColor) {
            playCannon();
          } else {
            playLooser();
          }
        }

        return {
          ...card,
          ...(isRevealedCard && { revealed: true }),
        };
      });

      const newRoom = {
        ...prevRoom,
        cardsData: newCardsData,
      };

      setTimeout(() => {
        setRoom({
          ...newRoom,
          winningTeam: getWinningTeam(newCardsData, turn.team),
          activeCard: null,
        });
      }, CARD_REVEAL_TRANSITION);

      return newRoom;
    });

    const cardColor = cardsData.find((card) => card.key === cardKey)?.color;
    const isUserTeamCard = cardColor === teamColor;
    if (isUserTeamCard) {
      increaseFoundCards();
      if (code && code.codeLength === code.foundCards + 1) {
        handleTurnOver();
      }
    } else {
      handleTurnOver();
    }
  };
  const handleOutsideClick = () => !isCardsDisabled && setActiveCard(null);
  useClickOutside(activeCardRef, handleOutsideClick);

  const attentionCardKey =
    !isCardsDisabled && cardsData.find((card) => !card.revealed)?.key;
  const cards = cardsData.map((cardData) => {
    const { key, revealed } = cardData;
    const isActive = key === activeCard;
    const attention = key === attentionCardKey;
    const handleCardClick = (event: MouseEvent) => {
      event.stopPropagation();
      onCardClick(key);
    };

    return (
      <GameCard
        key={key}
        handleCardClick={handleCardClick}
        handleCardSelection={(event: MouseEvent) => {
          handleCardSelection(key);
          event.stopPropagation();
        }}
        revealed={revealed}
        isLeaderViewToggled={isLeaderViewToggled}
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
      {isGameOver && <GameOverPage />}
      {!isGameOver && <StyledTurnIndicator
        active_team_color={TeamColor[turn.team]}
        remaining_time={remainingTime}
        team={turn.team}
      >
        <div className={`border-timer ${turn.team}-${turn.role}`} />
        <img className="turn-bg-blue" src={bgTurnBlue} />
        <img className="turn-bg-red" src={bgTurnRed} />
      </StyledTurnIndicator>}
      <div
        className={classNames("cards-container", {
          hasActiveCard,
        })}
      >
        {cards}
      </div>

      <ActionsMenu isGameOver={isGameOver}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            position: { sm: "absolute" },
            left: { sm: 24 },
            alignItems: "center",
            justifyContent: "end",
            flex: { xs: "1 1 0", sm: "initial" },
            height: { xs: "0", sm: "initial" },
          }}
        >
          <TeamPanel team={user?.team || Team.Blue} />
          {isLeader && !isGameOver && (
            <Box
              sx={{
                display: "flex",
                position: { xs: "absolute", sm: "initial" },
                bottom: { xs: 15, sm: "initial" },
                width: { xs: "92%", sm: "initial" },
                justifyContent: "space-between",
                gap: { sm: 1 },
              }}
            >
              <ToggleV2
                key="toogle"
                onToggle={toggleLeaderView}
                text={{ off: "תראה תצבעים", on: "תסתיר תצבעים" }}
                width="100px"
                color={muiColor}
              ></ToggleV2>
              <CodeForm
                key="card-form"
                disabled={!isUserTUrn}
                color={muiColor}
              />
            </Box>
          )}
        </Box>
        <Box>
          {
            isGameOver ? `הקבוצה של ${winningLeader} ניצחה` :
              code ? (
                <CodeLabel />
              ) : (
                `${turnLeader || "מישהו"
                }  על הקוד..`
              )
          }

        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            position: { sm: "absolute" },
            right: { sm: 24 },
            flex: { xs: "1 1 0", sm: "inherit" },
            height: { xs: "0", sm: "unset" },
            alignItems: "start",
          }}
        >
          <TeamPanel team={toggleTeamTurn(user?.team || Team.Blue)} />
        </Box>
      </ActionsMenu>
    </>
  );
};

export default GamePage;
