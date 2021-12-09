import {Progressbar} from "../Progressbar/Progressbar"

export function EatProgressbar() { 
 let start = 12*60*60*1000
 let end = 12.5*60*60*1000

let latitude = ((end-start)*100)/70 //вряемя проходждения прогрессбара( время от последнего до дедлайна + 30%)
const timeout = latitude/100

  return (<>
    Еда: <Progressbar timeout={timeout}/>
    </>
  );
}

 
