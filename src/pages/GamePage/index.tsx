import React, { useState, useRef, MouseEvent } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import GameCard from './GameCard';
import CodeLabel from './CodeLabel';
import useClickOutside from '../../hooks/useClickOutside';
import { CARD_REVEAL_TRANSITION } from '../../constants/transitions';
import { StyledTurnIndicator } from './StyledTurnIndicator.styled';
import { TeamColor } from '../../enums/TeamColor';
import { useTurnTimeManager } from '../../hooks/useTurnTimeManager';
import { useGameContext } from '../../context/GameStateProvider';
import { getRemainigTime } from '../../utils/time';
import { useAuthContext } from '../../context/AuthProvider';
import { Role } from '../../enums/Role';
import CodeForm from './CodeForm';
import ActionsMenu from './ActionsMenu';
import Toggle from '../../components/Toggle';
import './GamePage.scss';
import DevTools from '../../components/DevTools';
import TeamPanel from './TeamPanel';
import { Team } from '../../enums/Team';


function App() {
    // useTurnTimeManager();
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [isLeaderViewToggled, setIsLeaderViewToggled] = useState(false);
    const activeCardRef = useRef(null);
    const hasActiveCard = activeCard !== null;
    const user = useAuthContext();
    const { turn, code, cardsData, setCardsData, increaseFoundCards, handleTurnOver } = useGameContext();
    const remainingTime = getRemainigTime(turn);
    const isUserTUrn = turn.team === user?.team && turn.role === user.role;
    const isLeader = user?.role === Role.Leader;
    const isCardsDisabled = isLeader || !isUserTUrn;

    const toggleLeaderView = () => setIsLeaderViewToggled(prevState => !prevState);
    const handleCardClick = (cardKey: number) => {
        setActiveCard(cardKey);
    };
    const handleCardSelection = (cardKey: number) => {
        setCardsData(prevData => {
            return prevData.map(card => {
                const isRevealedCard = card.key === cardKey;
                return {
                    ...card,
                    ...(isRevealedCard && { revealed: true })
                }
            })
        });

        const isUserTeamCard = user.team && cardsData.find(card => card.key === cardKey)?.color === TeamColor[user.team];
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
    }
    const handleOutsideClick = () => setActiveCard(null);
    useClickOutside(activeCardRef, handleOutsideClick);


    const cards = cardsData.map(cardData => {
        const { key, revealed } = cardData;
        const isActive = key === activeCard;
        const isRevealed = isLeaderViewToggled || revealed;
        return <GameCard
            key={key}
            handleCardClick={() => handleCardClick(key)}
            handleCardSelection={
                (event: MouseEvent) => {
                    handleCardSelection(key);
                    event.stopPropagation();
                }
            }
            revealed={isRevealed}
            active={isActive}
            cardData={cardData}
            ref={isActive ? activeCardRef : null}
        />
    }
    )

    return (
        <>
            <DevTools />
            <div className={classNames('cards-container', { hasActiveCard, disabled: isCardsDisabled })}>
                {cards}
            </div>
            <StyledTurnIndicator className={`${turn.team}-${turn.role}`} active_team_color={TeamColor[turn.team]} remaining_time={remainingTime} />
            <ActionsMenu>
                <Box sx={{ display: 'flex', position: 'absolute', left: 16, alignItems: 'center' }}>
                    <TeamPanel team={Team.Red} />
                    {isLeader &&
                        [
                            <Toggle key='toogle' onToggle={toggleLeaderView} text={{ off: 'תראה תצבעים', on: 'תסתיר תצבעים' }} width='130px' height='40px'></Toggle>,
                            <CodeForm key='card-form' width='130px' height='40px' disabled={!isUserTUrn} />
                        ]
                    }
                </Box>
                <Box >
                    {code && <CodeLabel />}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, position: 'absolute', right: 32 }}>
                    <TeamPanel team={Team.Blue} />
                </Box>
            </ActionsMenu>
        </>
    );
}

export default App;