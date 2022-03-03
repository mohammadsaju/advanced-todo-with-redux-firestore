import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";

//combine all reducer
const allReducer = combineReducers({
    todos: todoSlice,
});

//our store
const store = configureStore({
    reducer: allReducer,
    middleware: getDefaultMiddleware,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;