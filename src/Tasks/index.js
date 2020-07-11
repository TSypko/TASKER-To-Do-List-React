import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="task__list">
        {tasks.map((task) =>
            <li key={task.id} className={`task__item ${
                task.done && hideDoneTasks ? "task__item--hidden" : ""
                }`}>
                <button className={`task__button task__button--doneButton${
                    task.done ? " task__button--doneButtonToggled" : ""
                    }`}></button>
                <p className={`task__paragraph ${
                    task.done ? "task__paragraph--done" : ""
                    }`}>
                    {task.content}
                </p>
                <button className="task__button task__button--deleteButton"></button>
            </li >
        )}
    </ul >
);

export default Tasks;