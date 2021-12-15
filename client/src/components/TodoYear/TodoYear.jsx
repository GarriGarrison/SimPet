import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoYear } from "../../redux/actions/todoYear.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoYear() {
  // const [isToDo, setIsToDo] = useState(true)
  const todos = useSelector((state) => state.todoYear)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoYear(3))
    }, [])
    console.log(todos.lenght);
    // if(todos.lenght) {setIsToDo(true)} else {setIsToDo(false)}
    // let text = ['lol', 'kek', 'cheburek']
    return (
      <> 
      {/* {isToDo? <> */}
            {todos.map(el => 
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
  
