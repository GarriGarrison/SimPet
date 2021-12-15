import AnimalForm from '../AnimalForm/AnimalForm';



const StartAnimalForm = ({redirect}) => {



  return (
    <>

    <div className="d-flex justify-content-center">
     <AnimalForm redirect={redirect}/>
    </div>
   </>
  );
};

export default StartAnimalForm;