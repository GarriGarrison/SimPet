import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { simReducer } from './simReducer'
import { todoAllReduser } from "./todoAll.reducer";
import { animalReducer } from "./animal.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  animal: animalReducer,
  sim: simReducer,
  todoAll: todoAllReduser,
})

