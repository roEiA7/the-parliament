import { Chip, Tooltip } from "@mui/material";
import { IBet } from "../../../../interfaces/Bet.interface";
import { Prediction } from "../../../../enums/Prediction";
import { coin } from "../../../../constants/symbols";
import ProfileAvatar from "../../../../components/ProfileAvatar";
import { IUser } from "../../../../interfaces/user.interface";
import { useState } from "react";

interface IBetChipProps {
    bet: IBet;
    user: IUser;
}

const BetChip = ({ bet, user }: IBetChipProps) => {
    const [open, setOpen] = useState(false);
    const color = bet.prediction === Prediction.Yes ? 'success' : 'error';

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return <Tooltip
        title={user.displayName || 'אנונימי'}
        onClick={handleTooltipOpen}
        onClose={handleTooltipClose}
        open={open}
    >
        <Chip avatar={ProfileAvatar({ user })} label={`${bet.amount}${coin}`} size="small" color={color} variant="filled" />
    </Tooltip>

}

export default BetChip;