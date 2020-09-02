import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { FormContainer, FormInput, FormButton } from "./styled";

const Form = () => {

    const dispatch = useDispatch();

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
        dispatch(addTask({
            content: newTaskContentTrimmed,
            done: false,
            edit: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        focus();
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                type="text"
                autoFocus
                placeholder="write your task here"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>
                submit
            </FormButton>
        </FormContainer>
    );
};
export default Form;