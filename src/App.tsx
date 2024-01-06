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
import RotateGif from "./assets/screen-rotate.gif";
import "./App.css";
import GameOverPage from "./pages/GameOverPage";

function App() {
  return (
    <RTL>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <RoomProvider>
            <GameStateProvider>
              <div className="portrait-container">
                <img height={200} src={RotateGif} />
                סבב תמסך
              </div>
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
                    path="/over"
                    element={
                      <ProtectedRoute path="/over">
                        <GameOverPage />
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
