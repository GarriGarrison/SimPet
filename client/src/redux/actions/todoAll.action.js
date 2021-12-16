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
  await fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => dispatch(newTodo(data)))
    .catch((err) => console.log(err))
};


export const todoDel = (id) => ({
  type: DEL_TODO,
  payload:  id ,
});

export const deleteTodo = (id) => async (dispatch) => {
  console.log(id);
  fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then((response) => response.ok && dispatch(todoDel(id)))
    .catch((err) => console.log(err));
};

export const todoEdit = (newTodo) => ({
  type: EDIT_TODO,
  payload: newTodo ,
});

export const editStatusTodo = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "PUT",
    credentials: "include",
  })
    // .then((response) => response.json())
    // .then((data) => dispatch(todoEdit(data)))
    .catch((err) => console.log(err));
};

export const editTodo = (todo) => async (dispatch) => {
  let {id} = todo
  console.log("Форма, прилетающая в action:",todo);
  fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Ответ с ручки PATCH всех постов(редактирование):", data);
      dispatch(todoEdit(data));
    })
    .catch((err) => console.log(err));
};
