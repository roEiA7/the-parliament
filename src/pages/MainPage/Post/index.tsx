import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IPost } from '../../../interfaces/Post.interface';
import { Box } from '@mui/material';
import Bet from './Bet';
import BetChip from './BetChip';
import BetChart from './BetChart';
import { useAuthContext } from '../../../context/AuthProvider';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const Post = ({ post }: { post: IPost }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { user } = useAuthContext();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const userBet = post.bets.find(bet => bet.user.id === user?.id);
    const isBetEnabled = post.isOpen && !userBet;

    return (
        <Card sx={{ width: 300 }}>
            <CardHeader
                title={post.title}
                sx={{ textAlign: 'center', padding: 1 }}
            />
            <CardMedia
                component="img"
                height="155"
                image={post.img}
                alt={post.title}
                sx={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {post.description && <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.description}
                </Typography>}
                {/* {!isBetEnabled && <Typography variant="body2" sx={{ color: 'text.secondary' }}>ההימור סגור</Typography>} */}
                <Bet odds={post.odds} isBetEnabled={isBetEnabled} userBet={userBet} />
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between', width: '85%', margin: 'auto' }}  >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {post.bets.slice(0, 3).map((bet, index) => <BetChip bet={bet} key={index} />)}
                </Box>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ fontSize: 12 }}>
                <BetChart bets={post.bets} />
            </Collapse>
        </Card >
    );
}

export default Post;