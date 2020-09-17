import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ButtonContainer from "../../ButtonContainer";
import Button from "../../Button"
import { toggleAllTasksDone, selectTasks, removeAllTasks, toggleHideDone } from "../../../tasksSlice";

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ButtonContainer>
                <Button
                    onClick={() => dispatch(toggleAllTasksDone())}
                    green
                    disabled={tasks.every(({ done }) => done)}>
                    set all as done
                </Button>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    green
                    disabled={tasks.every(({ done }) => !done)}>
                    {hideDone ? "show" : "hide"} done
                </Button>
                <Button
                    onClick={() => dispatch(removeAllTasks())}
                    red>
                    remove all tasks
                </Button>
            </ButtonContainer>
        )
    );
};

export default Buttons;