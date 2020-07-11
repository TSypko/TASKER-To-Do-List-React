import React from 'react';
import "./style.css";

const Header = ({ body, title }) => (
    <header className="header">
        <section className="header__section">
            {body}
            <h1 className="header__title">{title}</h1>
        </section>
    </header>
);

export default Header;