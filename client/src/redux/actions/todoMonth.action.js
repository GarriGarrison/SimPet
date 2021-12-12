import { GET_TODO_MONTH, ADD_TODO_MONTH, DEL_TODO_MONTH, EDIT_TODO_MONTH, DEL_ALL_TODO_MONTH } from '../types/todo.types'

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

export const newTodoMonth = (newTodo) => ({
  type: ADD_TODO_MONTH,
  payload: { newTodo },
});

export const addTodoMonth = (formData) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(addTodoMonth(data), window.location.assign("/")).catch((err) => console.log(err)));
};


export const todoMonthDel = (id) => ({
  type: DEL_TODO_MONTH,
  payload: { id },
});

export const deleteTodoMonth = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.ok && dispatch(todoMonthDel(id), window.location.assign("/")))
    .catch((err) => console.log(err));
};

export const todoMonthEdit = (newTodo) => ({
  type: EDIT_TODO_MONTH,
  payload: { newTodo },
});

export const editStatusTodoMonth = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => dispatch(todoMonthEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodoMonth= (id, inputValue) => async (dispatch) => {
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
      dispatch(todoMonthEdit(data));
    })
    .catch((err) => console.log(err));
};

export const deleteAllTodoMonth = () => ({
  type: DEL_ALL_TODO_MONTH,
  payload: [],
});
