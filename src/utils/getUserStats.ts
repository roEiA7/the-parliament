import { DEFAULT_BALANACE } from "../constants/balance";
import { IPost } from "../interfaces/Post.interface";
import { IUser } from "../interfaces/user.interface";

const getUserStats = (user: IUser, posts: IPost[] = []) => {
    const { id, extraBalance } = user;
    let balance = DEFAULT_BALANACE + (extraBalance || 0);
    let totalBets = 0;
    let totalClosedBets = 0;
    let totalHits = 0;

    posts.forEach(post => {
        const userBet = post.bets.find(bet => bet.userId === id);
        if (userBet) {
            totalBets++;
            !post.isOpen && totalClosedBets++;
            const hasWon = post.outcome != null && userBet.prediction === post.outcome;
            hasWon && totalHits++;
            const betAmount = userBet.amount;
            balance += hasWon ? betAmount : -1 * betAmount;
        }
    });

    return {
        balance,
        totalBets,
        totalHits,
        hitRate: totalBets === 0 ? 0 : Math.round((totalHits / totalClosedBets) * 100)
    }
}

export default getUserStats;