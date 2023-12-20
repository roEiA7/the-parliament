import React, { useState, useRef, MouseEvent } from 'react';
import './GamePage.scss';
import GameCard from './GameCard';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import { cardsData } from '../../utils/mocks';
import { CARD_REVEAL_TRANSITION } from '../../constants/transitions';
import { StyledTurnIndicator } from './StyledTurnIndicator.styled';
import { TeamColor } from '../../enums/TeamColor';
import { useTurnTimeManager } from '../../hooks/useTurnTimeManager';
import { useGameContext } from '../../context/GameStateProvider';
import { getRemainigTime } from '../../utils/time';
import { useAuthContext } from '../../context/AuthProvider';
import { Role } from '../../enums/Role';
import PasswordForm from './PasswordForm';
import StyledActionsMenu from './ActionsMenu';
import Toggle from '../../components/Toggle';

function App() {
    // useTurnTimeManager();
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [revealedCards, setRevealedCards] = useState<number[]>([]);
    const [isLeaderViewToggled, setIsLeaderViewToggled] = useState(false);
    const activeCardRef = useRef(null);
    const hasActiveCard = activeCard !== null;
    const user = useAuthContext();
    const { turn } = useGameContext();
    const remainingTime = getRemainigTime(turn);
    const isTeamsTurn = turn.team === user?.team;
    const isLeader = user?.role === Role.Leader;
    const isCardsDisabled = isLeader || !isTeamsTurn;
    const isPasswordFormEnabled = isLeader && isTeamsTurn;


    const toggleLeaderView = () => setIsLeaderViewToggled(prevState => !prevState);
    const handleCardClick = (cardKey: number) => {
        setActiveCard(cardKey);
    };
    const handleCardSelection = (cardKey: number) => {
        setRevealedCards(prevState => [...prevState, cardKey]);
        setTimeout(() => {
            setActiveCard(null);
        }, CARD_REVEAL_TRANSITION);
    }
    const handleOutsideClick = () => setActiveCard(null);
    useClickOutside(activeCardRef, handleOutsideClick);


    const cards = cardsData.map(cardData => {
        const { key } = cardData;
        const isActive = key === activeCard;
        const isRevealed = revealedCards?.includes(key) || isLeaderViewToggled;
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
            <div className={classNames('cards-container', { hasActiveCard, disabled: isCardsDisabled })}>
                {cards}
            </div>
            <StyledTurnIndicator className={`${turn.team}-${turn.role}`} activeTeamColor={TeamColor[turn.team]} remainingTime={remainingTime} />
            <StyledActionsMenu>
                {isLeader && <Toggle onToggle={toggleLeaderView} text={{ off: 'תראה לי רגע', on: 'בסדר תודה' }}></Toggle>}
                {isPasswordFormEnabled && <PasswordForm></PasswordForm>}
            </StyledActionsMenu>
        </>
    );
}

export default App;