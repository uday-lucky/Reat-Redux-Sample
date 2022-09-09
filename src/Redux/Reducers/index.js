import { combineReducers } from "redux";
import { counterreducer } from "./counterReducer";

export const allreducers = combineReducers({
    countreducer:counterreducer
})