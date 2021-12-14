import { GET_TODO_WEEK, DEL_ALL_TODO_WEEK } from '../types/todo.types'

export const AllTodoWeek = (todos) => ({
  type: GET_TODO_WEEK,
  payload: todos ,
});

export const getTodoWeek = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/period/week/${id}`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoWeek(data)))
    .catch((err) => console.log(err));
};


export const deleteAllTodoWeek = () => ({
  type: DEL_ALL_TODO_WEEK,
  payload: [],
});