import React from 'react';
import "./style.css";







const Buttons = ({ tasks, hideDoneTasks }) => {

    const isTaskDone = ({ done }) => {
        return done;
    };
    const isTaskUndone = ({ done }) => {
        return !done || undefined;
    };

    const undoneTasks = tasks.every(isTaskUndone);
    const doneTasks = tasks.every(isTaskDone);
    
    return tasks.length > 0 &&
        (<React.Fragment>
            <button className="button button--doneAllButton" disabled={doneTasks ? "disabled" : ""}>set all as done</button>
            <button className="button button--hideDoneButton" disabled={undoneTasks ? "disabled" : ""}>
                {hideDoneTasks ? "show" : "hide"} done</button>
            <button className="button button--removeAllButton">remove all tasks</button>
        </React.Fragment>)

}

export default Buttons;