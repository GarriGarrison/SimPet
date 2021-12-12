import { useState } from "react"
import useInput from '../../hooks/inputHook'
import { useDispatch } from 'react-redux'
import { comfortDone, communDone, eatDone, fiveDone, medicinDone, sixDone } from "../../redux/actions/sim.action"


export function ToDo({todo}) {
  
  const [value, setValue ] = useState(todo.body ?? ' ')
  const [day, setDay ] = useState(todo.date ?? ' ')
  const [time, setTime ] = useState(todo.time ?? ' ')

  const [editClik, setEditClick] = useState(false)

  const dispatch = useDispatch()

  const inputs = [
    useInput({ type:'text', id: 'body', defaultValue: todo.body }),
    useInput({ type:'text', id: 'time', defaultValue: todo.date }),
    useInput({ type:'text', id: 'date', defaultValue: todo.time }),
  ]
  const handleEditClick = async (event) => {
    event.preventDefault()
    setEditClick(true)    
  }
  const handleStatus = async (event) => {
    event.preventDefault()
    let {category} = event.target.dataset
    
    switch (category) {

      case 'medicine':{
          return dispatch(medicinDone())
      }
      
      case 'eat':{
          return dispatch(eatDone())
      }

      case 'communication':{
          return dispatch(communDone())
      }
      
      case 'comfort':{
          return dispatch(comfortDone())
      }

       case 'five':{
          return dispatch(fiveDone())
      }
      
      case 'six':{
          return dispatch(sixDone())
      }
      
      
      default: {
          return console.log('err');
      }
    }
     
  }


  const handleEdit = async (event) => {
    event.preventDefault()
    const body = inputs[0].getValue()
    const time = inputs[1].getValue()
    const date = inputs[2].getValue()
    setValue(body)
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
      {inputs.map(el=> <input type={el.attrs.type} value={el.attrs.value} onChange={el.handleText} name={el.attrs.name}/>  )}
        <button type = "submit">
          Ok
        </button>
      </form>
        
    
        </>
        : 
        <> 
          <div class="container">
          <div class="main-container">
          <span >{value}</span>
          <span> {day}</span>
          <span> {time}</span>

                <button onClick={handleStatus} data-category={todo.category || 'eat'} class="done">✔</button>
                <button onClick={handleEditClick} class="edit">✏️</button>
            
          </div>
          </div>
        </> }

         
      </> 
    );
  }
  
 
