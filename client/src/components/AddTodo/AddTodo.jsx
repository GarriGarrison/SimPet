import React,{useEffect, useState} from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import { addTodo } from '../../redux/actions/todoAll.action';
import { checkAuth } from "../../redux/actions/user.actions"
import Logo from '../UserForm/Logo/Logo';
import classes from './addtodo.module.css'


const AddTodo = ({anId, hideAddTodo}) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   dispatch(checkAuth())
  // },[])



    const [animal_id, setAnimal_id] = useState(anId)
    console.log(animal_id,anId);

    useEffect(() => {
      setAnimal_id(anId)
    },[anId])


  const [todo, setTodo] = useState({
    animal_id,
    periodNum: 2,
    categoryNum: 1,
    date: '',
    time: '',
    action: '',
    status: false
  })

  const changeHandler = (e) => {
    setTodo(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandlerIn = (e) => {
    e.preventDefault()
    console.log(e.target);
    let newTodo = Object.entries(todo)
    if (newTodo.length) {
      newTodo = Object.fromEntries(newTodo)    
      dispatch(addTodo(newTodo)) 
      // navigate('/')
      hideAddTodo(false)
    }
  }  

  


  return (
    <>
     <div className={classes.container}>
    <div className={classes.logo}><Logo/></div>
       <form onSubmit={submitHandlerIn}  id="form" className={classes.form}>
       
           <select onChange={changeHandler} placeholder="Выбери категорию" name="categoryNum" form="form">
       
             <option value="1">Еда</option>
             <option value="2">Гигиена</option>
             <option value="3">Медицина</option>
             <option value="4">Общение</option>
             <option value="5">Уход</option>
             <option value="6">Событие</option>
             </select>
             <input onChange={changeHandler} type="text" placeholder="Что именно будем делать?" name="action" />
             <input onChange={changeHandler} type="date" placeholder="Дата" name="date" />
             <input onChange={changeHandler} type="time" placeholder="Время" name="time" />
               <p className={classes.message}>
                Когда нужно сделать?
               </p>
             <select onChange={changeHandler} name="periodNum" form="form">
             <option value="2">Ближайшее время</option>
             <option value="3">Ближайшую неделю</option>
             <option value="4">В течении месяца</option>
             <option value="5">в течении года</option>
             </select>
       
       
             <button type="submit">go</button>
             
       
           </form>
     </div>
    </>
  );
};

export default AddTodo;
