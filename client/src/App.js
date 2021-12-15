// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/actions/user.actions";
import { useEffect, useState } from "react";
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
import { getAnimal, switchActivAnimal } from "./redux/actions/animal.action";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import StartAnimalForm from "./components/StartAnimalForm/StartAnimalForm";
import StartAnimalAncet from "./components/StartAnimalAncet/StartAnimalAncet";
import TogleAnimal from "./components/TogleAnimal/TogleAnimal";
import { timeoutMedicine } from "./redux/actions/sim.action";
import AnimalLK from "./components/AnimalLk/AnimalLK";


function App() {
  const dispatch = useDispatch();
  const [animalId, setAnimalId] = useState(null)
  const [animalAll, setAnimal] = useState(null)
  const [currAnimal, setCurAnimal] = useState(null)

  useEffect(() => {
    dispatch(checkAuth());
  },[]);  

  const user = useSelector(state=>state.user)
  const {id} = useSelector(state=>state.user)

  
  useEffect(() => {
    console.log(id);
    if (id){
      dispatch(getAnimal(id))
    }
  }, [id]);

  const animal = useSelector(state=>state.animal.all[0])
  const ani = useSelector(state=>state.animal.all)
  const curAn = useSelector(state=>state.animal.currAnimal)
  
  useEffect(() => {
    if (animal) {
      setAnimalId(animal.id)
      setAnimal(ani)
    }
  }, [animal])

  useEffect(() => {
    if (curAn) {
      
      setCurAnimal(curAn)
    }
  }, [curAn])

  dispatch(timeoutMedicine(2))


  return (
    <>
    <Paw count={6}/>
      <div className="App">
         <Routes >
          <Route element={ <Nav user={user}/>}/>
    
          <Route path="/log" element={ <UserFormLog/>} />
          <Route path="/animal_reg" element={ <StartAnimalForm redirect={'/animal_reg/ancet'}/>} />
          <Route path="/animal_reg/ancet" element={ <StartAnimalAncet anId={animalId}/>} />


          <Route path="/reg" element={<UserFormReg />} />
          <Route path='/animal_lk' element={ <AnimalLK /> }/>

          <Route path="/" element={ <>
            <TogleAnimal animal={animalAll}/>
            <Nav user={user}/>
            <Main anId={animalId}/>
            <RightBarMenu />
            <LeftMenu animal={currAnimal}/>
            </>
        
        } />
          <Route path="/start" element={ <Start/>} />
          <Route path="/exit" element={ <LogOut/>} />
          <Route path="/day" element={            
            <>
            <Nav user={user}/>
            <TogleAnimal animal={animalAll}/>
            <TodoDay anId={animalId}/>
            <RightBarMenu />

            <LeftMenu/>
            </>
         } />
          <Route path="/week" element={
            <>
            <Nav user={user}/>
            <TodoWeek anId={animalId} />
            <RightBarMenu />

            <LeftMenu/>
            </>
         
          } />
          <Route path="/month" element={
            <>
            <Nav user={user}/>
            <TodoMonth anId={animalId} />
            <RightBarMenu />

            <LeftMenu/>
            </>
         
          } />
          <Route path='/year'element={
            <>
            <Nav user={user}/>
            <TodoYear anId={animalId}/>
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
