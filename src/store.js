import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./features/quoteSlice";

export const store = configureStore({
    reducer: {
        quotes: quoteReducer,
    }
})

