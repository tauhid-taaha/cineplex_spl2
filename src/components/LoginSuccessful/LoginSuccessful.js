// LoginSuccessful.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './LoginSuccessful.css'; // Import CSS file for styling

const LoginSuccessful = () => {
    return (
        <div className='container'>
        <div className="login-successful-container">
            <h2>Login Successful</h2>
            <Link to="/home">Go to Home</Link> {/* Update the 'to' attribute to '/home' */}
        </div></div>
    );
};

export default LoginSuccessful;

