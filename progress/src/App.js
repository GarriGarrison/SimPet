import { ComfortProgressbar } from "./componenst/ComfortProgressbar/ComfortProgressbar";
import {EatProgressbar} from "./componenst/EatProgressbar/EatProgressbar"
import { MedicineProgressbar } from "./componenst/MedicineProgressbar /MedicineProgressbar ";
import { SimStatus } from "./componenst/SimStatus/SimStatus";
import { СommunicationProgressbar } from "./componenst/СommunicationProgressbar/СommunicationProgressbar";

 
function App() {
  return (<>
    <EatProgressbar />
    <ComfortProgressbar/>
    <MedicineProgressbar/>
    <СommunicationProgressbar/>
    <SimStatus/>
    </>
  );
}

export default App;
