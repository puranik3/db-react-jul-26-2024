import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        // cart: cartSlice.reducer,
    }
});

export default store;