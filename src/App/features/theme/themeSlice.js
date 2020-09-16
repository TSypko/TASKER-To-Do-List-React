import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../itemLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: getItemFromLocalStorage("currentTheme") || "light",
    },
    reducers: {
        themeChange: (state) => {
           state.theme = (state.theme === "light")
           ? "dark"
           : "light"
        }
    },
},
);

export const { themeChange } = themeSlice.actions;
export const selectTheme = state => state.theme;
export default themeSlice.reducer;