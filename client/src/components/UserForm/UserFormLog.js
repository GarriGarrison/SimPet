
import { useEffect, useState } from "react"
import classes from "./form.module.css";
import { signUp ,signIn } from "../../redux/actions/user.actions"
import { useSelector, useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo/Logo.jsx"

const UserFormLog = () => {
  const navigate = useNavigate()
  let user = useSelector(state => state.user);
  
  useEffect(() => {
    if(user.name){
        navigate('/')
      }
    console.log("проверка");
  }, [user]);
  
  
  // if(user){
  //   navigate('/')
  // }


  const dispatch = useDispatch()

  const [userSign, setUserSign] = useState({
    email: '',
    password: '',
    userName: ''
  })


  const changeHandler = (e) => {
    setUserSign(prev => ({...prev, [e.target.name]: e.target.value}))
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
        <form onSubmit={submitHandlerIn} form className={classes.form}>
          <Logo/>
          <input onChange={changeHandler} type="text" placeholder="электронная почта" name="email" />
          <input onChange={changeHandler} type="password" placeholder="пароль" name="password" />
          <button type="submit">Войти</button>
          <p className={classes.message}>
            Нет учетной записи <Link to={'/reg'}>Создать учетную запись</Link>
          </p>
        </form>
      </div>
    )
};

export default UserFormLog;
