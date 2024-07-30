import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    initialState: {
        value: "light",
    },
    name: "counter",
    reducers: {
        toggleTheme(state) {
            // uses Immer JS under the hood - this state is the "draft" state and not the original state
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

// toggleTheme() -> { type: 'counter/toggleTheme' }
export const { toggleTheme } = themeSlice.actions;
// export const themeReducer = themeSlice.reducer;

export default themeSlice;
