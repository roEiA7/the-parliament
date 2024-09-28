import { Box } from "@mui/material";
import Post from "./Post";
import { mockPost } from "../../utils/mocks";

const MainPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            margin: '20px 0',
        }}>
            <Post post={mockPost} />
            <Post post={{ ...mockPost, bets: mockPost.bets.slice(0, 2) }} />
            <Post post={mockPost} />

        </Box>
    );
};

export default MainPage;
