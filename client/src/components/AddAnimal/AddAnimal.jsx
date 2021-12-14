import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AnimalForm from '../AnimalForm/AnimalForm';

const AddAnimal = () => {

    const dispatch = useDispatch()

  
    const [click, setClick] = useState(true)
  
    const clickHandler = (e) => {
      e.preventDefault()
      setClick(false)
    }

    return (
        <div>
            {click?
                <button onClick={clickHandler}>+Animal</button>

            :
                <AnimalForm redirect ={"/"}/>
            }
        </div>
    );
};

export default AddAnimal;