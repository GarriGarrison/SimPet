import { GET_TODO_WEEK, ADD_TODO_WEEK, DEL_TODO_WEEK, EDIT_TODO_WEEK, DEL_ALL_TODO_WEEK } from '../types/todo.types'

export const AllTodoWeek = (todos) => ({
  type: GET_TODO_WEEK,
  payload: { todos },
});

export const getTodoWEEK = () => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, { credentials: "include" })
    .then((response) => response.json())
    .then((data) => dispatch(AllTodoWeek(data)))
    .catch((err) => console.log(err));
};

export const newTodoWeek = (newTodo) => ({
  type: ADD_TODO_WEEK,
  payload: { newTodo },
});

export const addTodoWeek = (formData) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(newTodoWeek(data), window.location.assign("/")).catch((err) => console.log(err)));
};


export const todoWeekDel = (id) => ({
  type: DEL_TODO_WEEK,
  payload: { id },
});

export const deleteTodoWeek = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.ok && dispatch(todoWeekDel(id), window.location.assign("/")))
    .catch((err) => console.log(err));
};

export const todoWeekEdit = (newTodo) => ({
  type: EDIT_TODO_WEEK,
  payload: { newTodo },
});

export const editStatusTodoWeek = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => dispatch(todoWeekEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodoWeek= (id, inputValue) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, tittle: inputValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(todoWeekEdit(data));
    })
    .catch((err) => console.log(err));
};


export const deleteAllTodoWeek = () => ({
  type: DEL_ALL_TODO_WEEK,
  payload: [],
});