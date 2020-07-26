import React from 'react';
import './style.css';

const Wrapper = ({children, theme}) => (
    <div className={`wrapper wrapper--${theme}`}>
        {children}
    </div>
)

export default Wrapper;