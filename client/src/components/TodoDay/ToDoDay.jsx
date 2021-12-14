import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoDay() {
 const todos = useSelector((state) => state.todoDay)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodoDay(3))
    }, [])
   
    console.log(todos);

    return (
      <> {todos.map(el => 
      <>
        <ToDo todo={el} period_id={2}/>
     </>
      )}
    

      </> 
    );
  }
  