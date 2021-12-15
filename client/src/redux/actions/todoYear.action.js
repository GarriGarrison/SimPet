import { GET_TODO_YEAR, DEL_ALL_TODO_YEAR } from '../types/todo.types'

export const AllTodoYear = (todos) => ({
  type: GET_TODO_YEAR,
  payload: todos ,
});

export const getTodoYear = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/period/year/${id}`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoYear(data)))
    .catch((err) => console.log(err));
};

export const deleteAllTodoYear = () => ({
  type: DEL_ALL_TODO_YEAR,
  payload: [],
});