import { useState } from "react";
import './App.css'

function CallCost() {

    const [minutes, setMinutes] = useState('')

    const onSetMinutes = (event) => {

        setMinutes(event.target.value)

    }

    const [message , setmessage ] = useState('')

    const calculateCost = () => {

        let cost = 100

        if (minutes > 3){

            cost =  100 + (50*(minutes-3))

        }

        setmessage(cost + 'pesos') 
    }


return (

<>

<h1>2 : CallCost</h1>

<input type="text" placeholder="minutes" value={minutes} onChange={(event) => onSetMinutes(event)} />
<button onClick={()=>calculateCost()}> calculate </button>

<h2>{message}</h2>



</>

)



    
}

export default CallCost