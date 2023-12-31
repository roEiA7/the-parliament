import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import GamePage from "./pages/GamePage";
import { GameStateProvider } from "./context/GameStateProvider";
import { AuthProvider } from "./context/AuthProvider";
import Theme from "./styles/Theme";
import RTL from "./styles/RTL";
import AuthPage from "./pages/AuthPage";
import { RoomProvider } from "./context/RoomProvider";
import LobbyPage from "./pages/LobbyPage";
import ProtectedRoute from "./components/ProtectedRoute";
import backgroundImage from "./assets/lobby-background.png";
import "./App.css";

function App() {
  return (
    <RTL>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <RoomProvider>
            <GameStateProvider>
              {/* <div
                style={{
                  background: "url('./assets/lobby-background.png')",
                  height: "100vh",
                  width: "100vw",
                  backgroundSize: "100% 100%",
                  opacity: 0.55,
                  position: "absolute",
                  top: 0,
                  zIndex: -1,
                }}
              /> */}
              <Router>
                <Routes>
                  <Route
                    path="/game"
                    element={
                      <ProtectedRoute path="/game">
                        <GamePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/auth"
                    element={
                      <ProtectedRoute path="/auth">
                        <AuthPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/lobby"
                    element={
                      <ProtectedRoute path="/lobby">
                        <LobbyPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <ProtectedRoute path="/lobby">
                        <LobbyPage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Router>
            </GameStateProvider>
          </RoomProvider>
        </AuthProvider>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
