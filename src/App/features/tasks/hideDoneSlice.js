import { createSlice } from "@reduxjs/toolkit";

const hideDoneSlice = createSlice({
    name: "hideDone",
    initialState: {
        hideDone: false,
    },
    reducers: {
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
    },
});

export const {
    toggleHideDone,

} = hideDoneSlice.actions;
export const selectHideDone = state => state.hideDone;
export default hideDoneSlice.reducer;