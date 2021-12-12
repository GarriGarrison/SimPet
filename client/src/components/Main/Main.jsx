import React,{useEffect} from 'react';
import { useDispatch } from "react-redux"
import { checkAuth } from "../../redux/actions/user.actions"
import { SimStatus } from "../SimStatus/SimStatus";


const Main = () => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
    <>
    <br/>
    <br/>
    <br/>
    <SimStatus/>
    </>
  );
};

export default Main;
