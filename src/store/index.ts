import { combineReducers, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducer";

const rootReducer= combineReducers({
    auth:authReducer
})

const store =createStore(
    rootReducer,
)

export default store