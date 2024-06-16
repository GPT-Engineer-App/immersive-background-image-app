import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  // Hardcoded authentication bypass
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<AdminDashboard />} />
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;