import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useGameContext } from "../../../context/GameStateProvider";
import { Team } from "../../../enums/Team"
import { TeamColor } from "../../../enums/TeamColor";
import { StyledTeamPanelContainer } from "./StyledTeamPanelContainer";

interface ITeamPanelProps {
    team: Team;
}

const TeamPanel = ({ team }: ITeamPanelProps) => {
    const { cardsData } = useGameContext();
    const teamColor = TeamColor[team];
    const teamCards = cardsData.filter(card => card.color === teamColor);
    const teamCardsCount = teamCards.length;
    const revealedTeamCardsCount = teamCards.filter(card => card.revealed).length;

    return <StyledTeamPanelContainer>
        {/* <Fab aria-label='Expand' >
            <UpIcon />
        </Fab> */}
        <h2 style={{ color: 'white' }}>{teamCardsCount} / {revealedTeamCardsCount}</h2>
    </StyledTeamPanelContainer>
}

export default TeamPanel;