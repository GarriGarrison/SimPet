import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { checkAuth } from "../../redux/actions/user.actions"
import { editAnimal } from "../../redux/actions/animal.action"
import classes from "./animallk.module.css"
import Logo from "../UserForm/Logo/Logo"


const AnimalLK = (props) => {

  const upload = useRef()

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(checkAuth())
  // }, [])

  if (!user) {
    navigate('/')
  }

  const [animalData, setAnimalData] = useState({
    type: props.type, //'cat',
    avatar: props.ava, //'https://yandex-images.clstorage.net/5AD6iM086/939b47W04D/ph4Ugj8rTksEMU3oTrsFv8SOIlhWdkNFq5fH-4Y0zc1YE4AsPt8HrKCCdwZgnIvXLP2Ei0SxC2voCzg3wEJXW-JIWM4kNQFBBTFO5UegDLjPhi1QUmJER_PA3P_fd8DJF1uMJATiJ9WE7Qw3GeLyoWyt3YkT8UEtqjABOrQ5CCa6FgKtPQ0KfAgGEPtmpQat9O8FfmgRRDiql7jrwGy96hpc1lg5-jXnsv4sKDrM4atsjv6cOM0uGZcYK2ymGAA7ljMptyAXClcSMCfkdqAZtPHQCmhXDU8djIGT_NFdrdgYUv1CD8sF87fiDAgx0c6kW4XqvSD9PSemCCdfkQE4CJYSMaYcMQdLAi4p41iFCJTvxz5WRyptHK6xg_v8Xa3BOn3dYizMH9iE1i4WP8zRvH-027kM0R4Plz07d5cFIi6cMiKVBzINbCwTNNZtmAq81M4aXFUvfw2Qu4za-EuY4h5ByGE59zH-qN4LFiXs3bxZpv28FecGC5k7DVe0ECQguTkGlxw8KmUPBCziZZoTjvrpNHZkP2AKhISuxv9ons8qU_xnHdYNwLHVMyEl9dG_QZjfgxTzIhClBjJ3mzMgFaU2K7QFKgdrOSgK22qwC77IxxVTURxcCa24tOrAb5PFHEHgegvTJ8OxwCcvN-7rln24y70s4zcHqC0kTLAuIyuCPimoGD0SQSYPCtRYghi7yuUZa1oDfBurspfTx2ySyytlyWEq6RbshfQJFwLA4qVwg8O7He4sPZAkPHWMMysbpCUEoD8gCmUuOBTebK8NrdnvFXRRK34SoIqJ_dNMntYdSPBaIvYlxKz5FQ8a9dy6UorShhPMJjKRPStYnzsRI7sOGYU5ASdlLzME2myDIK3O9hZESi9MLaqJrtHibI39NlvXfz3kFsKV-Q8fI_b5hlKB5540zAsTrhYZbr8XIzOpEDG7GwgMQjQJBuVmoCuL7tAcek8IQxmJtozr40k',
    name: props.name, //'',
    breed: props.breed,  //'',
    sex: props.sex, //'1',
    age: props.age, //'',
    weight: props.weight,  //'',
    user_id: props.idUser,  //null,
    id: props.id  //null
  })


  const changeHandler = (e) => {
    setAnimalData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandlerEdit = (e) => {
    e.preventDefault()
    // let payload = Object.entries(animalData).filter((el) => el[1] ? el[1].trim() : el[1])
    let payload = Object.entries(animalData)
    console.log(payload);
    if (payload.length) {
      payload = Object.fromEntries(payload)
      payload.user_id = user.id
      payload.age = +payload.age
      payload.weight = +payload.weight
      payload.file = upload.current.files[0]
      payload.avatar = upload.current.files[0] ? upload.current.files[0].name : props.ava
      
      console.log(payload,'+++++++++++++++++++');
      dispatch(editAnimal(payload)) 
      props.hideLk(false)
    }
  }

  const clickAvatar = (e) => {
    const modal = document.getElementById('myModal');
    const img = document.getElementById('myImg');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');

    img.onclick = function () {
	  modal.style.display = 'block';
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
}

const span = document.getElementByClassName('close')[0];
span.onclick = function () {
	console.log('click')
	modal.style.display = 'none';

}
  }

 

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <form onSubmit={submitHandlerEdit} className={classes.form}  id="form">
         
        <img src={animalData.avatar} alt="avatar" onClick={clickAvatar} id="avatarImg" width="300" height="200" />
        <div id="modalWindow" class="modal">
		      <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
		      <img class="modal-content" id="img01" />
		      < div id="caption"></div>
	      </div>
        <input type="file" placeholder="avatar" name="avatar" ref={upload} />
        
        <select onChange={changeHandler} placeholder="тип" value={animalData.type} name="type" form="form">
          <option value="cat">Кошка</option>
          <option value="dog">Собака</option>
          <option value="hamster">Хомяк</option>
          <option value="snek">Змея</option>
          <option value="turtle">Черепахи</option>
        </select>
        <input onChange={changeHandler} type="text" value={animalData.name} placeholder="имя" name="name" />
        <input onChange={changeHandler} type="text" value={animalData.breed} placeholder="порода" name="breed" />
        <select onChange={changeHandler} name="sex" value={animalData.sex} form="form">
          <option value="1">Мальчик(самец)</option>
          <option value="2">Девочка(самка)</option>
        </select>
        <input onChange={changeHandler} type="text" value={animalData.age} placeholder="возраст" name="age" />
        <input onChange={changeHandler} type="number" value={animalData.weight} placeholder="вес в грм" name="weight" />
        <button type="submit">Изменить данные</button>

        
          
      </form>
    </div>
  )
}

export default AnimalLK
