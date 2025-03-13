import { Box, Button, Slider, SliderThumb, TextField, Typography } from "@mui/material";
import { useFirebaseContext } from "../../context/FirebaseProvider";
import { IPost } from "../../interfaces/Post.interface";
import { useState } from "react";
import { Prediction } from "../../enums/Prediction";
import LTR from "../../styles/LTR";
import generateUUID from "../../utils/uuid";


const AdminPage = () => {
    const { setPosts } = useFirebaseContext();
    const [formValues, setFormValues] = useState<IPost>({
        bets: [],
        isOpen: true,
        title: '',
        description: '',
        odds: {
            [Prediction.No]: 4,
            [Prediction.Yes]: 2
        },
        key: generateUUID(),
        img: '',
        order: 0,
    });

    const handleInputChange = (event: any) => {
        const { id, value } = event.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        const oddKey = event.target.name;
        setFormValues({
            ...formValues,
            odds: {
                ...formValues.odds,
                [oddKey]: newValue
            }
        })
    };

    const handleOrderChange = (event: any, newValue: number | number[]) => {
        setFormValues({
            ...formValues,
            order: typeof newValue === 'number' ? newValue : newValue[0],
        })
    }


    const onSubmit = () => {
        setPosts(prevPosts => [...(prevPosts || []), formValues]);
    }

    const isSubmitDisabled = !formValues.img || !formValues.title;


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            margin: '20px 0',
            paddingBottom: 8
        }}>
            <TextField id="title" label="כותרת" variant="outlined" onChange={handleInputChange} value={formValues.title} />
            <TextField id="description" label="תיאור" variant="outlined" onChange={handleInputChange} value={formValues.description} />
            <TextField id="img" label="תמונה" variant="outlined" onChange={handleInputChange} value={formValues.img} />
            <LTR>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography variant="button">{`יחס כן: ${formValues.odds[Prediction.Yes]}`}</Typography>
                    <Slider
                        name={Prediction.Yes.toString()}
                        value={formValues.odds[Prediction.Yes]}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        color="success"
                        min={1}
                        max={10}
                        step={0.1}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography variant="button">{`יחס לא: ${formValues.odds[Prediction.No]}`}</Typography>
                    <Slider
                        name={Prediction.No.toString()}
                        value={formValues.odds[Prediction.No]}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        color="error"
                        min={1}
                        max={10}
                        step={0.1}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography variant="button">{`עדיפות: ${formValues.order}`}</Typography>
                    <Slider
                        value={formValues.order}
                        onChange={handleOrderChange}
                        valueLabelDisplay="auto"
                        min={-400}
                        max={400}
                        step={1}
                    />
                </Box>
            </LTR>

            <Button disabled={isSubmitDisabled} onClick={onSubmit} variant="contained">שגר</Button>
        </Box>
    );
};

export default AdminPage;
