import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "../../redux/actions/user.actions";
import Room from "../Room/Room";
import classes from './start.module.css'

const Start = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  let user = useSelector((state) => state.user);

  if (user) {
    navigate("/");
  }

  return (
    <>
      <Room />
      <div className={classes.container}>
        <Link to={"/reg"}>
          <button>Какая офигенная игра! ЗАРЕГАТЬСЯ</button>
        </Link>
        <Link to={"/log/"}>
          <button>А я молодецб я зареган</button>
        </Link>
      </div>
    </>
  );
};

export default Start;
