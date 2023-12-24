import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import GamePage from './pages/GamePage';
import { GameStateProvider } from './context/GameStateProvider';
import { AuthProvider } from './context/AuthProvider';
import './App.css';
import Theme from './styles/Theme';
import RTL from './styles/RTL';

function App() {
  return (
    <RTL>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <GameStateProvider>
            <Router>
              <Routes>
                <Route path="/" element={<GamePage />} />
              </Routes>
            </Router>
          </GameStateProvider>
        </AuthProvider>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
