import React from 'react';
import logo from '../../Images/sb.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/recipe">Recipe</a>
                <a href="/pricing">Pricing</a>
            </nav>
        </div>
    );
};

export default Header;