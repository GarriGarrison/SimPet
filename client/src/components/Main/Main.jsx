import React,{useEffect} from 'react';
import { useDispatch } from "react-redux"
import { checkAuth } from "../../redux/actions/user.actions"



const Main = () => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
    <>
    
    

    </>
  );
};

export default Main;
