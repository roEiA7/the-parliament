import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Avatar, Badge, Button } from '@mui/material';
import { useAuthContext } from '../../../context/AuthProvider';
import { FacebookOutlined, Google } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import getUserImgSrc from '../../../utils/getUserImgSrc';
const BORDER_RADIUS = 40;

const NAV_VALUE = {
    '/profile': 0,
    '/leaderboards': 2,
    default: 1,
}

const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    // @ts-ignore
    const initialValue = NAV_VALUE[pathname];
    const [value, setValue] = useState(initialValue == null ? NAV_VALUE.default : initialValue);
    const { user, isLoaded: isUserLoaded, signIn } = useAuthContext();

    const shouldSignIn = isUserLoaded && !user;
    const avatarGreyScale = value == 0 ? 0 : 0.7;
    const avatarDropShadow = value == 0 ? 'drop-shadow(0rem 0.1rem 0.7rem rgba(25, 118, 210, 0.5))' : '';

    return (
        <Box sx={{
            width: '100dvw', position: 'fixed', bottom: 0, zIndex: 9999,
        }}>
            {shouldSignIn ?
                <BottomNavigation
                    sx={{
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderTopRightRadius: BORDER_RADIUS,
                        height: 60,
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        gap: 2
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Button variant="contained"
                        endIcon={<FacebookOutlined />}
                        sx={{ alignSelf: 'center', width: 150, height: 40 }}
                        onClick={() => signIn('Facebook')}
                        size="small"
                    >
                        התחבר עם פייסבוק
                    </Button>
                    <Button variant="contained"
                        endIcon={<Google />}
                        sx={{ alignSelf: 'center', width: 150, height: 40, backgroundColor: '#ea4335' }}
                        onClick={() => signIn('Gmail')}
                        size="small"
                    >
                        התחבר עם גוגל
                    </Button>
                </BottomNavigation>
                : <BottomNavigation
                    style={{
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderTopRightRadius: BORDER_RADIUS,
                        height: 60,
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction icon={<BottomNavigationAction onClick={() => navigate('/profile')}
                        icon={<Avatar alt="Profile" src={getUserImgSrc(user)} sx={{ width: 38, height: 38, filter: `grayscale(${avatarGreyScale}) ${avatarDropShadow};` }} />} />
                    } />
                    <BottomNavigationAction icon={<Badge badgeContent={0} color="primary" onClick={() => navigate('/')} >
                        <NewspaperIcon fontSize="large" />
                    </Badge>}>

                    </BottomNavigationAction>

                    <BottomNavigationAction icon={<Diversity3Icon fontSize="large" />} onClick={() => navigate('/leaderboards')} />
                </BottomNavigation>


            }
        </Box>
    );
}

export default NavBar;