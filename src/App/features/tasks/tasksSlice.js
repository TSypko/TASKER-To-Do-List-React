import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../itemLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getItemFromLocalStorage("tasks") || [],
        hideDone: getItemFromLocalStorage("hideDone") || false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        editTask: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload.id);
            state.tasks[index] = payload;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1);
        },
        removeAllTasks: (state) => {
            state.tasks = [];
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload)
            tasks[index].done = !tasks[index].done;
        },
        toggleAllTasksDone: (state) => {
            state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        fetchExampleTasks: (state) => {
            state.loading = !state.loading;
        },
        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = !state.loading;
        },
    },
});

export const {
    addTask,
    editTask,
    removeTask,
    removeAllTasks,
    toggleTaskDone,
    toggleAllTasksDone,
    toggleHideDone,
    fetchExampleTasks,
    setExampleTasks,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectTasksStateOnly = state => selectTasks(state).tasks;

export const getTaskById = (state, taskId) => 
    selectTasksStateOnly(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;