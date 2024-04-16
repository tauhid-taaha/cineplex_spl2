// Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cineplexLogo from './CINEPLEX.png';
import './Header.css';

const Header = () => {
    const location = useLocation();

    // Conditionally render the header based on the current route
    const renderHeader = () => {
        // Check if the current route is the initial signup page, regular signup page, login page, or SignUpSuccessful page
        if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/signup-successful') {
            return (
                <div className="header">
                    <div className="headerLeft">
                        <Link to="/">
                            <img
                                className="header__icon"
                                src={cineplexLogo}
                                alt="CINEPLEX LOGO"
                            />
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="header">
                    <div className="headerLeft">
                        <Link to="/">
                            <img
                                className="header__icon"
                                src={cineplexLogo}
                                alt="CINEPLEX LOGO"
                            />
                        </Link>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <span>Home</span>
                        </Link>
                        <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
                            <span>Popular</span>
                        </Link>
                        <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
                            <span>Top Rated</span>
                        </Link>
                        <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
                            <span>Upcoming</span>
                        </Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span>Login</span>
                        </Link>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            );
        }
    };

    return renderHeader();
};

export default Header;
