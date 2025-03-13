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
import { useFirebaseContext } from '../../../context/FirebaseProvider';
import { Prediction } from '../../../enums/Prediction';

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
    const { users } = useFirebaseContext();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const userBet = post.bets.find(bet => bet.userId === user?.id);
    const betsUsers = post.bets.map(bet => users.find(usr => usr.id === bet.userId) || {});
    const color = post.outcome === Prediction.Yes ? '#2e7d32' : '#d32f2f';
    const boxShadow = post.outcome != null ? `0 0 4px 2px ${color};` : '';

    return (
        <Card sx={{ width: 300, boxShadow }} id={post.key}>
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
                {post.description && <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                    {post.description}
                </Typography>}
                <Bet postKey={post.key} odds={post.odds} isOpen={post.isOpen} userBet={userBet} outcome={post.outcome} />
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between', width: '85%', margin: 'auto' }}  >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {post.bets.length === 0
                        ? <Typography variant='button'> תהיה הראשון לנחש!</Typography>
                        : post.bets.slice(0, 3).map((bet, index) => <BetChip bet={bet} user={betsUsers[index]} key={index} />)
                    }
                </Box>

                <ExpandMore
                    disabled={post.bets.length === 0}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ fontSize: 12 }}>
                <BetChart bets={post.bets} betsUsers={betsUsers} />
            </Collapse>
        </Card >
    );
}

export default Post;