// import { Routes, Route } from "react-router-dom";
import {Route, Switch} from "react-router-dom";

import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import { useDispatch } from "react-redux";
import { checkAuth } from "./redux/actions/user.actions";
import { useEffect } from "react";
import Main from "./components/Main/Main";
import Paw from "./components/Paw/Paw";
import LogOut from "../src/components/UserForm/LogOut";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("проверка");
    dispatch(checkAuth());
  }, []);

  return (
    <>
    <Paw count={4}/>
      <div className="App">
        <Switch>
          <Route path="/log">
            <UserForm/>
          </Route>
          
          <Route path="/">
            <Main/>
          </Route>
          <Route path="/exit">
            <LogOut/>
          </Route>
          </Switch>  
      </div>
        
   </>
  );
}

export default App;
