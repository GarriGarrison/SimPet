import { GET_TODO_YEAR, ADD_TODO_YEAR, DEL_TODO_YEAR, EDIT_TODO_YEAR, DEL_ALL_TODO_YEAR } from '../types/todo.types'

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

export const newTodoYear = (newTodo) => ({
  type: ADD_TODO_YEAR,
  payload: { newTodo },
});

export const addTodoYear = (formData) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(newTodoYear(data), window.location.assign("/")).catch((err) => console.log(err)));
};


export const todoYearDel = (id) => ({
  type: DEL_TODO_YEAR,
  payload: { id },
});

export const deleteTodoYear = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.ok && dispatch(todoYearDel(id), window.location.assign("/")))
    .catch((err) => console.log(err));
};

export const todoYearEdit = (newTodo) => ({
  type: EDIT_TODO_YEAR,
  payload: { newTodo },
});

export const editStatusTodoYear = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => dispatch(todoYearEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodoYear = (id, inputValue) => async (dispatch) => {
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
      dispatch(todoYearEdit(data));
    })
    .catch((err) => console.log(err));
};


export const deleteAllTodoYear = () => ({
  type: DEL_ALL_TODO_YEAR,
  payload: [],
});