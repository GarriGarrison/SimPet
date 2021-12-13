import React from 'react';
import Logo from '../UserForm/Logo/Logo';
import classes from './nav.module.css';
import { Link, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SimplePaw from '../Paw/SimplePaw';
import { checkAuth } from '../../redux/actions/user.actions';


 const Nav = ({user}) => {
  
  console.log(user);
  if(!user){ 
  return  <Navigate to='/start'/>}


    return (<>
    <div className={classes.nav}>
      <div className={classes.logo}>
      <Link to={'/'}>
        <Logo/>
      </Link>
        </div>
      <div className={classes.navRight}>
        <div className={classes.navRightUp}>
        <div className={classes.navRightUpMenu}>
          <Link to='#'>Lk</Link>
          <div className={classes.paw}><SimplePaw/></div>
          <Link to='#'>Money</Link>
          <div className={classes.paw}><SimplePaw/></div>
          <Link to='#'>
            {user.name }
            </Link>
          <div className={classes.paw}><SimplePaw/></div>
          <Link to={"/exit"}>Exit</Link>
        </div>
        </div>
        <div className={classes.navRightDown}>
        <Link to={'/day'}>
  <button size="lg" variant="secondary">
      day
  </button>
    </Link>  
    <Link to={'/week'}>
  <button size="lg" variant="secondary">
      Week
  </button>
    </Link>  
    <Link to={'/year'}>
  <button size="lg" variant="secondary">
      Year
  </button>
    </Link>  
   
        </div>
      </div>
    </div>
    </>
  );
};


export default Nav


