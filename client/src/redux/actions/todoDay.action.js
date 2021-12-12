import { GET_TODO_DAY, DEL_ALL_TODO_DAY } from '../types/todo.types'

export const AllTodoDay = (todos) => ({
  type: GET_TODO_DAY,
  payload: { todos },
});

export const getTodoDay = () => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoDay(data)))
    .catch((err) => console.log(err));
};


export const deleteAllTodoDay = () => ({
  type: DEL_ALL_TODO_DAY,
  payload: [],
});