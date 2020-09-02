import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        hideDone: JSON.parse(localStorage.getItem("hideDone")) || false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        editTask: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload.id);
            state.tasks[index] = payload;
        },
        removeTask: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload);
            state.tasks = [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)];
        },
        removeAllTasks: (state) => {
            state.tasks = [];
        },
        toggleTaskDone: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload)
            state.tasks[index].done = !state.tasks[index].done;
        },
        toggleAllTasksDone: (state) => {
            state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
        },
        toggleTaskEdit: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload)
            state.tasks[index].edit = !state.tasks[index].edit;
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
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
    toggleTaskEdit,
    toggleHideDone,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;