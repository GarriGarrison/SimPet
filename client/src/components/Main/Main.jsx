import React,{useEffect} from 'react';
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { checkAuth } from "../../redux/actions/user.actions"



const Main = () => {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
    <>
    {/* <Link >
    <button>+</button>
    </Link>
    <Link>
    <button>+Animal</button>
    </Link> */}

    </>
  );
};

export default Main;
