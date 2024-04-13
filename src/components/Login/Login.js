// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Login.css'; // Import CSS file for styling

const Login = () => {
    // State for managing username, password, and login status
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate to other pages

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for authentication or other actions here
        console.log('Username:', username);
        console.log('Password:', password);
        // Simulate successful login
        // Navigate to LoginSuccessful page
        navigate('/login-successful');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Link to Sign Up page */}
        </div>
    );
};

export default Login;
