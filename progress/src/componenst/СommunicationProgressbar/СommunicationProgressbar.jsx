import {Progressbar} from "../Progressbar/Progressbar"

export function СommunicationProgressbar({day = 1}) { 
let latitude = ((day*24*60*6000)*100)/70 //вряемя проходждения прогрессбара( время от последнего до дедлайна + 30%)
const timeout = latitude/100

  return (
  <>
    Общение:<Progressbar timeout={timeout}/>
  </>
  );
}

 
