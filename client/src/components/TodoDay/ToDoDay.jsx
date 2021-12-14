import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoDay() {
 const todos = useSelector((state) => state.todoDay)
 const animal = useSelector((state) => state.animal)

 const {id} = useSelector(state=>state.animal[0])
 

  const dispatch = useDispatch()

  useEffect(() => {
    if(id){
      console.log(id);
    dispatch(getTodoDay(id))}
    }, [id])
   
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
  