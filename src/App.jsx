import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import SalesManagerDashboard from './components/SalesManagerDashboard';
import SalesmanDashboard from './components/SalesmanDashboard';

function App() {
  // Placeholder for authentication state
  const isAuthenticated = true; // Replace with your actual authentication logic
  const userRole = 'admin'; // Replace with the role determined from authentication

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isAuthenticated && userRole === 'admin' && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
        {isAuthenticated && userRole === 'sales-manager' && <Route path="/sales-manager-dashboard" element={<SalesManagerDashboard />} />}
        {isAuthenticated && userRole === 'salesman' && <Route path="/salesman-dashboard" element={<SalesmanDashboard />} />}
      </Routes>
    </Router>
  );
}

export default App;