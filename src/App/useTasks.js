import { useState, useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {

    const [savedTasks, setSavedTasks] = useLocalStorageState("tasks", []);

    const [tasks, setTasks] = useState(
        savedTasks || []
    );

    useEffect(() => setSavedTasks(tasks), [tasks]);

    const addTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
                done: false
            }
        ]
        );
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            };
            return task;
        }))
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };

    const removeAllTasks = () => {
        setTasks([]);
    };
    return {
        tasks,
        addTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        removeAllTasks
    };
};