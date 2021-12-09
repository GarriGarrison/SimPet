import { useEffect, useState } from "react";


export function Progressbar({timeout}) {

    const [completed, setCompleted] = useState(100);
    const [color, setColor] = useState("#19d612")
    useEffect(()=>{

        if(completed > 30){
            setTimeout(() => setCompleted(completed - 1), timeout);
            
         }else{
             if(completed > 10){
            setTimeout(() => {
                setCompleted(completed - 1)
                setColor("#ffcb11")
            }, timeout)
               }else{
                  if(completed > 0){
                   setTimeout(() => {
                        setCompleted(completed - 1)
                        setColor("red")
                   }, timeout);
                   }
                }
        }

    }, [completed])

    
        
      
    
  const testData = { bgcolor: "#6a1b9a",  }

  const containerStyles = {
    height: 20,
    width: '30%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }



    return (
     <>
     <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
     </>
    );
  }