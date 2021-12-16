import { GET_TODO, ADD_TODO, DEL_TODO, EDIT_TODO, EDIT_STATUS_TODO} from '../types/todo.types'

export const getAll = (todo) => ({
    type: GET_TODO,
    payload: todo 
})

export const getTodoAll = (period, animalId) => async (dispatch) =>{
  console.log(period, animalId);
  try {
    const response = await fetch(`http://localhost:3001/api/v1/period/${period}/${animalId}`, {
      head: {credentials: 'include'},
     })
     const result = await response.json()
     const todo = result.filter(el => el.status == false)
    //  console.log(result, '!!!');
     dispatch(getAll(todo))
  } catch(err) {
    console.log(err);
  }
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

export const todoEditStatus = (id) => ({
  type: EDIT_STATUS_TODO,
  payload: id ,
});

export const editStatusTodo = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/todos/${id}`, {
    method: "PUT",
    credentials: "include",
  })
  .then(()=> { console.log('tut');
    dispatch(todoEditStatus(id))})
    .catch((err) => console.log(err));
};

export const editTodo = (todo) => async (dispatch) => {
  let {id} = todo
  let {title} = todo
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
      data.title = title
      console.log("Ответ с ручки PATCH всех постов(редактирование):", data);
      dispatch(todoEdit(data));
    })
    .catch((err) => console.log(err));
};
