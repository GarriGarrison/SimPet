
import { useState } from "react"
import classes from "./form.module.css";
import { signUp ,signIn } from "../../redux/actions/user.actions"
import { useSelector, useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import Logo from "./Logo/Logo.jsx"

const UserForm = () => {
  let location = useLocation()
  let user = useSelector(state => state.user);

  const [isSignUp,setSignUp] = useState(false)

  
  
  if(user){
    // location.push('/')
  }


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


  function toggleSignUp(){
    setSignUp(!isSignUp)
  }
  

  if (isSignUp) {
    return (
      <div className={classes.container}>
        <form onSubmit={submitHandlerUp} className={classes.form}>
          <Logo/>
          <input onChange={changeHandler} type="text" placeholder="имя пользователя" name="name" />
          <input onChange={changeHandler} type="email" placeholder="электронная почта" name="email" />
          <input onChange={changeHandler} type="password" placeholder="пароль" name="password" />
          <button type="submit">Регистрация</button>
          <p className={classes.message}>
            Есть учетная запись? <a href="#" onClick={toggleSignUp}>Войти</a>
          </p>
        </form>
      </div>
    );
  } else
    return (
      <div className={classes.container}>
        <form onSubmit={submitHandlerIn} form className={classes.form}>
          <Logo/>
          <input onChange={changeHandler} type="text" placeholder="электронная почта" name="email" />
          <input onChange={changeHandler} type="password" placeholder="пароль" name="password" />
          <button type="submit">Войти</button>
          <p className={classes.message}>
            Нет учетной записи <a href="#" onClick={toggleSignUp}>Создать учетную запись</a>
          </p>
        </form>
      </div>
    );
};

export default UserForm;
