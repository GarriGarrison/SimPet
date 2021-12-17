import { useEffect,useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoAll } from "../../redux/actions/todoAll.action";
import  ToDo  from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'
import {useLocation, useSearchParams} from 'react-router-dom'


function ToDoList() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [period, setPeriod] = useState(searchParams.get("period"))
  const [animalID, setID] = useState(null)
  const todos = useSelector((state) => state.todoAll.value)
  const {currAnimal} = useSelector(state => state.animal)
  const dispatch = useDispatch()

  let location = useLocation();

  useEffect(() => {
    console.log('check');
    setPeriod(searchParams.get("period"))
  }, [location]);

  useEffect(() => {
    if(currAnimal){
      setID(currAnimal.id)
    }
  },[currAnimal])

  useEffect(() => {
    if(animalID && period) {
      dispatch(getTodoAll(period, animalID))
    }
  }, [animalID, period])

  return ( 
  <>
    {todos?.length && <div className={classes.container}>
      {todos.map(el => <ToDo key={el.id} todo={el} anId={animalID}/>)}
    </div> }
  </>  
  );
}
  

  export default memo(ToDoList)
