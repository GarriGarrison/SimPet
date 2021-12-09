import {Progressbar} from "../Progressbar/Progressbar"

export function ComfortProgressbar() { 
  // в redux обработать все тудушки и найти ту до которой меньше вего времени 

 let start = 9.5*60*60*1000
 let end = 12.5*60*60*1000

let latitude = ((end-start)*100)/70 //вряемя проходждения прогрессбара( время от последнего до дедлайна + 30%)
const timeout = latitude/100

  return (
  <>
    Комфорт:<Progressbar timeout={timeout}/>
  </>
  );
}

 
