import React from 'react';
import { ButtonContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleAllTasksDone, selectTasks, removeAllTasks } from "../../tasksSlice";
import { selectHideDone, toggleHideDone } from "../../hideDoneSlice";


const Buttons = () => {

    const { tasks } = useSelector(selectTasks);
    const { hideDone } = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ButtonContainer>
                <Button
                    onClick={() => dispatch(toggleAllTasksDone())}
                    doneAll
                    disabled={tasks.every(({ done }) => done)}>
                    set all as done
                </Button>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    hideDone
                    disabled={tasks.every(({ done }) => !done)}>
                    {hideDone ? "show" : "hide"} done
                </Button>
                <Button
                    onClick={() => dispatch(removeAllTasks())}
                    removeAll>
                    remove all tasks
                </Button>
            </ButtonContainer>
        )
    );
};

export default Buttons;