import { useState } from "react"
import useInput from '../../hooks/inputHook'
import { useDispatch } from 'react-redux'
import { comfortDone, communDone, eatDone, fiveDone, medicinDone, sixDone } from "../../redux/actions/sim.action"


export function ToDo({todo, period}) {
  if (todo) console.log("netu");
  
  
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
    const action = inputs[0].getValue()
    const time = inputs[1].getValue()
    const date = inputs[2].getValue()
    setValue(action)
    setDay(date)
    setTime(time)
 

    // dispatch(getNum(num.num))
    setEditClick(false) 
}

    return (
      <> 
      {editClik?
        <>
      <form onSubmit={handleEdit}>
      {todo.title  === 'Feed' &&  <span>Покормить: </span> }
      {inputs.map(el=> <input key={el.id} type={el.attrs.type} value={el.attrs.value} onChange={el.handleText} name={el.attrs.name}/>  )}
        <button type = "submit">
          Ok
        </button>
      </form>
        
    
        </>
        : 
        <> 
          <div class="container">
          <div id={todo.id} class="main-container">
            {todo.title  === 'Feed' &&  <span>Покормить: </span> }
          <span >{value}</span>
          { period === "week" && <span> {day}</span> }
          { period === "month" && <span> {day}</span> }
          { period === "year" && <span> {day}</span> }


          <span> {time}</span>

                <button onClick={handleStatus} data-category={todo.title || 'eat'} class="done">✔</button>
                <button onClick={handleEditClick} class="edit">✏️</button>
            
          </div>
          </div>
        </> }

         
      </> 
    );
  }
  
 
