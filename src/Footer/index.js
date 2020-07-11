import React from 'react';
import "./style.css";

const Footer = ({ tasks, children }) => (
    <footer className="footer">
     {tasks.length > 0 && [children]}
    </footer>
    )     

export default Footer;