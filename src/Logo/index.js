import React from 'react';
import logo from '../logo.svg';
import "./style.css";

const Logo = ({ altText }) => (
    <img
        src={logo}
        alt={altText}
        className="logo"
    />
);

export default Logo;