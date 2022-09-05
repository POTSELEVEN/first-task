import { useState } from "react";


function TimeGreeting () {

    const [nombre, setnombre] = useState('')

    const [time, settime] = useState('')

    const [Greeting, setGreting] = useState('')

    const onSetNombre = (event) =>{

        setnombre(event.target.value)
    }

    const onSetTime = (event) =>{

        settime(event.target.value)
    }

    const greet = () => {

        if(time >= '00:00' && time < '12:00'){

            setGreting('Buenos dias ' + nombre)
    
        }
    
        if(time >= '12:00' && time < '19:00'){
    
            setGreting('Buenas tardes ' + nombre)
    
        }

        if(time >= '19:00' ){
    
            setGreting('Buenas noches ' + nombre)
    
        }
    

    }





return(
    
    <>
        <h1>3 : TimeGreeting</h1>

        <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => onSetNombre(event) } />

        <input type="time" value={time} onChange={(event) => onSetTime(event)}/>

        <button onClick={() => greet()}>saludar</button>

        <h2>{Greeting}</h2>




    </>


)


}

export default TimeGreeting