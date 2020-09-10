import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./features/theme/themeSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("currentTheme", JSON.stringify(store.getState().theme.theme))
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks))
    localStorage.setItem("hideDone", JSON.stringify(store.getState().tasks.hideDone))
})

export default store;