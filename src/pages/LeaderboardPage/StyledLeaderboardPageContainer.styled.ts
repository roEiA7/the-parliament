import styled from "styled-components";


export const StyledLeaderboardPageContainer = styled.div`
  padding-bottom: 64px;

.leaderboard {
  max-width: 490px;
  width: 100%;
  border-radius: 12px;
  
  &__profiles {
    border-radius: 0 0 12px 12px;
    padding: 28px 20px 20px;
    display: grid;
    row-gap: 16px;
  }
  
  &__profile {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr;
    gap: 4px;
    align-items: center;
    text-align: center;
    font-size: 12px;

    /* padding: 10px 30px 10px 10px; */
    padding: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #151823;
    /* background-color: white; */

    &:nth-child(1) {
        animation: gold_glowing 1.5s ease-in-out infinite alternate;
        position: relative;
        &::before {
            content: '🥇';
            position: absolute;
            z-index: 2;
            right: 0;
            top:0;
        }
    }

    &:nth-child(2) {
        position: relative;
        animation: silver_glowing 1.5s ease-in-out infinite alternate;
        &::before {
            content: '🥈';
            position: absolute;
            z-index: 2;
            right: 0;
            top:0;
        }
    }

    &:nth-child(3) {
        position: relative;
        animation: bronze_glowing 1.5s ease-in-out infinite alternate;
        &::before {
            content: '🥉';
            position: absolute;
            z-index: 2;
            right: 0;
            top:0;
        }
    }

    &:nth-child(4) {
        position: relative;
        animation: bronze_glowing 1.5s ease-in-out infinite alternate;
        &::before {
            content: '🥉';
            position: absolute;
            z-index: 2;
            right: 0;
            top:0;
        }
    }

    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }
  
  &__picture {
    width: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 8px #ebeef3, 0 0 0 22px #f3f4f6;
  }
  
  &__name {
    color: #ebeef3;
    font-size: 18px;
    letter-spacing: 0.8px;
    margin-right: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
  }
  
  &__balance {
    font-weight: 700;
    font-size: 16px;
    
    & > span {
      opacity: .8;
      font-weight: normal;
      margin-left: 1px;
    }
  }
  
  &__precision {
    display: flex;
    flex-direction: column;
    line-height: 0.8;

     span {
      opacity: .8;
      margin-left: 3px;
    }

  }

  &__streak {
    display: flex;
    flex-direction: column;
    line-height: 0.8;

     span {
      opacity: .8;
      margin-left: 3px;
    }

  }

  &__total_bets {
    display: flex;
    flex-direction: column;
    line-height: 1;
    color: white;

     span {
      opacity: .8;
      font-size: 11px;
    }
  }

  @keyframes gold_glowing {
    from {
        box-shadow: 0 0 5px 2px rgba(255, 215, 0, 0.4);
    }

    to {
        box-shadow: 0 0 10px 4px rgba(255, 215, 0, 0.6);
    }
}

@keyframes silver_glowing {
    from {
        box-shadow: 0 0 5px 2px rgba(169, 169, 169, 0.5);
    }

    to {
        box-shadow: 0 0 12px 4px rgba(169, 169, 169, 1);
    }
}

@keyframes bronze_glowing {
    from {
        box-shadow: 0 0 3px 1px rgba(205, 127, 50, 0.2);
    }

    to {
        box-shadow: 0 0 4px 2px rgba(205, 127, 50, 0.4);
    }
}
}
`;

interface IStyledPlayerRowProps {
  colors: {
    percision: string;
    balance: string;
    streak: string;
  }
}

export const StyledPlayerRow = styled.div<IStyledPlayerRowProps>`
.leaderboard__precision {
    color: ${props => props.colors.percision};
}

.leaderboard__streak {
    color: ${props => props.colors.streak};
}

.leaderboard__balance {
    color: ${props => props.colors.balance};
}
`