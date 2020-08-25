import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {

    const [tasks, setTasks] = useLocalStorageState("tasks", []);

    const addTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
            }
        ]
        );
    };

    const editTask = (editTaskContent, id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, content: editTaskContent, edit: false};
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