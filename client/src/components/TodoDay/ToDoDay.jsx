import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDay } from "../../redux/actions/todoDay.action";
import { ToDo } from "../ToDo/ToDo";


export function TodoDay() {
 const todos = useSelector((state) => state.todoDay)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoDay(3))
    }, [])
   
    console.log(todos);

//     let text = [
//       { id:1,
//         date: "10.11.2021",
//         time: 9,
//         status: true,
//         category: "eat",
//         body: 'покормить кота',
//     },
//     { id:2,
//       date: "10.11.2021",
//       time: 13,
//       status: true,
//       category: "eat",
//       body: 'покормить кота',
//   },
//   { id:3,
//     date: "10.11.2021",
//     time: 17,
//     status: true,
//     category: "eat",
//     body: 'покормить кота',
// },
// { id:3,
//   date: "10.11.2021",
//   time: 15,
//   status: true,
//   category: "communication",
//   body: 'поиграть с котом',
// },
// { id:3,
//   date: "10.11.2021",
//   time: 21,
//   status: true,
//   category: "comfort",
// body: 'поменть лоток',
// },
  // ]
    return (
      <> {todos.map(el => 
      <>
        <ToDo todo={el} period={"day"}/>
     </>
      )}
    

      </> 
    );
  }
  