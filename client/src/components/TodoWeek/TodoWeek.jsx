import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoWeek } from "../../redux/actions/todoWeek.action";
import  ToDo  from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'

export function TodoWeek({anId}) {
  const todos = useSelector((state) => state.todoWeek.all)
  const dispatch = useDispatch()
  
  const [todosLocal, setTodos] = useState([])

  useEffect(() => {
    if(todos) {
      setTodos(todos)
    }
  },[todos])

  const [animalID, setID] = useState(anId)

  useEffect(() => {
    if(anId){
      setID(animalID)
      dispatch(getTodoWeek(animalID))
    }
  },[anId])
  
    return (
      <div className={classes.container}> {todosLocal.map(el => 
      <>
        <ToDo todo={el} period_id={3} anId={animalID}/>
     </>
      )}
    

      </div> 
    );
  }
  
