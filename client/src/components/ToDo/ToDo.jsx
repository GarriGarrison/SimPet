import { useState } from "react"
import useInput from '../../hooks/inputHook'
import { useDispatch } from 'react-redux'
import { comfortDone, communDone, eatDone, fiveDone, medicinDone, sixDone } from "../../redux/actions/sim.action"

import classes from './todo.module.css'

import { deleteTodo, editTodo } from "../../redux/actions/todoAll.action";



export function ToDo({todo, period_id}) {
  if (!todo) console.log("netu");
  const [animal_id, setAnimal_id] = useState(3)
  
  
  const [value, setValue ] = useState(todo.action ?? ' ')
  const [day, setDay ] = useState(todo.date ?? ' ')
  const [time, setTime ] = useState(todo.time ?? ' ')

  const [editClik, setEditClick] = useState(false)

  const dispatch = useDispatch()

  const inputs = [
    useInput({ type:'text', id: 'body', defaultValue: todo.action }),
    useInput({ type:'text', id: 'date', defaultValue: todo.time }),
    useInput({ type:'text', id: 'time', defaultValue: todo.date }),
  ]
  const handleEditClick = async (event) => {
    event.preventDefault()
    setEditClick(true)    
  }
  const handleStatus = async (event) => {
    event.preventDefault()
    let {category} = event.target.dataset
    let categoryNum = 0
    todo.title == "Feed"? categoryNum = 1 : todo.title == "Hygiene"? categoryNum=2:todo.title == "Contact"?categoryNum = 4:todo.title == "Care"? categoryNum = 5:categoryNum = 6
    
    const form ={
      action: todo.action,
      time: todo.time,
      date: todo.date,
      status: true,
      animal_id,
      id: todo.id,
      periodNum: period_id,
      categoryNum
    }
    console.log(form);
    dispatch(editTodo(form))



    
    switch (category) {

      case 'Medical':{
          return dispatch(medicinDone())
      }
      
      case 'Feed':{
          return dispatch(eatDone())
      }

      case 'Contact':{
          return dispatch(communDone())
      }
      
      case 'Hygiene':{
          return dispatch(comfortDone())
      }

       case 'Care':{
          return dispatch(fiveDone())
      }
      
      case 'Party':{
          return dispatch(sixDone())
      }
      
      
      default: {
          return console.log('err');
      }
    }
     
  }

  const handleEdit = async (event) => {
    event.preventDefault()
    let categoryNum = 0
    todo.title == "Feed"? categoryNum = 1 : todo.title == "Hygiene"? categoryNum=2:todo.title == "Contact"?categoryNum = 4:todo.title == "Care"? categoryNum = 5:categoryNum = 6
    
    const form ={
      action: inputs[0].getValue(),
      time: inputs[1].getValue(),
      date: inputs[2].getValue(),
      status: false,
      animal_id,
      id: todo.id,
      periodNum: period_id,
      categoryNum
    }
    console.log(form);
    dispatch(editTodo(form))
    setEditClick(false)
}

  const handleDelClick = async (event) => {
    event.preventDefault()
    console.log(todo.id, typeof todo.id);
    dispatch(deleteTodo(todo.id))

}

    return (
      <div className={classes.container}> 
      {editClik?
        <>
      <form onSubmit={handleEdit} className={classes.form}>
      {todo.title  === 'Feed' &&  <span>Покормить: </span> }
      {inputs.map(el=> <input key={el.id} type={el.attrs.type} value={el.attrs.value} onChange={el.handleText} name={el.attrs.name}/>  )}
        <button type = "submit">
          Ok
        </button>
      </form>
        
    
        </>
        : 
        <> 
          
          <div id={todo.id} class={classes.list}>
            {todo.title  === 'Feed' &&  <span>Покормить: </span> }
          <span >{value}</span>
          { period_id == 3 && <span> {day}</span> }
          { period_id == 4 && <span> {day}</span> }
          { period_id == 5 && <span> {day}</span> }


          <span > {time}</span>


                <div>
                  <button onClick={handleStatus} data-category={todo.title} class="done">✔</button>
                  <button onClick={handleEditClick}>✏️</button>
                  <button onClick={handleDelClick}>x</button>
                </div>

            
          </div>
          
        </> }

         
      </div> 
    );
  }
  
 
