import React, { useState } from 'react';
import { EditFormInput, Button, FormContainer } from "./styled";
import { useDispatch } from "react-redux";
import { editTask } from "../../tasksSlice";
import { useCurrentDate } from "../../useCurrentDate";

const EditForm = ({ task }) => {

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
                edit: false,
                editDate: editDate(date),
            }));
        }
        else {
            dispatch(editTask({
                ...task,
                edit: false,
            }));
        };
    };

    return (
        <form onSubmit={onFormSubmit}>
            <FormContainer>
                <EditFormInput
                    edit={task.edit}
                    value={editTaskContent}
                    type="text"
                    autoFocus
                    onChange={({ target }) => setEditTaskContent(target.value)}
                />
                <Button>
                    submit
            </Button>
            </FormContainer>
        </form>
    );
};

export default EditForm;
