import { useEffect, useState, memo } from "react"
import useInput from '../../hooks/inputHook'
import { useDispatch } from 'react-redux'
import { careDone, contactDone,  feedDone, hygeineDone, medicinDone, partyDone, setStatus } from "../../redux/actions/sim.action"

import classes from './todo.module.css'


import { deleteTodo, editStatusTodo, editTodo } from "../../redux/actions/todoAll.action";


function ToDo({todo, period_id, anId}) {
  console.log(todo);
  const dispatch = useDispatch()
  
  if (!todo) console.log("Тудушка не пришла");
  const [animal_id, setAnimal_id] = useState(anId)
  const [todoLoc, setTodo] = useState(todo)
  const [editClik, setEditClick] = useState(false)

  const inputs = [
    useInput({ type:'text', id: 'body', defaultValue: todoLoc.action }),
    useInput({ type:'time', id: 'time', defaultValue: todoLoc.time }),
    useInput({ type:'date', id: 'date', defaultValue: todoLoc.date }),
  ]
  const handleEditClick = async (event) => {
    event.preventDefault()
    setEditClick(true)    
  }
  const handleStatus = async (category,categoryNum) => {
     dispatch(setStatus(false, true))

    dispatch(editStatusTodo(todoLoc.id))
    console.log(category);
    let switc = null
    category?switc=category:switc=categoryNum
    switch (switc) {

      case 'Medical'||3:
           dispatch(medicinDone())
           break
      
      
      
      case 'Feed'||1:
           dispatch(feedDone())
           break
      
      case 'Contact'||4:
          dispatch(contactDone())
          break
      
      case 'Hygiene'||2:
           dispatch(hygeineDone())
           break
      
       case 'Care'||5:
           dispatch(careDone())
           break
      
      case 'Party'||6:
           dispatch(partyDone())
           break
      
      default: 
         console.log('err');
         break
    }
  }

  const handleEdit = async (event) => {
    event.preventDefault()
    let categoryNum = 0
    todoLoc.title == "Feed"? categoryNum = 1 : todoLoc.title == "Hygiene"? categoryNum=2:todoLoc.title == "Contact"?categoryNum = 4:todoLoc.title == "Care"? categoryNum = 5:categoryNum = 6
    
    const form ={
      action: inputs[0].getValue(),
      time: inputs[1].getValue(),
      date: inputs[2].getValue(),
      status: false,
      animal_id,
      id: todoLoc.id,
      periodNum: period_id,
      categoryNum,
      title: todoLoc.title
    }
    console.log("Форма редактирования:",form);
    dispatch(editTodo(form))
    setEditClick(false)
  }

  const handleDelClick = async (event) => {
    event.preventDefault()
    console.log(todoLoc.id, typeof todoLoc.id);
    dispatch(deleteTodo(todoLoc.id))
}

    return (
      <> 
      {editClik?
        <>
      <form onSubmit={handleEdit} className={classes.form}>
      {todoLoc.title  === 'Feed' &&  <span>Покормить: </span> }
      {inputs.map(el=> <input key={el.id} type={el.attrs.type} value={el.attrs.value} onChange={el.handleText} name={el.attrs.name}/>  )}
        <button type = "submit">
          Ok
        </button>
      </form>
        
    
        </>
        : 
        <> 
          
          <div id={todo.id} className={classes.list}>
            {todoLoc.title  === 'Feed' &&  <span>Покормить: </span> }
          <span >{todo.action}</span>
          { period_id == 3 && <span> {todo.day}</span> }
          { period_id == 4 && <span> {todo.day}</span> }
          { period_id == 5 && <span> {todo.day}</span> }


          <span > {todo.time}</span>


                <div>
                  <button type="button" onClick={()=>{handleStatus(todo.title, todo.categoryNum)}} class="done">✔</button>
                  <button type="button" onClick={handleEditClick}>✏️</button>
                  <button type="button" onClick={handleDelClick}>x</button>
                </div>

            
          </div>
          
        </> }

         
      </> 
    );
  }
  
 
  export default memo(ToDo)
