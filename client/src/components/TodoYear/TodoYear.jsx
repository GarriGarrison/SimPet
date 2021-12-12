import { ToDo } from "../ToDo/ToDo";


export function TodoYear() {

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
  
