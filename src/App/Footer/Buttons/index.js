import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHide: toggleHideDone, setAllDone, removeAllTasks }) => (
    tasks.length > 0 && (
        <>
            <button
                onClick={setAllDone}
                className="button button--doneAllButton"
                disabled={tasks.every(({ done }) => done)}>
                set all as done
                </button>
            <button
                onClick={toggleHideDone}
                className="button button--hideDoneButton"
                disabled={tasks.every(({ done }) => !done || undefined)}>
                {hideDone ? "show" : "hide"}
                 done
                 </button>
            <button
                onClick={removeAllTasks}
                className="button button--removeAllButton">
                remove all tasks
                 </button>
        </>
    )
);

export default Buttons;