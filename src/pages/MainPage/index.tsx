import { Box } from "@mui/material";
import Post from "./Post";
import { useFirebaseContext } from "../../context/FirebaseProvider";
import useScrollToView from "../../hooks/useScrollToView";

const MainPage = () => {
    useScrollToView();
    const { posts } = useFirebaseContext();


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            margin: '20px 0',
            paddingBottom: 8
        }}>
            {posts.map(post => <Post post={post} />)}
        </Box>
    );
};

export default MainPage;
