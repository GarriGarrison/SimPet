import React,{useState,useEffect} from 'react';
import classes from './leftmenu.module.css';
import {SimStatus} from '../SimStatus/SimStatus'
import { useNavigate } from "react-router-dom"
import AddTodo from '../AddTodo/AddTodo';
import AnimalLK from '../AnimalLk/AnimalLK';
import { useDispatch, useSelector } from 'react-redux';


const LeftMenu = () => {
  let size = 153
  if(localStorage.sizeL) size = localStorage.sizeL
  const animal = useSelector(state=>state.animal.currAnimal)
  const allanimal = useSelector(state=>state.animal)

  const [zoom, setZoom] = useState(size)
  const [isChangeAva, setChangeAva] = useState(false)
  const navigate = useNavigate()
  const [animalId, setAnimalId] = useState(null)
  const [animalType, setAnimalType] = useState(null)
  const [animalName, setAnimalName] = useState(null)
  const [animalAge, setAnimalAge] = useState(null)
  const [animalWeight, setAnimalWeight] = useState(null)
  const [animalAvatar, setAnimalAvatar] = useState(null)
  const [addTodo, setAddTodo] = useState(false)
  const [addLk, setLk] = useState(false)
  const [animalSex, setSex] = useState(null)
  const [animalBreed, setBreed] = useState(null)
  const [animalUserId, setUserId] = useState(null)

  useEffect(() => {
    if(animal){
      setAnimalType(animal.type)
      setAnimalName(animal.name)
      setAnimalAge(animal.age)
      setAnimalWeight(animal.weight)
      setAnimalAvatar(animal.avatar)
      setAnimalId(animal.id)
      setSex(animal.sex)
      setBreed(animal.breed)
      setUserId(animal.user_id)

    }
  },[animal, allanimal])

  function ZoomUp(){
    setZoom(zoom + 5)
    localStorage.sizeL = zoom

  }
  function ZoomDown(){
    setZoom(zoom-5)
    localStorage.sizeL = zoom

  }
  function btnAnimalLK() {
    setLk(!addLk)
  }
  function btnAnimalTodo(){
    setAddTodo(!addTodo)
  }
  function btn3(){
    console.log('btn1');
  }
  function changeAvatar(){
    setChangeAva(true)
  }
  function btnStop(){

  }
  function btnForward(){

  }
  function btnMaxForward(){

  }
  function btnPause(){

  }
  function btnPlay(){
    
  }
  function btnMiddle(){

  }
  function suadBtn1(){
console.log('btn1');
  }
  function suadBtn2(){
    console.log('btn1');
  }
  function suadBtn3(){
   console.log('btn1'); 
  }
  function suadBtn4(){
    console.log('btn1');
  }
  function submitAva(e){
    e.preventDefault();
    
    setChangeAva(false)
  }
  function cancelChangeAva(){
    setChangeAva(false);
  }
  function smalWinClick(){
    console.log('click');
  }
  return (
    <>
    <div >
          {addTodo?
                <div className={classes.addAnim}>
            <AddTodo anId={animalId} hideAddTodo={setAddTodo} />
                  <button className={classes.but} onClick={btnAnimalTodo}  type="button">Выйти</button>
                </div>
    
    :
    <> </>
  }
      </div>
      <div >
          {addLk?
              <div className={classes.addAnim}>
                <AnimalLK hideLk={setLk}  type={animalType} name={animalName} age={animalAge} ava={animalAvatar}  weight={animalWeight} sex={animalSex} breed={animalBreed} id={animalId} idUser={animalUserId}   redirect ={"/"}/>
                <button className={classes.but} onClick={btnAnimalLK}   type="button">Выйти</button>
              </div>
    
          :
             <> </>
          }
      </div>
    
    {isChangeAva ? <div className={classes.formAva}>
      <form onSubmit={submitAva} >
        <input type="text" name="img" placeholder="введите новый URL аватара"/>
        <button type="submit">ИЗМЕНИТЬ АВАТАР</button>
        <button onClick={cancelChangeAva} type="button">ОТМЕНА</button>
      </form>
    </div> : ''}
    <div className={classes.bar}>
      <div className={classes.romb}><SimStatus/></div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={`${zoom}mm`} height="auto" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 3553.52 893.46"
 xmlnsXlink="http://www.w3.org/1999/xlink">
 <g>
 <clipPath id="id10">
    <rect x="2560.85" y="191.42" width="223.72" height="223.72"/>
   </clipPath>
   <clipPath id="id11">
    <rect x="2818.53" y="191.42" width="223.72" height="223.72"/>
   </clipPath>
   <clipPath id="id12">
    <rect x="3076.22" y="191.42" width="223.72" height="223.72"/>
   </clipPath>
   <clipPath id="id13">
    <rect x="2560.85" y="511.25" width="223.72" height="223.72"/>
   </clipPath>
   <clipPath id="id14">
    <rect x="2818.53" y="511.25" width="223.72" height="223.72"/>
   </clipPath>
   <clipPath id="id15">
    <rect x="3076.22" y="511.25" width="223.72" height="223.72"/>
   </clipPath>
   <mask id="id0">
     <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="-147.09" y1="494.35" x2="153.25" y2="789.85">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id1)" x="51.95" y="680.49" width="167.87" height="167.87"/>
   </mask>
   <mask id="id2">
     <linearGradient id="id3" gradientUnits="userSpaceOnUse" x1="487.21" y1="247.46" x2="1075.8" y2="176.74">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id3)" x="827.27" y="101.21" width="295.29" height="245.88"/>
   </mask>
   <mask id="id4">
     <linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="626.8" y1="493.79" x2="1111.46" y2="448.7">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id5)" x="906.39" y="354.06" width="242.19" height="259.85"/>
   </mask>
   <mask id="id6">
     <linearGradient id="id7" gradientUnits="userSpaceOnUse" x1="726.22" y1="740.13" x2="1119.49" y2="706.08">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id7)" x="952.83" y="620.89" width="196.74" height="226.63"/>
   </mask>
   <mask id="id8">
     <linearGradient id="id9" gradientUnits="userSpaceOnUse" x1="3269.88" y1="286.2" x2="3473.11" y2="486.29">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id9)" x="3404.14" y="411.86" width="114.43" height="114.43"/>
   </mask>

   <mask id="id16">
     <linearGradient id="id17" gradientUnits="userSpaceOnUse" x1="2280.88" y1="29.66" x2="2444.41" y2="190.56">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id17)" x="2388.72" y="130.48" width="92.47" height="92.47"/>
   </mask>
   <mask id="id18">
     <linearGradient id="id19" gradientUnits="userSpaceOnUse" x1="2280.88" y1="226.87" x2="2444.41" y2="387.76">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id19)" x="2388.72" y="327.68" width="92.47" height="92.47"/>
   </mask>
   <mask id="id20">
     <linearGradient id="id21" gradientUnits="userSpaceOnUse" x1="2280.88" y1="424.07" x2="2444.41" y2="584.96">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id21)" x="2388.72" y="524.88" width="92.47" height="92.47"/>
   </mask>
   <mask id="id22">
     <linearGradient id="id23" gradientUnits="userSpaceOnUse" x1="2280.88" y1="621.27" x2="2444.41" y2="782.17">
      <stop offset="0" stop-opacity="1" stop-color="white"/>
      <stop offset="1" stop-opacity="0" stop-color="white"/>
     </linearGradient>
    <rect fill="url(#id23)" x="2388.72" y="722.08" width="92.47" height="92.47"/>
   </mask>
 <linearGradient id="id24" gradientUnits="userSpaceOnUse" x1="148.62" y1="107.2" x2="247.56" y2="841.15">
  <stop offset="0" stop-opacity="1" stop-color="#A3A3A4"/>
  <stop offset="0.458824" stop-opacity="1" stop-color="#FEFEFE"/>
  <stop offset="0.639216" stop-opacity="1" stop-color="#B6B6B6"/>
  <stop offset="0.831373" stop-opacity="1" stop-color="#FEFEFE"/>
  <stop offset="1" stop-opacity="1" stop-color="#858585"/>
 </linearGradient>
 <linearGradient id="id25" gradientUnits="userSpaceOnUse" xlinkHref="#id24" x1="1310.48" y1="51.6" x2="1335.57" y2="324.47">
 </linearGradient>
 <linearGradient id="id26" gradientUnits="userSpaceOnUse" xlinkHref="#id24" x1="2649.28" y1="111.88" x2="2732.3" y2="814.2">
 </linearGradient>
 <linearGradient id="id27" gradientUnits="userSpaceOnUse" xlinkHref="#id24" x1="1410.95" y1="326.43" x2="1443.05" y2="843.38">
 </linearGradient>
 </g>

 <symbol id="s-mask-circles">
<g>   
<ellipse className={classes.fil111} cx="418.58" cy="474.34" rx="354.22" ry="353.71"/>
</g>
</symbol>
<mask id="mask-circles">
<use xlinkHref="#s-mask-circles" />
</mask>
<symbol id="s-flower-m">
<image xlinkHref={animalAvatar||"https://mobimg.b-cdn.net/v3/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg"} width="800" height="950" />
</symbol>
<g mask="url(#mask-circles)">
<use xlinkHref="#s-flower-m"></use>
</g>

 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path className={classes.fil0} d="M418.58 101.99c205.92,0 372.86,166.71 372.86,372.36 0,205.65 -166.93,372.36 -372.86,372.36 -205.92,0 -372.86,-166.71 -372.86,-372.36 0,-205.65 166.93,-372.36 372.86,-372.36zm0 18.64c195.63,0 354.22,158.36 354.22,353.71 0,195.35 -158.59,353.71 -354.22,353.71 -195.63,0 -354.22,-158.36 -354.22,-353.71 0,-195.35 158.59,-353.71 354.22,-353.71z"/>
  
  <path className={classes.fil2} d="M398.89 55.63l714.84 -2c166.67,-80.01 400.55,-54.61 536.21,-25.17 53.02,17.89 85.95,52.51 103.96,99.58l31.73 141.16 535.12 -2.19 -15.69 -68.16c-13.02,-56.59 -29.34,-114.21 33.95,-152.41 36.27,-21.89 88.2,-18.07 149.17,0.62l910.46 1.64c26.98,-0.53 46.76,10.16 58,32.83l50.34 311.33c65.94,35.9 57.72,117.15 1.09,154.3l-15.32 296.55c-1,29.68 -18.7,45.46 -54.71,45.96l-3026.29 3.79c-12.84,-0.23 -25.54,-1.04 -38.08,-2.4l-136.18 -38.91c-2.73,-1.32 -5.45,-2.67 -8.14,-4.04 -22.97,25.63 -56.32,41.76 -93.45,41.76 -69.28,0 -125.45,-56.17 -125.45,-125.45 0,-36.06 15.22,-68.57 39.59,-91.45 -0.48,-0.89 -0.96,-1.78 -1.43,-2.67l0.93 -1.14c-1.93,-2.61 -3.79,-5.26 -5.61,-7.96 -28.09,-56.26 -43.91,-119.71 -43.91,-186.87 0,-224.63 176.78,-407.99 398.89,-418.71zm20.58 806.86c-63.11,0 -122.7,-15.06 -175.38,-41.75 8.79,-16.85 13.76,-36 13.76,-56.31 0,-67.35 -54.6,-121.96 -121.96,-121.96 -21.35,0 -41.41,5.49 -58.87,15.13 -29.31,-54.58 -45.95,-116.98 -45.95,-183.26 0,-214.37 173.89,-388.15 388.39,-388.15l330.26 0c12.38,0 22.98,6.76 28.19,18 90.38,194.87 136.31,443.09 154.17,724.97 0.56,8.88 -2.26,16.74 -8.35,23.23 -6.09,6.49 -13.75,9.81 -22.65,9.81 -160.02,0.03 -329.24,0.29 -481.62,0.29z"/>
  <path className={classes.fil3} d="M1151.6 70.89c-22.63,8.23 -30.45,23.87 -24.08,46.61 49.71,149.17 76.26,372.82 67.97,708.43 0.76,24.18 12.84,35.96 35.34,36.32l512.29 0 559.93 0c7.75,0 14.22,-5.58 15.37,-13.24 25.55,-171.01 28.09,-339.94 10.4,-507.02 -0.6,-22.72 -11.83,-33.73 -32.62,-34.18l-494.04 0c-29.62,-3.01 -46.5,-17.7 -51.27,-43.5l-31.07 -136.72c-5.31,-15.04 -13.46,-28.3 -25.07,-39.41 -81.8,-78.26 -452.63,-56.86 -543.15,-17.29z"/>
  <path className={classes.fil4} onClick={changeAvatar} d="M135.89 673.54c50.19,0 90.88,40.69 90.88,90.88 0,50.19 -40.69,90.88 -90.88,90.88 -50.19,0 -90.88,-40.69 -90.88,-90.88 0,-50.19 40.69,-90.88 90.88,-90.88zm46.61 78.84c6.86,0 12.43,5.57 12.43,12.43 0,6.86 -5.57,12.43 -12.43,12.43 -6.86,0 -12.43,-5.57 -12.43,-12.43 0,-6.86 5.57,-12.43 12.43,-12.43zm-93.21 0c6.86,0 12.43,5.57 12.43,12.43 0,6.86 -5.57,12.43 -12.43,12.43 -6.86,0 -12.43,-5.57 -12.43,-12.43 0,-6.86 5.57,-12.43 12.43,-12.43zm46.61 0c6.86,0 12.43,5.57 12.43,12.43 0,6.86 -5.57,12.43 -12.43,12.43 -6.86,0 -12.43,-5.57 -12.43,-12.43 0,-6.86 5.57,-12.43 12.43,-12.43z"/>
  <path className={`${classes.fil4} ${classes.str0}`} onClick={btnAnimalLK} d="M955.38 822.37l1.03 11.57c1.44,16.08 14.81,28.31 30.95,28.31l141.5 0c16.5,0 30.09,-12.85 31.02,-29.32 4.23,-74.89 5.42,-146.73 3.55,-215.52l-227.23 0c8.57,67.91 14.7,136.15 19.12,204.22 0.02,0.26 0.03,0.49 0.06,0.75z"/>
  <path className={`${classes.fil4} ${classes.str0}`} onClick={btnAnimalTodo} d="M936.2 617.4l227.23 0c-2.57,-94.74 -10.93,-183.69 -25.11,-266.82l-250.76 0c6.5,26.17 12.41,52.44 17.81,78.71 12.78,62.14 22.86,124.98 30.83,188.12z"/>
  <path className={`${classes.fil4} ${classes.str0}`} d="M887.56 350.58l250.76 0c-14.97,-87.8 -36.44,-169.11 -64.42,-243.9 -4.63,-12.38 -15.89,-20.18 -29.1,-20.18l-201.08 0c-10.74,0 -19.98,4.96 -25.91,13.92 -5.93,8.96 -6.89,19.4 -2.69,29.29 30.22,71.22 53.76,145.63 72.44,220.88z"/>
  <path className={classes.fil7} d="M1642.29 286.09c2.54,9.46 0.6,19.19 -5.36,26.96 -5.96,7.77 -14.86,12.16 -24.65,12.16l-293.98 0c-14.5,0 -26.94,-9.87 -30.25,-23.98l-46.44 -198.16c-1.94,-8.29 -0.51,-16.65 4.07,-23.82 4.58,-7.17 11.57,-11.98 19.91,-13.7 103.35,-21.3 196.45,-17.79 299.51,1.16 11.9,2.19 21.25,10.82 24.39,22.51l52.81 196.87zm-18.01 4.83l-52.81 -196.87c-1.27,-4.74 -4.93,-8.11 -9.76,-9 -87.57,-16.11 -180.08,-24.39 -292.37,-1.24 -3.41,0.7 -6.09,2.55 -7.96,5.48 -1.87,2.93 -2.42,6.14 -1.63,9.53l46.44 198.16c1.33,5.69 6.26,9.59 12.1,9.59l293.98 0c3.99,0 7.43,-1.69 9.86,-4.86 2.43,-3.17 3.18,-6.93 2.14,-10.78z"/>
  <path className={classes.fil8} d="M2361.19 680.61c-2.29,55.21 -5.86,110.35 -10.19,165.44 -0.42,5.38 1.24,10.17 4.9,14.13 3.66,3.96 8.31,5.99 13.7,5.98l1068.08 -1.34c7.5,-0.1 20.84,-1.18 26.15,-7.55 3.11,-3.73 3.92,-9.74 4.07,-14.4l0.02 -0.44 13.86 -268.34c0.19,-3.7 -1.08,-6.95 -3.73,-9.54 -2.65,-2.58 -5.93,-3.78 -9.62,-3.5 -2.33,0.18 -4.7,0.27 -7.08,0.27 -50.95,0 -92.25,-41.3 -92.25,-92.25 0,-50.95 41.3,-92.25 92.25,-92.25 0.96,0 1.92,0.02 2.87,0.04 3.84,0.12 7.19,-1.34 9.72,-4.22 2.53,-2.89 3.54,-6.4 2.93,-10.19l-44.12 -272.84c-7.41,-12.47 -18.66,-16.36 -33.64,-16.07l-0.27 0 -914.43 -1.65 -3.54 -1.08c-36.63,-11.23 -93.66,-24.45 -129.04,-3.1 -15.59,9.41 -27.6,21.34 -31.98,39.43 -6.19,25.57 3.6,60.9 9.41,86.12l15.92 69.19 0.15 1.04c7.33,51.39 11.83,103.16 15.06,154.96 3.79,60.82 5.51,121.79 4.15,182.72 -0.6,26.49 -1.72,52.98 -3.36,79.43z"/>
  <circle className={`${classes.fil4} ${classes.str1}`} cx="3461.36" cy="469.07" r="65.25"/>
  <path className={classes.fil9} d="M2568.71 108.36l723.35 0c23.98,0 43.5,19.52 43.5,43.5l0 622.68c0,23.98 -19.52,43.5 -43.5,43.5l-723.35 0c-23.98,0 -43.5,-19.52 -43.5,-43.5l0 -622.68c0,-23.98 19.52,-43.5 43.5,-43.5zm0 18.64l723.35 0c13.69,0 24.86,11.17 24.86,24.86l0 622.68c0,13.69 -11.17,24.86 -24.86,24.86l-723.35 0c-13.69,0 -24.86,-11.17 -24.86,-24.86l0 -622.68c0,-13.69 11.17,-24.86 24.86,-24.86z"/>
  <path className={classes.fil1} d="M2568.71 127l723.35 0c13.69,0 24.86,11.17 24.86,24.86l0 622.68c0,13.69 -11.17,24.86 -24.86,24.86l-723.35 0c-13.69,0 -24.86,-11.17 -24.86,-24.86l0 -622.68c0,-13.69 11.17,-24.86 24.86,-24.86z"/>
  <path className={classes.fil10} onClick={ZoomUp} d="M42.79 55.09c23.6,0 42.72,19.13 42.72,42.72 0,23.6 -19.13,42.72 -42.72,42.72 -23.6,0 -42.72,-19.13 -42.72,-42.72 0,-23.6 19.13,-42.72 42.72,-42.72zm-23.7 38.06l19.04 0 0 -19.04 9.32 0 0 19.04 19.04 0 0 9.32 -19.04 0 0 19.04 -9.32 0 0 -19.04 -19.04 0 0 -9.32z"/>
  <path className={classes.fil10} onClick={ZoomDown} d="M42.79 156.07c23.6,0 42.72,19.13 42.72,42.72 0,23.6 -19.13,42.72 -42.72,42.72 -23.6,0 -42.72,-19.13 -42.72,-42.72 0,-23.6 19.13,-42.72 42.72,-42.72zm-23.7 38.06l47.4 0 0 9.32 -47.4 0 0 -9.32z"/>
  <polygon className={classes.fil11} points="19.09,93.15 38.13,93.15 38.13,74.12 47.45,74.12 47.45,93.15 66.49,93.15 66.49,102.48 47.45,102.48 47.45,121.51 38.13,121.51 38.13,102.48 19.09,102.48 "/>
  <polygon className={classes.fil11} points="19.09,194.14 66.49,194.14 66.49,203.46 19.09,203.46 "/>
  <g clip-path="url(#id10)">
   <image x="2560.85" y="191.42" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID1.png"/>
  </g>
  <g transform="matrix(1 0 0 1 -12525.3 24622.6)">
   <text x="15129.62" y="-24380.11"  className={`${classes.fil12} ${classes.fnt0}`}>КОРМИЛЕЦ</text>
  </g>
  <g clip-path="url(#id11)">
   <image x="2818.53" y="191.42" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID2.png"/>
  </g>
  <g transform="matrix(1 0 0 1 -12295.7 24620.7)">
   <text x="15129.62" y="-24380.11"  className={`${classes.fil12} ${classes.fnt1}`}>ВСЕГДА РЯДОМ</text>
  </g>
  <g clip-path="url(#id12)">
   <image x="3076.22" y="191.42" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID3.png"/>
  </g>
  <g transform="matrix(1 0 0 1 -12015.1 24620.7)">
   <text x="15129.62" y="-24380.11"  className={`${classes.fil12} ${classes.fnt1}`}>МОЙДОДЫР</text>
  </g>
  <g clip-path="url(#id13)">
   <image x="2560.85" y="511.25" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID4.png"/>
  </g>
  <text x="2583.46" y="558.17"  className={`${classes.fil12} ${classes.fnt2}`}>НА РАССЛАБОНЕ</text>
  <g clip-path="url(#id14)">
   <image x="2818.53" y="511.25" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID5.png"/>
  </g>
  <text x="2858.23" y="558.17"  className={`${classes.fil12} ${classes.fnt0}`}>БОДРЯЩИЙ</text>
  <g clip-path="url(#id15)">
   <image x="3076.22" y="511.25" width="223.72" height="223.72" xlinkHref="LeftMenu_Images\LeftMenu_ImgID6.png"/>
  </g>
  <text x="3114.32" y="558.17"  className={`${classes.fil12} ${classes.fnt0}`}>ВЕСЕЛЬЧАК</text>
  <path className={classes.fil13} d="M1232.81 824.95l1051.41 0c22.16,-158.84 24.4,-319.52 7.52,-479.05l-0.09 -0.82 -1063.28 0c-3.87,0 -6.73,1.29 -9.3,4.18 -2.55,2.88 -3.5,5.92 -3.04,9.74 7.03,58.16 11.46,116.62 14.28,175.13 4.66,96.86 4.85,193.89 2.49,290.81zm-35.27 -463.71c6.98,57.71 11.37,115.83 14.17,173.79 4.66,96.78 4.82,193.94 2.44,290.79 0.48,12.7 3.88,17.56 16.69,17.77l1069.55 0c24.53,-165.77 27.55,-333.04 9.91,-499.65l-0.08 -0.73 -0.02 -0.74c-0.3,-11.43 -2.7,-15.73 -14.21,-16.03l-1067.6 0c-9.21,0 -17.14,3.57 -23.25,10.46 -6.11,6.89 -8.7,15.19 -7.59,24.34z"/>
  <path className={classes.fil1} d="M1232.81 824.95l1051.41 0c22.16,-158.84 24.4,-319.52 7.52,-479.05l-0.09 -0.82 -1063.28 0c-3.87,0 -6.73,1.29 -9.3,4.18 -2.55,2.88 -3.5,5.92 -3.04,9.74 7.03,58.16 11.46,116.62 14.28,175.13 4.66,96.86 4.85,193.89 2.49,290.81z"/>
  <text x="1298.76" y="466.94"  className={`${classes.fil14} ${classes.fnt3}`}>ВИД/ИМЯ : {animalType ? animalType.toUpperCase():""} / {animalName? animalName.toUpperCase():""} </text>
  {/* <text x="1798.12" y="466.94"  className={`${classes.fil14} ${classes.fnt3}`}>STRING</text> */}
  <text x="1298.76" y="610.01"  className={`${classes.fil14} ${classes.fnt3}`}>ВОЗРАСТ : {animalAge} ЛЕТ </text>
  {/* <text x="1597.98" y="610.01"  className={`${classes.fil14} ${classes.fnt3}`}>INTEGER</text> */}
  <text x="1298.76" y="753.07"  className={`${classes.fil14} ${classes.fnt3}`}>ВЕС : {animalWeight} ГРМ </text>
  {/* <text x="1452.49" y="753.07"  className={`${classes.fil14} ${classes.fnt3}`}>INTEGER</text> */}
  <circle className={classes.fil4} cx="2434.96" cy="176.72" r="49.71"/>
  <circle className={classes.fil4} cx="2434.96" cy="373.92" r="49.71"/>
  <circle className={classes.fil4} cx="2434.96" cy="571.12" r="49.71"/>
  <circle className={classes.fil4} cx="2434.96" cy="768.32" r="49.71"/>
  <path className={classes.fil55} mask="url(#id2)" d="M1121.39 345.92c-13.94,-79.47 -34.08,-158.06 -62.37,-233.67 -2.31,-6.17 -7.63,-9.86 -14.21,-9.86l-201.08 0c-5.41,0 -9.67,2.29 -12.65,6.8 -2.99,4.51 -3.43,9.33 -1.32,14.3 29.56,69.67 52.71,142.04 71.27,215.39 1.06,4.19 4.71,7.03 9.04,7.03l211.33 0z"/>
  {/* <path className={classes.fil55} mask="url(#id0)" d="M218.65 764.43c0,-45.71 -37.05,-82.76 -82.76,-82.76 -45.71,0 -82.76,37.05 -82.76,82.76 0,45.71 37.05,82.76 82.76,82.76 45.71,0 82.76,-37.05 82.76,-82.76z"/> */}
  <path className={classes.fil55} mask="url(#id4)" d="M1147.4 612.74c-2.53,-86.18 -10.02,-172.46 -24.41,-257.5l-206.09 0c-2.95,0 -5.48,1.23 -7.31,3.54 -1.83,2.31 -2.44,5.06 -1.76,7.93 4.67,19.72 9.03,39.52 13.11,59.37 12.15,59.11 21.86,118.71 29.65,178.54 0.61,4.67 4.53,8.12 9.24,8.12l187.56 0z"/>
  <path className={classes.fil55} mask="url(#id8)" d="M3517.39 469.07c0,-30.95 -25.09,-56.04 -56.04,-56.04 -30.95,0 -56.04,25.09 -56.04,56.04 0,30.95 25.09,56.04 56.04,56.04 30.95,0 56.04,-25.09 56.04,-56.04z"/>
  <path className={classes.fil55} mask="url(#id6)" d="M971.21 820.95l1.03 11.57c0.7,7.88 7.2,13.82 15.12,13.82l141.5 0c8.07,0 14.7,-6.26 15.15,-14.32 3.95,-69.89 5.41,-139.98 3.64,-209.96l-184.32 0c-2.76,0 -5.14,1.07 -6.97,3.14 -1.83,2.07 -2.61,4.55 -2.28,7.3 7.52,62.51 13.03,125.27 17.11,188.09 0.01,0.12 0.02,0.24 0.03,0.37z"/>
  <path className={classes.fil5} mask="url(#id16)" d="M2480.02 176.72c0,-24.89 -20.17,-45.06 -45.06,-45.06 -24.89,0 -45.06,20.17 -45.06,45.06 0,24.89 20.17,45.06 45.06,45.06 24.89,0 45.06,-20.17 45.06,-45.06z"/>
  <path className={classes.fil5} mask="url(#id18)" d="M2480.02 373.92c0,-24.89 -20.17,-45.06 -45.06,-45.06 -24.89,0 -45.06,20.17 -45.06,45.06 0,24.89 20.17,45.06 45.06,45.06 24.89,0 45.06,-20.17 45.06,-45.06z"/>
  <path className={classes.fil5} mask="url(#id20)" d="M2480.02 571.12c0,-24.89 -20.17,-45.06 -45.06,-45.06 -24.89,0 -45.06,20.17 -45.06,45.06 0,24.89 20.17,45.06 45.06,45.06 24.89,0 45.06,-20.17 45.06,-45.06z"/>
  <path className={classes.fil5} mask="url(#id22)" d="M2480.02 768.32c0,-24.89 -20.17,-45.06 -45.06,-45.06 -24.89,0 -45.06,20.17 -45.06,45.06 0,24.89 20.17,45.06 45.06,45.06 24.89,0 45.06,-20.17 45.06,-45.06z"/>
  <path className={classes.fil15} d="M2434.96 100.44c21.06,0 40.13,8.54 53.94,22.34 13.8,13.8 22.34,32.87 22.34,53.94 0,21.06 -8.54,40.13 -22.34,53.94 -13.8,13.8 -32.87,22.34 -53.94,22.34 -21.06,0 -40.13,-8.54 -53.94,-22.34 -13.8,-13.8 -22.34,-32.87 -22.34,-53.94 0,-21.06 8.54,-40.13 22.34,-53.94 13.8,-13.8 32.87,-22.34 53.94,-22.34zm49.54 26.74c-12.68,-12.68 -30.2,-20.52 -49.54,-20.52 -19.35,0 -36.87,7.84 -49.54,20.52 -12.68,12.68 -20.52,30.2 -20.52,49.54 0,19.35 7.84,36.87 20.52,49.54 12.68,12.68 30.2,20.52 49.54,20.52 19.35,0 36.87,-7.84 49.54,-20.52 12.68,-12.68 20.52,-30.2 20.52,-49.54 0,-19.35 -7.84,-36.87 -20.52,-49.54z"/>
  <path className={classes.fil15} d="M2434.96 297.64c21.06,0 40.13,8.54 53.94,22.34 13.8,13.8 22.34,32.87 22.34,53.94 0,21.06 -8.54,40.13 -22.34,53.94 -13.8,13.8 -32.87,22.34 -53.94,22.34 -21.06,0 -40.13,-8.54 -53.94,-22.34 -13.8,-13.8 -22.34,-32.87 -22.34,-53.94 0,-21.06 8.54,-40.13 22.34,-53.94 13.8,-13.8 32.87,-22.34 53.94,-22.34zm49.54 26.74c-12.68,-12.68 -30.2,-20.52 -49.54,-20.52 -19.35,0 -36.87,7.84 -49.54,20.52 -12.68,12.68 -20.52,30.2 -20.52,49.54 0,19.35 7.84,36.87 20.52,49.54 12.68,12.68 30.2,20.52 49.54,20.52 19.35,0 36.87,-7.84 49.54,-20.52 12.68,-12.68 20.52,-30.2 20.52,-49.54 0,-19.35 -7.84,-36.87 -20.52,-49.54z"/>
  <path className={classes.fil15} d="M2434.96 501.21c19.3,0 36.78,7.83 49.43,20.48 12.65,12.65 20.48,30.13 20.48,49.43 0,19.3 -7.83,36.78 -20.48,49.43 -12.65,12.65 -30.13,20.48 -49.43,20.48 -19.3,0 -36.78,-7.83 -49.43,-20.48 -12.65,-12.65 -20.48,-30.13 -20.48,-49.43 0,-19.3 7.83,-36.78 20.48,-49.43 12.65,-12.65 30.13,-20.48 49.43,-20.48zm45.04 24.87c-11.52,-11.52 -27.45,-18.65 -45.04,-18.65 -17.59,0 -33.52,7.13 -45.04,18.65 -11.52,11.52 -18.65,27.45 -18.65,45.04 0,17.59 7.13,33.52 18.65,45.04 11.52,11.52 27.45,18.65 45.04,18.65 17.59,0 33.52,-7.13 45.04,-18.65 11.52,-11.52 18.65,-27.45 18.65,-45.04 0,-17.59 -7.13,-33.52 -18.65,-45.04z"/>
  <path className={classes.fil15} d="M2434.96 692.04c21.06,0 40.13,8.54 53.94,22.34 13.8,13.8 22.34,32.87 22.34,53.94 0,21.06 -8.54,40.13 -22.34,53.94 -13.8,13.8 -32.87,22.34 -53.94,22.34 -21.06,0 -40.13,-8.54 -53.94,-22.34 -13.8,-13.8 -22.34,-32.87 -22.34,-53.94 0,-21.06 8.54,-40.13 22.34,-53.94 13.8,-13.8 32.87,-22.34 53.94,-22.34zm49.54 26.74c-12.68,-12.68 -30.2,-20.52 -49.54,-20.52 -19.35,0 -36.87,7.84 -49.54,20.52 -12.68,12.68 -20.52,30.2 -20.52,49.54 0,19.35 7.84,36.87 20.52,49.54 12.68,12.68 30.2,20.52 49.54,20.52 19.35,0 36.87,-7.84 49.54,-20.52 12.68,-12.68 20.52,-30.2 20.52,-49.54 0,-19.35 -7.84,-36.87 -20.52,-49.54z"/>
  <path className={classes.fil1} onClick={smalWinClick} d="M1318.3 306.57l293.98 0c3.99,0 7.43,-1.69 9.86,-4.86 2.43,-3.17 3.18,-6.93 2.14,-10.78l-52.81 -196.87c-1.27,-4.74 -4.93,-8.11 -9.76,-9 -87.57,-16.11 -180.08,-24.39 -292.37,-1.24 -3.41,0.7 -6.09,2.55 -7.96,5.48 -1.87,2.93 -2.42,6.14 -1.63,9.53l46.44 198.16c1.33,5.69 6.26,9.59 12.1,9.59z"/>
  <polygon className={classes.fil5} points="1026.04,519.1 1026.04,490.04 996.66,490.04 996.66,470.04 1026.04,470.04 1026.04,440.98 1045.57,440.98 1045.57,470.04 1074.94,470.04 1074.94,490.04 1045.57,490.04 1045.57,519.1 "/>
  <path className={classes.fil5} d="M1108.42 755.9c-1.48,6.6 -4.22,12.85 -8.03,18.46 -10.83,15.92 -29.05,25.07 -48.22,25.07 -26.57,0 -50.75,-17.78 -56.37,-44.06 -0.67,-3.13 -1.05,-6.32 -1.15,-9.52 -0.61,-4.69 -1.23,-9.37 -1.62,-14.09 -0.43,-5.3 -0.56,-10.57 -0.26,-15.88 0.8,-14.43 4.6,-28.4 9.69,-41.86l0.97 -2.56 2.66 0.66c12.63,3.15 23.83,9.84 33.68,18.2 4.07,-0.86 8.23,-1.29 12.39,-1.29 4.37,0 8.73,0.47 12.99,1.42 9.82,-8.45 21.08,-14.53 33.52,-18.33l2.77 -0.85 1.02 2.71c5.45,14.54 9.26,29.52 9.72,45.1 0.17,5.86 -0.14,11.68 -0.79,17.5 -0.59,5.31 -1.46,10.57 -2.31,15.85 -0.03,0.19 -0.06,0.38 -0.09,0.57l-0.47 2.91 -0.1 0zm-56.25 -63.8c4.78,0 9.41,0.59 13.83,1.7l0 -0c9.57,-8.53 20.73,-14.82 33.58,-18.75 13.42,35.79 9.82,56.22 6.46,76.88 -0.03,0.19 -0.06,0.38 -0.09,0.57l-0.06 0.39 -0 0c-4.31,24.66 -26.72,43.46 -53.71,43.46 -26.32,0 -48.28,-17.87 -53.36,-41.62l0 0 0 -0c-0.63,-2.96 -1,-6 -1.09,-9.12 -2.42,-18.54 -5.13,-36.79 7.62,-70.5 11.88,2.97 23.03,9.34 33.59,18.55l0 0c4.23,-1.01 8.67,-1.55 13.23,-1.55zm-43.46 -9.97c-6.12,15.27 -8.17,31.58 -7.89,48.49 5.1,-14.47 13.69,-26.77 29.63,-34.5 -6.78,-5.83 -13.98,-10.62 -21.75,-13.99zm94.75 48.73c-5.06,-15.07 -13.34,-27.77 -29.57,-34.62 7.09,-6.41 14.47,-10.84 22.06,-13.8 6.23,15.43 8.19,31.68 7.52,48.42zm-81.15 39.14c-6.98,-7.05 -11.6,-16.99 -13.54,-30.2 30.31,14.42 59.14,14.42 86.5,0.25 -1.46,10.13 -4.63,18.28 -9.29,24.7 -15.39,21.19 -45.1,24 -63.67,5.26zm-9.45 -24.99c1.91,8.47 5.43,16.56 11.64,22.82 7.84,7.91 18.42,12.19 29.57,11.52 11.86,-0.71 22.46,-6.84 29.42,-16.42 3.79,-5.22 6.19,-11.23 7.64,-17.47 -25.9,11.58 -52.15,10.58 -78.27,-0.45zm50.11 -17.3c1.96,-1.83 4.48,-2.93 6.89,-3.77 9.54,-3.33 15.82,1.12 13.9,2.05 -2.54,1.24 -6.86,1.04 -10.53,2.32 -5.25,2.28 -5.75,4.22 -7.24,5.12 -3.43,2.08 -9.33,0.18 -3.02,-5.72zm-20.9 0c-1.96,-1.83 -4.47,-2.93 -6.89,-3.77 -9.54,-3.33 -15.82,1.12 -13.9,2.05 2.54,1.24 6.86,1.04 10.53,2.32 5.25,2.28 5.75,4.22 7.24,5.12 3.43,2.08 9.33,0.18 3.02,-5.72z"/>
 
 </g>
</svg>
    </div>
    </>
  );
};

export default LeftMenu;
