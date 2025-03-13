import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthProvider";
import Theme from "./styles/Theme";
import RTL from "./styles/RTL";
import "./App.css";
import MainPage from "./pages/MainPage";
import { StyledMainPageContainer } from "./pages/MainPage/StyledMainPageContainer.styled";
import NavBar from "./pages/MainPage/NavBar";
import LeaderboardPage from "./pages/LeaderboardPage";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import { FirebaseProvider } from "./context/FirebaseProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";

function App() {

  return (
    <RTL>
      <ThemeProvider theme={Theme}>
        <FirebaseProvider>
          <AuthProvider>
            <Router>
              <StyledMainPageContainer>
                <Header />
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/leaderboards" element={<LeaderboardPage />} />
                  <Route path="/profile" element={
                    <ProtectedRoute path="/profile">
                      <ProfilePage />
                    </ProtectedRoute>
                  } >
                  </Route>
                  <Route path="/secret-admin" element={
                    <ProtectedRoute path="/secret-admin">
                      <AdminPage />
                    </ProtectedRoute>
                  } ></Route>
                  <Route path="*" element={<MainPage />}
                  />
                </Routes>
                <NavBar />
              </StyledMainPageContainer>
            </Router>
          </AuthProvider>
        </FirebaseProvider>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
