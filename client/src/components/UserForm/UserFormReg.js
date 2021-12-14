

import { useEffect, useState } from "react"
import classes from "./form.module.css";
import { signUp ,signIn, checkAuth } from "../../redux/actions/user.actions"
import { useSelector, useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo/Logo.jsx"

const UserFormReg = () => {
  const navigate = useNavigate()

  let location = useLocation()

  useEffect(() => {
    console.log("ПРОВЕРЯЕМ НА СЕРВАКЕ");
    dispatch(checkAuth());
  },[]);

  let user = useSelector(state => state.user);
  

  useEffect(() => {
    console.log(user,'registrationsssssss');
    console.log('проверка на user');
    if(user.name){
      navigate('/')
    }
  },[user])


  const dispatch = useDispatch()

  const [userSign, setUserSign] = useState({
    email: '',
    password: '',
    userName: ''
  })


  const changeHandler = (e) => {
    setUserSign(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandlerUp = (e) => {
    e.preventDefault()
    let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      console.log(payload);
      dispatch(signUp(payload))
      navigate('/animal_reg')
    }
  }
  const submitHandlerIn = (e) => {
    e.preventDefault()
    let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signIn({email:payload.email,password:payload.password})) 
    }
  }  

    return (
      <div className={classes.container}>
        <form onSubmit={submitHandlerUp} className={classes.form}>
          <Logo/>
          <input onChange={changeHandler} type="text" placeholder="имя пользователя" name="name" />
          <input onChange={changeHandler} type="email" placeholder="электронная почта" name="email" />
          <input onChange={changeHandler} type="password" placeholder="пароль" name="password" />
          <button type="submit">Регистрация</button>
          <p className={classes.message}>
            Есть учетная запись? <Link to={'/log'}>Войти</Link>
          </p>
        </form>
      </div>
    );
    }

export default UserFormReg;
