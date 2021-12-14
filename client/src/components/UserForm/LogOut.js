import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../redux/actions/user.actions"

const LogOut = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  let user = useSelector(state => state.user);
  
  useEffect(() => {
    if(user.name){
      dispatch(signOut())
      navigate('/start')
    }
  },[user])
  
  
  
  
  return null;
}

export default LogOut;
