import React,{useState,useEffect} from "react";
import classes from "./togle.module.css";

const TogleAnimal = ({animal}) => {

  const [animalLocal,setAnimal] = useState([])

  useEffect(() =>{
    if(animal){
      setAnimal(animal)
    }
  },[animal])

  const [ava, setAvatar] = useState('')
  return (
    <div className={classes.container}>
      {animalLocal.map(el =>       <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="80mm"
        height="auto"
        version="1.1"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 3553.52 893.46"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="id24"
          gradientUnits="userSpaceOnUse"
          x1="148.62"
          y1="107.2"
          x2="247.56"
          y2="841.15"
        >
          <stop offset="0" stop-opacity="1" stop-color="#A3A3A4" />
          <stop offset="0.458824" stop-opacity="1" stop-color="#FEFEFE" />
          <stop offset="0.639216" stop-opacity="1" stop-color="#B6B6B6" />
          <stop offset="0.831373" stop-opacity="1" stop-color="#FEFEFE" />
          <stop offset="1" stop-opacity="1" stop-color="#858585" />
        </linearGradient>
        <symbol id="s-mask-circles">
<g>   
<ellipse className={classes.fil1} cx="418.58" cy="474.34" rx="354.22" ry="353.71"/>
</g>
</symbol>
<mask id="mask-circ">
<use xlinkHref="#s-mask-circles" />
</mask>
<symbol id="s-flower">
<image xlinkHref={ava||"https://mobimg.b-cdn.net/v3/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg"} width="1200" height="950" />
</symbol>
<g mask="url(#mask-circ)">
<use xlinkHref="#s-flower"></use>
</g>
        <path
          className={classes.fil0}
          d="M418.58 101.99c205.92,0 372.86,166.71 372.86,372.36 0,205.65 -166.93,372.36 -372.86,372.36 -205.92,0 -372.86,-166.71 -372.86,-372.36 0,-205.65 166.93,-372.36 372.86,-372.36zm0 18.64c195.63,0 354.22,158.36 354.22,353.71 0,195.35 -158.59,353.71 -354.22,353.71 -195.63,0 -354.22,-158.36 -354.22,-353.71 0,-195.35 158.59,-353.71 354.22,-353.71z"
        />
<ellipse className={classes.fil2} cx="418.58" cy="474.34" rx="354.22" ry="353.71"/>

      </svg> )}
    </div>
  );
};

export default TogleAnimal;
