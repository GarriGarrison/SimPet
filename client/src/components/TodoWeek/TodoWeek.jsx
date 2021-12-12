import { ToDo } from "../ToDo/ToDo";


export function TodoWeek() {
  console.log('tut');

    let text = ['lol', 'kek', 'cheburek']
    return (
      <> {text.map(el => 
      <>
        <ToDo todo={el}/>
     </>
      )}
    

      </> 
    );
  }
  
