import { useEffect,useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import  ToDo  from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'


function TodoDay({anId}) {  
  const todos = useSelector((state) => state.todoDay.all)
  const dispatch = useDispatch()

  const [todosLocal,setTodos] = useState([])
  useEffect(() => {
    if(todos) {
      setTodos(todos)
      // dispatch(getTodoDay(animalID))
    }
  },[todos])
  
  
  const [animalID, setID] = useState(anId)

    useEffect(() => {
      if(anId){
        setID(animalID)
        dispatch(getTodoDay(animalID))
      }
    },[anId])

    return (
      <div className={classes.container}> {todosLocal.map(el => 
        <> 
        <ToDo todo={el} period_id={2} anId={animalID}/>
     </>
      )}
    

      </div> 
    );
  }
  

  export default memo(TodoDay)