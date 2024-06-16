import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  // Hardcoded authentication bypass
  const isAuthenticated = true;

  return (
    <Router>
      <Switch>
        {isAuthenticated ? (
          <Route path="/" component={AdminDashboard} />
        ) : (
          <Route path="/" component={LoginPage} />
        )}
      </Switch>
    </Router>
  );
}

export default App;