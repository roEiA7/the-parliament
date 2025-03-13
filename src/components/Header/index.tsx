import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

interface IStyledHeaderProps {
    isLeaderboard: boolean;
}

const StyledHeader = styled.div<IStyledHeaderProps>`
    /* margin-bottom: auto; */
    height: 65px;
    min-height: 65px;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 2.2em;
    letter-spacing: 10px;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

const Header = () => {
    const { pathname } = useLocation();
    const isLeaderboard = pathname === '/leaderboards';
    const title = isLeaderboard ? 'היכל התהילה' : 'הפרלמנט';

    return <StyledHeader isLeaderboard={isLeaderboard}>
        <span>{title}</span>
    </StyledHeader>
}

export default Header;
