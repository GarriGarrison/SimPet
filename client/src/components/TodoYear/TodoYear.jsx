import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoYear } from "../../redux/actions/todoYear.action";
import { ToDo } from "../ToDo/ToDo";
import classes from '../ToDo/todo.module.css'

export function TodoYear({anId}) {

  const todos = useSelector((state) => state.todoYear.all)
  const dispatch = useDispatch()

  const [todosLocal,setTodos] = useState([])
  useEffect(() => {
    if(todos) {
      setTodos(todos)
    }
  },[todos])


  useEffect(() => {
    dispatch(getTodoYear(anId))
    }, [anId])

    return (
      <div className={classes.container}> 
      {/* {isToDo? <> */}
            {todosLocal.map(el => 
      <>
        <ToDo key={el.id} anId={anId} todo={el} period_id={5}/>
     </>
      )}
      {/* </>
      :
      <>
      Тут пока ничего нет
      </>
    
      } */}
      </div> 
    );
  }
  
