// @ts-nocheck

import { Box, Button, Slider, Typography, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { Prediction } from "../../../../enums/Prediction";
import LTR from "../../../../styles/LTR";
import { Send } from "@mui/icons-material";
import { coin } from "../../../../constants/symbols";
import { OddsType } from "../../../../interfaces/Post.interface";
import { IBet } from "../../../../interfaces/Bet.interface";
import { useFirebaseContext } from "../../../../context/FirebaseProvider";
import { useAuthContext } from "../../../../context/AuthProvider";
import useGrowSnackBar from "../../../../hooks/useGrowSnackbar";
import { GrowTransition } from "../../../../components/Snackbar";

interface IBetProps {
    postKey: string;
    odds: OddsType;
    isOpen: boolean;
    userBet?: IBet;
    outcome?: Prediction;
}

const Bet = ({ postKey, odds, isOpen, userBet, outcome }: IBetProps) => {
    const { user } = useAuthContext();
    const { setPosts } = useFirebaseContext();
    const { state, handleClick, handleClose } = useGrowSnackBar();
    const [prediction, setPrediction] = useState<Prediction | null>(userBet?.prediction || null);
    const [amount, setAmount] = useState(userBet?.amount || 0);
    const isSendDisabled = prediction === null || amount === 0;
    const prizeAmount = prediction == null ? 0 : Math.round((amount * odds[prediction] + Number.EPSILON) * 100) / 100;

    const isBetEnabled = user && isOpen && !userBet && user?.balance > 0;
    const isWon = outcome != null && outcome === userBet?.prediction;
    let betClosedLabel;
    if (outcome === null || outcome === undefined) {
        if (user) {
            if (userBet) {
                betClosedLabel = `שיגרת ${amount}${coin} (לזכייה ${prizeAmount}${coin})`;
            } else {
                betClosedLabel = user.balance > 0 ? '' : 'נגמר לך הכסף';
            }
        } else if (isOpen) {
            betClosedLabel = 'התחבר כדי להמר!';
        }
    } else {
        if (userBet) {
            if (isWon) {
                betClosedLabel = `לקחת ${prizeAmount}${coin}`;
            } else {
                betClosedLabel = `נפלת הלכו ${amount}${coin}`;
            }
        } else {
            betClosedLabel = 'ההימור נסגר';
        }
    }

    const onSendBet = () => {
        setPosts(prevPosts => prevPosts.map(post => post.key === postKey ? ({
            ...post,
            bets: [...post.bets, { userId: user.id, prediction, amount, timestamp: Date.now() }]
        }) : post));
        handleClick(GrowTransition)();
    }

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
                max={user?.balance || 0}
            />
        </LTR>

        {isBetEnabled
            ? <Button
                variant="contained"
                fullWidth
                size='medium'
                disabled={isSendDisabled}
                endIcon={<Send sx={{ transform: 'rotate(180deg)' }} />}
                onClick={onSendBet}
            >
                {isSendDisabled ? 'שגר' : `שגר (${prizeAmount}${coin} לפגיעה)`}
            </Button>
            :
            <Typography variant="body2" color={isWon ? 'success' : 'text.secondary'}>
                {betClosedLabel}
            </Typography>

        }

        <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            key={state.Transition.name}
            autoHideDuration={1500}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ marginBottom: 8, marginRight: 'auto', marginLeft: 'auto' }}
            >
                שוגר בהצלחה!
            </Alert>
        </Snackbar>

    </Box>

}

export default Bet;