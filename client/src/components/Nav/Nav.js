import React from 'react';
import Logo from '../UserForm/Logo/Logo';
import classes from './nav.module.css';
import { Link } from 'react-router-dom'
import {useSelector } from "react-redux";
import SimplePaw from '../Paw/SimplePaw';


 const Nav = () => {
  const user = useSelector(state=>state.user)
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
          <Link to='#'>{user.name }</Link>
          <div className={classes.paw}><SimplePaw/></div>
          <Link to='#'>Exit</Link>
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


