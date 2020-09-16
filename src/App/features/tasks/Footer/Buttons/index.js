import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ButtonContainer } from "./styled";
import Button from "../../Button"
import { toggleAllTasksDone, selectTasks, removeAllTasks, toggleHideDone } from "../../tasksSlice";

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
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