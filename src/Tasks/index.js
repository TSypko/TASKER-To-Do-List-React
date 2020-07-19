import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    if (!tasks.length) {
        return (
            <p className="tasks__paragraph tasks__paragraph--centered">
                There are currently no tasks to display
            </p>
        )
    }
    else return (
        <ul className="tasks__list">
            {tasks.map((task) =>
                <li key={task.id} className={`tasks__item ${
                    task.done && hideDone ? "tasks__item--hidden" : ""
                    }`}>
                    <button onClick={() => toggleTaskDone(task.id)}
                        className={`tasks__button tasks__button--doneButton${
                            task.done ? " tasks__button--doneButtonToggled" : ""
                            }`}></button>
                    <p className={`tasks__paragraph ${
                        task.done ? "tasks__paragraph--done" : ""
                        }`}>
                        {task.content}
                    </p>
                    <button onClick={() => removeTask(task.id)} className="tasks__button tasks__button--deleteButton"></button>
                </li >
            )}
        </ul >
    )
};

export default Tasks;