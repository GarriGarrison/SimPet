import { GET_TODO, ADD_TODO, DEL_TODO, EDIT_TODO,} from '../types/todo.types'

export const getAll = (todo) => ({
    type: GET_TODO,
    payload: todo 
})

export const getTodoAll = () => async (dispatch) =>{
    await fetch(process.env.REACT_APP_API_CART_URL, {
      head: {credentials: 'include'},
     })
     .then(response => response.json())
     .then(todo => {
       dispatch(getAll(todo))
     })
}


export const newTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo ,
});

export const addTodo = (formData) => async (dispatch) => {
  const id = formData.animal_id
  console.log(formData);
  fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify(formData,)
  })
    .then((response) => response.json())
    .then((data) => dispatch( console.log(data)).catch((err) => console.log(err)));
};


export const todoDel = (id) => ({
  type: DEL_TODO,
  payload:  id ,
});

export const deleteTodo = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.ok && dispatch(todoDel(id), window.location.assign("/")))
    .catch((err) => console.log(err));
};

export const todoEdit = (newTodo) => ({
  type: EDIT_TODO,
  payload: newTodo ,
});

export const editStatusTodo = (id) => async (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => dispatch(todoEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodo= (id, inputValue) => async (dispatch) => {
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
      dispatch(todoEdit(data));
    })
    .catch((err) => console.log(err));
};