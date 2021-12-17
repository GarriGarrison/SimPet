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
    navigate("/?period=day");
  }

  const playAudioReg = () => {
       const audio = new Audio()
    audio.src = "./sims_audio/редактор.mp3"
    audio.play()
  }

   const playAudioLog = () => {
       const audio = new Audio()
    audio.src = "./sims_audio/редактор.mp3"
    audio.play()
  }

  return (
    <>
      <Room />
      <div className={classes.container}>
        <Link to={"/reg"}>
          <button onClick={playAudioReg}>Какая офигенная игра! ЗАРЕГАТЬСЯ</button>
        </Link>
        <Link to={"/log/"}>
          <button onClick={playAudioLog}>А я молодец я зареган</button>
        </Link>
      </div>
    </>
  );
};

export default Start;
