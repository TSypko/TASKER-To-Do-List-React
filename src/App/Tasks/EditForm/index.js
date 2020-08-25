import React, { useState } from 'react'
import { EditFormInput, Button, FormContainer } from "./styled"

const EditForm = ({ edit, value, editTask, taskID }) => {

    const [editTaskContent, setEditTaskContent] = useState(value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const editTaskContentTrimmed = editTaskContent.trim();
        if (!editTaskContentTrimmed) {
            return
        }
        event.preventDefault();
        editTask(editTaskContentTrimmed, taskID);
    };

    return (
        <form onSubmit={onFormSubmit}>

            <FormContainer>
                <EditFormInput
                    edit={edit}
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
    )
}

export default EditForm;
