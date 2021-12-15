import { useState } from "react"
import classes from "./startanimal.module.css"
import Logo from "../UserForm/Logo/Logo"


  const [animalData, setAnimalData] = useState({
    type: 'cat',
    avatar: 'https://yandex-images.clstorage.net/5AD6iM086/939b47W04D/ph4Ugj8rTksEMU3oTrsFv8SOIlhWdkNFq5fH-4Y0zc1YE4AsPt8HrKCCdwZgnIvXLP2Ei0SxC2voCzg3wEJXW-JIWM4kNQFBBTFO5UegDLjPhi1QUmJER_PA3P_fd8DJF1uMJATiJ9WE7Qw3GeLyoWyt3YkT8UEtqjABOrQ5CCa6FgKtPQ0KfAgGEPtmpQat9O8FfmgRRDiql7jrwGy96hpc1lg5-jXnsv4sKDrM4atsjv6cOM0uGZcYK2ymGAA7ljMptyAXClcSMCfkdqAZtPHQCmhXDU8djIGT_NFdrdgYUv1CD8sF87fiDAgx0c6kW4XqvSD9PSemCCdfkQE4CJYSMaYcMQdLAi4p41iFCJTvxz5WRyptHK6xg_v8Xa3BOn3dYizMH9iE1i4WP8zRvH-027kM0R4Plz07d5cFIi6cMiKVBzINbCwTNNZtmAq81M4aXFUvfw2Qu4za-EuY4h5ByGE59zH-qN4LFiXs3bxZpv28FecGC5k7DVe0ECQguTkGlxw8KmUPBCziZZoTjvrpNHZkP2AKhISuxv9ons8qU_xnHdYNwLHVMyEl9dG_QZjfgxTzIhClBjJ3mzMgFaU2K7QFKgdrOSgK22qwC77IxxVTURxcCa24tOrAb5PFHEHgegvTJ8OxwCcvN-7rln24y70s4zcHqC0kTLAuIyuCPimoGD0SQSYPCtRYghi7yuUZa1oDfBurspfTx2ySyytlyWEq6RbshfQJFwLA4qVwg8O7He4sPZAkPHWMMysbpCUEoD8gCmUuOBTebK8NrdnvFXRRK34SoIqJ_dNMntYdSPBaIvYlxKz5FQ8a9dy6UorShhPMJjKRPStYnzsRI7sOGYU5ASdlLzME2myDIK3O9hZESi9MLaqJrtHibI39NlvXfz3kFsKV-Q8fI_b5hlKB5540zAsTrhYZbr8XIzOpEDG7GwgMQjQJBuVmoCuL7tAcek8IQxmJtozr40k',
    name: '',
    breed: '',
    sex: '1',
    age: '',
    weight: '',
    user_id: null
  })


  const changeHandler = (e) => {
    setAnimalData(prev => ({...prev, [e.target.name]: e.target.value}))
  }


//   const submitHandlerIn = (e) => {
//     e.preventDefault()
//     let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
//     if (payload.length) {
//       payload = Object.fromEntries(payload)
//       payload.user_id = user.id
//       payload.age = +payload.age
//       payload.weight = +payload.weight
//       console.log(payload);
    
//       dispatch(addAnimal(payload)) 
//       navigate('/animal_reg/ancet')
//     }
//   } 

const AnimalLK = ({ anId }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <form onSubmit={submitHandlerEdit} className={classes.form} id="form">
         
        <select onChange={changeHandler} placeholder="тип" name="type" form="form">
          <option value="cat">Кошка</option>
          <option value="dog">Собака</option>
          <option value="hamster">Хомяк</option>
          <option value="snek">Змея</option>
          <option value="turtle">Черепахи</option>
        </select>

        <input onChange={changeHandler} type="text" placeholder="имя" name="name" />
        <input onChange={changeHandler} type="text" placeholder="порода" name="breed" />
        <select onChange={changeHandler} name="sex" form="form">
          <option value="1">Мальчик(самец)</option>
          <option value="2">Девочка(самка)</option>
        </select>

        <input onChange={changeHandler} type="text" placeholder="возраст" name="age" />
        <input onChange={changeHandler} type="number" placeholder="вес в грм" name="weight" />
        <button type="submit">go</button>
          
      </form>
    </div>
  )
}

export default AnimalLK




// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo } from '../../redux/actions/todoAll.action'
// import classes from './startanimal.module.css'
// import Logo from '../UserForm/Logo/Logo'
// import { useNavigate } from 'react-router-dom'

// const AnimalLK = ({ anId }) => {
//   // let user = useSelector(state => state.user);
//   // const dispatch = useDispatch()
//   // const navigate = useNavigate()


//   // const [animal_id, setAnimal_id] = useState()

//   // useEffect(() => {
//   //   setAnimal_id(anId)
//   // }, [anId])

//   // const [eat, setEat] = useState({
//   //   num: '',
//   //   name: '',
//   // })
//   // const [contact, setContact] = useState({
//   //   name: '',
//   // })
//   // const [medical, setMedical] = useState({
//   //   name: '',
//   // })
//   // const [hygiene, setHygiene] = useState({
//   //   name: '',
//   // })
    
  
  
//   // const changeEat = (e) => {
//   //   setEat(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   // }
//   // const changeContact = (e) => {
//   //   setContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   // }
//   // const changeMedical = (e) => {
//   //   setMedical(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   // }
//   // const changeHygiene = (e) => {
//   //   setHygiene(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   // }
  
  
//   // const submitHandlerIn = (e) => {
//   //   e.preventDefault()
//   //   let eatForm = Object.entries(eat).filter((el) => el[1] ? el[1].trim() : el[1])
//   //   if (eatForm.length) {
//   //     eatForm = Object.fromEntries(eatForm)
//   //     eatForm.animal_id = animal_id
//   //     eatForm.periodNum = 2
//   //     eatForm.categoryNum = 1
//   //     let today = new Date();
//   //     let dat = new Date();
//   //     dat.setDate(today.getDate() + 1);
//   //     let date = dat.toLocaleDateString();
//   //     eatForm.date = date
//   //     let time
//   //     eatForm.num == 1 ? time = ["12:00"] : eatForm.num == 2 ? time = ["09:00", "17:00"] : eatForm.num == 3 ? time = ["09:00", "13:00", "17:00"] : time = ["09:00", "13:00", "17:00", "21:00"]
//   //     console.log(eatForm.num, time);
//   //     for (let i = 0; i < time.length; i++) {
//   //       eatForm.time = time[i]
//   //       console.log(eatForm);
//   //       dispatch(addTodo(eatForm))
//   //     }
      
//   //   }

//   //   let contactForm = Object.entries(contact).filter((el) => el[1] ? el[1].trim() : el[1])
//   //   if (contactForm.length) {
//   //     contactForm = Object.fromEntries(contactForm)
//   //     contactForm.animal_id = animal_id
//   //     contactForm.categoryNum = 1
//   //     contactForm.periodNum = Number(contactForm.periodNum)
//   //     contactForm.time = "12:00"
//   //     let today = new Date();
//   //     let dat = new Date();
//   //     dat.setDate(today.getDate() + 1);
//   //     contactForm.periodNum == 1 ? dat.setDate(today.getDate() + 1) : contactForm.periodNum == 2 ? dat.setDate(today.getDate() + 8) : contactForm.periodNum == 3 ? dat.setDate(today.getMonth() + 1) : dat.setDate(today.getMonth() + 1)
//   //     let date = dat.toLocaleDateString();
//   //     contactForm.date = date
//   //     contactForm.action = "Время общаться!"
//   //     console.log(contactForm)
//   //     dispatch(addTodo(contactForm))
//   //   }

//   //   let medicalForm = Object.entries(medical).filter((el) => el[1] ? el[1].trim() : el[1])
//   //   if (medicalForm.length) {
//   //     medicalForm = Object.fromEntries(medicalForm)
//   //     console.log(medicalForm);
      
//   //     // dispatch(addAnimal(payload))
//   //   }

//   //   let hygieneForm = Object.entries(hygiene).filter((el) => el[1] ? el[1].trim() : el[1])
//   //   if (hygieneForm.length) {
//   //     hygieneForm = Object.fromEntries(hygieneForm)
//   //     hygieneForm.categoryNum = 5
//   //     hygieneForm.periodNum = Number(hygieneForm.periodNum)
        
//   //     console.log(hygieneForm);
//   //     // dispatch(addAnimal(payload))
//   //   }


//   //   let today = new Date();
//   //   let dat = new Date();
//   //   dat.setDate(today.getYear() + 1);
//   //   let date = dat.toLocaleDateString();

//   //   let medicalF = {
//   //     categoryNum: 5,
//   //     periodNum: 5,
//   //     action: "Пора проверить здоровье",
//   //     time: "12:00",
//   //     date,
//   //     animal_id
//   //   }
//   //   dispatch(addTodo(medicalF))
//   //   navigate('/')

      

//   // }
//   // const Click = (e) => {


//   // }
//   let user = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(checkAuth());
//     console.log("проверка");
//   }, []);
//   const navigate = useNavigate()



 
  
//   if(!user){
//     navigate('/')
//   }


//   const [userSign, setUserSign] = useState({
//     type: 'cat',
//     name: '',
//     breed: '',
//     sex: '1',
//     age: '',
//     weight: '',
//     user_id: null
//   })


//   const changeHandler = (e) => {
//     setUserSign(prev => ({...prev, [e.target.name]: e.target.value}))
//   }


//   const submitHandlerIn = (e) => {
//     e.preventDefault()
//     let payload = Object.entries(userSign).filter((el) => el[1] ? el[1].trim() : el[1])
//     if (payload.length) {
//       payload = Object.fromEntries(payload)
//       payload.user_id = user.id
//       payload.age = +payload.age
//       payload.weight = +payload.weight
//       console.log(payload);
    
//       dispatch(addAnimal(payload)) 
//       navigate('/animal_reg/ancet')
//     }
//   }  

  

//   return (
//     <div className={classes.container}>
//       <div className={classes.logo}>
//         <Logo />
//       </div>

//       <form onSubmit={submitHandlerEdit} className={classes.form} id="form">
         
//         <select onChange={changeHandler} placeholder="тип" name="type" form="form">
//           <option value="cat">Кошка</option>
//           <option value="dog">Собака</option>
//           <option value="hamster">Хомяк</option>
//           <option value="snek">Змея</option>
//           <option value="turtle">Черепахи</option>
//         </select>

//         <input onChange={changeHandler} type="text" placeholder="имя" name="name" />
//         <input onChange={changeHandler} type="text" placeholder="порода" name="breed" />
//         <select onChange={changeHandler} name="sex" form="form">
//           <option value="1">Мальчик(самец)</option>
//           <option value="2">Девочка(самка)</option>
//         </select>

//         <input onChange={changeHandler} type="text" placeholder="возраст" name="age" />
//         <input onChange={changeHandler} type="number" placeholder="вес в грм" name="weight" />
//         <button type="submit">go</button>
          
//       </form>
//     </div>
//   )
// }

// // {/* <div className={classes.container}>
// //   <div className={classes.logo}><Logo/></div>
// //         <form onSubmit={submitHandlerIn} id='form' className={classes.form}>
// //          <p className={classes.message}>
// //           Количество приемов пищи:
// //          </p>
// //           <input onChange={changeEat} type="number" placeholder="" name="num" />
// //           <p className={classes.message}>
// //           что именно:
// //          </p>
// //           <input onChange={changeEat} type="text" placeholder="" name="action" />
// //         <p className={classes.message}>насколько общительный:</p>
        
// //           <select onChange={changeContact} name="periodNum" form="form">
// //           <option value="3"> Любит иногда няшкаться</option>
// //           <option value="2"> безумно общительный</option>
// //           <option value="4"> Лишний раз лучше не трогать</option>
// //           <option value="5">Интроверт</option>
// //           </select> */}



// //         {/* <p> */}
// //         {/* Есть ли приемы у врача в ближaйшее время?

// //         </p>
// //           <input onChange={changeMedical} type="text" placeholder="" name="action"/>
// //           <p> */}

// //         {/* Есть особенности в уходе?
// //           </p>
// //           <input onChange={changeHygiene} type="text" placeholder="" name="action" />
// //           <input onChange={changeHygiene} type="number" placeholder="" name="num" /> раз 
// //           <select onChange={changeHygiene} name="periodNum" form="form">
// //           <option value="3"> в неделю</option>
// //           <option value="2"> в день</option>
// //           <option value="4"> в месяц</option>
// //           <option value="5">в год</option>
// //           </select>
// //           <button onClick={Click}>+</button> */}
          
// //           {/* <Link to={"/animal_reg/ancet"}> */}
// //           {/* <div>
// //           <button type="submit">go</button>
// //           </div>
// //           {/* </Link> */}
         
// //       //   </form>
// //       // </div>
// //   //  </> */}
// // //   )
// // // }

// export default AnimalLK
