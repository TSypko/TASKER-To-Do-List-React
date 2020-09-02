import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { FormContainer, FormInput, FormButton } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

const Form = () => {

    const dispatch = useDispatch();

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    const date = useCurrentDate();
    const createDate = (rawDate) => {
        const dateString = rawDate.toLocaleDateString(
            "en-EN", {
            day: "numeric",
            month: "long"
        });
        const timeString = rawDate.toLocaleTimeString();
        return `Created at ${timeString} on ${dateString}`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return
        }
        event.preventDefault();
        dispatch(addTask({
            date: createDate(date),
            editDate: null,
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