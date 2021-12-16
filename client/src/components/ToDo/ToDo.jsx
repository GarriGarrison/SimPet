import { useEffect, useState, memo } from "react"
import useInput from '../../hooks/inputHook'
import { useDispatch } from 'react-redux'
import { careDone, contactDone,  feedDone, hygeineDone, medicinDone, partyDone } from "../../redux/actions/sim.action"

import classes from './todo.module.css'


import { deleteTodo, editStatusTodo, editTodo } from "../../redux/actions/todoAll.action";
import { getTodoMonth } from "../../redux/actions/todoMonth.action"
import { getTodoWeek } from "../../redux/actions/todoWeek.action"
import { getTodoYear } from "../../redux/actions/todoYear.action"



function ToDo({todo, period_id, anId}) {
  console.log(todo);
  const dispatch = useDispatch()
  
  if (!todo) console.log("Тудушка не пришла");
  const [animal_id, setAnimal_id] = useState(anId)
  const [todoLoc, setTodo] = useState(todo)
 const [value, setValue ] = useState(todoLoc.action)
  const [day, setDay ] = useState(todoLoc.date)
  const [time, setTime ] = useState(todoLoc.time)
  const [editClik, setEditClick] = useState(false)
  useEffect(() =>{
    setTodo(todo)
    setValue(todoLoc.action)
    setDay(todoLoc.date)
    setTime(todoLoc.time)

    // switch (period_id) {

    //       case 2:{
    //           return dispatch(getTodoMonth(animal_id))
    //       }
          
    //       case 3:{
    //           return dispatch(getTodoWeek(animal_id))
    //       }
    
    //       case 4:{
    //           return dispatch(getTodoMonth(animal_id))
    //       }
          
    //       case 5:{
    //           return dispatch(getTodoYear(animal_id))
    //       }
    //       default: {
    //           return console.log('err');
    //       }
    //     }

    
  },[todo])
  
  
 



  const inputs = [
    useInput({ type:'text', id: 'body', defaultValue: todoLoc.action }),
    useInput({ type:'text', id: 'date', defaultValue: todoLoc.time }),
    useInput({ type:'text', id: 'time', defaultValue: todoLoc.date }),
  ]
  const handleEditClick = async (event) => {
    event.preventDefault()
    setEditClick(true)    
  }
  const handleStatus = async (event) => {
    event.preventDefault()
    let {category} = event.target.dataset


    dispatch(editStatusTodo(todoLoc.id))
    console.log(category);

    switch (category) {

      case 'Medical':
           dispatch(medicinDone())
           break
      
      
      case 'Feed':
           dispatch(feedDone())
           break
      

      case 'Contact':
          dispatch(contactDone())
          break
      
      case 'Hygiene':
           dispatch(hygeineDone())
           break
      

       case 'Care':
           dispatch(careDone())
           break
      
      
      case 'Party':
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
      categoryNum
    }
    console.log("Форма редактирования:",form);
    dispatch(editTodo(form))

    
    setEditClick(false)
    // setTimeout(() => {
      switch (period_id) {

        case 2:{
            return dispatch(getTodoMonth(animal_id))
        }
        
        case 3:{
            return dispatch(getTodoWeek(animal_id))
        }
  
        case 4:{
            return dispatch(getTodoMonth(animal_id))
        }
        
        case 5:{
            return dispatch(getTodoYear(animal_id))
        }
        default: {
            return console.log('err');
        }
      }

   
  //   
  // // }, 100);
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
          
          <div id={todo.id} class={classes.list}>
            {todoLoc.title  === 'Feed' &&  <span>Покормить: </span> }
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

         
      </> 
    );
  }
  
 
  export default memo(ToDo)
