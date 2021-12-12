import { GET_TODO_MONTH, DEL_ALL_TODO_MONTH } from '../types/todo.types'

export const AllTodoMonth = (todos) => ({
  type: GET_TODO_MONTH,
  payload: { todos },
});

export const getTodoMonth = () => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoMonth(data)))
    .catch((err) => console.log(err));
};

export const deleteAllTodoMonth = () => ({
  type: DEL_ALL_TODO_MONTH,
  payload: [],
});
