import { GET_TODO_DAY,DEL_TODO_DAY, DEL_ALL_TODO_DAY } from '../types/todo.types'

export const AllTodoDay = (todos) => ({
  type: GET_TODO_DAY,
  payload:  todos ,
});
export const DelTodoDay = (id) => ({
  type: DEL_TODO_DAY,
  payload:  id ,
});

export const getTodoDay = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/period/day/${id}`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => { 
      const todo = data.filter(el => el.status == false)
      // console.log(data, "all");
      // console.log(todo, "false");
      dispatch(AllTodoDay(todo)
      )})
    .catch((err) => console.log(err));
};


export const deleteAllTodoDay = () => ({
  type: DEL_ALL_TODO_DAY,
  payload: [],
});