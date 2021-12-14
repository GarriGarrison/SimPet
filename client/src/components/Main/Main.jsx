import React,{useEffect, useState} from 'react';
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { checkAuth } from "../../redux/actions/user.actions"
import AddTodo from '../AddTodo/AddTodo';



const Main = ({anId}) => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])


  const [click, setClick] = useState(true)

console.log(click);
  const clickHandler = (e) => {
    console.log('tut');
    e.preventDefault()
    setClick(false)
  }

  return (
    <>
    <br/>
    <br/>
    <br/>
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
