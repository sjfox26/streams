import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <Link to="/" className="header__logo">Streamy</Link>
            </div>

            <div className="header__links">
                <Link to="/" className="header__link">All Streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;

