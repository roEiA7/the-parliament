import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import { GameStateProvider } from './context/GameStateProvider';
import { AuthProvider } from './context/AuthProvider';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <GameStateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<GamePage />} />
          </Routes>
        </Router>
      </GameStateProvider>
    </AuthProvider>
  );
}

export default App;
