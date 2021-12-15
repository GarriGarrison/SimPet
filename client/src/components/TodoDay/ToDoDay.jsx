import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import { ToDo } from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'


export function TodoDay({anId}) {  
  const todos = useSelector((state) => state.todoDay.all)
  const dispatch = useDispatch()
  // dispatch(getTodoDay(anId))
  
  const [todosLocal,setTodos] = useState([])
    useEffect(() => {
      if(todos) {
        setTodos(todos)
      }
    },[todosLocal])


    useEffect(() => {

      dispatch(getTodoDay(anId))

    },[anId])

    return (
      <div className={classes.container}> {todosLocal.map(el => 
        <> 
        <ToDo todo={el} period_id={2} anId={anId}/>
         {/* <button onClick={handleStatus} id={el.id} data-category={el.title} class="done">✔</button> */}
     </>
      )}
    

      </div> 
    );
  }
  