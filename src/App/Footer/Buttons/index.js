import React from 'react';
import { ButtonContainer, Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, removeAllTasks }) => (
    tasks.length > 0 && (
        <ButtonContainer>
            <Button
                onClick={setAllDone}
                doneAll
                disabled={tasks.every(({ done }) => done)}>
                set all as done
            </Button>
            <Button
                onClick={toggleHideDone}
                hideDone
                disabled={tasks.every(({ done }) => !done || undefined)}>
                {hideDone ? "show" : "hide"} done
            </Button>
            <Button
                onClick={removeAllTasks}
                removeAll>
                remove all tasks
            </Button>
        </ButtonContainer>
    )
);

export default Buttons;