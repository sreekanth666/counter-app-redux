import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer: {
        // Reducer should be key value pair
        counter: counterSlice
    }
})