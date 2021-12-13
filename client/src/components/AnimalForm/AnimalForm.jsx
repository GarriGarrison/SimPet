
import { useEffect, useState } from "react"

import { useSelector, useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addAnimal } from "../../redux/actions/animal.action";
import { checkAuth } from "../../redux/actions/user.actions";

const AnimalForm = () => {
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
    type: '',
    name: '',
    breed: '',
    sex: '',
    age: '',
    weight: '',
    user_id: null
  })


  const changeHandler = (e) => {
    setUserSign(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  const submitHandlerIn = (e) => {
    e.preventDefault()
    let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      payload.user_id = user.id
      payload.age = +payload.age
      payload.weight = +payload.weight
      console.log(payload);
    
      dispatch(addAnimal(payload)) 
    }
  }  

    return (
      <div className='db-'>
        <form onSubmit={submitHandlerIn}>
         
          <input onChange={changeHandler} type="text" placeholder="тип" name="type" />
          <input onChange={changeHandler} type="text" placeholder="имя" name="name" />
          <input onChange={changeHandler} type="text" placeholder="порода" name="breed" />
          <input onChange={changeHandler} type="text" placeholder="пол" name="sex" />
          <input onChange={changeHandler} type="text" placeholder="возраст" name="age" />
          <input onChange={changeHandler} type="number" placeholder="вес" name="weight" />
        
          <button type="submit">go</button>
         
        </form>
      </div>
    )
};

export default AnimalForm;