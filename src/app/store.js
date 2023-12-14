import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import courseReducer from "../features/courses/courseSlice"
// const thunkMiddleware = thunk;

export const store = configureStore({
    reducer: {
        courses: courseReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});