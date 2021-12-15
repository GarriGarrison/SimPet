
import { useEffect, useState } from "react"
import classes from './animal.module.css'
import Logo from '../UserForm/Logo/Logo'

import { useSelector, useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addAnimal } from "../../redux/actions/animal.action";
import { checkAuth } from "../../redux/actions/user.actions";

const AnimalForm = ({redirect}) => {
  let user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    console.log("проверка");
  }, []);
  const navigate = useNavigate()



 
  
  if(!user){
    navigate('/')
  }


  const [userSign, setUserSign] = useState({
    type: 'cat',
    name: '',
    breed: '',
    sex: '1',
    age: '',
    weight: '',
    user_id: null
  })


  const changeHandler = (e) => {
    setUserSign(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  const submitHandlerIn = (e) => {
    e.preventDefault()
    console.log(Object.entries(userSign));

    let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      payload.user_id = user.id
      payload.age = +payload.age
      payload.weight = +payload.weight
      console.log(payload);
    
      dispatch(addAnimal(payload)) 
      navigate(redirect)
    }
  }  

    return (
      <div className={classes.container}>
        <div className={classes.logo}>
        <Logo/>
        </div>
        <form onSubmit={submitHandlerIn} className={classes.form} id="form">
         
        <select onChange={changeHandler} placeholder="тип" name="type" form="form">
        
          <option value="cat">Кошка</option>
          <option value="dog">Собака</option>
          <option value="hamster">Хомяк</option>
          <option value="snek">Змея</option>
          <option value="turtle">Черепахи</option>
          </select>

          <input onChange={changeHandler} type="text" placeholder="имя" name="name" />
          <input onChange={changeHandler} type="text" placeholder="порода" name="breed" />
          <select onChange={changeHandler} name="sex" form="form">
          <option value="1">Мальчик(самец)</option>
          <option value="2">Девочка(самка)</option>
          </select>

          <input onChange={changeHandler} type="text" placeholder="возраст" name="age" />
          <input onChange={changeHandler} type="number" placeholder="вес в грм" name="weight" />
          <button type="submit">go</button>
       
        </form>
      </div>
    )
};

export default AnimalForm;
