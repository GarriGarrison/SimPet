import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { simReducer } from './simReducer'
import { todoDayReduser } from "./todoDay.reducer";
import { todoWeekReduser } from "./todoWeek.reducer";
import { todoMonthReduser } from "./todoMonth.reducer";
import { todoYearhReduser } from "./todoYear.reducer";





export const rootReducer = combineReducers({
  user: userReducer,
  sim: simReducer,
  todoDay: todoDayReduser,
  todoWeek: todoWeekReduser,
  todoMonth: todoMonthReduser,
  todoYear: todoYearhReduser 
})

