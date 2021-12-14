// import { Routes, Route } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import UserForm from "./components/UserForm/UserFormLog";
import { useDispatch, useSelector } from "react-redux";
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

import Start from "./components/Start/Start";
import UserFormLog from "./components/UserForm/UserFormLog";
import UserFormReg from "./components/UserForm/UserFormReg";
import { TodoMonth } from "./components/TodoMonth/TodoMonth";
import AnimalForm from "./components/AnimalForm/AnimalForm";
import { getAnimal } from "./redux/actions/animal.action";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import StartAnimalForm from "./components/StartAnimalForm/StartAnimalForm";
import StartAnimalAncet from "./components/StartAnimalAncet/StartAnimalAncet";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkAuth());
  },[]);  

  const user = useSelector(state=>state.user)
  const {id} = useSelector(state=>state.user)
  
  useEffect(() => {
    console.log(id);
    if (id){
      dispatch(getAnimal(id))
      console.log("animal");
    }
  }, [id]);
  
 
  return (
    <>
    <Paw count={4}/>
      <div className="App">
         {/* <Nav/> */}
         <Routes >
          <Route element={ <Nav user={user}/>}/>
    
          <Route path="/log" element={ <UserFormLog/>} />
          <Route path="/animal_reg" element={ <StartAnimalForm/>} />
          <Route path="/animal_reg/ancet" element={ <StartAnimalAncet/>} />


          <Route path="/reg" element={ <UserFormReg/>} />

          <Route path="/" element={ <>
            <Nav user={user}/>
            <Main/>
            <RightBarMenu />

            <LeftMenu/>
            </>
        
        } />
          <Route path="/start" element={ <Start/>} />
          <Route path="/exit" element={ <LogOut/>} />
          <Route path="/day" element={            
            <>
            <Nav user={user}/>
            <TodoDay/>
            <RightBarMenu />

            <LeftMenu/>
            </>
         } />
          <Route path="/week" element={
            <>
            <Nav user={user}/>
            <TodoWeek />
            <RightBarMenu />

            <LeftMenu/>
            </>
         
          } />
          <Route path="/month" element={
            <>
            <Nav user={user}/>
            <TodoMonth />
            <RightBarMenu />

            <LeftMenu/>
            </>
         
          } />
          <Route path='/year'element={
            <>
            <Nav user={user}/>
            <TodoYear/>
            <RightBarMenu />

            <LeftMenu/>
            </>
            }/>
          </Routes>  
          
          {/* <RightBarMenu />
          <LeftBarMenu />
           */}
      
      </div>
        
   </>
  );
}

export default App;
