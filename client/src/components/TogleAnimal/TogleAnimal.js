import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { switchActivAnimal } from "../../redux/actions/animal.action";
import AnimalForm from "../AnimalForm/AnimalForm";
import classes from "./togle.module.css";

const TogleAnimal = ({animal}) => {
  console.log(animal,'-------------------');
  const dispatch = useDispatch()
  
  const [animalLocal,setAnimal] = useState([])
  const [click, setClick] = useState(false)
  
  useEffect(() =>{
    if(animal){
      setAnimal(animal)
    }  
  },[animal])  

  function togleAnimal(e){
    const index = e.target.attributes.id.value
    dispatch(switchActivAnimal(Number(index)))
    // console.log(e.target.attributes.index.value);

  }
  function addAnimal(){
   
    setClick(!click)  
    console.log("add animal");
  }
  
  const [ava, setAvatar] = useState('')
  return (
    <>
          <div>
          {click?
              <div className={classes.addAnim}>
                <AnimalForm redirect ={"/"}/>
                <button className={classes.but} onClick={addAnimal}  type="button">Выйти</button>
              </div>
          :
             <> </>
          }
      </div>
    

      <div className={classes.icon}>
      {animalLocal.map((el, index) =><div key={index}><svg className={classes.colco}  xmlSpace="preserve" width="auto" height="auto"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 29.56 29.52"
 >
 

 
 <symbol id={`${el.id}ss`}>
        <g>

  <ellipse className={classes.fil1} cx="14.78" cy="14.76" rx="14.04" ry="14.02"/>
        

        </g>
        </symbol>
        <mask id={el.id}>
        <use xlinkHref={`#${el.id}ss`} />
        </mask>
        <symbol id={`${el.id}dd`}>
        <image xlinkHref={el.avatar} width="30" height="30" />
        </symbol>
        <g mask={`url(#${el.id})`}>
        <use xlinkHref={`#${el.id}dd`}></use>
        </g>
        <g id="Слой_x0020_1">

  <path className={classes.fil0} d="M14.78 1.72c7.21,0 13.06,5.84 13.06,13.04 0,7.2 -5.85,13.04 -13.06,13.04 -7.21,0 -13.06,-5.84 -13.06,-13.04 0,-7.2 5.85,-13.04 13.06,-13.04zm0 -1.72c8.16,0 14.78,6.61 14.78,14.76 0,8.15 -6.62,14.76 -14.78,14.76 -8.16,0 -14.78,-6.61 -14.78,-14.76 0,-8.15 6.62,-14.76 14.78,-14.76z"/>
  <ellipse onClick={togleAnimal} id = {index} index = {el.index} className={classes.fil2} cx="14.78" cy="14.76" rx="14.04" ry="14.02"/>
 </g>
</svg>
<p>{el.name}</p></div>
       )}
       <svg className={classes.colco}  xmlSpace="preserve" width="auto" height="auto"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 29.56 29.52"
 >
 

 <g id="Слой_x0020_1">

  <ellipse onClick={addAnimal}  className={classes.fil4} cx="14.78" cy="14.76" rx="14.04" ry="14.02"/>
  <path className={classes.fil0} d="M14.78 1.72c7.21,0 13.06,5.84 13.06,13.04 0,7.2 -5.85,13.04 -13.06,13.04 -7.21,0 -13.06,-5.84 -13.06,-13.04 0,-7.2 5.85,-13.04 13.06,-13.04zm0 -1.72c8.16,0 14.78,6.61 14.78,14.76 0,8.15 -6.62,14.76 -14.78,14.76 -8.16,0 -14.78,-6.61 -14.78,-14.76 0,-8.15 6.62,-14.76 14.78,-14.76z"/>
  <path className={classes.fil0} d="M11.78 17.91l-1.38 0 -0.54 -1.44 -2.53 0 -0.52 1.44 -1.35 0 2.45 -6.31 1.35 0 2.53 6.31zm-2.33 -2.5l-0.88 -2.33 -0.85 2.33 1.73 0zm3.01 -3.81l2.32 0c0.52,0 0.92,0.04 1.2,0.12 0.37,0.11 0.69,0.3 0.95,0.58 0.26,0.28 0.46,0.62 0.6,1.02 0.14,0.4 0.21,0.9 0.21,1.49 0,0.52 -0.06,0.97 -0.19,1.34 -0.16,0.46 -0.38,0.83 -0.67,1.11 -0.22,0.22 -0.52,0.38 -0.89,0.5 -0.28,0.09 -0.65,0.13 -1.12,0.13l-2.39 0 0 -6.31zm1.28 1.07l0 4.18 0.95 0c0.35,0 0.61,-0.02 0.77,-0.06 0.21,-0.05 0.38,-0.14 0.51,-0.26 0.14,-0.12 0.25,-0.33 0.33,-0.61 0.09,-0.28 0.13,-0.67 0.13,-1.16 0,-0.49 -0.04,-0.86 -0.13,-1.12 -0.09,-0.26 -0.21,-0.46 -0.36,-0.61 -0.15,-0.15 -0.35,-0.25 -0.59,-0.3 -0.18,-0.04 -0.52,-0.06 -1.04,-0.06l-0.57 0zm5.08 -1.07l2.32 0c0.52,0 0.92,0.04 1.2,0.12 0.37,0.11 0.69,0.3 0.95,0.58 0.26,0.28 0.46,0.62 0.6,1.02 0.14,0.4 0.21,0.9 0.21,1.49 0,0.52 -0.06,0.97 -0.19,1.34 -0.16,0.46 -0.38,0.83 -0.67,1.11 -0.22,0.22 -0.52,0.38 -0.89,0.5 -0.28,0.09 -0.65,0.13 -1.12,0.13l-2.39 0 0 -6.31zm1.28 1.07l0 4.18 0.95 0c0.35,0 0.61,-0.02 0.77,-0.06 0.21,-0.05 0.38,-0.14 0.51,-0.26 0.14,-0.12 0.25,-0.33 0.33,-0.61 0.09,-0.28 0.13,-0.67 0.13,-1.16 0,-0.49 -0.04,-0.86 -0.13,-1.12 -0.09,-0.26 -0.21,-0.46 -0.36,-0.61 -0.15,-0.15 -0.35,-0.25 -0.59,-0.3 -0.18,-0.04 -0.52,-0.06 -1.04,-0.06l-0.57 0z"/>

 </g>
</svg>



    </div>
    
    </>
  );
};

export default TogleAnimal;
