// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import Paw from "./components/Paw/Paw";
import LogOut from "../src/components/UserForm/LogOut";


import Nav from "./components/Nav/Nav";
import RightBarMenu from "./components/RightBarMenu/RightBarMenu";

import Start from "./components/Start/Start";
import UserFormLog from "./components/UserForm/UserFormLog";
import UserFormReg from "./components/UserForm/UserFormReg";
import { getAnimal } from "./redux/actions/animal.action";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import StartAnimalForm from "./components/StartAnimalForm/StartAnimalForm";
import StartAnimalAncet from "./components/StartAnimalAncet/StartAnimalAncet";
import TogleAnimal from "./components/TogleAnimal/TogleAnimal";



import ToDoList from "./components/TodoList/ToDoList";
import Room from "./components/Room/Room";


function App() {
  const dispatch = useDispatch();
  const [animalId, setAnimalId] = useState(null)
  const [animalAll, setAnimal] = useState(null)
  const [currAnimal, setCurAnimal] = useState(null)

  // useEffect(() => {
  //   dispatch(checkAuth());
  // },[]);  

  const user = useSelector(state=>state.user)
  const {id} = useSelector(state=>state.user)

  
  useEffect(() => {
    if (id){
      dispatch(getAnimal(id))
    }
  }, [id, user]);

  // const animal = useSelector(state=>state.animal.all[0])
  const ani = useSelector(state=>state.animal.all)
  const curAn = useSelector(state=>state.animal.currAnimal)

  useEffect(() => {
    if (ani) {
      setCurAnimal(ani[0])
      // setAnimalId(ani[0].id)
      setAnimal(ani)
    }
  }, [])


  
  useEffect(() => {
    if (ani) {
      if(curAn){

        setAnimalId(curAn.id)
      }
      setAnimal(ani)
      
    }
  }, [ani])

  useEffect(() => {
    if (curAn) {
      
      setCurAnimal(curAn)
    }
  }, [curAn])

  // dispatch(timeoutMedical(2))
  // dispatch(timeoutCare(2))
  // dispatch(timeoutFeed(2))


  return (
    <>
    <Paw count={6}/>
      <div className="App">
         <Routes >
          <Route element={ <Nav user={user}/>}/>
    
          <Route path="/log" element={ <UserFormLog/>} />
          <Route path="/animal_reg" element={ <StartAnimalForm redirect={'/animal_reg/ancet'}/>} />
          <Route path="/animal_reg/ancet" element={ <StartAnimalAncet anId={animalId}/>} />
          <Route path="/reg" element={ <UserFormReg/>} />
          <Route path="/start" element={ <Start/>} />
          <Route path="/exit" element={ <LogOut/>} />

          <Route path="/catroom" element={
            <> 
          <Nav user={user}/>
            <div className="rom">
            <Room/>
            </div>
          

          </>
          } />

          <Route path="/" element={           
            <>
            <Nav user={user}/>
            <TogleAnimal animal={animalAll}/>
            <ToDoList/>
            <RightBarMenu />

            <LeftMenu/>
            </>
         } />
          </Routes>  
      </div>
   </>
  );
}

export default App;
