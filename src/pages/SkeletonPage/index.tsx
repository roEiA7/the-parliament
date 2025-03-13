import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";
import { StyledMainPageContainer } from "../MainPage/StyledMainPageContainer.styled";
import SkeletonNav from "./SkeletonNav";
import { Box } from "@mui/system";
import SkeletonPost from "./SkeletonPost";

const SkeletonPage = () => {
    return (
        <Router>
            <StyledMainPageContainer>
                <Header />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    margin: '20px 0',
                    paddingBottom: 8
                }}>
                    <SkeletonPost />
                    <SkeletonPost />

                </Box>
                <SkeletonNav />
            </StyledMainPageContainer>
        </Router>
    )
}

export default SkeletonPage;