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
  if(!user.name){ 
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

        </div>
        <div className={classes.navRightDown}>
        <div className={classes.navRightLeft}>
          <Link to={'/?period=day'}>
            <button size="lg" variant="secondary">
                day
            </button>
              </Link>  
              <Link to={'/?period=week'}>
            <button size="lg" variant="secondary">
                Week
            </button>
              </Link>  
              <Link to={'/?period=month'}>
            <button size="lg" variant="secondary">
                Month
            </button>
            </Link> 
              <Link to={'/?period=year'}>
            <button size="lg" variant="secondary">
                Year
            </button>
              </Link>
        </div> 
        <div className={classes.navRightUpMenu}>
        {/* <Link to={'#'}>
            <button size="lg" variant="secondary">
                LK
            </button>
              </Link>   */}
              <Link to={'/catroom'}>
            <button size="lg" variant="secondary">
                КОМНАТА КОТИКА
            </button>
              </Link>  
              <Link to={'#'}>
            <button size="lg" variant="secondary">
                {user.name}
            </button>
            </Link> 
              <Link to={'/exit'}>
            <button size="lg" variant="secondary">
                EXIT
            </button>
              </Link>
        </div> 
   
        </div>
      </div>
    </div>
    </>
  );
};


export default Nav


