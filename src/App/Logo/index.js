import React from 'react';
import { Image } from "./styled"
import logo from '../logo.svg';

const Logo = () => (
    <Image
        src={logo}
        alt="Logotype"
        className="logo"
    />
);

export default Logo;