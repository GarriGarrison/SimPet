import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoWeek } from "../../redux/actions/todoWeek.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoWeek() {
  const todos = useSelector((state) => state.todoWeek)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoWeek(3))
    }, [])
   
  //   console.log(todos);
  // console.log('tut');

    // let text = ['lol', 'kek', 'cheburek']
    return (
      <> {todos.map(el => 
      <>
        <ToDo todo={el} period_id={3}/>
     </>
      )}
    

      </> 
    );
  }
  
