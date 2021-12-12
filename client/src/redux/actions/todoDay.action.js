import { GET_TODO_DAY, ADD_TODO_DAY, DEL_TODO_DAY, EDIT_TODO_DAY, DEL_ALL_TODO_DAY } from '../types/todo.types'

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

export const newTodoDay = (newTodo) => ({
  type: ADD_TODO_DAY,
  payload: { newTodo },
});

export const addTodoDay = (formData) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(newTodoDay(data), window.location.assign("/")).catch((err) => console.log(err)));
};


export const todoDayDel = (id) => ({
  type: DEL_TODO_DAY,
  payload: { id },
});

export const deleteTodoDay = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.ok && dispatch(todoDayDel(id), window.location.assign("/")))
    .catch((err) => console.log(err));
};

export const todoDayEdit = (newTodo) => ({
  type: EDIT_TODO_DAY,
  payload: { newTodo },
});

export const editStatusTodoDay = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => dispatch(todoDayEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodoDay= (id, inputValue) => async (dispatch) => {
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
      dispatch(todoDayEdit(data));
    })
    .catch((err) => console.log(err));
};


export const deleteAllTodoDay = () => ({
  type: DEL_ALL_TODO_DAY,
  payload: [],
});