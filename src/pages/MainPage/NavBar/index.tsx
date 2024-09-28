import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Avatar, Badge, Button } from '@mui/material';
import { useAuthContext } from '../../../context/AuthProvider';
import { FacebookOutlined, Height } from '@mui/icons-material';
const BORDER_RADIUS = 40;

const NavBar = () => {
    const [value, setValue] = useState(1);
    const { user, isLoaded: isUserLoaded, signInWithFacebook } = useAuthContext();
    const avatarUrl = user?.photoURL || '';

    const shouldSignIn = isUserLoaded && !user;
    const avatarGreyScale = value == 0 ? 0 : 0.7;


    return (
        <Box sx={{
            width: '100dvw', position: 'fixed', bottom: 0, zIndex: 9999,
        }}>
            {shouldSignIn ?
                <BottomNavigation
                    sx={{
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderTopRightRadius: BORDER_RADIUS,
                        height: 70,
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Button variant="contained"
                        endIcon={<FacebookOutlined />}
                        sx={{ alignSelf: 'center', width: 200, height: 40 }}
                        onClick={signInWithFacebook}
                    >
                        התחבר עם פייסבוק
                    </Button>
                </BottomNavigation>
                : <BottomNavigation
                    style={{
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderTopRightRadius: BORDER_RADIUS,
                        height: 70,
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction icon={<BottomNavigationAction icon={
                        <Avatar alt="Profile" src={avatarUrl} sx={{ width: 38, height: 38, filter: `grayscale(${avatarGreyScale});` }} />} />
                    } />
                    <BottomNavigationAction icon={<Badge badgeContent={0} color="primary">
                        <NewspaperIcon fontSize="large" />
                    </Badge>}>

                    </BottomNavigationAction>

                    <BottomNavigationAction icon={<Diversity3Icon fontSize="large" />} />
                </BottomNavigation>


            }
        </Box>
    );
}

export default NavBar;