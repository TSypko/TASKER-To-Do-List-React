import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import hideDoneReducer from "./features/tasks/hideDoneSlice";
import themeReducer from "./features/theme/themeSlice"

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        hideDone: hideDoneReducer,
        theme: themeReducer,
    },
});