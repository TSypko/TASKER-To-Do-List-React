import React from 'react';
import "./style.css";
import Logo from "../Logo";

const Header = ({ body, title }) => (
    <header className="header">
        <section className="header__section">
           <Logo />
            <h1 className="header__title">{title}</h1>
        </section>
    </header>
);

export default Header;