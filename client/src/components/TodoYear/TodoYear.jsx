import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoYear } from "../../redux/actions/todoYear.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoYear({anId}) {

  const todos = useSelector((state) => state.todoYear)
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
      <> 
      {/* {isToDo? <> */}
            {todosLocal.map(el => 
      <>
        <ToDo key={el.id} todo={el} period_id={5}/>
     </>
      )}
      {/* </>
      :
      <>
      Тут пока ничего нет
      </>
    
      } */}
      </> 
    );
  }
  
