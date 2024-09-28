import { Chip } from "@mui/material";
import { IBet } from "../../../../interfaces/Bet.interface";
import { Prediction } from "../../../../enums/Prediction";
import { coin } from "../../../../constants/symbols";
import ProfileAvatar from "../../../../components/ProfileAvatar";

interface IBetChipProps {
    bet: IBet;
}

const BetChip = ({ bet }: IBetChipProps) => {
    const { user } = bet;
    const color = bet.prediction === Prediction.Yes ? 'success' : 'error';

    return <Chip avatar={ProfileAvatar({ user })} label={`${bet.amount}${coin}`} size="small" color={color} variant="filled" />
}

export default BetChip;