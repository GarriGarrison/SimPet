import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate} from 'react-router-dom';
import { checkAuth,  } from "../../redux/actions/user.actions"



const Start = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let user = useSelector(state => state.user);
  
  useEffect(() => {
    if(user.name){
        navigate('/')
      }
    console.log("проверка");
  }, [user]);



  return (
    <>

    <div className="d-flex justify-content-center">
      <div className="card text-center" style={{width: '18px'}}>
       <p className="text-center"> Тут будет игра </p>
      </div>
        <div>
          <Link to={'/reg'}>
            <button>
                Какая офигенная игра! ЗАРЕГАТЬСЯ
            </button>
        </Link>
        <Link to={'/log/'}>
            <button>
              А я молодецб я зареган
            </button>
        </Link>
          </div>
    </div>
    
    

    </>
  );
};

export default Start;