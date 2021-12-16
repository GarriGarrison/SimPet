import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../redux/actions/user.actions"
import { clearAnimal } from "../../redux/actions/animal.action"

const LogOut = () => {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  let user = useSelector(state => state.user);
  
  useEffect(() => {
    if(user.name){
      dispatch(signOut())
      dispatch(clearAnimal())
      navigate('/start')
    }
  },[user])
  
  
  
  
  return null;

}

export default LogOut;
