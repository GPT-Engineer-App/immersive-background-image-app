import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with your actual authentication logic
    const isAuthenticated = true; // Example authentication check
    const userRole = 'admin'; // Example role determination

    if (isAuthenticated) {
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userRole === 'sales-manager') {
        navigate('/sales-manager-dashboard');
      } else if (userRole === 'salesman') {
        navigate('/salesman-dashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;