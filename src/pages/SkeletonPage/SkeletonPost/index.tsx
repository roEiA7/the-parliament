import { Card, CardHeader, Skeleton, CardContent, CardActions } from "@mui/material";
import { Box } from "@mui/system";

const SkeletonPost = () => {
    return <Card sx={{ width: 300, height: 400 }}>
        {/* Skeleton for Card Header */}
        <CardHeader
            title={<Skeleton variant="text" width="80%" sx={{ mx: 'auto' }} />}
            sx={{ textAlign: 'center', padding: 1 }}
        />

        {/* Skeleton for Card Media */}
        <Skeleton variant="rectangular" height={155} sx={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }} />

        {/* Skeleton for Card Content */}
        <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Skeleton variant="text" width={120} height={40} />
            <Skeleton variant="text" width={120} height={40} />
        </CardContent>

        <Skeleton variant="text" width='80%' height={10} sx={{ margin: 'auto' }} />

        <Skeleton variant="text" width='80%' height={40} sx={{ margin: 'auto', marginTop: 3 }} />

        {/* Skeleton for Card Actions */}
        <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center', width: '85%', margin: 'auto' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="circular" width={30} height={30} />
            </Box>
            <Skeleton variant="circular" width={15} height={15} sx={{ marginRight: 1 }} />
        </CardActions>
    </Card >
}

export default SkeletonPost;