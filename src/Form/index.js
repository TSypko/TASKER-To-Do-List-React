import React from 'react';
import "./style.css";

const Form = ({ placeHolderText }) => (
    <form className="form">
        <input
            type="text"
            className="form__input"
            autoFocus
            placeholder={placeHolderText}
        />
        <button className="form__button form__button--addButton">
            submit
            </button>
    </form>
);
export default Form;