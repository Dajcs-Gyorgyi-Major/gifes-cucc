import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="right">
                    <Link to="/" className="logo">
                        PrivateLab
                    </Link>
                </div>
                <div className="left">
                    <Link to="/">Home</Link>
                    <Link to="/vizsgalat">Előkészülés vizsgálatra</Link>
                    <Link to="/teszt">Genetikai tesztek</Link>
                    <Link to="/doctor">Kollégáink</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
