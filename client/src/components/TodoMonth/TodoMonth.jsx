import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoMonth } from "../../redux/actions/todoMonth.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoMonth() {
  const todos = useSelector((state) => state.todoMonth)
  const animal = useSelector((state) => state.animal)
 
  const {id} = useSelector(state=>state.animal[0])
  
 
   const dispatch = useDispatch()
 
   useEffect(() => {
     if(id){
       console.log(id);
     dispatch(getTodoMonth(id))}
     }, [id])
   
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
  