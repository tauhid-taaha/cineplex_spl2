// Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Signup.css'; // Import CSS file for styling

const Signup = () => {
    // State for managing form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for registration or other actions here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // Redirect to SignUpSuccessful page after successful registration
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                {/* Link to SignUpSuccessful page */}
                <Link to="/signup-successful">
                    <button type="submit" className="signup-button">Sign Up</button>
                </Link>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default Signup;
