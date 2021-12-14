import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../redux/actions/user.actions"

const LogOut = () => {
  const dispatch = useDispatch()
 
  let user = useSelector(state => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(signOut(navigate))
  },[user])
  
  // useEffect(() => {
  //   if(!user.name) navigate('/start')

  // }, [user]);


  return null
}

export default LogOut;
