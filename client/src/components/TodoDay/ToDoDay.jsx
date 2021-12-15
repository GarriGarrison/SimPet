import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import { ToDo } from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'


export function TodoDay({anId}) {  

  console.log(anId, 'day');
  const todos = useSelector((state) => state.todoDay.all)
  const dispatch = useDispatch()
  
  const [todosLocal,setTodos] = useState([])
    useEffect(() => {
      if(todos) {
        setTodos(todos)
      }
    },[todos])


    useEffect(() => {

      dispatch(getTodoDay(anId))

    },[anId])
    
   
    console.log(todos);

    return (
      <div className={classes.container}> {todosLocal.map(el => 
        <> 
        <ToDo todo={el} period_id={2}/>
         {/* <button onClick={handleStatus} id={el.id} data-category={el.title} class="done">✔</button> */}
     </>
      )}
    

      </div> 
    );
  }
  