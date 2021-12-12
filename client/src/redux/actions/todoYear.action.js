import { GET_TODO_YEAR, DEL_ALL_TODO_YEAR } from '../types/todo.types'

export const AllTodoYear = (todos) => ({
  type: GET_TODO_YEAR,
  payload: { todos },
});

export const getTodoYear = () => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoYear(data)))
    .catch((err) => console.log(err));
};

export const deleteAllTodoYear = () => ({
  type: DEL_ALL_TODO_YEAR,
  payload: [],
});