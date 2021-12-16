import { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoMonth } from "../../redux/actions/todoMonth.action";
import  ToDo  from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'

export function TodoMonth({anId}) {
  const todos = useSelector((state) => state.todoMonth.all)
  const dispatch = useDispatch()


  const [todosLocal,setTodos] = useState([])
  useEffect(() => {
    if(todos) {
      setTodos(todos)
    }
  },[todos])


  const [animalID, setID] = useState(anId)

  useEffect(() => {
    if(anId){
      setID(animalID)
      // dispatch(getTodoMonth(animalID))
    }
  },[anId])
   

    return (
      <div className={classes.container}> {todosLocal.map(el => 
      <>
        <ToDo todo={el} period_id={4} anId={animalID}/>
     </>
      )}
    

      </div> 
    );
  }
  