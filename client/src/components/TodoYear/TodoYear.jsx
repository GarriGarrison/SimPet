import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoYear } from "../../redux/actions/todoYear.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoYear() {
  // const [isToDo, setIsToDo] = useState(true)
  const todos = useSelector((state) => state.todoYear)
  const animal = useSelector((state) => state.animal)
 
  const {id} = useSelector(state=>state.animal[0])
  
 
   const dispatch = useDispatch()
 
   useEffect(() => {
     if(id){
       console.log(id);
     dispatch(getTodoYear(id))}
     }, [id])
   
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
  
