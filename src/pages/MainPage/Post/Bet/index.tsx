import { Box, Button, Slider } from "@mui/material"
import { useState } from "react";
import { Prediction } from "../../../../enums/Prediction";
import LTR from "../../../../styles/LTR";
import { Send } from "@mui/icons-material";
import { coin } from "../../../../constants/symbols";
import { OddsType } from "../../../../interfaces/Post.interface";
import { IBet } from "../../../../interfaces/Bet.interface";

interface IBetProps {
    odds: OddsType;
    isBetEnabled: boolean;
    userBet?: IBet;
}

const Bet = ({ odds, isBetEnabled, userBet }: IBetProps) => {
    const [prediction, setPrediction] = useState<Prediction | null>(userBet?.prediction || null);
    const [amount, setAmount] = useState(userBet?.amount || 0);
    const isSendDisabled = !isBetEnabled || prediction === null || amount === 0;

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, width: 250 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Button
                variant={prediction === Prediction.Yes ? 'contained' : 'outlined'}
                color='success'
                sx={{ width: 120 }}
                size='medium'
                onClick={() => { setPrediction(Prediction.Yes) }}
                disabled={!isBetEnabled}
            >
                {`כן (${odds[Prediction.Yes]})`}
            </Button>
            <Button
                variant={prediction === Prediction.No ? 'contained' : 'outlined'}
                sx={{ width: 120 }}
                color='error'
                size='medium'
                onClick={() => { setPrediction(Prediction.No) }}
                disabled={!isBetEnabled}
            >
                {`לא (${odds[Prediction.No]})`}
            </Button>
        </Box>
        <LTR>
            <Slider
                defaultValue={0}
                step={10}
                size="small"
                valueLabelDisplay="auto"
                sx={{ width: '100%' }}
                onChange={(e, val) => setAmount(Number(val))}
                value={amount}
                valueLabelFormat={val => `${val}${coin}`}
                disabled={!isBetEnabled}

            />
        </LTR>

        <Button
            variant="contained"
            fullWidth
            size='medium'
            disabled={isSendDisabled}
            endIcon={<Send sx={{ transform: 'rotate(180deg)' }} />}
        >
            {isSendDisabled ? 'שגר' : `שגר (${amount * odds[prediction]}${coin} לפגיעה)`}
            {/* שגר */}
        </Button>
    </Box>
}

export default Bet;