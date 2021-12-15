import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoMonth } from "../../redux/actions/todoMonth.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoMonth() {
  const todos = useSelector((state) => state.todoMonth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoMonth(3))
    }, [])
   
  //   console.log(todos);
  // console.log('tut');

    // let text = ['lol', 'kek', 'cheburek']
    return (
      <> {todos.map(el => 
      <>
        <ToDo todo={el} period_id={4}/>
     </>
      )}
    

      </> 
    );
  }
  