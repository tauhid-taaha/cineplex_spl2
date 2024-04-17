// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 
<<<<<<< HEAD
//import login from './loginvideo.mp4';
=======
import login from './loginvideo.mp4';
>>>>>>> 7a9169a844d865b21d993dff7eac29908e98315c
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    // Function  form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve stored sign-up information from local storage
        const signupInfo = JSON.parse(localStorage.getItem('signupInfo')) || [];
        
        const foundUser = signupInfo.find(user => user.email === email && user.password === password);
        if (foundUser) {
            
            window.location.href = "/login-successful";
        } else {
            
            setLoginError(true);
        }
    };

    return (
        <div className='body-container'>
        <div className="login-container">
<<<<<<< HEAD
             
=======
             <video autoPlay muted loop className="background-video"> {/* Add the video element */}
                <source src={login} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
>>>>>>> 7a9169a844d865b21d993dff7eac29908e98315c
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
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
                <button type="submit" className="login-button">Login</button>
            </form>
            {loginError && <p className="login-error">Login unsuccessful. Please check your email and password.</p>}
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
        </div>
    );
};

export default Login;