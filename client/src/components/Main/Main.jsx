import React,{useEffect} from 'react';
import Nav from '../Nav/Nav';
import { useDispatch } from "react-redux"
import { checkAuth } from "../../redux/actions/user.actions"

const Main = () => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
    <Nav/>
  );
};

export default Main;
