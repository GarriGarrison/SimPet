import React from 'react';
import Logo from '../UserForm/Logo/Logo';
import classes from './nav.module.css';
import { Link } from 'react-router-dom'
import {useSelector } from "react-redux";
import SimplePaw from '../Paw/SimplePaw';


const Nav = () => {
  const user = useSelector(state=>state.user)

  return (
    <div className={classes.nav}>
      <div className={classes.logo}><Logo/></div>
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
        <div className={classes.navRightDown}></div>
      </div>
    </div>
  );
};

export default Nav;
