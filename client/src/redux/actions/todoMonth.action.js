import { GET_TODO_MONTH, DEL_ALL_TODO_MONTH } from '../types/todo.types'

export const AllTodoMonth = (todos) => ({
  type: GET_TODO_MONTH,
  payload: todos ,
});

export const getTodoMonth = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/period/month/${id}`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoMonth(data)))
    .catch((err) => console.log(err));
};

export const deleteAllTodoMonth = () => ({
  type: DEL_ALL_TODO_MONTH,
  payload: [],
});
