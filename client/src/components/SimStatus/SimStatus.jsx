import { useSelector } from "react-redux";
import classes from "./style.module.css";

export function SimStatus() {
  const color = useSelector((state) => state.sim.status);

  return (
    <>
      <div style={{ color: color }} className={classes.romb}></div>
    </>
  );
}
