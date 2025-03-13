import { BottomNavigation, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const BORDER_RADIUS = 40;


const SkeletonNav = () => {
    return (
        <Box sx={{
            width: '100dvw', position: 'fixed', bottom: 0, zIndex: 9999,
        }}>
            <BottomNavigation sx={{
                borderTopLeftRadius: BORDER_RADIUS,
                borderTopRightRadius: BORDER_RADIUS,
                height: 60,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
            </BottomNavigation>
        </Box>

    );
}

export default SkeletonNav;