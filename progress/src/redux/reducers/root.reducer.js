import { combineReducers } from "redux";
import { simReducer } from './simReducer'


export const rootReducer = combineReducers({
    sim: simReducer,
})