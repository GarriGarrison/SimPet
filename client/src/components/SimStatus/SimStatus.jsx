import { useSelector } from 'react-redux'
import classes from './style.module.css'

export function SimStatus() {

    const color = useSelector((state) => state.sim)
 
    return (
        <>
        <div style={{height: "1px"}}>

        <div style={{color: color}} className={classes.romb}>
        </div>
        </div>
        </>
    );
  }
  
  