import React, { useState, useRef } from 'react';
import "./style.css";

const Form = ({ addTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return
        }
        event.preventDefault();
        addTask(newTaskContentTrimmed);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="form__input"
                autoFocus
                placeholder="write your task here"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button"
                onClick={focus}
            >
                submit
            </button>
        </form>
    );
};
export default Form;