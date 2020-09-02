import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
    },
    reducers: {
        themeChange: (state, { payload }) => {
            if (payload === "light") {
                state.theme = "dark"
            }
            else {
                state.theme = "light"
            };
        }
    },
},
);

export const { themeChange } = themeSlice.actions;
export const selectTheme = state => state.theme;
export default themeSlice.reducer;