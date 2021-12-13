import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../redux/actions/user.actions"

const LogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  

  useEffect(() => {
    dispatch(signOut(navigate))
  },[])

  return null
}

export default LogOut;
