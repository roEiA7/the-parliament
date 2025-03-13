import { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { CssVarsProvider } from '@mui/joy/styles';
import { useAuthContext } from '../../context/AuthProvider';
import { Input } from '@mui/joy';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AvatarRadioGroup from './AvatarRadioGroup';
import { UserAvatar } from '../../enums/UserAvatar';
import { coin } from '../../constants/symbols';
import { useFirebaseContext } from '../../context/FirebaseProvider';
import getUserImgSrc from '../../utils/getUserImgSrc';
import { Alert, Snackbar } from '@mui/material';
import { GrowTransition } from '../../components/Snackbar';
import useGrowSnackBar from '../../hooks/useGrowSnackbar';



const ProfilePage = () => {
    const { user, setUser } = useAuthContext();
    const { setUsers } = useFirebaseContext();
    const { state, handleClick, handleClose } = useGrowSnackBar();
    const [displayName, setDisplayName] = useState(user?.displayName || 'אנונימי');
    const [avatar, setAvatar] = useState<UserAvatar>(user?.avatar || UserAvatar.Default);
    const isSaveDisabled = user?.avatar === avatar && user.displayName === displayName;

    const onSave = () => {
        setUsers((prevUsers) => (prevUsers || []).map(prevUsr => prevUsr.id === user?.id
            ? ({
                ...prevUsr,
                displayName,
                avatar,
            }) : prevUsr)
        )
        setUser(prevUser => ({ ...prevUser, displayName, avatar }));
        handleClick(GrowTransition)();
    }

    return (
        <>
            <CssVarsProvider>
                <Box
                    sx={{
                        width: '100%',
                        height: 'calc(100% - 135px)',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Card
                        orientation="horizontal"
                        sx={{
                            width: '80%',
                            flexWrap: 'wrap',
                            [`& > *`]: {
                                '--stack-point': '500px',
                                minWidth:
                                    'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                            },
                            // make the card resizable for demo
                            resize: 'horizontal',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={getUserImgSrc(user)}
                            loading="lazy"
                            alt=""
                            height={100}
                            width={100}
                            style={{ minWidth: 100, border: '1px solid black', borderRadius: 4, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}
                        />
                        <CardContent sx={{ alignItems: 'center' }}>
                            <Input sx={{ width: '110px' }} endDecorator={<EditIcon />} placeholder="" variant="plain" value={displayName} onChange={(event: any) => setDisplayName(event.target.value)} />
                            <Sheet
                                sx={{
                                    bgcolor: 'background.level1',
                                    borderRadius: 'sm',
                                    width: '80%',
                                    p: 1,
                                    marginTop: 0.5,
                                    marginBottom: 2,
                                    display: 'flex',
                                    textAlign: 'center',
                                    gap: 2,
                                    '& > div': { flex: 1 },
                                }}
                            >
                                <div>
                                    <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                                        יתרה
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'lg' }}>{`${user?.balance}${coin}`}</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                                        ניחושים
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'lg' }}>{user?.totalBets}</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                                        פגיעות
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'lg' }}>{user?.totalHits}</Typography>
                                </div>
                            </Sheet>

                            <AvatarRadioGroup photoURL={user?.photoURL || ''} avatar={avatar} setAvatar={setAvatar} />

                            <Button
                                endDecorator={<SaveIcon />}
                                sx={{
                                    marginTop: 2,
                                    width: 100,
                                    fontWeight: 'bold'
                                }}
                                size='md'
                                disabled={isSaveDisabled}
                                onClick={onSave}
                            >
                                שמור
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </CssVarsProvider>
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
                    נשמר בהצלחה!
                </Alert>
            </Snackbar>
        </>


    );
}

export default ProfilePage;