import React, { useState } from 'react';
import "./style.css";

const Form = ({ addTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                className="form__input"
                autoFocus
                placeholder="write your task here"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">
                submit
            </button>
        </form>
    );
};
export default Form;