// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import { useDispatch } from "react-redux";
import { checkAuth } from "./redux/actions/user.actions";
import { useEffect } from "react";
import Main from "./components/Main/Main";
import Paw from "./components/Paw/Paw";
import LogOut from "../src/components/UserForm/LogOut";
import { TodoWeek } from "./components/TodoWeek/TodoWeek";
import { TodoYear } from "./components/TodoYear/TodoYear";
import { TodoDay } from "./components/TodoDay/ToDoDay";

import Nav from "./components/Nav/Nav";
import RightBarMenu from "./components/RightBarMenu/RightBarMenu";

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
         <Nav/>
         <Routes >
          <Route element={ <Nav/>}/>

          <Route path="/log" element={ <UserForm/>} />
          <Route path="/" element={ <Main/>} />
          <Route path="/exit" element={ <LogOut/>} />
          <Route path="/day" element={ <TodoDay/>} />
          <Route path="/week" element={<TodoWeek />} />
          <Route path='/year'element={<TodoYear/>}/>
       
          </Routes>  
          <RightBarMenu />
          
      
      </div>
        
   </>
  );
}

export default App;
