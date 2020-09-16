import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { EditFormInput, FormContainer } from "./styled";
import SubmitButton from "../../SubmitButton"
import { editTask } from "../../tasksSlice";
import { useCurrentDate } from "../../useCurrentDate";

const EditForm = ({ task, toggleTaskEdit }) => {

    const dispatch = useDispatch();
    const [editTaskContent, setEditTaskContent] = useState(task.content);
    const date = useCurrentDate();

    const editDate = (date) => {
        const dateString = date.toLocaleDateString(
            "en-EN", {
            day: "numeric",
            month: "long"
        });
        const timeString = date.toLocaleTimeString();
        return `(edited at ${timeString} on ${dateString})`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const editTaskContentTrimmed = editTaskContent.trim();
        if (editTaskContentTrimmed !== task.content) {
            dispatch(editTask({
                ...task,
                content: editTaskContentTrimmed,
                editDate: editDate(date),
            }));
            toggleTaskEdit();
        }
        else {
            dispatch(editTask({
                ...task,
            }));
            toggleTaskEdit();
        };
    };

    return (
        <form onSubmit={onFormSubmit}>
            <FormContainer>
                <EditFormInput
                    edit={task.id}
                    value={editTaskContent}
                    type="text"
                    autoFocus
                    onChange={({ target }) => setEditTaskContent(target.value)}
                />
                <SubmitButton>
                    submit
                </SubmitButton>
            </FormContainer>
        </form>
    );
};

export default EditForm;
