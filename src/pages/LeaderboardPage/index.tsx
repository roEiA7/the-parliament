
import { StyledLeaderboardPageContainer, StyledPlayerRow } from "./StyledLeaderboardPageContainer.styled";
import ProfileAvatar from "../../components/ProfileAvatar";
import { coin } from "../../constants/symbols";
import { useFirebaseContext } from "../../context/FirebaseProvider";

const getColorFromNumber = (number: number = 0) => {
    const RANGE = 1000;
    // Clamp the number between 0 and 1000
    number = Math.min(Math.max(number, 0), RANGE);

    // Convert number into a ratio (0 to 1)
    let ratio = number / RANGE;

    // Apply a transformation to lean more towards green after 500
    ratio = Math.pow(ratio, 0.6); // Adjust this exponent to control the curve

    // Define the start color (red) and end color (greenish)
    const startColor = { r: 255, g: 0, b: 0 };    // #FF0000
    const endColor = { r: 53, g: 216, b: 172 };   // #35d8ac

    // Linearly interpolate each color component (r, g, b)
    const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
    const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
    const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

    // Convert the RGB values to a hex color code
    return `rgb(${r}, ${g}, ${b})`;
}

const LeaderboardPage = () => {
    const { users } = useFirebaseContext();

    return (
        <StyledLeaderboardPageContainer >
            <div className="leaderboard__profiles">
                {users.sort((a, b) => (a.balance || 0) < (b.balance || 0) ? 1 : -1).map(user => (
                    <StyledPlayerRow className="leaderboard__profile" colors={{
                        percision: getColorFromNumber((user.hitRate || 0) * 10),
                        balance: getColorFromNumber((user.balance || 0) * 75),
                        streak: getColorFromNumber((user.totalHits || 0) * 200)
                    }}>
                        <ProfileAvatar user={user} className="leaderboard__picture" sx={{ backgroundColor: 'black' }} />
                        <span className="leaderboard__name">{user.displayName}</span>
                        <span className="leaderboard__precision"><span>{user.hitRate ? `${user.hitRate}%` : '-'}</span><span>דיוק</span></span>
                        <span className="leaderboard__streak"><span>{user.totalHits || '-'}</span><span>רצף</span></span>
                        <span className="leaderboard__total_bets"><span>{user.totalBets ? `${user.totalBets}` : '-'}</span><span>שיגורים</span></span>
                        <span className="leaderboard__balance">{user.balance}<span>{coin}</span></span>
                    </StyledPlayerRow>
                ))}
            </div>
        </StyledLeaderboardPageContainer >


    )
}

export default LeaderboardPage;