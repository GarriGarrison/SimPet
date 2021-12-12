import { GET_TODO_WEEK, DEL_ALL_TODO_WEEK } from '../types/todo.types'

export const AllTodoWeek = (todos) => ({
  type: GET_TODO_WEEK,
  payload: { todos },
});

export const getTodoWeek = () => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoWeek(data)))
    .catch((err) => console.log(err));
};


export const deleteAllTodoWeek = () => ({
  type: DEL_ALL_TODO_WEEK,
  payload: [],
});