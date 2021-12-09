import {Progressbar} from "../Progressbar/Progressbar"

export function MedicineProgressbar () { 
  //либо раз в месяц/полгода, либо от создания до даты осмотра(+20%)
let latitude = ((30*24*60*6000)*100)/70 //вряемя проходждения прогрессбара( время от последнего до дедлайна + 30%)
const timeout = latitude/100

  return (
  <>
    Медицина:<Progressbar timeout={timeout}/>
  </>
  );
}

 
