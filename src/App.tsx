import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthProvider";
import Theme from "./styles/Theme";
import RTL from "./styles/RTL";
import "./App.css";
import MainPage from "./pages/MainPage";
import { StyledMainPageContainer } from "./pages/MainPage/StyledMainPageContainer.styled";
import NavBar from "./pages/MainPage/NavBar";

function App() {

  return (
    <RTL>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <Router>
            <StyledMainPageContainer>
              <div className="header">
                <span>הפרלמנט</span>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <MainPage />
                  }
                />
                <Route
                  path="*"
                  element={
                    <MainPage />
                  }
                />
              </Routes>
              <NavBar />
            </StyledMainPageContainer>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
