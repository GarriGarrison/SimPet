import React,{useEffect, useState} from 'react';
import { useDispatch } from "react-redux"
import { checkAuth } from "../../redux/actions/user.actions"
import AddTodo from '../AddTodo/AddTodo';



const Main = ({anId}) => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])


  const [click, setClick] = useState(true)

  const clickHandler = (e) => {
    e.preventDefault()
    setClick(false)
  }

  return (
    <>
   
    <br/>
    {click?
    <button onClick={clickHandler}>+</button>

    :
        
        <AddTodo anId={anId}/>
      }
    </>
  );
};

export default Main;
