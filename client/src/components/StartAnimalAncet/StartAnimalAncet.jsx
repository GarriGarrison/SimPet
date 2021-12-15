import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ancet from '../Ancet/Ancet';


const StartAnimalAncet = ({anId}) => {


    let user = useSelector(state => state.user);

    const [animal_id, setAnimal_id] = useState()

    useEffect(() => {
      setAnimal_id(anId)
    },[anId])

    

  return (
    <>

   <Ancet anId={anId}/>
   </>
  );
};

export default StartAnimalAncet;
