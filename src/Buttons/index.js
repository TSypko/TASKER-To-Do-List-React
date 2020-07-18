import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <React.Fragment>
            <button className="button button--doneAllButton"
                disabled={tasks.every(({ done }) => done)}>set all as done</button>
            <button className="button button--hideDoneButton"
                disabled={tasks.every(({ done }) => !done || undefined)}>
                {hideDone ? "show" : "hide"} done</button>
            <button className="button button--removeAllButton">remove all tasks</button>
        </React.Fragment>
    )
)

export default Buttons;