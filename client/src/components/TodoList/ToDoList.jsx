import { useEffect,useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoAll } from "../../redux/actions/todoAll.action";
import  ToDo  from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'
import {useLocation, useSearchParams} from 'react-router-dom'


function ToDoList({anId}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [period, setPeriod] = useState(searchParams.get("period"))
  const [animalID, setID] = useState(anId)
  const todos = useSelector((state) => state.todoAll.value)
  const dispatch = useDispatch()

  let location = useLocation();

  useEffect(() => {
    setPeriod(searchParams.get("period"))
  }, [location]);

  useEffect(() => {
    if(anId){
      setID(anId)
    }
  },[anId])

  useEffect(() => {
    if(animalID && period) {
      dispatch(getTodoAll(period, animalID))
    }
  }, [animalID, period])

  return (
    <div className={classes.container}>
      {todos.map(el => <ToDo key={el.id} todo={el} anId={animalID}/>)}
    </div> 
  );
}
  

  export default memo(ToDoList)
