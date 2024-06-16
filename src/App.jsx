import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Import the consolidated Login component
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
        <Route path="/" element={<Login />} /> {/* Use the new Login component */}
        {isAuthenticated && userRole === 'admin' && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
        {isAuthenticated && userRole === 'sales-manager' && <Route path="/sales-manager-dashboard" element={<SalesManagerDashboard />} />}
        {isAuthenticated && userRole === 'salesman' && <Route path="/salesman-dashboard" element={<SalesmanDashboard />} />}
      </Routes>
    </Router>
  );
}

export default App;