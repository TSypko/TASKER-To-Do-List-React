import { useLocalStorageState } from "./useLocalStorageState";
import { useCurrentDate } from "./useCurrentDate";

export const useTasks = () => {

    const formatDate = (rawDate) => {
        const dateString = rawDate.toLocaleDateString(
            "en-EN", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
        const timeString = rawDate.toLocaleTimeString();
        return `Created at ${timeString} on ${dateString}`
    };

    const [tasks, setTasks] = useLocalStorageState("tasks", []);
    const rawDate = useCurrentDate();

    const addTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
                date: formatDate(rawDate),
            }
        ]
        );
    };

    const editTask = (editTaskContent, id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, content: editTaskContent, edit: false };
            };
            return task;
        }))
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

    const toggleEditTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, edit: !task.edit };
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
        editTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        removeAllTasks,
        toggleEditTask
    };
};